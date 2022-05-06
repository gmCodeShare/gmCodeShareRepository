const { ggb1, separator2, buttonGroup1, feedback } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.evalCommand('RunClickScript(button1)');
  ggb1.instance.setVisible('eq1', false);
  ggb1.instance.setVisible('C', false);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.evalCommand('RunClickScript(button2)');
  ggb1.instance.setVisible('eq1', true);
  ggb1.instance.setVisible('C', true);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M5 TA L01 - Print Alternate Slide Deck for The Area of a Parallelogram","teacherView":true,"layout":"one col"}
*/
