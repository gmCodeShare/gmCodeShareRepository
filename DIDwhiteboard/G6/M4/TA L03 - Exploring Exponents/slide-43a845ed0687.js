const { ggb1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

// retrieving from slide 9
utils.RTS.on('datachange', 'slide-a0fa91df758d', (register) => {
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse();
  let yesCount = 0;
  let noCount = 0;
  lastRegister.forEach(({ data, info }) => {
    const { choiceVal } = data;
    if (choiceVal == 1) {
      yesCount++;
    } else if (choiceVal == 2) {
      noCount++;
    }
  });
  ggb1.instance.setValue('yesBarHeight', yesCount);
  ggb1.instance.setValue('noBarHeight', noCount);
});

// retrieving from slide 12
utils.RTS.on('datachange', 'slide-f6e713252036', (register) => {
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse();
  let yes2Count = 0;
  let no2Count = 0;
  lastRegister.forEach(({ data, info }) => {
    const { choiceVal2 } = data;
    if (choiceVal2 == 1) {
      yes2Count++;
    } else if (choiceVal2 == 2) {
      no2Count++;
    }
  });
  ggb2.instance.setValue('yesBarHeight', yes2Count);
  ggb2.instance.setValue('noBarHeight', no2Count);
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
{"compTotals":{"geogebra":2},"stage":"Learn","lessonInfo":"6 M4 TA L03 - Exploring Exponents","teacherView":false,"layout":"two col"}
*/
