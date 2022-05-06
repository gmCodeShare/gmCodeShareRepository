const { ggb1, ggb2, buttonGroup1 } = components;

ggb1.instance.setValue("state", 2);
ggb2.instance.setValue("state", 2);
ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

if (!getData("initialized")) {
  // set initial states
  ggb1.instance.evalCommand("SetConditionToShowObject(data, !fake)");
  ggb1.instance.evalCommand("SetConditionToShowObject(fakeData, fake)");
  ggb1.instance.setValue("fake", true);
  ggb2.updateData({ visible: false });
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  ggb1.instance.deleteObject("text2");
  // save status
  saveData({ initialized: true });
}

utils.RTS.on("datachange", "slide-e1dff8dbea5a", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse();
  const { showProvided } = lastRegister[0].data;
  ggb1.instance.setValue("fake", showProvided);
});

const indexStartingInOne = 1;

function updateSingleButtonGroup(indexStartingInOne, data, buttonGroup1) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroup1.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data }; // Merge the single button data with the respective button using the index
    } else {
      newButtonGroupData[i] = bgButtons[i]; // Every other button remain the same
    }
  }
  buttonGroup1.updateData({ buttons: newButtonGroupData }); // Run updateData over buttons prop
}

buttonGroup1.on("click:1", () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  ggb1.updateData({ visible: true });
  ggb2.updateData({ visible: false });
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
});

utils.RTS.on("datachange", "slide-71075d08f8a6", (register) => {
  if (!register || !register.length) {
    return;
  }

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

utils.RTS.on("datachange", "slide-4c0089d01b35", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  let allPoints = ggb2.instance
    .getAllObjectNames("point")
    .filter((point) => !point.includes("I"));
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb2.instance.deleteObject(allPoints[i]);
  }

  let allSegments = ggb2.instance.getAllObjectNames("segment");
  for (let i = 0, L = allSegments.length; i < L; i++) {
    ggb2.instance.deleteObject(allSegments[i]);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { pointA, pointB } = data;
    newPointA = ggb2.instance.evalCommandGetLabels("(" + pointA + ")");
    newPointB = ggb2.instance.evalCommandGetLabels("(" + pointB + ")");
    ggb2.instance.setVisible(newPointA, false);
    ggb2.instance.setVisible(newPointB, false);
    ggb2.instance.evalCommand("Segment(" + newPointA + ", " + newPointB + ")");
  });

  let newSegs = ggb2.instance.getAllObjectNames("segment");
  for (let i = 0, L = newSegs.length; i < L; i++) {
    ggb2.instance.setFixed(newSegs[i], false, false);
  }
});

utils.RTS.on("datachange", "slide-28a7788bcedd", (register) => {
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

// library

function saveData(dataObj = {}, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataObj !== "object") {
    console.error(
      "saveData error: Parameters should be an object and a string!"
    );
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataName !== "string") {
    console.error("getData error: Parameters should both be strings!");
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}
