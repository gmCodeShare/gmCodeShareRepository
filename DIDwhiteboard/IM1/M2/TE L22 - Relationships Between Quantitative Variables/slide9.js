const {
  ggb1,
  ggb2,
  select1,
  buttonGroup1,
  cc_sharewithclass_016ac01e5ec3_textbox1: text2,
  cc_sharewithclass_016ac01e5ec3_input1: input1,
  cc_sharewithclass_016ac01e5ec3_button1: button1,
} = components;

ggb2.instance.setVisible("title", true);
ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
  ggb2.updateData({ visible: false });
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
  ggb1.updateData({ visible: true });
  ggb2.updateData({ visible: false });
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
});

autorun(() => {
  var optionArray = ["Positive because ", "Negative because "];
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
  ggb2.instance.setValue("fake", showProvided);
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
  let allPoints = ggb2.instance
    .getAllObjectNames("point")
    .filter((point) => !point.includes("IG"));
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb2.instance.deleteObject(allPoints[i]);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { pointA, pointB, pointC } = data;
    const newPointA = ggb2.instance.evalCommandGetLabels("(" + pointA + ")");
    const newPointB = ggb2.instance.evalCommandGetLabels("(" + pointB + ")");
    const newPointC = ggb2.instance.evalCommandGetLabels("(" + pointC + ")");
  });

  let newPoints = ggb2.instance.getAllObjectNames("point");
  let allXValues = [];
  let allYValues = [];
  for (let i = 0, L = newPoints.length; i < L; i++) {
    ggb2.instance.setFixed(newPoints[i], false, false);
    allXValues.push(ggb2.instance.getXcoord(newPoints[i]));
    allYValues.push(ggb2.instance.getYcoord(newPoints[i]));
  }

  let ggbXMax = Math.max(...allXValues);
  let ggbYMax = Math.max(...allYValues);

  if (ggbXMax > 2700) {
    ggb2.instance.setValue("xMax", ggbXMax + 50);
  } else {
    ggb2.instance.setValue("xMax", 2700);
  }
  if (ggbYMax > 430) {
    ggb2.instance.setValue("yMax", ggbYMax + 50);
  } else {
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
