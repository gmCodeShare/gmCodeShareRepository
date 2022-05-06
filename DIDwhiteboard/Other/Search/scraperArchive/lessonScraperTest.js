(() => {
  const { ggb1 } = components;
  const allSlides = controls.rts.lesson.slides.reverse();
  // console.log(controls.rts.lesson);
  const lessonId = controls.rts.lesson.id;

  let modifiedDate;
  let answer = fetch(
    `https://digital.greatminds.org/lessons/api/authoring/v2/preview/version/${lessonId}`
  ) //1
    .then((response) => response.json()) //2
    .then((summary) => {
      return summary.modified; //3
    })
    .then((value) => {
      modifiedDate = value;
      // console.log(modifiedDate);
    })
    .then(() => {
      const tagsArray = [];
      if (controls.rts.lesson.customTags.length > 0) {
        controls.rts.lesson.customTags.forEach(({ keyword }) => {
          tagsArray.push(keyword);
        });
      }
      // other - ggb files
      // lesson - select component - single or multiple, if there are answer keys or not, video links, alt text/long form alt text, tracking styles, issue with "danger" in table - using only color to convey meaning, colors/headers/anything related to accessibility, creditting art (does it have credit or not)
      const searchParamsLesson = {
        publishedDate: modifiedDate,
        tags: tagsArray,
        language: '',
        compTotalsLesson: {
          textbox: 0,
          geogebra: 0,
          select: 0,
          radio: 0,
          button: 0,
          input: 0,
          fillblank: 0,
          image: 0,
          buttongroup: 0,
          separator: 0,
          table: 0,
          complextable: 0,
          media: 0,
          categorization: 0,
          submit: 0,
          share: 0,
        },
        ggbMaterialIds: [],
        ggbSizes: [],
        imageInfo: {
          inImageComp: {
            imageSrcUpload: [],
            imageAltTextUpload: [],
            imageSrcBynder: [],
            imageAltTextBynder: [],
          },
          inCatComp: {
            imageSrcUpload: [],
            imageAltTextUpload: [],
            imageSrcBynder: [],
            imageAltTextBynder: [],
          },
          inSelectComp: {
            imageSrcUpload: [],
            imageAltTextUpload: [],
            imageSrcBynder: [],
            imageAltTextBynder: [],
          },
          imagesMissingAltText: 0,
        },
        urls: [], //be sure urls are labeled correctly
        answerKeys: 0,
      };
      const numOfSlides = allSlides.length - 1;
      allSlides.forEach(
        (
          { layout, hideFromStudent, stage, code, slideId, contents },
          slideNumReversed
        ) => {
          //skips over the ggb download slide
          if (slideNumReversed == 0) {
            return;
          }
          //add up total slides with answer keys; at end of lesson, divide by number of slides to see what percent of slides have answer keys in lesson
          if (allSlides[slideNumReversed].answerKey != '') {
            searchParamsLesson.answerKeys += 1;
          }
          let compString = 'const { ';
          let compTotalsSlide = {};
          const compArray = contents.map(({ name, type, data }, index) => {
            // console.log(name);
            // console.log(type);
            // console.log(data);
            // console.log(index);
            //lesson data
            //assumption: only submit and share components include "subit" and "share in component name, respectively
            switch (type) {
              case 'textbox':
                let textBoxType = name.includes('submit')
                  ? 1
                  : name.includes('share')
                  ? 2
                  : 0;
                switch (textBoxType) {
                  case 0:
                    searchParamsLesson.compTotalsLesson.textbox += 1;
                    break;
                  case 1:
                    searchParamsLesson.compTotalsLesson.submit += 1;
                    break;
                  case 2:
                    searchParamsLesson.compTotalsLesson.share += 1;
                    break;
                  default:
                    console.warn('error in textbox switch statement');
                    break;
                }
                break;
              case 'geogebra':
                searchParamsLesson.compTotalsLesson.geogebra += 1;
                // console.log(`slideNumReversed: ${slideNumReversed}`);
                // console.log(
                //   `contents[index].config.materialId: ${contents[index].config.materialId}`
                // );
                if (
                  !searchParamsLesson.ggbMaterialIds.includes(
                    contents[index].config.materialId
                  )
                ) {
                  searchParamsLesson.ggbMaterialIds.unshift(
                    contents[index].config.materialId
                  );
                }
                break;
              case 'select':
                searchParamsLesson.compTotalsLesson.select += 1;
                data.options.forEach((element) => {
                  if (typeof element.img == 'undefined') {
                    return;
                  } else {
                    const storedImageSrc = element.img.src;
                    let storedImageAlt = element.img.alt;
                    //set up arrays for easier filtering
                    const uploadOrBynder = [
                      searchParamsLesson.imageInfo.inSelectComp.imageSrcUpload,
                      searchParamsLesson.imageInfo.inSelectComp.imageSrcBynder,
                    ];
                    const uploadOrBynderAltText = [
                      searchParamsLesson.imageInfo.inSelectComp
                        .imageAltTextUpload,
                      searchParamsLesson.imageInfo.inSelectComp
                        .imageAltTextBynder,
                    ];
                    //set srcVar to 0 for uploaded images, 1 for bynder
                    const srcVar = storedImageSrc.includes('authoring-backend')
                      ? 0
                      : 1;
                    //uploaded images from select comps
                    uploadOrBynder[srcVar].unshift(storedImageSrc);
                    if (storedImageAlt === '') {
                      //if alt text is blank, add one to missing alt text and change blank text to warning
                      searchParamsLesson.imageInfo.imagesMissingAltText += 1;
                      storedImageAlt = 'WARNING: NO ALT TEXT FOR THIS IMAGE';
                    }
                    //if alt text is present
                    uploadOrBynderAltText[srcVar].unshift(storedImageAlt);
                  }
                });
                break;
              case 'button':
                if (name.includes('submit') || name.includes('share')) {
                  break;
                }
                searchParamsLesson.compTotalsLesson.button += 1;
                break;
              case 'input':
                if (name.includes('submit') || name.includes('share')) {
                  break;
                }
                searchParamsLesson.compTotalsLesson.input += 1;
                break;
              case 'fillblank':
                searchParamsLesson.compTotalsLesson.fillblank += 1;
                break;
              case 'image':
                searchParamsLesson.compTotalsLesson.image += 1;
                const storedImageSrc = data.src;
                let storedImageAlt = data.alt;
                //set up arrays for easier filtering
                const uploadOrBynder = [
                  searchParamsLesson.imageInfo.inImageComp.imageSrcUpload,
                  searchParamsLesson.imageInfo.inImageComp.imageSrcBynder,
                ];
                const uploadOrBynderAltText = [
                  searchParamsLesson.imageInfo.inImageComp.imageAltTextUpload,
                  searchParamsLesson.imageInfo.inImageComp.imageAltTextBynder,
                ];
                //set srcVar to 0 for uploaded images, 1 for bynder
                const srcVar = storedImageSrc.includes('authoring-backend')
                  ? 0
                  : 1;
                //uploaded images from select comps
                uploadOrBynder[srcVar].unshift(storedImageSrc);
                if (storedImageAlt === '') {
                  //if alt text is blank, add one to missing alt text and change blank text to warning
                  searchParamsLesson.imageInfo.imagesMissingAltText += 1;
                  storedImageAlt = 'WARNING: NO ALT TEXT FOR THIS IMAGE';
                }
                //if alt text is present
                uploadOrBynderAltText[srcVar].unshift(storedImageAlt);
                break;
              case 'buttongroup':
                searchParamsLesson.compTotalsLesson.buttongroup += 1;
                break;
              case 'separator':
                searchParamsLesson.compTotalsLesson.separator += 1;
                break;
              case 'table':
                searchParamsLesson.compTotalsLesson.table += 1;
                break;
              case 'complextable':
                searchParamsLesson.compTotalsLesson.complextable += 1;
                break;
              case 'media':
                searchParamsLesson.compTotalsLesson.media += 1;
                break;
              case 'categorization':
                searchParamsLesson.compTotalsLesson.categorization += 1;
                console.log(data);
                data.items.forEach((element) => {
                  if (typeof element.img == 'undefined') {
                    return;
                  } else {
                    const storedImageSrc = element.img.src;
                    let storedImageAlt = element.img.alt;
                    //set up arrays for easier filtering
                    const uploadOrBynder = [
                      searchParamsLesson.imageInfo.inCatComp.imageSrcUpload,
                      searchParamsLesson.imageInfo.inCatComp.imageSrcBynder,
                    ];
                    const uploadOrBynderAltText = [
                      searchParamsLesson.imageInfo.inCatComp.imageAltTextUpload,
                      searchParamsLesson.imageInfo.inCatComp.imageAltTextBynder,
                    ];
                    //set srcVar to 0 for uploaded images, 1 for bynder
                    const srcVar = storedImageSrc.includes('authoring-backend')
                      ? 0
                      : 1;
                    //uploaded images from select comps
                    uploadOrBynder[srcVar].unshift(storedImageSrc);
                    if (storedImageAlt === '') {
                      //if alt text is blank, add one to missing alt text and change blank text to warning
                      searchParamsLesson.imageInfo.imagesMissingAltText += 1;
                      storedImageAlt = 'WARNING: NO ALT TEXT FOR THIS IMAGE';
                    }
                    //if alt text is present
                    uploadOrBynderAltText[srcVar].unshift(storedImageAlt);
                  }
                });
                break;
              case 'studentanswers':
                break;
              default:
                console.warn(
                  `error in lesson component switch statement: { slideId: ${slideId}, type: ${type}, name: ${name} }`
                );
                break;
            }
            //END GATEHERING LESSON COMMENT DATA
            //START GATHERING SLIDE COMMENT DATA, PER COMPONENT
            const addToString = `${name}, `;
            compString += addToString;
            const groupMatch = name.match(/_((submit)|(sharewithclass))_/);
            if (groupMatch) {
              // capture group type...
              if (type === 'textbox') {
                // ... only once per group
                compTotalsSlide[groupMatch[1]] =
                  compTotalsSlide[groupMatch[1]] + 1 || 1;
              }
            } else if (type === 'image') {
              let key = data.src.includes('authoring-backend')
                ? 'uploaded-image'
                : 'bynder-image';
              compTotalsSlide[key] = compTotalsSlide[key] + 1 || 1;
            } else {
              compTotalsSlide[type] = compTotalsSlide[type] + 1 || 1;
            }
            return name;
            //END GATHERING SLIDE COMMENT DATA, PER COMPONENT
          });
          //START SLIDE COMMENT
          compString += '} = components;\n\n';
          const { level, module, topic, lesson, title } = controls.rts.lesson;
          const searchParamsSlide = {
            compTotalsSlide,
            stage,
            lessonInfo: `${level} M${module} T${topic} L${
              lesson < 10 ? '0' + parseInt(lesson) : lesson
            } - ${title}`, // 7 M4 TA L01 - Title
            teacherView: hideFromStudent,
            layout:
              layout.length === 2
                ? 'T layout'
                : layout[0].length === 1
                ? 'one col'
                : 'two col',
          };
          const searchCommentSlide = `\n\n/*\nstart slide search -- ${JSON.stringify(
            searchParamsSlide
          )} -- end slide search\n*/`;
          const regexRenamedComps =
            /(?<=(?:const|let|var)\s*{\s*[\w\s,:/]*)([\w]*): *([\w]*)(?=[\w\s,:/]*}\s*=\s*components;*)/g;
          const regexCompDeclarations =
            /(?:const|let|var)\s*{[\w\s:,/]*}\s*=\s*components;*/g;
          const regexsearchCommentSlide = /\/\*\n*\{"compTotals"[^\n]*}\n\*\//g;
          let matches;
          const renamedComps = [];
          while ((matches = regexRenamedComps.exec(code))) {
            // watch out for cases where an alias is named the same as a component
            if (compArray.includes(matches[2])) {
              console.error(
                `Danger! ${slideId} uses ${matches[2]} as both a component name and an alias!`
              );
            }
            // if an original component name matches and has an alias, add the alias
            if (compArray.includes(matches[1])) {
              // check if comp has already been renamed
              if (!renamedComps.includes(matches[1])) {
                console.log(
                  `Renaming ${matches[1]} as ${matches[2]} on ${slideId}`
                );
                compString = compString.replace(
                  matches[1],
                  `${matches[1]}: ${matches[2]}`
                );
                renamedComps.push(matches[1]);
              } else {
                console.warn(
                  `Check possible duplicate declaration of ${matches[1]} on ${slideId}`
                );
              }
            } else {
              console.warn(
                `Check component name and alias on ${slideId}: ${matches[1]}, ${matches[2]}`
              );
            }
          }
          //END SLIDE COMMENT
          //create and write lesson and slide comments
          //for first slide, with both lesson and slide comments
          if (slideNumReversed == numOfSlides) {
            //set the proportion of lessons with answer keys
            function round(value, decimals) {
              return Number(
                Math.round(value + 'e' + decimals) + 'e-' + decimals
              );
            }
            searchParamsLesson.answerKeys = round(
              searchParamsLesson.answerKeys / numOfSlides,
              2
            );
            let newCode = code;
            while ((matches = regexsearchCommentSlide.exec(newCode))) {
              console.log(`Deleting ${matches[0]} on ${slideId}`);
              newCode = newCode.replace(matches[0], '');
            }
            while ((matches = regexCompDeclarations.exec(newCode))) {
              console.log(`Deleting ${matches[0]} on ${slideId}`);
              newCode = newCode.replace(matches[0], '');
            }
            const searchCommentLesson =
              slideNumReversed != numOfSlides
                ? ``
                : `\n\n/*\nstart lesson search -- ${JSON.stringify(
                    searchParamsLesson
                  )} -- end lesson search\n*/`;
            newCode =
              compString + newCode + searchCommentSlide + searchCommentLesson;
            if (slideNumReversed > 0) {
              setTimeout(() => {
                ggb1.instance.setTextValue('jsText', newCode);
                ggb1.instance.setTextValue('jsName', slideId);
                ggb1.instance.evalCommand('RunClickScript(button1)');
              }, slideNumReversed * 200);
            }
          }
          //for all slides other than first slide, with only slide comments
          else {
            let newCode = code;
            while ((matches = regexsearchCommentSlide.exec(newCode))) {
              console.log(`Deleting ${matches[0]} on ${slideId}`);
              newCode = newCode.replace(matches[0], '');
            }
            while ((matches = regexCompDeclarations.exec(newCode))) {
              console.log(`Deleting ${matches[0]} on ${slideId}`);
              newCode = newCode.replace(matches[0], '');
            }
            newCode = compString + newCode + searchCommentSlide;
            if (slideNumReversed > 0) {
              setTimeout(() => {
                ggb1.instance.setTextValue('jsText', newCode);
                ggb1.instance.setTextValue('jsName', slideId);
                ggb1.instance.evalCommand('RunClickScript(button1)');
              }, slideNumReversed * 200);
            }
          }
        }
      );
    });
})();
