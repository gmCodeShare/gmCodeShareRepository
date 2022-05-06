const { ggb1, feedback1 } = components;

ggb1.instance.stopAnimation();
ggb1.instance.setValue('speed', 5);
ggb1.instance.setAnimating('timeMove', true);
ggb1.instance.setAnimating('timePause', false);
ggb1.instance.setValue('timeMove', 0);
ggb1.instance.setValue('timePause', 0);
ggb1.instance.startAnimation();

ggb1.instance.setErrorDialogsActive(false);

autorun(() => {
  if (ggb1.innerData['timeMove'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('timeMove', false);
    ggb1.instance.setAnimating('timePause', true);
    ggb1.instance.setValue('timePause', 0);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (ggb1.innerData['timePause'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('timeMove', true);
    ggb1.instance.setAnimating('timePause', false);
    ggb1.instance.setValue('timeMove', 0);
    ggb1.instance.startAnimation();
  }
});

utils.RTS.on('datachange', 'slide-b653940d2f25', (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first
  let countA = 0,
    countB = 0,
    countC = 0,
    countD = 0;
  // think of this forEach as "for each student's input, do the following"
  lastRegister.forEach(({ data, info }) => {
    const { chosen } = data; // destructuring assignment, like for components
    switch (chosen) {
      case 'A':
        countA++;
        break;
      case 'B':
        countB++;
        break;
      case 'C':
        countC++;
        break;
      case 'D':
        countD++;
    }
  });
  ggb1.instance.setValue('numA', countA);
  ggb1.instance.setValue('numB', countB);
  ggb1.instance.setValue('numC', countC);
  ggb1.instance.setValue('numD', countD);
});

// use this function as is
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
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Launch","lessonInfo":"8 M3 TA L01 - Exploring Dilations","teacherView":true,"layout":"one col"}
*/
