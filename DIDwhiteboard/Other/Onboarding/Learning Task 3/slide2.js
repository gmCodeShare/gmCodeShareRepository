const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

utils.RTS.on('datachange', 'slide-25f0913f123b', (register) => {
  if (!register || !register.length) {
    return;
  }

  let allPoints = ggb1.instance.getAllObjectNames('point');

  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(allPoints[i]);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { pointA, pointB, pointC, pointD } = data;
    newPointA = ggb1.instance.evalCommandGetLabels('(' + pointA + ')');
    newPointB = ggb1.instance.evalCommandGetLabels('(' + pointB + ')');
    newPointC = ggb1.instance.evalCommandGetLabels('(' + pointC + ')');
    newPointD = ggb1.instance.evalCommandGetLabels('(' + pointD + ')');
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

  if (ggbMin < -10) {
    ggb1.instance.setValue('min', ggbMin - 1);
  } else {
    ggb1.instance.setValue('min', -11);
  }

  if (ggbMax > 10) {
    ggb1.instance.setValue('max', ggbMax + 1);
  } else {
    ggb1.instance.setValue('max', 11);
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
