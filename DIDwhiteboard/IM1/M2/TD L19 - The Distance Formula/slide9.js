const { ggb1, fib1, button1, fib2, button2, text1 } = components;

if (!getData("initialized")) {
  // set initial states
  ggb1.instance.setValue("showPointLabels", true);
  fib2.setVisible(false);
  text1.updateData({ visible: false });
  button1.updateData({ align: "right", disabled: true });
  button2.updateData({ align: "right", disabled: true, visible: false });
  // save status
  saveData({ initialized: true });
}

const prevFIB = getPrevFIB("slide-77e773a2833f", "fib1");

const secondPrompt = `Earlier, you entered this equation: \n\n > $c^2=${prevFIB
  .getInput(0)
  .text.replace(
    /\$/g,
    ""
  )}$ \n\n Use substitution to complete the equation to express $c^2$ in terms of $x_1$, $x_2$, $y_1$, and $y_2$.`;

text1.updateData({ text: secondPrompt });

fib1.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
  fib2.setVisible(true);
  button2.updateData({ visible: true });
  text1.updateData({ visible: true });
});

fib2.on("change", ({ values }) => {
  button2.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

button2.on("click", () => {
  button2.updateData({ text: "Submitted", disabled: true });
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

function getPrevFIB(slideID, compName = "fib1", inputs = 0) {
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
  let defFib = {
    data: { values: [] },
  };
  const prelimFib = getFromSlide(slideID, compName, defFib) || defFib;
  const numInputs = !!prelimFib.data?.values?.length
    ? prelimFib.data.values.length
    : inputs;
  for (let i = 0; i < numInputs; i++) {
    defFib.data.values.push({ text: "", inputType: "text" });
  }
  // get previous data
  let prevFib = getFromSlide(slideID, compName, defFib) || defFib;
  // check previous data, fill in useful data
  prevFib.data.hasData = prevFib.data.values.some(
    ({ text, inputType }) => !!text
  );
  prevFib.data.isComplete = prevFib.data.values.every(
    ({ text, inputType }) => !!text
  );
  prevFib.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
  prevFib.data.slideNum = slideNum;
  prevFib.data.flagText = prevFib.data.isComplete
    ? ""
    : prevFib.data.goBackString;
  // add some useful methods
  prevFib.getInput = function (position, leaveBlanks = false) {
    const emptyVal = leaveBlanks ? "" : this.data.goBackString;
    let text = this.data?.values?.[position]?.text
      ? this.data.values[position].text
      : emptyVal;
    return { ...this.data.values[position], text };
  };
  return { ...prevFib };
}
