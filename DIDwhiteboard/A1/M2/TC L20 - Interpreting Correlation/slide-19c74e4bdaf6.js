const { ggb1, feedback } = components;

ggb1.instance.setAxisLabels(1, "$\\mathit{r}$");

ggb1.instance.setErrorDialogsActive(false);

utils.RTS.on("datachange", "slide-de266d0d66c4", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  // the FLASH
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let allSegments = ggb1.instance.getAllObjectNames("segment");
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(allPoints[i]);
  }
  for (let i = 0, L = allSegments.length; i < L; i++) {
    ggb1.instance.deleteObject(allSegments[i]);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { pointA, pointB } = data;
    newPointA = ggb1.instance.evalCommandGetLabels("(" + pointA + ")");
    newPointB = ggb1.instance.evalCommandGetLabels("(" + pointB + ")");
    newSegment = ggb1.instance.evalCommandGetLabels(
      "Segment(" + newPointA + "," + newPointB + ")"
    );
    ggb1.instance.setColor(newPointA, 0, 127, 175);
    ggb1.instance.evalCommand("SetPointStyle(" + newPointA + ", 7)");
    ggb1.instance.setFixed(newPointA, false, false);
    ggb1.instance.setColor(newPointB, 0, 127, 175);
    ggb1.instance.evalCommand("SetPointStyle(" + newPointB + ", 7)");
    ggb1.instance.setFixed(newPointB, false, false);
  });
  let newSegments = ggb1.instance.getAllObjectNames("segment");
  for (let i = 0, L = newSegments.length; i < L; i++) {
    ggb1.instance.setFixed(newSegments[i], false, false);
    ggb1.instance.setColor(newSegments[i], 0, 127, 175);
  }
  let newPoints = ggb1.instance.getAllObjectNames("point");
  let allValues = [];
  for (let i = 0, L = newPoints.length; i < L; i++) {
    allValues.push(ggb1.instance.getXcoord(newPoints[i]));
  }
  let ggbMin = Math.min(...allValues);
  let ggbMax = Math.max(...allValues);
  if (ggbMin < -2) {
    ggb1.instance.setValue("min", ggbMin - 1);
  } else {
    ggb1.instance.setValue("min", -2);
  }
  if (ggbMax > 2) {
    ggb1.instance.setValue("max", ggbMax + 1);
  } else {
    ggb1.instance.setValue("max", 2);
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
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M2 TC L20 - Interpreting Correlation","teacherView":true,"layout":"one col"}
*/
