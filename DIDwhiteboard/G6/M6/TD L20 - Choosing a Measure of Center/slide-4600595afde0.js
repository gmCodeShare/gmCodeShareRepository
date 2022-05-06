const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  separator4,
  cc_sharewithclass_1de33a62e9dd_textbox1: shareText1,
  cc_sharewithclass_1de33a62e9dd_input1: shareInput1,
  cc_sharewithclass_1de33a62e9dd_button1: shareButton1,
  cc_sharewithclass_1de33a62e9dd_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false, align: 'right' });
  shareAnswers1.updateData({ visible: false });
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  ggb1.instance.evalCommand('ReadText(AACorrectStatus)');
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setAnimating('time3', false);
  ggb1.instance.setValue('time3', 0);
  ggb1.instance.setAnimating('time4', false);
  ggb1.instance.setValue('time4', 0);
  ggb1.instance.setAnimating('time5', false);
  ggb1.instance.setValue('time5', 0);
  ggb1.instance.setAnimating('time6', false);
  ggb1.instance.setValue('time6', 0);
  ggb1.instance.setAnimating('time7', false);
  ggb1.instance.setValue('time7', 0);
  ggb1.instance.setAnimating('break', false);
  ggb1.instance.setValue('break', 0);
  ggb1.instance.evalCommand('ReadText(AAppletStatus)');
});

autorun(() => {
  let time = ggb1.innerData['time'];
  if (ggb1.innerData['animationDone']) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

autorun(() => {
  let lastTime = ggb1.innerData['time7'];
  if (lastTime == 1) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareAnswers1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TD L20 - Choosing a Measure of Center","teacherView":false,"layout":"two col"}
*/
