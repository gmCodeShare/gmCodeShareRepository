const {
  ggb1,
  ggb2,
  separator1,
  buttonGroup1,
  feedback1,
  text1,
  select1,
  cc_sharewithclass_016ac01e5ec3_textbox1: text2,
  cc_sharewithclass_016ac01e5ec3_input1: input1,
  cc_sharewithclass_016ac01e5ec3_button1: button1,
  cc_sharewithclass_016ac01e5ec3_studentanswers1,
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
  var optionArray = ["Strong because ", "Weak because "];
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

utils.RTS.on("datachange", "slide-380d9e72741f", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);
  const prefs = lastRegister[0];
  ggb2.instance.setValue("fake", !!prefs.data?.showProvided);
});

utils.RTS.on("datachange", "slide-0f4cf0884e2b", (register) => {
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

/*
{"compTotals":{"geogebra":2,"separator":1,"buttongroup":1,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TC L15 - Relationships Between Quantitative Variables","teacherView":false,"layout":"two col"}
*/
