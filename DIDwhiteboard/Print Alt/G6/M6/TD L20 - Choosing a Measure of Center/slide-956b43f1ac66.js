const { ggb1, separator2, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

ggb1.instance.setErrorDialogsActive(false);

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue('show', true);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('show', false);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M6 TD L20 - Print Alt: Choosing a Measure of Center","teacherView":true,"layout":"one col"}
*/
