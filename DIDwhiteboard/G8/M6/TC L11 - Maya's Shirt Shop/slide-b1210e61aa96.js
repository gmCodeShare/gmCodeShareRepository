const {
  ggb1,
  feedback1,
  text1,
  text2,
  Separator1,
  buttonGroup1,
  separator1,
  cc_sharewithclass_cf441bb2dcb5_textbox1: shareText1,
  cc_sharewithclass_cf441bb2dcb5_input1: shareInput1,
  cc_sharewithclass_cf441bb2dcb5_button1: shareButton1,
  cc_sharewithclass_cf441bb2dcb5_studentanswers1,
} = components;

if (!ggb1.data.init) {
  text2.updateData({ visible: false });
  buttonGroup1.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  ggb1.updateData({ init: true });
}

ggb1.instance.setErrorDialogsActive(false);

let pinArray = [
  'pin1',
  'pin2',
  'pin3',
  'pin4',
  'pin5',
  'pin6',
  'pin7',
  'pin8',
  'pin9',
  'pin10',
];
let segArray = [
  'seg1',
  'seg2',
  'seg3',
  'seg4',
  'seg5',
  'seg6',
  'seg7',
  'seg8',
  'seg9',
  'seg10',
];
let textPinArray = [
  'textPin1',
  'textPin2',
  'textPin3',
  'textPin4',
  'textPin5',
  'textPin6',
  'textPin7',
  'textPin8',
  'textPin9',
  'textPin10',
];
let planeArray = [
  'plane1',
  'plane2',
  'plane3',
  'plane4',
  'plane5',
  'plane6',
  'plane7',
  'plane8',
  'plane9',
  'plane10',
];
let pinTimeArray = [
  'pin1Time',
  'pin2Time',
  'pin3Time',
  'pin4Time',
  'pin5Time',
  'pin6Time',
  'pin7Time',
  'pin8Time',
  'pin9Time',
  'pin10Time',
];
let checkPinArray = [
  'checkPin1',
  'checkPin2',
  'checkPin3',
  'checkPin4',
  'checkPin5',
  'checkPin6',
  'checkPin7',
  'checkPin8',
  'checkPin9',
  'checkPin10',
];

let focusArray = [
  'focus1',
  'focus2',
  'focus3',
  'focus4',
  'focus5',
  'focus6',
  'focus7',
  'focus8',
  'focus9',
  'focus10',
];

ggb1.instance.registerClientListener(focusIndicators);

ggb1.instance.registerObjectUpdateListener('show', buttonWork);
ggb1.instance.registerObjectUpdateListener('animationDone', displayWork);

function focusIndicators(a) {
  if (a.type == 'select') {
    if (a.target == 'pin1') {
      ggb1.instance.setVisible('focus1', true);
    } else {
      ggb1.instance.setVisible('focus1', false);
    }
    if (a.target == 'pin2') {
      ggb1.instance.setVisible('focus2', true);
    } else {
      ggb1.instance.setVisible('focus2', false);
    }
    if (a.target == 'pin3') {
      ggb1.instance.setVisible('focus3', true);
    } else {
      ggb1.instance.setVisible('focus3', false);
    }
    if (a.target == 'pin4') {
      ggb1.instance.setVisible('focus4', true);
    } else {
      ggb1.instance.setVisible('focus4', false);
    }
    if (a.target == 'pin5') {
      ggb1.instance.setVisible('focus5', true);
    } else {
      ggb1.instance.setVisible('focus5', false);
    }
    if (a.target == 'pin6') {
      ggb1.instance.setVisible('focus6', true);
    } else {
      ggb1.instance.setVisible('focus6', false);
    }
    if (a.target == 'pin7') {
      ggb1.instance.setVisible('focus7', true);
    } else {
      ggb1.instance.setVisible('focus7', false);
    }
    if (a.target == 'pin8') {
      ggb1.instance.setVisible('focus8', true);
    } else {
      ggb1.instance.setVisible('focus8', false);
    }
    if (a.target == 'pin9') {
      ggb1.instance.setVisible('focus9', true);
    } else {
      ggb1.instance.setVisible('focus9', false);
    }
    if (a.target == 'pin10') {
      ggb1.instance.setVisible('focus10', true);
    } else {
      ggb1.instance.setVisible('focus10', false);
    }
  }
  if (a.type == 'deselect') {
    for (let i = 0, L = focusArray.length; i < L; i++) {
      ggb1.instance.setVisible(focusArray[i], false);
    }
  }
}

function buttonWork() {
  if (ggb1.instance.getValue('show')) {
    buttonGroup1.updateData({ visible: true });
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  } else {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
}

function displayWork() {
  if (ggb1.instance.getValue('animationDone')) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  } else {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  text2.updateData({ visible: true });
  ggb1.instance.setValue('showHalos', false);
  ggb1.instance.setVisible('customerText', false);
  for (var i = 0, J = pinArray.length; i < J; i++) {
    ggb1.instance.setVisible(pinArray[i], false);
  }
  ggb1.instance.setVisible('textMinutes', true);
  selectionWork(ggb1.instance.getValue('selection'));
  readDistance();
});

