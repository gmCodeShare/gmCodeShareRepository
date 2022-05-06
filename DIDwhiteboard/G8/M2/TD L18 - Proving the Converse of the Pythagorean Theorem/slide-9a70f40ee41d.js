const {
  text1,
  ggb1,
  feedback1,
  buttonGroup1,
  separator3,
  cc_submit_d9ff9e8ef7af_textbox1: submitText1,
  cc_submit_d9ff9e8ef7af_input1: submitInput1,
  cc_submit_d9ff9e8ef7af_button1: submitButton1,
  separator2,
  cc_sharewithclass_86543d656bd1_textbox1: shareText1,
  cc_sharewithclass_86543d656bd1_input1: shareInput1,
  cc_sharewithclass_86543d656bd1_button1: shareButton1,
  cc_sharewithclass_86543d656bd1_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let timeForAngle = 0.5;

ggb1.instance.setValue('speed', 7);

slide.on('firstload', () => {
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  shareAnswers1.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

ggb1.instance.registerObjectUpdateListener('time', whatsNext);

function whatsNext() {
  if (
    ggb1.instance.getValue('time') == 1 &&
    ggb1.instance.getValue('showHyp2Growing')
  ) {
    ggb1.instance.setValue('showHyp2', true);
    ggb1.instance.setValue('showTriText', true);
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true });
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    // console.log('fire 5');
  } else if (
    ggb1.instance.getValue('time') == 1 &&
    ggb1.instance.getValue('bMoved')
  ) {
    ggb1.instance.setValue('showHyp2Growing', true);
    // console.log('fire 4');
    runAgain();
  } else if (
    ggb1.instance.getValue('time') > timeForAngle &&
    ggb1.instance.getValue('bMoved') &&
    !ggb1.instance.getValue('showAngle')
  ) {
    ggb1.instance.setValue('showAngle', true);
    // console.log('fire 3');
  } else if (
    ggb1.instance.getValue('time') == 1 &&
    !ggb1.instance.getValue('bMoved') &&
    ggb1.instance.getValue('aMoved')
  ) {
    ggb1.instance.setValue('bMoved', true);
    // console.log('fire 2');
    runAgain();
  } else if (
    ggb1.instance.getValue('time') == 1 &&
    !ggb1.instance.getValue('aMoved')
  ) {
    ggb1.instance.setValue('aMoved', true);
    // console.log('fire 1');
    runAgain();
  }
}

function runAgain() {
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setValue('aMoved', false);
  ggb1.instance.setValue('bMoved', false);
  ggb1.instance.setValue('showAngle', false);
  ggb1.instance.setValue('showEquations', false);
  ggb1.instance.setValue('showHyp2', false);
  ggb1.instance.setValue('showHyp2Growing', false);
  ggb1.instance.setValue('showHyp2Text', false);
  ggb1.instance.setValue('showTriText', false);
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareAnswers1.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":2,"geogebra":1,"buttongroup":1,"separator":2,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M2 TD L18 - Proving the Converse of the Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
