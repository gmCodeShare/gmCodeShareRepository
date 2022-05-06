const {
  ggb1,
  feedback1,
  cc_sharewithclass_2ab3213a57bf_textbox1,
  cc_sharewithclass_2ab3213a57bf_input1,
  cc_sharewithclass_2ab3213a57bf_button1,
  cc_sharewithclass_2ab3213a57bf_studentanswers1,
} = components;

slide.on('firstload', () => {
  ggb1.instance.setValue('time', 1);
  ggb1.instance.deleteObject('NewGreen');
  ggb1.instance.deleteObject('NewPurple');
  ggb1.instance.deleteObject('GreenHalo');
});

let focusObjects = [
  'homeFocusIndicator',
  'zoomInFocusIndicator',
  'zoomOutFocusIndicator',
];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('count', labelStuff);
ggb1.instance.registerClientListener(focusIndicators);
ggb1.instance.registerObjectClickListener('defaultHome', homeClick);

function focusIndicators(a) {
  if (a.type == 'select') {
    if (a.target == 'defaultHome') {
      ggb1.instance.setVisible('homeFocusIndicator', true);
    } else {
      ggb1.instance.setVisible('homeFocusIndicator', false);
    }
    if (a.target == 'defaultZoomIn') {
      ggb1.instance.setVisible('zoomInFocusIndicator', true);
    } else {
      ggb1.instance.setVisible('zoomInFocusIndicator', false);
    }
    if (a.target == 'defaultZoomOut') {
      ggb1.instance.setVisible('zoomOutFocusIndicator', true);
    } else {
      ggb1.instance.setVisible('zoomOutFocusIndicator', false);
    }
  }
  if (a.type == 'deselect') {
    for (let i = 0, L = focusObjects.length; i < L; i++) {
      ggb1.instance.setVisible(focusObjects[i], false);
    }
  }
}

function homeClick() {
  ggb1.instance.evalCommand('ZoomIn()');
  ggb1.instance.setValue('showHome', false);
  ggb1.instance.setValue('count', 0);
  ggb1.instance.setVisible('homeFocusIndicator', false);
}

function labelStuff() {
  if (ggb1.instance.getValue('count') == 1) {
    ggb1.instance.setLabelVisible('eq1', false);
  } else {
    ggb1.instance.setLabelVisible('eq1', true);
  }
}

utils.RTS.on('datachange', 'slide-1a0fd993032e', (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand('pointList={}');
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const {
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      row1Total,
      row2Total,
      row3Total,
      a,
      b,
      c,
      d,
      e,
      f,
      total,
      total2,
      total3,
    } = data;
    if (total == 6) {
      ggb1.instance.evalCommand(
        'SetValue(pointList,Append(pointList,(' + a + ',' + b + ')))'
      );
    }
    if (total2 == 6) {
      ggb1.instance.evalCommand(
        'SetValue(pointList,Append(pointList,(' + c + ',' + d + ')))'
      );
    }
    if (total3 == 6) {
      ggb1.instance.evalCommand(
        'SetValue(pointList,Append(pointList,(' + e + ',' + f + ')))'
      );
    }
    ggb1.instance.setVisible('pointList', true);
  });
});

// Retrieving information
utils.RTS.on('datachange', 'slide-8e74cc3defa1', (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand('pointList2={}');
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const {
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      row1Total,
      row2Total,
      row3Total,
      g,
      h,
      i,
      j,
      k,
      l,
      total4,
      total5,
      total6,
    } = data;
    if (total4 == 6) {
      ggb1.instance.evalCommand(
        'SetValue(pointList2,Append(pointList2,(' + g + ',' + h + ')))'
      );
    }
    if (total5 == 6) {
      ggb1.instance.evalCommand(
        'SetValue(pointList2,Append(pointList2,(' + i + ',' + j + ')))'
      );
    }
    if (total6 == 6) {
      ggb1.instance.evalCommand(
        'SetValue(pointList2,Append(pointList2,(' + k + ',' + l + ')))'
      );
    }
    ggb1.instance.setVisible('pointList2', true);
  });
});

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TA L01 - Solution Sets of Linear Equations in Two Variables","teacherView":false,"layout":"two col"}
*/
