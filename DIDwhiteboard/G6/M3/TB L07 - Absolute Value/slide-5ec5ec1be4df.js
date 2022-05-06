const { ggb1, feedback1, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);

utils.RTS.on('datachange', 'slide-9a8ab250cd3c', (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse();

  let aCount = 0;
  let bCount = 0;
  let cCount = 0;

  lastRegister.forEach(({ data, info }) => {
    const { choiceVal } = data;
    if (choiceVal == 1) {
      aCount++;
    } else if (choiceVal == 2) {
      bCount++;
    } else if (choiceVal == 3) {
      cCount++;
    }
  });
  ggb1.instance.setValue('yesBarHeight', aCount);
  ggb1.instance.setValue('noBarHeight', bCount);
  ggb1.instance.setValue('bar3Height', cCount);
});

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device);
      devices.add(device);

      return !deviceHasPreviousAnswer;
    });
}

/*
{"compTotals":{"geogebra":1,"textbox":2},"stage":"Learn","lessonInfo":"6 M3 TB L07 - Absolute Value","teacherView":true,"layout":"two col"}
*/
