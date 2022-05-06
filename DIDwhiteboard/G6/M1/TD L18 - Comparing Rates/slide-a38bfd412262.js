const { ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-8551d227df2b';

utils.RTS.on('datachange', id1, (register) => {
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
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M1 TD L18 - Comparing Rates","teacherView":true,"layout":"one col"}
*/
