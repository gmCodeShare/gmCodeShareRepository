const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

utils.RTS.on('datachange', 'slide-e8a367e5dc02', (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse();

  let catCount = 0;
  let dogCount = 0;
  let parrotCount = 0;
  let rabbitCount = 0;

  lastRegister.forEach(({ data, info }) => {
    const { choiceVal } = data;
    if (choiceVal == 1) {
      catCount++;
    } else if (choiceVal == 2) {
      dogCount++;
    } else if (choiceVal == 3) {
      parrotCount++;
    } else if (choiceVal == 4) {
      rabbitCount++;
    }
  });
  ggb1.instance.setValue('yesBarHeight', catCount);
  ggb1.instance.setValue('noBarHeight', dogCount);
  ggb1.instance.setValue('bar3Height', parrotCount);
  ggb1.instance.setValue('bar4Height', rabbitCount);
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
{"compTotals":{"geogebra":1},"stage":"Learn","lessonInfo":"6 M1 TB L07 - Graphs of Ratio Relationships","teacherView":true,"layout":"one col"}
*/
