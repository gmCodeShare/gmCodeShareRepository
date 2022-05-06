const {
  ggb1,
  feedback1,
  cc_submit_0b1de83fa1a4_textbox1: submitText1,
  cc_submit_0b1de83fa1a4_input1,
  cc_submit_0b1de83fa1a4_button1: submitButton1,
  separator1,
  cc_sharewithclass_5d0e2f1f14cc_textbox1: shareText1,
  cc_sharewithclass_5d0e2f1f14cc_input1: shareInput1,
  cc_sharewithclass_5d0e2f1f14cc_button1: shareButton1,
  cc_sharewithclass_5d0e2f1f14cc_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

let equa =
  getFromSlide(
    `slide-65d77b0ce000`,
    `cc_sharewithclass_6cd41e2a649c_input1.data.text`,
    ''
  ) || '';

if (equa) {
  ggb1.instance.evalLaTeX(`dummyObjectForThisCode: ${equa}`);
  ggb1.instance.setVisible('dummyObjectForThisCode', false);
  if (ggb1.instance.getObjectType('dummyObjectForThisCode') == 'line') {
    ggb1.instance.evalLaTeX(`slide6Line: ${equa}`);
    ggb1.instance.setFixed('slide6Line', false, false);
    ggb1.instance.setColor('slide6Line', 160, 160, 160);
  }
  ggb1.instance.deleteObject('dummyObjectForThisCode');
}

// Retrieving information
utils.RTS.on('datachange', 'slide-bc11b8e8f71c', (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  // the FLASH
  let allPoints = ggb1.instance.getAllObjectNames('point');
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(allPoints[i]);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { numX, numY } = data;
    newPoint = ggb1.instance.evalCommandGetLabels(
      '(' + numX + ',' + numY + ')'
    );
  });

  let newPoints = ggb1.instance.getAllObjectNames('point');
  let allValues = [];
  for (let i = 0, L = newPoints.length; i < L; i++) {
    ggb1.instance.setFixed(newPoints[i], false, false);
    allValues.push(ggb1.instance.getXcoord(newPoints[i]));
    allValues.push(ggb1.instance.getYcoord(newPoints[i]));
  }

  let ggbMin = Math.min(...allValues);
  let ggbMax = Math.max(...allValues);

  if (ggbMin < -4) {
    ggb1.instance.setValue('min', ggbMin - 2);
  } else {
    ggb1.instance.setValue('min', -4.8);
  }

  if (ggbMax > 15 && ggbMin >= -4) {
    ggb1.instance.setValue('max', ggbMax + 2);
    ggb1.instance.setValue('min', -0.15 * ggbMax);
  }
  if (ggbMax > 15 && ggbMin < -4) {
    ggb1.instance.setValue('max', ggbMax + 2);
  }
  if (ggbMax < 15) {
    ggb1.instance.setValue('max', 16);
  }
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

shareButton1.on('click', () => {
  ggb1.instance.evalLaTeX(`dummyObjectForThisCode: ${shareInput1.data.text}`);
  ggb1.instance.setVisible('dummyObjectForThisCode', false);
  if (ggb1.instance.getObjectType('dummyObjectForThisCode') == 'line') {
    ggb1.instance.evalLaTeX(`g: ${shareInput1.data.text}`);
    ggb1.instance.setFixed('g', false, false);
    ggb1.instance.setColor('g', 0, 127, 175);
  }
  ggb1.instance.deleteObject('dummyObjectForThisCode');
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M5 TA L02 - Introduction to Systems of Linear Equations","teacherView":false,"layout":"two col"}
*/
