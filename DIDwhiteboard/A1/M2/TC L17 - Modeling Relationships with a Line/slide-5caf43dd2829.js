const { ggb1, feedback1 } = components;

ggb1.instance.setValue("state", 2);
ggb1.instance.setErrorDialogsActive(false);

// Retrieving information
utils.RTS.on("datachange", "slide-c9df07d05033", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  // the FLASH
  let allPoints = ggb1.instance
    .getAllObjectNames("point")
    .filter((point) => !point.includes("IG"));
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(allPoints[i]);
  }

  let allSegments = ggb1.instance.getAllObjectNames("segment");
  for (let i = 0, L = allSegments.length; i < L; i++) {
    ggb1.instance.deleteObject(allSegments[i]);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { pointA, pointB } = data;
    newPointA = ggb1.instance.evalCommandGetLabels("(" + pointA + ")");
    newPointB = ggb1.instance.evalCommandGetLabels("(" + pointB + ")");
    ggb1.instance.setVisible(newPointA, false);
    ggb1.instance.setVisible(newPointB, false);
    ggb1.instance.evalCommand("Segment(" + newPointA + ", " + newPointB + ")");
  });

  let newSegs = ggb1.instance.getAllObjectNames("segment");
  for (let i = 0, L = newSegs.length; i < L; i++) {
    ggb1.instance.setFixed(newSegs[i], false, false);
    ggb1.instance.setColor(newSegs[i], 0, 127, 175);
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
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M2 TC L17 - Modeling Relationships with a Line","teacherView":true,"layout":"one col"}
*/
