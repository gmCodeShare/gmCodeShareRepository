const { ggb1, text1, select1, fib1, button1 } = components;

// const id1 = "slide-77e773a2833f";
const id2 = "slide-fdc6a0bfd1eb";

if (!getData("initialized")) {
  // set initial states
  ggb1.instance.setValue("showPointLabels", true);
  fib1.setVisible(false);
  button1.updateData({ visible: false });
  button1.updateData({
    align: "right",
    disabled: "true",
  });
  // save status
  saveData({ initialized: true });
}

// const id1Input = getPrevInput(id1, "cc_sharewithclass_7b730b232fe2_input1");
const id2Input = getPrevFIB(id2, "fib2");

const text = `Here is your equation for $c^2$: \n\n > $c^2=${id2Input
  .getInput(0)
  .text.replace(
    /\$/g,
    ""
  )}$ \n\n Given that $c$ represents the length of the hypotenuse of the triangle, can $c$ be a negative number?`;
text1.updateData({ text });

select1.on("change", () => {
  fib1.setVisible(true);
  button1.updateData({ visible: true });
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});

// library

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
