const { ggb2, ggb3, separator1, buttonGroup1, ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb3.instance.setErrorDialogsActive(false);
ggb2.instance.setValue("fake", true);
ggb3.instance.setValue("fake", true);

slide.on("firstload", () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  ggb3.updateData({ visible: false });
});

// let choiceData = getFromSlide(`slide-74ce23520a2c`, "select1");
// let choiceNum = choiceData.data.selected;

utils.RTS.on("datachange", "slide-1c80a58b9dc4", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);
  const prefs = lastRegister[0];
  ggb2.instance.setValue("fake", !!prefs.data?.showProvided);
  ggb3.instance.setValue("fake", !!prefs.data?.showProvided);
});

utils.RTS.on("datachange", "slide-74ce23520a2c", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse();
  let yesCount = 0;
  let noCount = 0;
  lastRegister.forEach(({ data, info }) => {
    const { choiceVal } = data;
    if (choiceVal == 1) {
      yesCount++;
    } else if (choiceVal == 2) {
      noCount++;
    }
  });
  ggb1.instance.setValue("yesBarHeight", yesCount);
  ggb1.instance.setValue("noBarHeight", noCount);
});

utils.RTS.on("datachange", "slide-28a7788bcedd", (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb2.instance.evalCommand("data={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { num, num2, num3, num4, num5, num6 } = data;
    ggb2.instance.evalCommand(
      "SetValue(data,Append(data,(" + num + "," + num2 + ")))"
    );
    ggb2.instance.evalCommand(
      "SetValue(data,Append(data,(" + num3 + "," + num4 + ")))"
    );
    ggb2.instance.evalCommand(
      "SetValue(data,Append(data,(" + num5 + "," + num6 + ")))"
    );
    ggb3.instance.evalCommand(
      "SetValue(data,Append(data,(" + num + "," + num2 + ")))"
    );
    ggb3.instance.evalCommand(
      "SetValue(data,Append(data,(" + num3 + "," + num4 + ")))"
    );
    ggb3.instance.evalCommand(
      "SetValue(data,Append(data,(" + num5 + "," + num6 + ")))"
    );

    if (ggb2.instance.getValue("maxX") > 2700) {
      ggb2.instance.setValue("xMax", ggb2.instance.getValue("maxX") + 500);
    } else {
      ggb2.instance.setValue("xMax", 2700);
    }
    if (ggb2.instance.getValue("maxY") > 430) {
      ggb2.instance.setValue("yMax", ggb2.instance.getValue("maxY") + 500);
    } else {
      ggb2.instance.setValue("yMax", 430);
    }

    if (ggb3.instance.getValue("maxX") > 2700) {
      ggb3.instance.setValue("xMax", ggb3.instance.getValue("maxX") + 500);
    } else {
      ggb3.instance.setValue("xMax", 2700);
    }
    if (ggb3.instance.getValue("maxY") > 430) {
      ggb3.instance.setValue("yMax", ggb3.instance.getValue("maxY") + 500);
    } else {
      ggb3.instance.setValue("yMax", 430);
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
  ggb2.updateData({ visible: true });
  ggb3.updateData({ visible: false });
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb2.updateData({ visible: false });
  ggb3.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":3,"separator":1,"buttongroup":1,"textbox":1},"stage":"Launch","lessonInfo":"9 M2 TC L16 - Using Lines to Model Bivariate Quantitative Data","teacherView":true,"layout":"two col"}
*/
