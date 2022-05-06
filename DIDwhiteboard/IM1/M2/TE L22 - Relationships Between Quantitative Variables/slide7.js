const { ggb1, ggb2, button1, button2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.updateData({ visible: false });
  button2.updateData({ visible: false });
});

button1.on("click", () => {
  ggb1.updateData({ visible: true });
  ggb2.updateData({ visible: false });
  button1.updateData({ visible: false });
  button2.updateData({ visible: true });
});

button2.on("click", () => {
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
  button2.updateData({ visible: false });
  button1.updateData({ visible: true });
});

utils.RTS.on("datachange", "slide-d62db4215ff3", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse();
  const { showProvided } = lastRegister[0].data;
  ggb1.instance.setValue("fake", showProvided);
  ggb2.instance.setValue("fake", showProvided);
});

ggb1.instance.registerAddListener((a) => {
  if (ggb1.instance.getObjectType(a) !== "point") {
    return;
  }
  ggb1.instance.evalCommand(`SetConditionToShowObject(${a}, !fake)`);
});

ggb2.instance.registerAddListener((a) => {
  if (ggb2.instance.getObjectType(a) !== "point") {
    return;
  }
  ggb2.instance.evalCommand(`SetConditionToShowObject(${a}, !fake)`);
});

// Retrieving information
utils.RTS.on("datachange", "slide-0f4cf0884e2b", (register) => {
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
  let allPoints2 = ggb2.instance
    .getAllObjectNames("point")
    .filter((point) => !point.includes("IG"));
  for (let i = 0, L = allPoints2.length; i < L; i++) {
    ggb2.instance.deleteObject(allPoints2[i]);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { pointA, pointB, pointC } = data;
    const newPointA = ggb1.instance.evalCommandGetLabels("(" + pointA + ")");
    const newPointB = ggb1.instance.evalCommandGetLabels("(" + pointB + ")");
    const newPointC = ggb1.instance.evalCommandGetLabels("(" + pointC + ")");
    const newPointA2 = ggb2.instance.evalCommandGetLabels("(" + pointA + ")");
    const newPointB2 = ggb2.instance.evalCommandGetLabels("(" + pointB + ")");
    const newPointC2 = ggb2.instance.evalCommandGetLabels("(" + pointC + ")");
  });

  let newPoints = ggb1.instance.getAllObjectNames("point");
  let newPoints2 = ggb2.instance.getAllObjectNames("point");
  let allXValues = [];
  let allYValues = [];
  for (let i = 0, L = newPoints.length; i < L; i++) {
    ggb1.instance.setFixed(newPoints[i], false, false);
    allXValues.push(ggb1.instance.getXcoord(newPoints[i]));
    allYValues.push(ggb1.instance.getYcoord(newPoints[i]));
  }
  for (let i = 0, L = newPoints2.length; i < L; i++) {
    ggb2.instance.setFixed(newPoints2[i], false, false);
  }

  let ggbXMax = Math.max(...allXValues);
  let ggbYMax = Math.max(...allYValues);

  if (ggbXMax > 2700) {
    ggb1.instance.setValue("xMax", ggbXMax + 50);
    ggb2.instance.setValue("xMax", ggbXMax + 50);
  } else {
    ggb1.instance.setValue("xMax", 2700);
    ggb2.instance.setValue("xMax", 2700);
  }
  if (ggbYMax > 430) {
    ggb1.instance.setValue("yMax", ggbYMax + 50);
    ggb2.instance.setValue("yMax", ggbYMax + 50);
  } else {
    ggb1.instance.setValue("yMax", 430);
    ggb2.instance.setValue("yMax", 430);
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
