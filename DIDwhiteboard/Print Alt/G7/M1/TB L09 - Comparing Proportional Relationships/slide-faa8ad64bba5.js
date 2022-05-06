const { ggb1, feedback1, ggb2, Separator3, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  // text1.updateData({ visible: false });
  ggb1.instance.setValue('clickCount', 0);
  ggb2.instance.setValue('clickCount', 0);
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  let clickCount = ggb1.instance.getValue('clickCount');
  ggb1.instance.setValue('clickCount', clickCount + 1);
  ggb2.instance.setValue('clickCount', ggb1.instance.getValue('clickCount'));
  if (ggb1.instance.getValue('clickCount') == 4) {
    // text1.updateData({ visible: true });
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('clickCount', 0);
  ggb2.instance.setValue('clickCount', 0);
});

/*button1.on('click', () => {
  button2.updateData({ disabled: false });
  let clickCount = ggb1.instance.getValue('clickCount');
  ggb1.instance.setValue('clickCount', clickCount + 1);
  if (ggb1.instance.getValue('clickCount') == 4) {
    text1.updateData({ visible: true });
    button1.updateData({ disabled: true });
  }
});*/

/*button2.on('click', () => {
  ggb1.instance.setValue('clickCount', 0);
  button1.updateData({ disabled: false });
});*/

/*
{"compTotals":{"geogebra":2,"textbox":1,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"7 M1 TB L09 - Print Alt: Comparing Proportional Relationships​","teacherView":true,"layout":"two col"}
*/
