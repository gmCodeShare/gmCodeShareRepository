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
          button: 0,
          buttongroup: 0,
          categorization: 0,
          complextable: 0,
          fillblank: 0,
          geogebra: 0,
          image: 0,
          input: 0,
          media: 0,
          radiogroup: 0,
          select: 0,
          separator: 0,
          share: 0,
          submit: 0,
          tableOrig: 0,
          textbox: 0,
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
        categorizationInfo: {
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
        complextableInfo: {
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
        fillblankInfo: {
          disabled: [],
          children_length: [],
          values_length: [],
          text: [],
          inputType: [],
          size: [],
          position: [],
        },
        geogebraInfo: {
          materialId: [],
          widgetSize: [],
          fixed: [],
          disabled: [],
          visible: [],
          position: [],
        },
        imageInfo: {
          disabled: [],
          sizeConfig_value: [],
          config_imageSize: [],
          expandButton: [],
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
        radiogroupInfo: {
          disabled: [],
          expandButton: [],
          inline: [],
          options_length: [],
          options_label: [],
          position: [],
          sizeConfig_value: [],
          totalNumberOptions: 0,
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
        separatorInfo: {
          flex: [],
          size: [],
          position: [],
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
        imagesInComponentsInfo: {
          numImagesTotal: 0,
          inCatComp: {
            numImagesByComp: 0,
            imageSrcUpload: [],
            imageAltTextUpload: [],
            imageSrcBynder: [],
            imageAltTextBynder: [],
          },
          inImageComp: {
            numImagesByComp: 0,
            imageSrcUpload: [],
            imageAltTextUpload: [],
            imageSrcBynder: [],
            imageAltTextBynder: [],
          },
          inRadioComp: {
            numImagesByComp: 0,
            imageSrcUpload: [],
            imageAltTextUpload: [],
            imageSrcBynder: [],
            imageAltTextBynder: [],
          },
          inSelectComp: {
            numImagesByComp: 0,
            imageSrcUpload: [],
            imageAltTextUpload: [],
            imageSrcBynder: [],
            imageAltTextBynder: [],
          },
          imagesMissingAltText: 0,
        },
        urls: [], //be sure urls are labeled correctly
        storedGGBMaterialIds: [],
        answerKey: 0,
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
                      element.categorizationInfo.categories_length,
                      element.categorizationInfo.items_length,
                      element.categorizationInfo.disabled,
                      element.categorizationInfo.expandButton,
                      element.categorizationInfo.flavor,
                      element.categorizationInfo.multipleItems,
                      element.categorizationInfo.position,
                      element.categorizationInfo.sizeConfig_value,
                    ];
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
                    //now process each item, including possible image info
                    data.items.forEach((subElement, index) => {
                      const tempVar = subElement.label;
                      if (
                        !element.categorizationInfo.itemLabels.includes(tempVar)
                      ) {
                        element.categorizationInfo.itemLabels.unshift(tempVar);
                      }
                      if (typeof subElement.img == 'undefined') {
                        return;
                      } else {
                        element.imagesInComponentsInfo.numImagesTotal += 1;
                        element.imagesInComponentsInfo.inCatComp.numImagesByComp += 1;
                        const storedImageSrc = subElement.img.src;
                        let storedImageAlt = subElement.img.alt;
                        //set up arrays for easier filtering
                        const uploadOrBynder = [
                          element.imagesInComponentsInfo.inCatComp
                            .imageSrcUpload,
                          element.imagesInComponentsInfo.inCatComp
                            .imageSrcBynder,
                        ];
                        const uploadOrBynderAltText = [
                          element.imagesInComponentsInfo.inCatComp
                            .imageAltTextUpload,
                          element.imagesInComponentsInfo.inCatComp
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
                          element.imagesInComponentsInfo.imagesMissingAltText += 1;
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
                      if (
                        !element.categorizationInfo.catLabels.includes(tempVar)
                      ) {
                        element.categorizationInfo.catLabels.unshift(tempVar);
                      }
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
                      element.complextableInfo.columns,
                      element.complextableInfo.rows,
                      element.complextableInfo.columnWidth,
                      element.complextableInfo.columnsEqualWidth,
                      element.complextableInfo.disabled,
                      element.complextableInfo.canAddColumns,
                      element.complextableInfo.canAddRows,
                      element.complextableInfo.position,
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
                          element.complextableInfo.rows_cell_alignment,
                          element.complextableInfo.rows_cell_colSpan,
                          element.complextableInfo.rows_cell_editable,
                          element.complextableInfo.rows_cell_inputType,
                          element.complextableInfo.rows_cell_math,
                          element.complextableInfo.rows_cell_merged,
                          element.complextableInfo.rows_cell_numberOfLines,
                          element.complextableInfo.rows_cell_rowSpan,
                          element.complextableInfo.rows_cell_scope,
                          element.complextableInfo.rows_cell_type,
                          element.complextableInfo.rows_cell_value,
                        ];
                        unshiftArrayData(tempSubInfoToUnshift, tempSubObjArray);
                      });
                    });
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
                      element.geogebraInfo.materialId,
                      element.geogebraInfo.widgetSize,
                      element.geogebraInfo.fixed,
                      element.geogebraInfo.disabled,
                      element.geogebraInfo.visible,
                      element.geogebraInfo.position,
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
                case 'image':
                  searchParamsArray.forEach((element) => {
                    element.compTotals.image += 1;
                    element.imagesInComponentsInfo.numImagesTotal += 1;
                    element.imagesInComponentsInfo.inImageComp.numImagesByComp += 1;
                    const tempInfoToUnshift = [
                      data.disabled,
                      sizeConfig.value,
                      config.expandButton,
                      config.imageSize.type,
                    ];
                    const tempObjArray = [
                      element.imageInfo.disabled,
                      element.imageInfo.sizeConfig_value,
                      element.imageInfo.expandButton,
                      element.imageInfo.config_imageSize,
                    ];
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
                    let storedImageSrc = data.src;
                    let storedImageAlt = data.alt;
                    //set up arrays for easier filtering
                    const uploadOrBynder = [
                      element.imagesInComponentsInfo.inImageComp.imageSrcUpload,
                      element.imagesInComponentsInfo.inImageComp.imageSrcBynder,
                    ];
                    const uploadOrBynderAltText = [
                      element.imagesInComponentsInfo.inImageComp
                        .imageAltTextUpload,
                      element.imagesInComponentsInfo.inImageComp
                        .imageAltTextBynder,
                    ];
                    //set srcVar to 0 for uploaded images, 1 for bynder
                    const srcVar = storedImageSrc.includes('authoring-backend')
                      ? 0
                      : 1;
                    if (storedImageSrc === '') {
                      //if there is no image, add warning
                      storedImageSrc = 'WARNING: NO IMAGE IN THIS COMPONENT';
                      console.warn(
                        `WARNING: NO IMAGE FOR ${name} on ${slideId}`
                      );
                    }
                    //push image src or warning
                    uploadOrBynder[srcVar].unshift(storedImageSrc);
                    if (storedImageAlt === '') {
                      //if alt text is blank, add one to missing alt text and change blank text to warning
                      element.imagesInComponentsInfo.imagesMissingAltText += 1;
                      storedImageAlt = 'WARNING: NO ALT TEXT FOR THIS IMAGE';
                      console.warn(
                        `WARNING: NO ALT TEXT FOR ${name} on ${slideId}`
                      );
                    }
                    //push alt text or warning
                    uploadOrBynderAltText[srcVar].unshift(storedImageAlt);
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
                      element.radiogroupInfo.disabled,
                      element.radiogroupInfo.expandButton,
                      element.radiogroupInfo.inline,
                      element.radiogroupInfo.options_length,
                      element.radiogroupInfo.position,
                      element.radiogroupInfo.sizeConfig_value,
                    ];
                    unshiftArrayData(tempInfoToUnshift, tempObjArray);
                    //now process each option, including possible image info
                    data.options.forEach((subElement, index) => {
                      element.radiogroupInfo.totalNumberOptions += 1;
                      const subTempInfoToUnshift = [subElement.label];
                      const subTempObjArray = [
                        element.radiogroupInfo.options_label,
                      ];
                      unshiftArrayData(subTempInfoToUnshift, subTempObjArray);
                      if (typeof subElement.img == 'undefined') {
                        return;
                      } else {
                        element.imagesInComponentsInfo.numImagesTotal += 1;
                        element.imagesInComponentsInfo.inRadioComp.numImagesByComp += 1;
                        const storedImageSrc = subElement.img.src;
                        //set as let instead of const so that text can be changed to warning message
                        let storedImageAlt = subElement.img.alt;
                        //set up arrays for easier filtering
                        const uploadOrBynder = [
                          element.imagesInComponentsInfo.inRadioComp
                            .imageSrcUpload,
                          element.imagesInComponentsInfo.inRadioComp
                            .imageSrcBynder,
                        ];
                        const uploadOrBynderAltText = [
                          element.imagesInComponentsInfo.inRadioComp
                            .imageAltTextUpload,
                          element.imagesInComponentsInfo.inRadioComp
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
                          element.imagesInComponentsInfo.imagesMissingAltText += 1;
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
                        element.imagesInComponentsInfo.numImagesTotal += 1;
                        element.imagesInComponentsInfo.inSelectComp.numImagesByComp += 1;
                        const storedImageSrc = subElement.img.src;
                        //set as let instead of const so that text can be changed to warning message
                        let storedImageAlt = subElement.img.alt;
                        //set up arrays for easier filtering
                        const uploadOrBynder = [
                          element.imagesInComponentsInfo.inSelectComp
                            .imageSrcUpload,
                          element.imagesInComponentsInfo.inSelectComp
                            .imageSrcBynder,
                        ];
                        const uploadOrBynderAltText = [
                          element.imagesInComponentsInfo.inSelectComp
                            .imageAltTextUpload,
                          element.imagesInComponentsInfo.inSelectComp
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
                          element.imagesInComponentsInfo.imagesMissingAltText += 1;
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
                case 'table': //this is the original "table" component, or tableOrig here in the code
                  searchParamsArray.forEach((element) => {
                    element.compTotals.tableOrig += 1;
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
                default:
                  console.warn(
                    `error in lesson component switch statement: { slideId: ${slideId}, type: ${type}, name: ${name} }`
                  );
                  ggb1.instance.evalCommand('RunClickScript(errorButton)');
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
          let searchCommentSlide = `\n\n/*\nstart slide search -- ${JSON.stringify(
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
          //removing double backslashes and quad backslashes from comment
          const doubleBSlashRegEx = /(?<!\\\\)\\\\(?!\\)/g;
          const quadBSlashRegEx = /(?<!\\\\)\\\\\\\\(?!\\)/g;
          searchCommentSlide = searchCommentSlide.replaceAll(
            doubleBSlashRegEx,
            '\\'
          );
          searchCommentSlide = searchCommentSlide.replaceAll(
            quadBSlashRegEx,
            '\\\\'
          );
          //regex for checking for previous comments to remove them.
          const prevSlideCommentRegex =
            /\/\*\nstart slide search --.*-- end slide search\n\*\//g;
          const prevLessonCommentRegex =
            /\/\*\nstart lesson search --.*-- end lesson search\n\*\//g;
          //automated comment for slideId
          const slideIdComment = `\/\* -- autoCom slideId: ${slideId} - autoCom slideId -- \*\/\n\n`;
          const automatedSlideIdRegex =
            /\/\* -- autoCom slideId:.*- autoCom slideId -- \*\//g;
          //removing previous comments and declarations
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
          //END SLIDE COMMENT
          //attach lesson and slide comments
          //for first slide, with both lesson and slide comments
          if (slideNumReversed == numOfSlides) {
            //remove unnecessary portions of the comment
            removeEmptyProps(searchParamsLesson);
            //set the proportion of lessons with answer keys
            searchParamsLesson.answerKey = round(
              searchParamsLesson.answerKey / numOfSlides,
              2
            );
            let searchCommentLesson =
              slideNumReversed != numOfSlides
                ? ``
                : `\n\n/*\nstart lesson search -- ${JSON.stringify(
                    searchParamsLesson
                  )} -- end lesson search\n*/`;
            searchCommentLesson = searchCommentLesson.replaceAll(
              doubleBSlashRegEx,
              '\\'
            );
            searchCommentLesson = searchCommentLesson.replaceAll(
              quadBSlashRegEx,
              '\\\\'
            );
            newCode =
              slideIdComment +
              compString +
              newCode +
              searchCommentSlide +
              searchCommentLesson;
          }
          //for all slides other than first slide, with only slide comments
          else {
            newCode =
              slideIdComment + compString + newCode + searchCommentSlide;
          }
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

function removeEmptyProps(loc) {
  if (loc.imagesInComponentsInfo.numImagesTotal === 0) {
    delete loc.imagesInComponentsInfo;
  } else {
    if (loc.imagesInComponentsInfo.inCatComp.numImagesByComp === 0) {
      delete loc.imagesInComponentsInfo.inCatComp;
    }
    if (loc.imagesInComponentsInfo.inImageComp.numImagesByComp === 0) {
      delete loc.imagesInComponentsInfo.inImageComp;
    }
    if (loc.imagesInComponentsInfo.inRadioComp.numImagesByComp === 0) {
      delete loc.imagesInComponentsInfo.inRadioComp;
    }
    if (loc.imagesInComponentsInfo.inSelectComp.numImagesByComp === 0) {
      delete loc.imagesInComponentsInfo.inSelectComp;
    }
    if (loc.imagesInComponentsInfo.imagesMissingAltText === 0) {
      delete loc.imagesInComponentsInfo.imagesMissingAltText;
    }
  }
  if (loc.compTotals.button === 0) {
    delete loc.compTotals.button;
    delete loc.buttonInfo;
  }
  if (loc.compTotals.buttongroup === 0) {
    delete loc.compTotals.buttongroup;
    delete loc.buttongroupInfo;
  }
  if (loc.compTotals.categorization === 0) {
    delete loc.compTotals.categorization;
    delete loc.categorizationInfo;
    delete loc?.imagesInComponentsInfo?.inCatComp;
  }
  if (loc.compTotals.complextable === 0) {
    delete loc.compTotals.complextable;
    delete loc.complextableInfo;
  }
  if (loc.compTotals.fillblank === 0) {
    delete loc.compTotals.fillblank;
    delete loc.fillblankInfo;
  }
  if (loc.compTotals.geogebra === 0) {
    delete loc.compTotals.geogebra;
    delete loc.geogebraInfo;
  }
  if (loc.compTotals.image === 0) {
    delete loc.compTotals.image;
    delete loc.imageInfo;
    delete loc?.imagesInComponentsInfo?.inImageComp;
  }
  if (loc.compTotals.input === 0) {
    delete loc.compTotals.input;
    delete loc.inputInfo;
  }
  if (loc.compTotals.media === 0) {
    delete loc.compTotals.media;
    delete loc.mediaInfo;
  }
  if (loc.compTotals.radiogroup === 0) {
    delete loc.compTotals.radiogroup;
    delete loc.radiogroupInfo;
    delete loc?.imagesInComponentsInfo?.inRadioComp;
  }
  if (loc.compTotals.select === 0) {
    delete loc.compTotals.select;
    delete loc.selectInfo;
    delete loc?.imagesInComponentsInfo?.inSelectComp;
  }
  if (loc.compTotals.separator === 0) {
    delete loc.compTotals.separator;
    delete loc.separatorInfo;
  }
  if (loc.compTotals.share === 0) {
    delete loc.compTotals.share;
    delete loc.shareInfo;
  }
  if (loc.compTotals.submit === 0) {
    delete loc.compTotals.submit;
    delete loc.submitInfo;
  }
  if (loc.compTotals.tableOrig === 0) {
    delete loc.compTotals.tableOrig;
    delete loc.tableOrigInfo;
  }
  if (loc.compTotals.textbox === 0) {
    delete loc.compTotals.textbox;
    delete loc.textboxInfo;
  }
  if (loc.urls.length === 0) {
    delete loc.urls;
  }
  if (loc.storedGGBMaterialIds.length === 0) {
    delete loc.storedGGBMaterialIds;
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
