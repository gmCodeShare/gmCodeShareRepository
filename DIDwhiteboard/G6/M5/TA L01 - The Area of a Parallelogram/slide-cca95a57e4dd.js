const {
  ggb1,
  separator2,
  buttonGroup1,
  feedback,
  text1,
  cc_sharewithclass_929252315bfc_textbox1,
  cc_sharewithclass_929252315bfc_input1,
  cc_sharewithclass_929252315bfc_button1,
  cc_sharewithclass_929252315bfc_studentanswers1,
} = components;

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
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M5 TA L01 - The Area of a Parallelogram","teacherView":false,"layout":"two col"}
*/
