const {
  ggb1,
  feedback1,
  text1,
  button1,
  separator2,
  cc_sharewithclass_1dbe0647b42e_textbox1: shareText1,
  cc_sharewithclass_1dbe0647b42e_input1: shareInput1,
  cc_sharewithclass_1dbe0647b42e_button1: shareButton1,
  cc_sharewithclass_1dbe0647b42e_studentanswers1,
} = components;

if (!ggb1.data.init) {
  button1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  shareText1.updateData({ visible: false });
  ggb1.updateData({ init: true });
}

ggb1.instance.setErrorDialogsActive(false);

let buttonArray = [
  'buttonA',
  'buttonB',
  'buttonC',
  'buttonD',
  'buttonE',
  'buttonF',
  'buttonG',
  'buttonH',
  'buttonI',
  'buttonJ',
];

let timeArray = [
  'timeA',
  'timeB',
  'timeC',
  'timeD',
  'timeE',
  'timeF',
  'timeG',
  'timeH',
  'timeI',
  'timeJ',
];

let clickedBooleans = [
  'AClicked',
  'BClicked',
  'CClicked',
  'DClicked',
  'EClicked',
  'FClicked',
  'GClicked',
  'HClicked',
  'IClicked',
  'JClicked',
];

let focusArray = [
  'buttonAFocus',
  'buttonBFocus',
  'buttonCFocus',
  'buttonDFocus',
  'buttonEFocus',
  'buttonFFocus',
  'buttonGFocus',
  'buttonHFocus',
  'buttonIFocus',
];

ggb1.instance.registerClientListener(indicators);

function indicators(a) {
  if (a.type == 'select') {
    if (a.target == 'buttonA') {
      ggb1.instance.setVisible('buttonAFocus', true);
    } else {
      ggb1.instance.setVisible('buttonAFocus', false);
    }
    if (a.target == 'buttonB') {
      ggb1.instance.setVisible('buttonBFocus', true);
    } else {
      ggb1.instance.setVisible('buttonBFocus', false);
    }
    if (a.target == 'buttonC') {
      ggb1.instance.setVisible('buttonCFocus', true);
    } else {
      ggb1.instance.setVisible('buttonCFocus', false);
    }
    if (a.target == 'buttonD') {
      ggb1.instance.setVisible('buttonDFocus', true);
    } else {
      ggb1.instance.setVisible('buttonDFocus', false);
    }
    if (a.target == 'buttonE') {
      ggb1.instance.setVisible('buttonEFocus', true);
    } else {
      ggb1.instance.setVisible('buttonEFocus', false);
    }
    if (a.target == 'buttonF') {
      ggb1.instance.setVisible('buttonFFocus', true);
    } else {
      ggb1.instance.setVisible('buttonFFocus', false);
    }
    if (a.target == 'buttonG') {
      ggb1.instance.setVisible('buttonGFocus', true);
    } else {
      ggb1.instance.setVisible('buttonGFocus', false);
    }
    if (a.target == 'buttonH') {
      ggb1.instance.setVisible('buttonHFocus', true);
    } else {
      ggb1.instance.setVisible('buttonHFocus', false);
    }
    if (a.target == 'buttonI') {
      ggb1.instance.setVisible('buttonIFocus', true);
    } else {
      ggb1.instance.setVisible('buttonIFocus', false);
    }
    if (a.target == 'buttonJ') {
      ggb1.instance.setVisible('buttonJFocus', true);
    } else {
      ggb1.instance.setVisible('buttonJFocus', false);
    }
  }
  if (a.type == 'deselect') {
    for (let i = 0, L = focusArray.length; i < L; i++) {
      ggb1.instance.setVisible(focusArray[i], false);
    }
  }
}

button1.on('click', () => {
  ggb1.instance.setValue('showHover', true);
  ggb1.instance.setVisible('background', true);
  for (let i = 0, L = buttonArray.length; i < L; i++) {
    ggb1.instance.setVisible(buttonArray[i], true);
    ggb1.instance.setAnimating(timeArray[i], false);
    ggb1.instance.setValue(timeArray[i], 0);
    ggb1.instance.setValue(clickedBooleans[i], false);
  }
  ggb1.instance.setVisible('bar1', false);
  ggb1.instance.setVisible('bar2', false);
  ggb1.instance.setVisible('inProduction', false);
  ggb1.instance.setVisible('inTransit', false);
  ggb1.instance.setVisible('delivered', false);
  ggb1.instance.setAnimating('bar1TimeA', false);
  ggb1.instance.setValue('bar1TimeA', 0);
  ggb1.instance.evalCommand('status=status1');
  ggb1.instance.evalCommand('ReadText(AAppletStatus)');
});

autorun(() => {
  let time = ggb1.innerData['bar1TimeA'];
  if (ggb1.innerData['bar1TimeA'] == 1) {
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareText1.updateData({ visible: true });
    button1.updateData({ visible: true, disabled: false });
  } else {
    button1.updateData({ disabled: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M6 TC L11 - Scatter Plots","teacherView":false,"layout":"two col"}
*/
