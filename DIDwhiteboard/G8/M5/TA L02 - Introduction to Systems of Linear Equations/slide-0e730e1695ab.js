const {
  ggb1,
  feedback1,
  cc_sharewithclass_6cd41e2a649c_textbox1: shareText1,
  cc_sharewithclass_6cd41e2a649c_input1,
  cc_sharewithclass_6cd41e2a649c_button1,
  cc_sharewithclass_6cd41e2a649c_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

// Retrieving information
utils.RTS.on('datachange', 'slide-d7b277b63b6a', (register) => {
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

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M5 TA L02 - Introduction to Systems of Linear Equations","teacherView":false,"layout":"two col"}
*/
