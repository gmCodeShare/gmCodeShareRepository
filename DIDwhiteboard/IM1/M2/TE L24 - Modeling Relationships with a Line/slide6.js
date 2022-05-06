const {
  ggb1,
  cc_sharewithclass_a2ea3a488a68_textbox1: text2,
  cc_sharewithclass_a2ea3a488a68_input1: input1,
  cc_sharewithclass_a2ea3a488a68_button1: button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setValue("showPoints", false);
ggb1.instance.setValue("showSegments", false);
ggb1.instance.setValue("showRes", false);

utils.RTS.on("datachange", "slide-eb89dc46e780", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse();
  const { showProvided } = lastRegister[0].data;
  ggb1.instance.setValue("fake", showProvided);
});

utils.RTS.on("datachange", "slide-066820f92120", (register) => {
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
  }
});

utils.RTS.on("datachange", "slide-290b837ee12a", (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("data={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { num, num2, num3, num4, num5, num6 } = data;
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num + "," + num2 + ")))"
    );
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num3 + "," + num4 + ")))"
    );
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num5 + "," + num6 + ")))"
    );

    if (ggb1.instance.getValue("maxX") > 2700) {
      ggb1.instance.setValue("xMax", ggb1.instance.getValue("maxX") + 500);
    } else {
      ggb1.instance.setValue("xMax", 2700);
    }
    if (ggb1.instance.getValue("maxY") > 430) {
      ggb1.instance.setValue("yMax", ggb1.instance.getValue("maxY") + 500);
    } else {
      ggb1.instance.setValue("yMax", 430);
    }
  });
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
