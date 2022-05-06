const {
  ggb1,
  cc_submit_171e58faa011_textbox1: text1,
  cc_submit_171e58faa011_button1: button1,
  cc_sharewithclass_0b39da8dd26a_textbox1: text2,
  cc_sharewithclass_0b39da8dd26a_input1: input2,
  cc_sharewithclass_0b39da8dd26a_button1: button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

utils.RTS.on("datachange", "slide-d62db4215ff3", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse();
  const { showProvided } = lastRegister[0].data;
  ggb1.instance.setValue("fake", showProvided);
  makeRedPoint();
});

ggb1.instance.registerAddListener((a) => {
  if (ggb1.instance.getObjectType(a) !== "point") {
    return;
  }
  ggb1.instance.evalCommand(`SetConditionToShowObject(${a}, !fake)`);
  // patch for pokey red point
  if (a === "A") {
    makeRedPoint(true);
  }
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

  // check to see if we're using provided data
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { pointA, pointB, pointC } = data;
    const newPointA = ggb1.instance.evalCommandGetLabels("(" + pointA + ")");
    const newPointB = ggb1.instance.evalCommandGetLabels("(" + pointB + ")");
    const newPointC = ggb1.instance.evalCommandGetLabels("(" + pointC + ")");
  });

  let newPoints = ggb1.instance.getAllObjectNames("point");
  let allXValues = [];
  let allYValues = [];
  for (let i = 0, L = newPoints.length; i < L; i++) {
    ggb1.instance.setFixed(newPoints[i], false, false);
    ggb1.instance.setLayer(newPoints[i], 0);
    allXValues.push(ggb1.instance.getXcoord(newPoints[i]));
    allYValues.push(ggb1.instance.getYcoord(newPoints[i]));
  }

  let ggbXMax = Math.max(...allXValues);
  let ggbYMax = Math.max(...allYValues);

  if (ggbXMax > 2700) {
    ggb1.instance.setValue("xMax", ggbXMax + 50);
  } else {
    ggb1.instance.setValue("xMax", 2700);
  }
  if (ggbYMax > 430) {
    ggb1.instance.setValue("yMax", ggbYMax + 50);
  } else {
    ggb1.instance.setValue("yMax", 430);
  }
  makeRedPoint();
});

function makeRedPoint(preventNewPoint = false) {
  const relevantPoints = ggb1.instance
    .getAllObjectNames("point")
    .filter((point) => ggb1.instance.getVisible(point) && point !== "Acopy");
  if (!relevantPoints.length && !preventNewPoint) {
    ggb1.instance.evalCommand("A = (587,205)");
  }
  ggb1.instance.evalCommand("Acopy = A");
  ggb1.instance.setColor("Acopy", 218, 41, 28);
  ggb1.instance.setCaption("Acopy", "$%v$");
  ggb1.instance.setLabelVisible("Acopy", true);
  ggb1.instance.setLabelStyle("Acopy", 3);
  ggb1.instance.setLayer("Acopy", 3);
  let num = ggb1.instance.getXcoord("Acopy");
  let num2 = ggb1.instance.getYcoord("Acopy");
  ggb1.instance.evalCommand("SetConditionToShowObject(Acopy, true)");
  text1.updateData({
    text: `The red point on the graph has coordinates $(${num}, ${num2})$. What does this point represent?`,
  });
}

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
