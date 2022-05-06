const { ggb1, separator1, buttongroup1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

buttongroup1.updateSingleButton({ disabled: true }, 3);
buttongroup1.updateSingleButton({ disabled: true }, 2);
buttongroup1.on('click:1', () => {
  buttongroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.evalCommand('RunClickScript(button1)');
  if (ggb1.instance.getValue('count') == 7) {
    buttongroup1.updateSingleButton({ disabled: true }, 1);
    buttongroup1.updateSingleButton({ disabled: false }, 3);
  }
  if (ggb1.instance.getValue('count') == 1) {
    buttongroup1.updateSingleButton({ disabled: true }, 2);
  }
});

buttongroup1.on('click:3', () => {
  ggb1.instance.setValue('count', 1);
  buttongroup1.updateSingleButton({ disabled: false }, 1);
  buttongroup1.updateSingleButton({ disabled: true }, 3);
  buttongroup1.updateSingleButton({ disabled: true }, 2);
});

buttongroup1.on('click:2', () => {
  buttongroup1.updateSingleButton({ disabled: false }, 1);
  if (ggb1.instance.getValue('count') == 2) {
    buttongroup1.updateSingleButton({ disabled: true }, 2);
  }
  ggb1.instance.setValue('count', ggb1.instance.getValue('count') - 1);
  if (ggb1.instance.getValue('count') < 7) {
    buttongroup1.updateSingleButton({ disabled: true }, 3);
  }
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M4 TA L03 - PA Exploring Exponents","teacherView":true,"layout":"one col"}
*/
