const {
  ggb1,
  feedback1,
  text1,
  text3,
  buttonGroup1,
  separator1,
  cc_sharewithclass_7c1c8b46e23b_textbox1: text2,
  cc_sharewithclass_7c1c8b46e23b_input1: input1,
  cc_sharewithclass_7c1c8b46e23b_button1: button1,
  cc_sharewithclass_7c1c8b46e23b_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('state', 1);
    text2.updateData({ visible: false });
    input1.updateData({ visible: false });
    button1.updateData({ visible: false });
    buttonGroup1.updateData({ visible: false });
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    text3.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let DragPoint = ggb1.innerData['I'];
  if (ggb1.innerData['showHighlight']) {
    text3.updateData({ visible: true });
    buttonGroup1.updateData({ visible: true });
  }
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue('showBoxes', false);
  ggb1.instance.setVisible('I', false);
  ggb1.instance.setVisible('J', false);
  ggb1.instance.setValue('showHalo', false);
  text2.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('showBoxes', true);
  ggb1.instance.setVisible('I', true);
  ggb1.instance.setVisible('J', true);
  ggb1.instance.setValue('showHalo', true);
});

autorun(() => {
  let point = ggb1.innerData['I'];
  if (!ggb1.innerData['showBoxes']) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"buttongroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M5 TB L07 - Areas of Trapezoids and Other Polygons","teacherView":false,"layout":"two col"}
*/
