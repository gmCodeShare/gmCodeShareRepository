const { ggb1, feedback1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

utils.RTS.on('datachange', 'slide-b3270303bf26', (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse();

  let increaseCount = 0;
  let decreaseCount = 0;
  let neitherCount = 0;
  let increaseCount2 = 0;
  let decreaseCount2 = 0;
  let neitherCount2 = 0;

  lastRegister.forEach(({ data, info }) => {
    const { choiceVal, choiceVal2 } = data;
    if (choiceVal == 1) {
      increaseCount++;
    } else if (choiceVal == 2) {
      decreaseCount++;
    } else if (choiceVal == 3) {
      neitherCount++;
    }
    if (choiceVal2 == 1) {
      increaseCount2++;
    } else if (choiceVal2 == 2) {
      decreaseCount2++;
    } else if (choiceVal2 == 3) {
      neitherCount2++;
    }
  });
  ggb1.instance.setValue('yesBarHeight', increaseCount);
  ggb1.instance.setValue('noBarHeight', decreaseCount);
  ggb1.instance.setValue('bar3Height', neitherCount);
  ggb2.instance.setValue('yesBarHeight', increaseCount2);
  ggb2.instance.setValue('noBarHeight', decreaseCount2);
  ggb2.instance.setValue('bar3Height', neitherCount2);
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
{"compTotals":{"geogebra":2,"textbox":1},"stage":"Learn","lessonInfo":"6 M3 TB L07 - Absolute Value","teacherView":true,"layout":"two col"}
*/
