const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

utils.RTS.on("datachange", "slide-fea879b785b9", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const allPLines = ggb1.instance.getAllObjectNames("polyline");
  for (let i = 0, L = allPLines.length; i < L; i++) {
    ggb1.instance.deleteObject(allPLines[i]);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    /* doodles: [...ggb2.data.cmdStrings], */
    const { doodles } = data;
    for (let i = 0, L = doodles.length; i < L; i++) {
      const sketch = ggb1.instance.evalCommandGetLabels(doodles[i]);
      ggb1.instance.setFixed(sketch, false, false);
      ggb1.instance.setColor(sketch, 0, 0, 0);
    }
  });
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
{"compTotals":{"geogebra":1},"stage":"Learn","lessonInfo":"9 M3 TC L13 - Modeling Elevation as a Function of Time","teacherView":true,"layout":"one col"}
*/
