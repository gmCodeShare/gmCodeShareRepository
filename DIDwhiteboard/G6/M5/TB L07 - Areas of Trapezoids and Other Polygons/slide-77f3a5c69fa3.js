const { text1, ggb1, feedback1, text2, text3, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('state', 1);
    text3.updateData({ visible: false });
    buttonGroup1.updateData({ visible: false });
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let DragPoint = ggb1.innerData['K'];
  if (ggb1.innerData['showHighlight']) {
    text3.updateData({ visible: true });
    buttonGroup1.updateData({ visible: true });
  }
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue('showBoxes', false);
  ggb1.instance.setVisible('K', false);
  ggb1.instance.setValue('showHalo', false);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('showBoxes', true);
  ggb1.instance.setVisible('K', true);
  ggb1.instance.setValue('showHalo', true);
});

autorun(() => {
  let point = ggb1.innerData['K'];
  if (!ggb1.innerData['showBoxes']) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

/*
{"compTotals":{"textbox":4,"geogebra":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M5 TB L07 - Areas of Trapezoids and Other Polygons","teacherView":false,"layout":"T layout"}
*/
