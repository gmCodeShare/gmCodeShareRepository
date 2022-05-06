(() => {
  console.log('start');
  const { ggb1 } = components;
  console.log(controls);
  console.log(controls.root.lesson);
  const { fetchedSlides, id, customTags, level, module, topic, lesson, title } =
    controls.root.lesson;
  const allSlides = fetchedSlides.reverse();
  let modifiedDate;
  let answer = fetch(
    `https://digital.greatminds.org/lessons/api/authoring/v2/preview/version/${id}`
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
      if (customTags.length > 0) {
        customTags.forEach(({ keyword }) => {
          tagsArray.push(keyword);
        });
      }
      const repeatedParams = {
        lessonInfo: `${level} M${module} T${topic} L${
          lesson < 10 ? '0' + parseInt(lesson) : lesson
        } - ${title}`,
        compTotals: {
          textbox: 0,
          geogebra: 0,
          select: 0,
          radiogroup: 0,
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
          totalNumberOptions: 0,
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
          rows_cell_alignment: [],
          rows_cell_editable: [],
          rows_cell_inputType: [],
          rows_cell_math: [],
          rows_cell_numberOfLines: [],
          rows_cell_type: [],
          rows_cell_value: [],
          disabled: [],
          position: [],
        },
        tableComplexInfo: {
          columns: [],
          rows: [],
          columnWidth: [],
          columnsEqualWidth: [],
          canAddColumns: [],
          canAddRows: [],
          rows_cell_alignment: [],
          rows_cell_colSpan: [],
          rows_cell_editable: [],
          rows_cell_inputType: [],
          rows_cell_math: [],
          rows_cell_merged: [],
          rows_cell_numberOfLines: [],
          rows_cell_rowSpan: [],
          rows_cell_scope: [],
          rows_cell_type: [],
          rows_cell_value: [],
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
        catInfo: {
          categories_length: [],
          items_length: [],
          catLabels: [],
          itemLabels: [],
          disabled: [],
          expandButton: [],
          flavor: [],
          multipleItems: [],
          position: [],
          sizeConfig_value: [],
        },
        radioInfo: {
          disabled: [],
          expandButton: [],
          inline: [],
          options_length: [],
          options_label: [],
          position: [],
          sizeConfig_value: [],
          totalNumberOptions: 0,
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
          shareStudentAnswersInfo: {
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
          inRadioComp: {
            imageSrcUpload: [],
            imageAltTextUpload: [],
            imageSrcBynder: [],
            imageAltTextBynder: [],
          },
          imagesMissingAltText: 0,
        },
        urls: [], //be sure urls are labeled correctly
        answerKey: 0,
        storedGGBMaterialIds: [],
      };
      const initParamsLesson = JSON.parse(JSON.stringify(repeatedParams));
      const searchParamsLesson = {
        ...initParamsLesson,
        publishedDate: modifiedDate,
        tags: tagsArray,
        language: '',
      };
      const numOfSlides = allSlides.length - 1;
      allSlides.forEach(
        (
          { layout, isTeacherFacing, stage, code, slideId, contents },
          slideNumReversed
        ) => {
          //skips over the ggb download slide
          if (slideNumReversed == 0) {
            return;
          }
          const initParamsSlide = JSON.parse(JSON.stringify(repeatedParams));
          const searchParamsSlide = {
            ...initParamsSlide,
            stage,
            teacherView: isTeacherFacing,
            layout:
              layout.length === 2
                ? 'T layout'
                : layout[0].length === 1
                ? 'one col'
                : 'two col',
          };
          const searchParamsArray = [searchParamsLesson, searchParamsSlide];
          //add up total slides with answer keys; at end of lesson, divide by number of slides to see what percent of slides have answer keys in lesson
          if (allSlides[slideNumReversed].answerKey != '') {
            searchParamsArray.forEach((element) => (element.answerKey = +1));
          }
          let compString = 'const { ';
          let compTotalsSlide = {};
          //GATHERING ALL ASSOCIATED GGB MATERIAL IDS PER SLIDE
          const regexPreviousMaterialIds =
            /(?<=start slide search -- .*"storedGGBMaterialIds":\[.*")[^,]*?(?=".*].*-- end slide search)/g;
          const regexMatchArray = [...code.matchAll(regexPreviousMaterialIds)];
          searchParamsArray.forEach((subElement) => {
            regexMatchArray.forEach((insides) => {
              if (
                insides[0].length !== 0 &&
                !subElement.storedGGBMaterialIds.includes(insides[0])
              ) {
                subElement.storedGGBMaterialIds.push(insides[0]);
              }
            });
          });
          const compArray = contents.map(
            ({ name, type, data, position, config, sizeConfig }, index) => {
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
                    const tempInfoToUnshift = [
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
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
                    //checking if misalignment in text labelFor relation
                    const labelForUndefined =
                      typeof data.labelFor === 'undefined';
                    const tempPossibleMisalign =
                      tempSortArrayVar == 0 && !labelForUndefined
                        ? true
                        : (tempSortArrayVar == 1 || tempSortArrayVar == 2) &&
                          labelForUndefined
                        ? true
                        : (tempSortArrayVar == 1 || tempSortArrayVar == 2) &&
                          !data.labelFor.includes(
                            name.substring(0, name.length - 9)
                          )
                        ? true
                        : false;
                    if (tempPossibleMisalign) {
                      tempObjLocation.labelForRelation.unshift(
                        `possible misalignment with labelForRelation in ${name} on ${slideId}`
                      );
                      console.warn(
                        `possible misalignment with labelForRelation in ${name} on ${slideId}`
                      );
                    }
                  });
                  break;
                case 'geogebra':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.geogebra += 1;
                    let tempMaterialId = config.materialId;
                    const tempInfoToUnshift = [
                      tempMaterialId,
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
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
                    const tempGGBMaterialIdAndDate = `${tempMaterialId} - ${modifiedDate}`;
                    if (tempMaterialId.length !== 0) {
                      for (
                        let i = 0, L = element.storedGGBMaterialIds.length;
                        i < L;
                        i++
                      ) {
                        if (
                          element.storedGGBMaterialIds[L - 1 - i].includes(
                            tempMaterialId
                          )
                        ) {
                          element.storedGGBMaterialIds.splice(L - 1 - i, 1);
                        }
                      }
                      element.storedGGBMaterialIds.unshift(
                        tempGGBMaterialIdAndDate
                      );
                    }
                  });
                  break;
                case 'select':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.select += 1;
                    const tempInfoToUnshift = [
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
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
                    //now process each option, including possible image info
                    data.options.forEach((subElement, index) => {
                      element.selectInfo.totalNumberOptions += 1;
                      const subTempInfoToUnshift = [subElement.label];
                      const subTempObjArray = [
                        element.selectInfo.options_label,
                      ];
                      unshiftArrayData(subTempInfoToUnshift, subTempObjArray);
                      if (typeof subElement.img == 'undefined') {
                        return;
                      } else {
                        const storedImageSrc = subElement.img.src;
                        //set as let instead of const so that text can be changed to warning message
                        let storedImageAlt = subElement.img.alt;
                        //set up arrays for easier filtering
                        const uploadOrBynder = [
                          element.imageInfo.inSelectComp.imageSrcUpload,
                          element.imageInfo.inSelectComp.imageSrcBynder,
                        ];
                        const uploadOrBynderAltText = [
                          element.imageInfo.inSelectComp.imageAltTextUpload,
                          element.imageInfo.inSelectComp.imageAltTextBynder,
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
                          element.imageInfo.imagesMissingAltText += 1;
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
                    const tempInfoToUnshift = [
                      data.disabled,
                      position,
                      sizeConfig.value,
                    ];
                    const tempObjArray = [
                      tempObjLocation.disabled,
                      tempObjLocation.position,
                      tempObjLocation.sizeConfig_value,
                    ];
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
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
                    const tempInfoToUnshift = [
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
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
                  });
                  break;
                case 'fillblank':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.fillblank += 1;
                    const tempInfoToUnshift = [
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
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
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
                  searchParamsArray.forEach((element) => {
                    element.compTotals.image += 1;
                    const storedImageSrc = data.src;
                    let storedImageAlt = data.alt;
                    //set up arrays for easier filtering
                    const uploadOrBynder = [
                      element.imageInfo.inImageComp.imageSrcUpload,
                      element.imageInfo.inImageComp.imageSrcBynder,
                    ];
                    const uploadOrBynderAltText = [
                      element.imageInfo.inImageComp.imageAltTextUpload,
                      element.imageInfo.inImageComp.imageAltTextBynder,
                    ];
                    //set srcVar to 0 for uploaded images, 1 for bynder
                    const srcVar = storedImageSrc.includes('authoring-backend')
                      ? 0
                      : 1;
                    //uploaded images from select comps
                    uploadOrBynder[srcVar].unshift(storedImageSrc);
                    if (storedImageAlt === '') {
                      //if alt text is blank, add one to missing alt text and change blank text to warning
                      element.imageInfo.imagesMissingAltText += 1;
                      storedImageAlt = 'WARNING: NO ALT TEXT FOR THIS IMAGE';
                      console.warn(
                        `WARNING: NO ALT TEXT FOR ${name} on ${slideId}`
                      );
                    }
                    //if alt text is present
                    uploadOrBynderAltText[srcVar].unshift(storedImageAlt);
                  });
                  break;
                case 'buttongroup':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.buttongroup += 1;
                    const tempInfoToUnshift = [position, sizeConfig.value];
                    const tempObjArray = [
                      element.buttongroupInfo.position,
                      element.buttongroupInfo.sizeConfig_value,
                    ];
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
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
                    const tempInfoToUnshift = [data.flex, data.size, position];
                    const tempObjArray = [
                      element.separatorInfo.flex,
                      element.separatorInfo.size,
                      element.separatorInfo.position,
                    ];
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
                  });
                  break;
                case 'table':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.table += 1;
                    const tempInfoToUnshift = [
                      config.originalSize.columns,
                      config.originalSize.rows,
                      config?.size?.columnWidth,
                      checkArrayEqualElements(config?.size?.columnWidth),
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
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
                    data.columns.forEach((subElement) => {
                      const tempSubInfoToUnshift = [
                        subElement.alignment,
                        subElement.editable,
                        subElement.numberOfLines,
                        subElement.type,
                        subElement.value,
                      ];
                      const tempSubObjArray = [
                        element.tableOrigInfo.columns_cell_alignment,
                        element.tableOrigInfo.columns_cell_editable,
                        element.tableOrigInfo.columns_cell_numberOfLines,
                        element.tableOrigInfo.columns_cell_type,
                        element.tableOrigInfo.columns_cell_value,
                      ];
                      unshiftArrayData(tempSubInfoToUnshift, tempSubObjArray);
                    });
                    data.rows.forEach((subElement) => {
                      subElement.forEach((subSubElement) => {
                        const tempSubInfoToUnshift = [
                          subSubElement.alignment,
                          subSubElement.editable,
                          subSubElement.inputType,
                          subSubElement.math,
                          subSubElement.numberOfLines,
                          subSubElement.type,
                          subSubElement.inputType == 'mixed'
                            ? getMixed(subSubElement.mixedText)
                            : subSubElement.value,
                        ];
                        const tempSubObjArray = [
                          element.tableOrigInfo.rows_cell_alignment,
                          element.tableOrigInfo.rows_cell_editable,
                          element.tableOrigInfo.rows_cell_inputType,
                          element.tableOrigInfo.rows_cell_math,
                          element.tableOrigInfo.rows_cell_numberOfLines,
                          element.tableOrigInfo.rows_cell_type,
                          element.tableOrigInfo.rows_cell_value,
                        ];
                        unshiftArrayData(tempSubInfoToUnshift, tempSubObjArray);
                      });
                    });
                  });
                  break;
                case 'complextable':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.complextable += 1;
                    const tempInfoToUnshift = [
                      config.originalSize.columns,
                      config.originalSize.rows,
                      config?.size?.columnWidth,
                      checkArrayEqualElements(config?.size?.columnWidth),
                      data.disabled,
                      data.editable.columns,
                      data.editable.rows,
                      position,
                    ];
                    const tempObjArray = [
                      element.tableComplexInfo.columns,
                      element.tableComplexInfo.rows,
                      element.tableComplexInfo.columnWidth,
                      element.tableComplexInfo.columnsEqualWidth,
                      element.tableComplexInfo.disabled,
                      element.tableComplexInfo.canAddColumns,
                      element.tableComplexInfo.canAddRows,
                      element.tableComplexInfo.position,
                    ];
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
                    data.rows.forEach((subElement) => {
                      subElement.forEach((subSubElement) => {
                        const tempSubInfoToUnshift = [
                          subSubElement.alignment,
                          subSubElement.colSpan,
                          subSubElement.editable,
                          subSubElement.inputType,
                          subSubElement.math,
                          subSubElement.merged,
                          subSubElement.numberOfLines,
                          subSubElement.rowSpan,
                          subSubElement.scope,
                          subSubElement.type,
                          subSubElement.inputType == 'mixed'
                            ? getMixed(subSubElement.mixedText)
                            : subSubElement.value,
                        ];
                        const tempSubObjArray = [
                          element.tableComplexInfo.rows_cell_alignment,
                          element.tableComplexInfo.rows_cell_colSpan,
                          element.tableComplexInfo.rows_cell_editable,
                          element.tableComplexInfo.rows_cell_inputType,
                          element.tableComplexInfo.rows_cell_math,
                          element.tableComplexInfo.rows_cell_merged,
                          element.tableComplexInfo.rows_cell_numberOfLines,
                          element.tableComplexInfo.rows_cell_rowSpan,
                          element.tableComplexInfo.rows_cell_scope,
                          element.tableComplexInfo.rows_cell_type,
                          element.tableComplexInfo.rows_cell_value,
                        ];
                        unshiftArrayData(tempSubInfoToUnshift, tempSubObjArray);
                      });
                    });
                  });
                  break;
                case 'media':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.media += 1;
                    const tempInfoToUnshift = [
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
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
                  });
                  break;
                case 'categorization':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.categorization += 1;
                    const tempInfoToUnshift = [
                      data.categories.length,
                      data.items.length,
                      data.disabled,
                      data.expandButton,
                      data.flavor,
                      data.multipleItems,
                      position,
                      sizeConfig.value,
                    ];
                    const tempObjArray = [
                      element.catInfo.categories_length,
                      element.catInfo.items_length,
                      element.catInfo.disabled,
                      element.catInfo.expandButton,
                      element.catInfo.flavor,
                      element.catInfo.multipleItems,
                      element.catInfo.position,
                      element.catInfo.sizeConfig_value,
                    ];
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
                    //now process each item, including possible image info
                    data.items.forEach((subElement, index) => {
                      const tempVar = subElement.label;
                      if (!element.catInfo.itemLabels.includes(tempVar)) {
                        element.catInfo.itemLabels.unshift(tempVar);
                      }
                      if (typeof subElement.img == 'undefined') {
                        return;
                      } else {
                        const storedImageSrc = subElement.img.src;
                        let storedImageAlt = subElement.img.alt;
                        //set up arrays for easier filtering
                        const uploadOrBynder = [
                          element.imageInfo.inCatComp.imageSrcUpload,
                          element.imageInfo.inCatComp.imageSrcBynder,
                        ];
                        const uploadOrBynderAltText = [
                          element.imageInfo.inCatComp.imageAltTextUpload,
                          element.imageInfo.inCatComp.imageAltTextBynder,
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
                          element.imageInfo.imagesMissingAltText += 1;
                          storedImageAlt =
                            'WARNING: NO ALT TEXT FOR THIS IMAGE';
                          console.warn(
                            `WARNING: NO ALT TEXT FOR item ${index} in ${name} on ${slideId}`
                          );
                        }
                        //if alt text is present
                        uploadOrBynderAltText[srcVar].unshift(storedImageAlt);
                      }
                    });
                    data.categories.forEach((subElement) => {
                      const tempVar = subElement.label;
                      if (!element.catInfo.catLabels.includes(tempVar)) {
                        element.catInfo.catLabels.unshift(tempVar);
                      }
                    });
                  });
                  break;
                case 'studentanswers':
                  searchParamsArray.forEach((element) => {
                    const tempInfoToUnshift = [position, sizeConfig.value];
                    const tempObjArray = [
                      element.shareInfo.shareStudentAnswersInfo.position,
                      element.shareInfo.shareStudentAnswersInfo
                        .sizeConfig_value,
                    ];
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
                  });
                  break;
                case 'radiogroup':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.radiogroup += 1;
                    const tempInfoToUnshift = [
                      data.disabled,
                      data.expandButton,
                      data.inline,
                      data.options.length,
                      position,
                      sizeConfig.value,
                    ];
                    const tempObjArray = [
                      element.radioInfo.disabled,
                      element.radioInfo.expandButton,
                      element.radioInfo.inline,
                      element.radioInfo.options_length,
                      element.radioInfo.position,
                      element.radioInfo.sizeConfig_value,
                    ];
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
                    //now process each option, including possible image info
                    data.options.forEach((subElement, index) => {
                      element.radioInfo.totalNumberOptions += 1;
                      const subTempInfoToUnshift = [subElement.label];
                      const subTempObjArray = [element.radioInfo.options_label];
                      unshiftArrayData(subTempInfoToUnshift, subTempObjArray);
                      if (typeof subElement.img == 'undefined') {
                        return;
                      } else {
                        const storedImageSrc = subElement.img.src;
                        //set as let instead of const so that text can be changed to warning message
                        let storedImageAlt = subElement.img.alt;
                        //set up arrays for easier filtering
                        const uploadOrBynder = [
                          element.imageInfo.inRadioComp.imageSrcUpload,
                          element.imageInfo.inRadioComp.imageSrcBynder,
                        ];
                        const uploadOrBynderAltText = [
                          element.imageInfo.inRadioComp.imageAltTextUpload,
                          element.imageInfo.inRadioComp.imageAltTextBynder,
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
                          element.imageInfo.imagesMissingAltText += 1;
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
          removeEmptyProps(searchParamsSlide);
          if (searchParamsSlide.urls.length === 0) {
            delete searchParamsSlide.urls;
          }
          if (searchParamsSlide.storedGGBMaterialIds.length === 0) {
            delete searchParamsSlide.storedGGBMaterialIds;
          }
          if (searchParamsSlide.answerKey === 0) {
            delete searchParamsSlide.answerKey;
          }
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
          //regex for checking for previous comments to remove them.
          const prevSlideCommentRegex =
            /\/\*\nstart slide search --.*-- end slide search\n\*\//g;
          const slideIdComment = `\/\* -- autoCom slideId: ${slideId} - autoCom slideId -- \*\/\n\n`;
          const automatedSlideIdRegex =
            /\/\* -- autoCom slideId:.*- autoCom slideId -- \*\//g;
          //for first slide, with both lesson and slide comments
          if (slideNumReversed == numOfSlides) {
            //remove unnecessary portions of the comment
            removeEmptyProps(searchParamsLesson);
            const prevLessonCommentRegex =
              /\/\*\nstart lesson search --.*-- end lesson search\n\*\//g;
            //set the proportion of lessons with answer keys
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
            while ((matches = prevSlideCommentRegex.exec(newCode))) {
              newCode = newCode.replace(matches[0], '');
            }
            while ((matches = prevLessonCommentRegex.exec(newCode))) {
              newCode = newCode.replace(matches[0], '');
            }
            while ((matches = automatedSlideIdRegex.exec(newCode))) {
              newCode = newCode.replace(matches[0], '');
            }
            const searchCommentLesson =
              slideNumReversed != numOfSlides
                ? ``
                : `\n\n/*\nstart lesson search -- ${JSON.stringify(
                    searchParamsLesson
                  )} -- end lesson search\n*/`;
            newCode =
              slideIdComment +
              compString +
              newCode +
              searchCommentSlide +
              searchCommentLesson;
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
            while ((matches = prevSlideCommentRegex.exec(newCode))) {
              newCode = newCode.replace(matches[0], '');
            }
            while ((matches = automatedSlideIdRegex.exec(newCode))) {
              newCode = newCode.replace(matches[0], '');
            }
            newCode =
              slideIdComment + compString + newCode + searchCommentSlide;
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

function removeEmptyProps(loc) {
  if (loc.compTotals.textbox === 0) {
    delete loc.compTotals.textbox;
    delete loc.textboxInfo;
  }
  if (loc.compTotals.geogebra === 0) {
    delete loc.compTotals.geogebra;
    delete loc.ggbInfo;
  }
  if (loc.compTotals.select === 0) {
    delete loc.compTotals.select;
    delete loc.selectInfo;
    delete loc.imageInfo.inSelectComp;
  }
  if (loc.compTotals.radiogroup === 0) {
    delete loc.compTotals.radiogroup;
  }
  if (loc.compTotals.button === 0) {
    delete loc.compTotals.button;
    delete loc.buttonInfo;
  }
  if (loc.compTotals.input === 0) {
    delete loc.compTotals.input;
    delete loc.inputInfo;
  }
  if (loc.compTotals.fillblank === 0) {
    delete loc.compTotals.fillblank;
    delete loc.fillblankInfo;
  }
  if (loc.compTotals.image === 0) {
    delete loc.compTotals.image;
    delete loc.imageInfo.inImageComp;
  }
  if (loc.compTotals.buttongroup === 0) {
    delete loc.compTotals.buttongroup;
    delete loc.buttongroupInfo;
  }
  if (loc.compTotals.separator === 0) {
    delete loc.compTotals.separator;
    delete loc.separatorInfo;
  }
  if (loc.compTotals.table === 0) {
    delete loc.compTotals.table;
    delete loc.tableOrigInfo;
  }
  if (loc.compTotals.complextable === 0) {
    delete loc.compTotals.complextable;
    delete loc.tableComplexInfo;
  }
  if (loc.compTotals.media === 0) {
    delete loc.compTotals.media;
    delete loc.mediaInfo;
  }
  if (loc.compTotals.categorization === 0) {
    delete loc.compTotals.categorization;
    delete loc.catInfo;
    delete loc.imageInfo.inCatComp;
  }
  if (loc.compTotals.submit === 0) {
    delete loc.compTotals.submit;
    delete loc.submitInfo;
  }
  if (loc.compTotals.share === 0) {
    delete loc.compTotals.share;
    delete loc.shareInfo;
  }
  if (loc.compTotals.share === 0) {
    delete loc.compTotals.share;
    delete loc.shareInfo;
  }
  if (loc.imageInfo.imagesMissingAltText === 0) {
    delete loc.imageInfo.imagesMissingAltText;
  }
}

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

function unshiftArrayData(arrayToUnshift, arrayWhereToUnshift) {
  arrayWhereToUnshift.forEach((insides, index) => {
    //convert arrays to strings so able to use includes() effectively
    const tempVar = Array.isArray(arrayToUnshift[index])
      ? JSON.stringify(arrayToUnshift[index])
      : arrayToUnshift[index];
    if (!insides.includes(tempVar)) {
      insides.unshift(tempVar);
    }
  });
}

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
