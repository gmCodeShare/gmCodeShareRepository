const {
  ggb1,
  cc_submit_1847a2396fc7_textbox1: text1,
  cc_submit_1847a2396fc7_input1: input1,
  cc_submit_1847a2396fc7_button1: button1,
  cc_sharewithclass_0b60dd421c2f_textbox1: text2,
  cc_sharewithclass_0b60dd421c2f_input1: input2,
  cc_sharewithclass_0b60dd421c2f_button1: button2,
} = components;

ggb1.instance.setValue("state", 2);
ggb1.instance.setValue("slide8", true);
ggb1.instance.setErrorDialogsActive(false);

if (!getData("initialized")) {
  // set initial states
  ggb1.instance.evalCommand("SetConditionToShowObject(data, !fake)");
  ggb1.instance.evalCommand("SetConditionToShowObject(fakeData, fake)");
  const thingsToHide = ["A", "B", "f", "eq1", "eq2"];
  thingsToHide.forEach((obj) => {
    ggb1.instance.setVisible(obj, false);
  });
  ggb1.instance.setValue("fake", true);
  // save status
  saveData({ initialized: true });
}

const prevInput1 = getPrevInput(`slide-6c39a93a5e84`, "input1");
const equa = prevInput1.data.text;
createLineSafe(equa);
text1.updateData({
  text: `Here is the equation of your line from earlier: \n\n >$${equa}$ \n\n Identify the $y$-intercept.`,
});

function createLineSafe(inp) {
  ggb1.instance.evalLaTeX(`dummyObjectForThisCode: ${inp}`);
  ggb1.instance.setVisible("dummyObjectForThisCode", false);
  if (ggb1.instance.getObjectType("dummyObjectForThisCode") == "line") {
    ggb1.instance.evalLaTeX(`g: ${inp}`);
    ggb1.instance.setVisible("g", false);
    ggb1.instance.evalCommand("studentLine=g");
    ggb1.instance.setVisible("shortenedStudentLine", true);
  }
  ggb1.instance.deleteObject("dummyObjectForThisCode");
}

utils.RTS.on("datachange", "slide-e1dff8dbea5a", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse();
  const { showProvided } = lastRegister[0].data;
  ggb1.instance.setValue("fake", showProvided);
});

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

function getPrevInput(slideID, compName = "input1") {
  // find slide num of source
  const slideNum = ((slideId) => {
    if (
      typeof controls == "undefined" ||
      !controls.slidesNavigationData?.length
    ) {
      return "missing slide!";
    }
    let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
    return allIds.indexOf(slideId) + 1;
  })(slideID);
  // establish default in same data structure as original
  let defInput = {
    data: {
      text: "",
    },
  };
  // get previous data
  let prevInput = getFromSlide(slideID, compName, defInput) || defInput;
  // fill in other useful data
  prevInput.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
  prevInput.data.hasData = !!prevInput.data.text;
  prevInput.data.slideNum = slideNum;
  // set text values
  prevInput.data.text = prevInput.data.hasData
    ? prevInput.data.text
    : prevInput.data.goBackString;
  prevInput.data.flagText = prevInput.data.hasData
    ? ""
    : prevInput.data.goBackString;
  return { ...prevInput };
}
