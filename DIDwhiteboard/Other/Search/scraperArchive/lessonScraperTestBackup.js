(() => {
  // async function getPublishDate() {
  //   let url = `https://digital.greatminds.org/lessons/api/authoring/v2/preview/version/61ba283337b9160012245d89`;
  //   try {
  //     let res = await fetch(url);
  //     return await res.json();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // console.log(getPublishDate());
  const { ggb1 } = components;
  const allSlides = controls.rts.lesson.slides.reverse();
  // other - ggb files
  // lesson - select component - single or multiple, if there are answer keys or not, video links, alt text/long form alt text, tracking styles, issue with "danger" in table - using only color to convey meaning, colors/headers/anything related to accessibility, creditting art (does it have credit or not)
  // slides - ggb ids, component size, select component - single or multiple, select vs radio, header rows/header columns, urls (are there lessons that use them, and are they labeled correctly), if there are answer keys or not, video links, alt text/long form alt text, what image - is this used elsewhere?, tracking styles, lists - actual lists vs "hand made lists" (not sure how to search that right now), issue with "danger" in table - using only color to convey meaning, colors/headers/anything related to accessibility, creditting art (does it have credit or not)
  const lessonId = controls.rts.lesson.id;

  // async function getPublishDate() {
  //   let url = `https://digital.greatminds.org/lessons/api/authoring/v2/preview/version/${lessonId}`;
  //   try {
  //     let res = await fetch(url);
  //     return await res.json();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // console.log(`other data`);
  // console.log(getPublishDate());

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
    })
    .then(() => {
      const searchParamsLesson = {
        publishedDate: '',
        tags: '',
        language: '',
        compTotals: {
          textbox: 0,
          geogebra: 0,
          select: 0,
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
        // did not include radio
        ggbIds: [],
        ggbSizes: [],
        images: [],
        imageAltText: [],
        urls: [], //be sure urls are labeled correctly
        answerKeys: 0,
      };
      console.log(controls);
      const numOfSlides = allSlides.length - 1;
      allSlides.forEach(
        (
          { layout, hideFromStudent, stage, code, slideId, contents },
          slideNumReversed
        ) => {
          if (slideNumReversed == 0) {
            return;
          }
          let compString = 'const { ';
          let compTotals = {};
          const compArray = contents.map(({ name, type, data }) => {
            console.log(name);
            console.log(type);
            console.log(data);
            //lesson data
            //assumption: only submit and share components include "subit" and "share in component name, respectively
            // searchParamsLesson.compTotals[type] = searchParamsLesson.compTotals[type]+1 || 1; Keep in mind for future iterations
            switch (type) {
              case 'textbox':
                let textBoxType = name.includes('submit')
                  ? 1
                  : name.includes('share')
                  ? 2
                  : 0;
                switch (textBoxType) {
                  case 0:
                    searchParamsLesson.compTotals.textbox += 1;
                    break;
                  case 1:
                    searchParamsLesson.compTotals.submit += 1;
                    break;
                  case 2:
                    searchParamsLesson.compTotals.share += 1;
                    break;
                  default:
                    console.warn('error in textbox switch statement');
                    break;
                }
                break;
              case 'geogebra':
                searchParamsLesson.compTotals.geogebra += 1;
                break;
              case 'select':
                searchParamsLesson.compTotals.select += 1;
                break;
              case 'button':
                if (name.includes('submit') || name.includes('share')) {
                  break;
                }
                searchParamsLesson.compTotals.button += 1;
                break;
              case 'input':
                if (name.includes('submit') || name.includes('share')) {
                  break;
                }
                searchParamsLesson.compTotals.input += 1;
                break;
              case 'fillblank':
                searchParamsLesson.compTotals.fillblank += 1;
                break;
              case 'image':
                searchParamsLesson.compTotals.image += 1;
                break;
              case 'buttongroup':
                searchParamsLesson.compTotals.buttongroup += 1;
                break;
              case 'separator':
                searchParamsLesson.compTotals.separator += 1;
                break;
              case 'table':
                searchParamsLesson.compTotals.table += 1;
                break;
              case 'complextable':
                searchParamsLesson.compTotals.complextable += 1;
                break;
              case 'media':
                searchParamsLesson.compTotals.media += 1;
                break;
              case 'categorization':
                searchParamsLesson.compTotals.categorization += 1;
                break;
              case 'studentanswers':
                break;
              default:
                console.warn(
                  `error in lesson component switch statement: { slideId: ${slideId}, type: ${type}, name: ${name} }`
                );
                break;
            }
            //slide data
            const addToString = `${name}, `;
            compString += addToString;
            const groupMatch = name.match(/_((submit)|(sharewithclass))_/);
            if (groupMatch) {
              // capture group type...
              if (type === 'textbox') {
                // ... only once per group
                compTotals[groupMatch[1]] = compTotals[groupMatch[1]] + 1 || 1;
              }
            } else if (type === 'image') {
              let key = data.src.includes('authoring-backend')
                ? 'uploaded-image'
                : 'bynder-image';
              compTotals[key] = compTotals[key] + 1 || 1;
            } else {
              compTotals[type] = compTotals[type] + 1 || 1;
            }
            return name;
          });
          compString += '} = components;\n\n';
          const { level, module, topic, lesson, title } = controls.rts.lesson;
          const searchParamsSlide = {
            compTotals,
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
              : `\n\n/*\n${JSON.stringify(searchParamsLesson)}\n*/`;
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
      );
    });
})();
