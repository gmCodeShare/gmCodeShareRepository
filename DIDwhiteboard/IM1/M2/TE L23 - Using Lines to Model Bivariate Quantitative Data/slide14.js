const {
  ggb1,
  cc_submit_8dd0e0ddcf25_button1: button1,
  cc_submit_8dd0e0ddcf25_input1: input1,
  cc_submit_6f937afda708_textbox1: text2,
  cc_submit_6f937afda708_input1: input2,
  cc_submit_6f937afda708_button1: button2,
  cc_submit_c9856027bdbf_textbox1: text3,
  cc_submit_c9856027bdbf_input1: input3,
  cc_submit_c9856027bdbf_button1: button3,
} = components;

ggb1.instance.setValue("state", 2);
ggb1.instance.setErrorDialogsActive(false);

if (!getData("initialized")) {
  // set initial states
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  text3.updateData({ visible: false });
  input3.updateData({ visible: false });
  button3.updateData({ visible: false });
  ggb1.instance.setColor("shortenedStudentLine", 0, 0, 0);
  const thingsToShow = ["A", "B", "f"];
  thingsToShow.forEach((obj) => {
    ggb1.instance.evalCommand(`SetConditionToShowObject(${obj}, true)`);
    if (ggb1.instance.getObjectType(obj) === "point") {
      ggb1.instance.setCaption(obj, "$%v$");
      ggb1.instance.setPointSize(obj, 6);
      ggb1.instance.setLabelVisible(obj, true);
      ggb1.instance.setLabelStyle(obj, 3);
    }
  });
  // save status
  saveData({ initialized: true });
}

function showControlPoints(bool) {
  ggb1.instance.evalCommand(`SetConditionToShowObject(A, ${bool})`);
  ggb1.instance.evalCommand(`SetConditionToShowObject(B, ${bool})`);
}

button1.on("click", () => {
  ggb1.instance.evalLaTeX(`dummyObjectForThisCode: ${input1.data.text}`);
  ggb1.instance.setVisible("dummyObjectForThisCode", false);
  if (ggb1.instance.getObjectType("dummyObjectForThisCode") == "line") {
    ggb1.instance.evalLaTeX(`g: ${input1.data.text}`);
    ggb1.instance.setVisible("g", false);
    ggb1.instance.evalCommand("studentLine=g");
    ggb1.instance.setVisible("shortenedStudentLine", true);
    text2.updateData({ visible: true });
    input2.updateData({ visible: true });
    button2.updateData({ visible: true });
  }
  ggb1.instance.deleteObject("dummyObjectForThisCode");
  showControlPoints(false);
});

autorun(() => {
  const currentText = input1.data.text;
  if (currentText !== getData("currentText")) {
    showControlPoints(true);
  }
  saveData({ currentText });
});

button2.on("click", () => {
  text3.updateData({ visible: true });
  input3.updateData({ visible: true });
  button3.updateData({ visible: true });
});

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
