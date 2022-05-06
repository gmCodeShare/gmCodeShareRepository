const { ggb1, text1, text2, button1, text3, input1, button2 } = components;

ggb1.instance.setErrorDialogsActive(false);

if (!getData("initialized")) {
  // set initial states
  ggb1.instance.evalCommand("SetConditionToShowObject(data, !fake)");
  ggb1.instance.evalCommand("SetConditionToShowObject(fakeData, fake)");
  ggb1.instance.setValue("fake", true);
  ggb1.instance.setValue("state", 1);
  button2.updateData({ align: "right" });
  ggb1.instance.setValue("fake", true);
  text2.updateData({ visible: false });
  text3.updateData({ visible: false });
  input1.updateData({ visible: false });
  button2.updateData({ visible: false });
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

button1.on("click", () => {
  text2.updateData({ visible: true });
  text3.updateData({ visible: true });
  input1.updateData({ visible: true });
  button2.updateData({ visible: true });
  button1.updateData({ disabled: true });
  const thingsToShow = ["A", "B"];
  thingsToShow.forEach((obj) => {
    ggb1.instance.setCaption(obj, "$%v$");
    // ggb1.instance.setPointSize(obj, 6);
    ggb1.instance.setLabelVisible(obj, true);
    ggb1.instance.setLabelStyle(obj, 3);
  });
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button2.updateData({ text: "Submit", disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button2.on("click", () => {
  ggb1.instance.evalLaTeX(`dummyObjectForThisCode: ${input1.data.text}`);
  ggb1.instance.setVisible("dummyObjectForThisCode", false);
  if (ggb1.instance.getObjectType("dummyObjectForThisCode") == "line") {
    ggb1.instance.evalLaTeX(`g: ${input1.data.text}`);
    ggb1.instance.setVisible("g", false);
    ggb1.instance.evalCommand("studentLine=g");
    ggb1.instance.setVisible("shortenedStudentLine", true);
    button2.updateData({ text: "Submitted", disabled: true });
  }
  ggb1.instance.deleteObject("dummyObjectForThisCode");
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
