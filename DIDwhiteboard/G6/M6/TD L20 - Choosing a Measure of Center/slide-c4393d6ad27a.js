const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  separator5,
  cc_sharewithclass_1de33a62e9dd_textbox1: shareText1,
  cc_sharewithclass_1de33a62e9dd_input1: shareInput1,
  cc_sharewithclass_1de33a62e9dd_button1: shareButton1,
  cc_sharewithclass_1de33a62e9dd_studentanswers1: shareAnswers1,
} = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false, align: 'right' });
  shareAnswers1.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('time', startTime2);
ggb1.instance.registerObjectUpdateListener('time2', startTime3);
ggb1.instance.registerObjectUpdateListener('time3', startTime4);
ggb1.instance.registerObjectUpdateListener('time4', startBreak);
ggb1.instance.registerObjectUpdateListener('animationDone', enableButton);

function startTime2() {
  if (ggb1.instance.getValue('time') == 1) {
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.startAnimation();
  }
}

function startTime3() {
  if (ggb1.instance.getValue('time2') == 1) {
    ggb1.instance.setAnimating('time3', false);
    ggb1.instance.setValue('time3', 0);
    ggb1.instance.setAnimating('time3', true);
    ggb1.instance.startAnimation();
  }
}

function startTime4() {
  if (ggb1.instance.getValue('time3') == 1) {
    ggb1.instance.setAnimating('time4', false);
    ggb1.instance.setValue('time4', 0);
    ggb1.instance.setAnimating('time4', true);
    ggb1.instance.startAnimation();
  }
}

function startBreak() {
  if (ggb1.instance.getValue('time4') == 1) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareAnswers1.updateData({ visible: true });
    ggb1.instance.setAnimating('break', false);
    ggb1.instance.setValue('break', 0);
    ggb1.instance.setAnimating('break', true);
    ggb1.instance.startAnimation();
  }
}

function enableButton() {
  if (ggb1.instance.getValue('animationDone')) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
}

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
  ggb1.instance.setAnimating('break', false);
  ggb1.instance.setValue('break', 0);
  ggb1.instance.evalCommand('ReadText(AAppletStatus)');
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TD L20 - Choosing a Measure of Center","teacherView":false,"layout":"two col"}
*/