function selectionWork(selectionNum) {
  ggb1.instance.setVisible(segArray[selectionNum - 1], true);
  ggb1.instance.setVisible(textPinArray[selectionNum - 1], true);
  ggb1.instance.setVisible(planeArray[selectionNum - 1], true);
  ggb1.instance.setAnimating(pinTimeArray[selectionNum - 1], false);
  ggb1.instance.setValue(pinTimeArray[selectionNum - 1], 0);
  ggb1.instance.setAnimating(pinTimeArray[selectionNum - 1], true);
  ggb1.instance.startAnimation();
}

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  text2.updateData({ text: `$0$ days` });
  ggb1.instance.setValue('selection', 0);
  ggb1.instance.setValue('show', false);
  ggb1.instance.setValue('showHalos', true);
  ggb1.instance.setVisible('customerText', true);
  ggb1.instance.setVisible('textMinutes', false);
  for (var i = 0, J = pinArray.length; i < J; i++) {
    ggb1.instance.setVisible(pinArray[i], true);
    ggb1.instance.setVisible(planeArray[i], false);
    ggb1.instance.setVisible(checkPinArray[i], false);
    ggb1.instance.setVisible(textPinArray[i], false);
    ggb1.instance.setVisible(segArray[i], false);
    ggb1.instance.setValue(pinTimeArray[i], 0);
  }
  ggb1.instance.evalCommand(`ReadText(AAppletStatus)`);
});

for (let i = 1, L = pinArray.length + 1; i < L; i++) {
  ggb1.instance.registerObjectUpdateListener(`pin${i}Time`, () => {
    let num = Math.round(ggb1.instance.getValue(`pin${i}Time`) * 1) / 1;
    text2.updateData({ text: `$${num}$ days` });
  });
  ggb1.instance.registerObjectClickListener(`pin${i}`, () => {
    ggb1.instance.setValue('show', true);
    ggb1.instance.setValue('selection', i);
    for (let j = 0, L = pinArray.length; j < L; j++) {
      ggb1.instance.setVisible(pinArray[i], true);
      ggb1.instance.setVisible(checkPinArray[i], false);
    }
    ggb1.instance.setVisible(`checkPin${i}`, true);
    ggb1.instance.setVisible(`pin${i}`, false);
  });
}

function readDistance() {
  if (ggb1.instance.getValue('selection') == 1) {
    ggb1.instance.evalCommand(
      `ReadText("Shop A is 125 miles away from the customer’s location and the shipping time is 4 days.")`
    );
  } else if (ggb1.instance.getValue('selection') == 2) {
    ggb1.instance.evalCommand(
      `ReadText("Shop B is 200 miles away from the customer’s location and the shipping time is 3 days.")`
    );
  } else if (ggb1.instance.getValue('selection') == 3) {
    ggb1.instance.evalCommand(
      `ReadText("Shop C is 275 miles away from the customer’s location and the shipping time is 14 days.")`
    );
  } else if (ggb1.instance.getValue('selection') == 4) {
    ggb1.instance.evalCommand(
      `ReadText("Shop D is 300 miles away from the customer’s location and the shipping time is 7 days.")`
    );
  } else if (ggb1.instance.getValue('selection') == 5) {
    ggb1.instance.evalCommand(
      `ReadText("Shop E is 425 miles away from the customer’s location and the shipping time is 10 days.")`
    );
  } else if (ggb1.instance.getValue('selection') == 6) {
    ggb1.instance.evalCommand(
      `ReadText("Shop F is 450 miles away from the customer’s location and the shipping time is 5 days.")`
    );
  } else if (ggb1.instance.getValue('selection') == 7) {
    ggb1.instance.evalCommand(
      `ReadText("Shop G is 475 miles away from the customer’s location and the shipping time is 11 days.")`
    );
  } else if (ggb1.instance.getValue('selection') == 8) {
    ggb1.instance.evalCommand(
      `ReadText("Shop H is 500 miles away from the customer’s location and the shipping time is 8 days.")`
    );
  } else if (ggb1.instance.getValue('selection') == 9) {
    ggb1.instance.evalCommand(
      `ReadText("Shop I is 525 miles away from the customer’s location and the shipping time is 6 days.")`
    );
  } else if (ggb1.instance.getValue('selection') == 10) {
    ggb1.instance.evalCommand(
      `ReadText("Shop J is 675 miles away from the customer’s location and the shipping time is 9 days.")`
    );
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"separator":2,"buttongroup":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M6 TC L11 - Scatter Plots","teacherView":false,"layout":"two col"}
*/
