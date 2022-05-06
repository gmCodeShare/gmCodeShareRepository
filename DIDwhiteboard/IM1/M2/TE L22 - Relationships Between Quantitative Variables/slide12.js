const {
  ggb1,
  ggb2,
  ggb3,
  buttonGroup1,
  select1,
  cc_sharewithclass_2fb066fd6215_textbox1: text2,
  cc_sharewithclass_2fb066fd6215_input1: input1,
  cc_sharewithclass_2fb066fd6215_button1: button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb3.instance.setErrorDialogsActive(false);
ggb1.instance.setVisible("title", true);
ggb2.instance.setVisible("title", true);
ggb3.instance.setVisible("title", true);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
  ggb2.updateData({ visible: false });
  ggb3.updateData({ visible: false });
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
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
  updateSingleButtonGroup(3, { disabled: false }, buttonGroup1);
  ggb1.updateData({ visible: true });
  ggb2.updateData({ visible: false });
  ggb3.updateData({ visible: false });
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(3, { disabled: false }, buttonGroup1);
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
  ggb3.updateData({ visible: false });
});

buttonGroup1.on("click:3", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(3, { disabled: true }, buttonGroup1);
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: false });
  ggb3.updateData({ visible: true });
});

autorun(() => {
  var optionArray = [
    "Airline A data set because ",
    "Airline B data set because ",
    "Class data set because ",
  ];
  if (select1.data.selected) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace(".", ","); // in this example, the choices ended with periods
      input1.updateData({ text: optionArray[select1.data.selected] });
      select1.updateData({ last: select1.data.selected });
    }
  }
});

utils.RTS.on("datachange", "slide-d62db4215ff3", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse();
  const { showProvided } = lastRegister[0].data;
  ggb3.instance.setValue("fake", showProvided);
});

ggb3.instance.registerAddListener((a) => {
  if (ggb3.instance.getObjectType(a) !== "point") {
    return;
  }
  ggb3.instance.evalCommand(`SetConditionToShowObject(${a}, !fake)`);
});

// Retrieving information
utils.RTS.on("datachange", "slide-0f4cf0884e2b", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  // the FLASH
  let allPoints = ggb3.instance
    .getAllObjectNames("point")
    .filter((point) => !point.includes("IG"));
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb3.instance.deleteObject(allPoints[i]);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { pointA, pointB, pointC } = data;
    const newPointA = ggb3.instance.evalCommandGetLabels("(" + pointA + ")");
    const newPointB = ggb3.instance.evalCommandGetLabels("(" + pointB + ")");
    const newPointC = ggb3.instance.evalCommandGetLabels("(" + pointC + ")");
  });

  let newPoints = ggb3.instance.getAllObjectNames("point");
  let allXValues = [];
  let allYValues = [];
  for (let i = 0, L = newPoints.length; i < L; i++) {
    ggb3.instance.setFixed(newPoints[i], false, false);
    allXValues.push(ggb3.instance.getXcoord(newPoints[i]));
    allYValues.push(ggb3.instance.getYcoord(newPoints[i]));
  }

  let ggbXMax = Math.max(...allXValues);
  let ggbYMax = Math.max(...allYValues);

  if (ggbXMax > 2700) {
    ggb3.instance.setValue("xMax", ggbXMax + 50);
  } else {
    ggb3.instance.setValue("xMax", 2700);
  }
  if (ggbYMax > 430) {
    ggb3.instance.setValue("yMax", ggbYMax + 50);
  } else {
    ggb3.instance.setValue("yMax", 430);
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
