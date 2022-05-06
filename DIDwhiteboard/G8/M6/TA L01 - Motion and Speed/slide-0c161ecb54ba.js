const {
  ggb1,
  separator3,
  buttonGroup1,
  feedback1,
  cc_sharewithclass_f96449e85295_textbox1,
  cc_sharewithclass_f96449e85295_input1,
  cc_sharewithclass_f96449e85295_button1,
  cc_sharewithclass_f96449e85295_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.stopAnimation();
    ggb1.instance.setValue('time', 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  let clickCount = ggb1.instance.getValue('clickCount');
  ggb1.instance.setValue('clickCount', clickCount + 1);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  let clickCount = ggb1.instance.getValue('clickCount');
  ggb1.instance.setValue('clickCount', clickCount + 1);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.stopAnimation();
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M6 TA L01 - Motion and Speed","teacherView":false,"layout":"two col"}
*/
