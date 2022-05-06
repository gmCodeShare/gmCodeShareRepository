const {
  ggb1,
  separator1,
  buttonGroup1,
  cc_sharewithclass_710c6586cd8c_textbox1: shareText1,
  cc_sharewithclass_710c6586cd8c_input1: shareInput1,
  cc_sharewithclass_710c6586cd8c_button1: shareButton1,
  cc_sharewithclass_710c6586cd8c_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setAnimating('Number', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setValue('Number', 0);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M1 TA L04 - Exploring Ratios by Making Batches","teacherView":false,"layout":"two col"}
*/
