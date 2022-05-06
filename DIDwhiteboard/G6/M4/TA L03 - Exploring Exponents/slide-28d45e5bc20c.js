const { ggb1, feedback1, text1, separator1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  // set initial states
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
  if (ggb1.instance.getValue('count') == 7) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('count', 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"separator":1,"buttongroup":1},"stage":"Launch","lessonInfo":"6 M4 TA L03 - Exploring Exponents","teacherView":false,"layout":"two col"}
*/
