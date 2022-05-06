const {
  ggb1,
  ggb2,
  buttonGroup1,
  select1,
  cc_sharewithclass_54441dfadd42_textbox1: text2,
  cc_sharewithclass_54441dfadd42_input1: input1,
  cc_sharewithclass_54441dfadd42_button1: button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

if (!getData("initialized")) {
  // set initial states
  ggb1.instance.evalCommand("SetConditionToShowObject(data, !fake)");
  ggb1.instance.evalCommand("SetConditionToShowObject(fI, !fake)");
  ggb1.instance.evalCommand("SetConditionToShowObject(fakeData, fake)");
  ggb1.instance.evalCommand("SetConditionToShowObject(fakeLine, fake)");
  ggb2.instance.evalCommand("SetConditionToShowObject(data, !fake)");
  ggb2.instance.evalCommand("SetConditionToShowObject(shortenedLine, !fake)");
  ggb2.instance.evalCommand("SetConditionToShowObject(fakeData, fake)");
  ggb2.instance.evalCommand("SetConditionToShowObject(fakeLine, fake)");
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
  ggb2.instance.setValue("fake", showProvided);
});

let choiceVal;

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
  if (select1.data.selected) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace(".", ","); // in this example, the choices ended with periods
      select1.updateData({ last: select1.data.selected });
    }
  }
  if (select1.data.selected == 0) {
    choiceVal = 1;
  }
  if (select1.data.selected == 1) {
    choiceVal = 2;
  }
  // console.log(choiceVal);
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-74ce23520a2c", {
      choiceVal,
    });
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
    ggb2.instance.evalCommand(
      "SetValue(data,Append(data,(" + num + "," + num2 + ")))"
    );
    ggb2.instance.evalCommand(
      "SetValue(data,Append(data,(" + num3 + "," + num4 + ")))"
    );
    ggb2.instance.evalCommand(
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
