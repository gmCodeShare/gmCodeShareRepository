(() => {
  console.log('start');
  const { ggb1 } = components;
  console.log(controls);
  const allSlides = controls.root.lesson.fetchedSlides.reverse();

  console.log(controls.root.lesson);
  const lessonId = controls.root.lesson.id;

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
      const tagsArray = [];
      if (controls.root.lesson.customTags.length > 0) {
        controls.root.lesson.customTags.forEach(({ keyword }) => {
          tagsArray.push(keyword);
        });
      }
      // other - ggb files
      // lesson - select component - single or multiple, if there are answer keys or not, video links, alt text/long form alt text, tracking styles, issue with "danger" in table - using only color to convey meaning, colors/headers/anything related to accessibility, creditting art (does it have credit or not)
      const repeatedParams = {
        compTotals: {
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
        textboxInfo: {
          align: [],
          disabled: [],
          labelForRelation: [],
          style_theme: [],
          text: [],
          visible: [],
          position: [],
          sizeConfig_value: [],
        },
        ggbInfo: {
          materialId: [],
          widgetSize: [],
          fixed: [],
          disabled: [],
          visible: [],
          position: [],
        },
        selectInfo: {
          columns: [],
          disabled: [],
          expandButton: [],
          inline: [],
          options_length: [],
          options_label: [],
          type: [],
          position: [],
          sizeConfig_value: [],
        },
        buttonInfo: {
          disabled: [],
          text: [],
          position: [],
          sizeConfig_value: [],
        },
        buttongroupInfo: {
          disabled: [],
          text: [],
          position: [],
          sizeConfig_value: [],
        },
        separatorInfo: {
          flex: [],
          size: [],
          position: [],
        },
        tableOrigInfo: {
          columns: [],
          rows: [],
          columnWidth: [],
          columnsEqualWidth: [],
          canAddColumns: [],
          canAddRows: [],
          columns_cell_alignment: [],
          columns_cell_editable: [],
          columns_cell_numberOfLines: [],
          columns_cell_type: [],
          columns_cell_value: [],
          rows_alignment: [],
          rows_className: [],
          rows_inputType: [],
          rows_math: [],
          rows_mixedText_text: [],
          disabled: [],
          position: [],
        },
        mediaInfo: {
          alt: [],
          provider: [],
          src: [],
          type: [],
          disabled: [],
          showControls: [],
          position: [],
          sizeConfig_value: [],
        },
        inputInfo: {
          disabled: [],
          inputType: [],
          math: [],
          text: [],
          type: [],
          position: [],
          sizeConfig_value: [],
        },
        fillblankInfo: {
          disabled: [],
          children_length: [],
          values_length: [],
          text: [],
          inputType: [],
          size: [],
          position: [],
        },
        submitInfo: {
          submitTextInfo: {
            align: [],
            disabled: [],
            labelForRelation: [],
            style_theme: [],
            text: [],
            visible: [],
            position: [],
            sizeConfig_value: [],
          },
          submitInputInfo: {
            disabled: [],
            inputType: [],
            math: [],
            text: [],
            type: [],
            position: [],
            sizeConfig_value: [],
          },
          submitButtonInfo: {
            align: [],
            disabled: [],
            position: [],
            sizeConfig_value: [],
          },
        },
        shareInfo: {
          shareTextInfo: {
            align: [],
            disabled: [],
            labelForRelation: [],
            style_theme: [],
            text: [],
            visible: [],
            position: [],
            sizeConfig_value: [],
          },
          shareInputInfo: {
            disabled: [],
            inputType: [],
            math: [],
            text: [],
            type: [],
            position: [],
            sizeConfig_value: [],
          },
          shareButtonInfo: {
            align: [],
            disabled: [],
            position: [],
            sizeConfig_value: [],
          },
        },
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
        answerKey: 0,
      };
      const searchParamsLesson = {
        ...repeatedParams,
        publishedDate: modifiedDate,
        tags: tagsArray,
        language: '',
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
          const searchParamsSlide = {
            ...repeatedParams,
            lessonInfo: '',
            stage: '',
            teacherView: '',
            layout: '',
          };
          const searchParamsArray = [searchParamsLesson, searchParamsSlide];
          //add up total slides with answer keys; at end of lesson, divide by number of slides to see what percent of slides have answer keys in lesson
          if (allSlides[slideNumReversed].answerKey != '') {
            searchParamsArray.forEach((element) => (element.answerKey = +1));
          }
          let compString = 'const { ';
          let compTotalsSlide = {};
          const compArray = contents.map(
            ({ name, type, data, position, config, sizeConfig }, index) => {
              console.log('name, start of map');
              console.log(name);
              console.log('type');
              console.log(type);
              console.log('controls');
              console.log(controls);
              console.log('controls.root.lesson');
              console.log(controls.root.lesson);
              // console.log(data);
              // console.log(index);
              //lesson data
              //assumption: only submit and share components include "subit" and "share in component name, respectively
              switch (type) {
                case 'textbox':
                  searchParamsArray.forEach((element) => {
                    const tempSortArray = [
                      element.textboxInfo,
                      element.submitInfo.submitTextInfo,
                      element.shareInfo.shareTextInfo,
                    ];
                    const tempSortArrayVar = name.includes('submit')
                      ? 1
                      : name.includes('share')
                      ? 2
                      : 0;
                    switch (tempSortArrayVar) {
                      case 0:
                        element.compTotals.textbox += 1;
                        break;
                      case 1:
                        element.compTotals.submit += 1;
                        break;
                      case 2:
                        element.compTotals.share += 1;
                        break;
                      default:
                        console.warn(
                          'error in texbox compTotals switch statement'
                        );
                        break;
                    }
                    const tempObjLocation = tempSortArray[tempSortArrayVar];
                    const tempInfoToPush = [
                      data.align,
                      data.disabled,
                      data.style.theme,
                      data.text,
                      data.visible,
                      position,
                      sizeConfig.value,
                    ];
                    const tempObjArray = [
                      tempObjLocation.align,
                      tempObjLocation.disabled,
                      tempObjLocation.style_theme,
                      tempObjLocation.text,
                      tempObjLocation.visible,
                      tempObjLocation.position,
                      tempObjLocation.sizeConfig_value,
                    ];
                    tempObjArray.forEach((insides, index) => {
                      //convert arrays to strings so able to use includes() effectively
                      let tempVar = Array.isArray(tempInfoToPush[index])
                        ? JSON.stringify(tempInfoToPush[index])
                        : tempInfoToPush[index];
                      if (!insides.includes(tempVar)) {
                        insides.unshift(tempVar);
                      }
                    });
                    //checking if misalignment in text labelFor relation
                    const tempPossibleMisalign =
                      tempSortArrayVar == 0 &&
                      typeof data.labelFor !== 'undefined'
                        ? true
                        : (tempSortArrayVar == 1 || tempSortArrayVar == 2) &&
                          !data.labelFor.includes(
                            name.substring(0, name.length - 9)
                          )
                        ? true
                        : false;
                    if (tempPossibleMisalign) {
                      tempObjLocation.labelForRelation.unshift(
                        `possible misalignment with labelFor relation in ${name} on ${slideId}`
                      );
                      console.warn(
                        `possible misalignment with labelFor relation in ${name}`
                      );
                    }
                  });
                  break;
                case 'geogebra':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.geogebra += 1;
                    const tempInfoToPush = [
                      config.materialId,
                      config.widgetSize,
                      data.fixed,
                      data.disabled,
                      data.visible,
                      position,
                    ];
                    const tempObjArray = [
                      element.ggbInfo.materialId,
                      element.ggbInfo.widgetSize,
                      element.ggbInfo.fixed,
                      element.ggbInfo.disabled,
                      element.ggbInfo.visible,
                      element.ggbInfo.position,
                    ];
                    tempObjArray.forEach((insides, index) => {
                      //convert arrays to strings so able to use includes() effectively
                      let tempVar = Array.isArray(tempInfoToPush[index])
                        ? JSON.stringify(tempInfoToPush[index])
                        : tempInfoToPush[index];
                      if (!insides.includes(tempVar)) {
                        insides.unshift(tempVar);
                      }
                    });
                  });
                  break;
                case 'select':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.select += 1;
                    const tempInfoToPush = [
                      config.columns,
                      data.disabled,
                      data.expandButton,
                      data.inline,
                      data.options.length,
                      data.type,
                      position,
                      sizeConfig.value,
                    ];
                    const tempObjArray = [
                      element.selectInfo.columns,
                      element.selectInfo.disabled,
                      element.selectInfo.expandButton,
                      element.selectInfo.inline,
                      element.selectInfo.options_length,
                      element.selectInfo.type,
                      element.selectInfo.position,
                      element.selectInfo.sizeConfig_value,
                    ];
                    tempObjArray.forEach((insides, index) => {
                      //convert arrays to strings so able to use includes() effectively
                      let tempVar = Array.isArray(tempInfoToPush[index])
                        ? JSON.stringify(tempInfoToPush[index])
                        : tempInfoToPush[index];
                      if (!insides.includes(tempVar)) {
                        insides.unshift(tempVar);
                      }
                    });
                    let storedElement = element;
                    //now process each option, including possible image info
                    data.options.forEach((element, index) => {
                      if (typeof element.img == 'undefined') {
                        return;
                      } else {
                        const storedImageSrc = element.img.src;
                        //set as let instead of const so that text can be changed to warning message
                        let storedImageAlt = element.img.alt;
                        //set up arrays for easier filtering
                        const uploadOrBynder = [
                          storedElement.imageInfo.inSelectComp.imageSrcUpload,
                          storedElement.imageInfo.inSelectComp.imageSrcBynder,
                        ];
                        const uploadOrBynderAltText = [
                          storedElement.imageInfo.inSelectComp
                            .imageAltTextUpload,
                          storedElement.imageInfo.inSelectComp
                            .imageAltTextBynder,
                        ];
                        //set srcVar to 0 for uploaded images, 1 for bynder
                        const srcVar = storedImageSrc.includes(
                          'authoring-backend'
                        )
                          ? 0
                          : 1;
                        //uploaded images from select comps
                        uploadOrBynder[srcVar].unshift(storedImageSrc);
                        if (storedImageAlt === '') {
                          //if alt text is blank, add one to missing alt text and change blank text to warning
                          storedElement.imageInfo.imagesMissingAltText += 1;
                          storedImageAlt =
                            'WARNING: NO ALT TEXT FOR THIS IMAGE';
                          console.warn(
                            `WARNING: NO ALT TEXT FOR option ${index} in ${name} on ${slideId}`
                          );
                        }
                        //if alt text is present
                        uploadOrBynderAltText[srcVar].unshift(storedImageAlt);
                      }
                    });
                  });
                  break;
                case 'button':
                  searchParamsArray.forEach((element) => {
                    const tempSortArray = [
                      element.buttonInfo,
                      element.submitInfo.submitButtonInfo,
                      element.shareInfo.shareButtonInfo,
                    ];
                    const tempSortArrayVar = name.includes('submit')
                      ? 1
                      : name.includes('share')
                      ? 2
                      : 0;
                    if (tempSortArrayVar == 0) {
                      element.compTotals.button += 1;
                    }
                    const tempObjLocation = tempSortArray[tempSortArrayVar];
                    const tempInfoToPush = [
                      data.disabled,
                      position,
                      sizeConfig.value,
                    ];
                    const tempObjArray = [
                      tempObjLocation.disabled,
                      tempObjLocation.position,
                      tempObjLocation.sizeConfig_value,
                    ];
                    tempObjArray.forEach((insides, index) => {
                      //convert arrays to strings so able to use includes() effectively
                      const tempVar = Array.isArray(tempInfoToPush[index])
                        ? JSON.stringify(tempInfoToPush[index])
                        : tempInfoToPush[index];
                      if (!insides.includes(tempVar)) {
                        insides.unshift(tempVar);
                      }
                    });
                    if (tempSortArrayVar == 0) {
                      const tempVar = data.text;
                      if (!tempObjLocation.text.includes(tempVar)) {
                        tempObjLocation.text.unshift(tempVar);
                      }
                    } else {
                      const tempVar = data.align;
                      if (!tempObjLocation.align.includes(tempVar)) {
                        tempObjLocation.align.unshift(tempVar);
                      }
                    }
                  });
                  break;
                case 'input':
                  searchParamsArray.forEach((element) => {
                    const tempSortArray = [
                      element.inputInfo,
                      element.submitInfo.submitInputInfo,
                      element.shareInfo.shareInputInfo,
                    ];
                    const tempSortArrayVar = name.includes('submit')
                      ? 1
                      : name.includes('share')
                      ? 2
                      : 0;
                    if (tempSortArrayVar == 0) {
                      element.compTotals.input += 1;
                    }
                    const tempObjLocation = tempSortArray[tempSortArrayVar];
                    const tempInfoToPush = [
                      data.disabled,
                      data.inputType,
                      data.math,
                      data.text,
                      data.type,
                      position,
                      sizeConfig.value,
                    ];
                    const tempObjArray = [
                      tempObjLocation.disabled,
                      tempObjLocation.inputType,
                      tempObjLocation.math,
                      tempObjLocation.text,
                      tempObjLocation.type,
                      tempObjLocation.position,
                      tempObjLocation.sizeConfig_value,
                    ];
                    tempObjArray.forEach((insides, index) => {
                      //convert arrays to strings so able to use includes() effectively
                      let tempVar = Array.isArray(tempInfoToPush[index])
                        ? JSON.stringify(tempInfoToPush[index])
                        : tempInfoToPush[index];
                      if (!insides.includes(tempVar)) {
                        insides.unshift(tempVar);
                      }
                    });
                  });
                  break;
                case 'fillblank':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.fillblank += 1;
                    const tempInfoToPush = [
                      data.disabled,
                      data.schema[0].children.length,
                      data.values.length,
                      position,
                    ];
                    const tempObjArray = [
                      element.fillblankInfo.disabled,
                      element.fillblankInfo.children_length,
                      element.fillblankInfo.values_length,
                      element.fillblankInfo.position,
                    ];
                    tempObjArray.forEach((insides, index) => {
                      //convert arrays to strings so able to use includes() effectively
                      let tempVar = Array.isArray(tempInfoToPush[index])
                        ? JSON.stringify(tempInfoToPush[index])
                        : tempInfoToPush[index];
                      if (!insides.includes(tempVar)) {
                        insides.unshift(tempVar);
                      }
                    });
                    //log info for fib elements
                    data.schema[0].children.reverse().forEach((insides) => {
                      if ('text' in insides) {
                        if (
                          !element.fillblankInfo.text.includes(insides.text)
                        ) {
                          element.fillblankInfo.text.unshift(insides.text);
                        }
                      } else {
                        if (
                          !element.fillblankInfo.inputType.includes(
                            insides.inputType
                          )
                        ) {
                          element.fillblankInfo.inputType.unshift(
                            insides.inputType
                          );
                        }
                        if (
                          !element.fillblankInfo.size.includes(insides.size)
                        ) {
                          element.fillblankInfo.size.unshift(insides.size);
                        }
                      }
                    });
                  });
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
                  // searchParamsLesson.compTotalsLesson.buttongroup += 1;
                  searchParamsArray.forEach((element) => {
                    element.compTotals.buttongroup += 1;
                    const tempInfoToPush = [position, sizeConfig.value];
                    const tempObjArray = [
                      element.buttongroupInfo.position,
                      element.buttongroupInfo.sizeConfig_value,
                    ];
                    tempObjArray.forEach((insides, index) => {
                      //convert arrays to strings so able to use includes() effectively
                      let tempVar = Array.isArray(tempInfoToPush[index])
                        ? JSON.stringify(tempInfoToPush[index])
                        : tempInfoToPush[index];
                      if (!insides.includes(tempVar)) {
                        insides.unshift(tempVar);
                      }
                    });
                    data.buttons.reverse().forEach((insides) => {
                      if (
                        !element.buttongroupInfo.disabled.includes(
                          insides.disabled
                        )
                      ) {
                        element.buttongroupInfo.disabled.unshift(
                          insides.disabled
                        );
                      }
                      if (
                        !element.buttongroupInfo.text.includes(insides.text)
                      ) {
                        element.buttongroupInfo.text.unshift(insides.text);
                      }
                    });
                  });
                  break;
                case 'separator':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.separator += 1;
                    const tempInfoToPush = [data.flex, data.size, position];
                    const tempObjArray = [
                      element.separatorInfo.flex,
                      element.separatorInfo.size,
                      element.separatorInfo.position,
                    ];
                    tempObjArray.forEach((insides, index) => {
                      //convert arrays to strings so able to use includes() effectively
                      const tempVar = Array.isArray(tempInfoToPush[index])
                        ? JSON.stringify(tempInfoToPush[index])
                        : tempInfoToPush[index];
                      if (!insides.includes(tempVar)) {
                        insides.unshift(tempVar);
                      }
                    });
                  });
                  break;
                case 'table':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.table += 1;
                    const tempInfoToPush = [
                      config.originalSize.columns,
                      config.originalSize.rows,
                      config.size.columnWidth,
                      checkArrayEqualElements(config.size.columnWidth),
                      data.disabled,
                      data.editable.columns,
                      data.editable.rows,
                      position,
                    ];
                    const tempObjArray = [
                      element.tableOrigInfo.columns,
                      element.tableOrigInfo.rows,
                      element.tableOrigInfo.columnWidth,
                      element.tableOrigInfo.columnsEqualWidth,
                      element.tableOrigInfo.disabled,
                      element.tableOrigInfo.canAddColumns,
                      element.tableOrigInfo.canAddRows,
                      element.tableOrigInfo.position,
                    ];
                    tempObjArray.forEach((insides, index) => {
                      //convert arrays to strings so able to use includes() effectively
                      const tempVar = Array.isArray(tempInfoToPush[index])
                        ? JSON.stringify(tempInfoToPush[index])
                        : tempInfoToPush[index];
                      if (!insides.includes(tempVar)) {
                        insides.unshift(tempVar);
                      }
                    });
                    data.columns.forEach((subElement) => {
                      const tempSubInfoToPush = [
                        alignment,
                        editable,
                        numberOfLines,
                        type,
                        value,
                      ];
                      const tempSubObjArray = [
                        element.tableOrigInfo.columns_cell_alignment,
                        element.tableOrigInfo.columns_cell_editable,
                        element.tableOrigInfo.columns_cell_numberOfLines,
                        element.tableOrigInfo.columns_cell_type,
                        element.tableOrigInfo.columns_cell_value,
                      ];
                    });
                  });
                  break;
                case 'complextable':
                  searchParamsLesson.compTotalsLesson.complextable += 1;
                  break;
                case 'media':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.separator += 1;
                    const tempInfoToPush = [
                      config.alt,
                      config.provider,
                      config.src,
                      config.type,
                      data.disabled,
                      data.showControls,
                      position,
                      sizeConfig.value,
                    ];
                    const tempObjArray = [
                      element.mediaInfo.alt,
                      element.mediaInfo.provider,
                      element.mediaInfo.src,
                      element.mediaInfo.type,
                      element.mediaInfo.disabled,
                      element.mediaInfo.showControls,
                      element.mediaInfo.position,
                      element.mediaInfo.sizeConfig_value,
                    ];
                    tempObjArray.forEach((insides, index) => {
                      //convert arrays to strings so able to use includes() effectively
                      const tempVar = Array.isArray(tempInfoToPush[index])
                        ? JSON.stringify(tempInfoToPush[index])
                        : tempInfoToPush[index];
                      if (!insides.includes(tempVar)) {
                        insides.unshift(tempVar);
                      }
                    });
                  });
                  break;
                case 'categorization':
                  searchParamsLesson.compTotalsLesson.categorization += 1;
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
                        searchParamsLesson.imageInfo.inCatComp
                          .imageAltTextUpload,
                        searchParamsLesson.imageInfo.inCatComp
                          .imageAltTextBynder,
                      ];
                      //set srcVar to 0 for uploaded images, 1 for bynder
                      const srcVar = storedImageSrc.includes(
                        'authoring-backend'
                      )
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
              console.log('end of main switch');
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
            }
          );
          //START SLIDE COMMENT
          compString += '} = components;\n\n';
          const { level, module, topic, lesson, title } = controls.root.lesson;
          //NEED TO UPDATE THIS
          //   const searchParamsSlide = {
          //     compTotalsSlide,
          //     stage,
          //     lessonInfo: `${level} M${module} T${topic} L${
          //       lesson < 10 ? '0' + parseInt(lesson) : lesson
          //     } - ${title}`, // 7 M4 TA L01 - Title
          //     teacherView: hideFromStudent,
          //     layout:
          //       layout.length === 2
          //         ? 'T layout'
          //         : layout[0].length === 1
          //         ? 'one col'
          //         : 'two col',
          //   };
          console.log('before searchCommentSlide');
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
            searchParamsLesson.answerKey = round(
              searchParamsLesson.answerKey / numOfSlides,
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

function getMixed(mixedText) {
  return mixedText[0]?.children
    .map((child) => {
      if (child.text) {
        return child.text;
      } else if (child.latex) {
        return `$${child.latex}$`;
      } else {
        return '';
      }
    })
    .filter((val) => !!val)
    .join('');
}

function checkArrayEqualElements(_array) {
  if (typeof _array !== 'undefined') {
    return !!_array.reduce(function (a, b) {
      return a === b ? a : NaN;
    });
  }
  return 'Array is Undefined';
}
