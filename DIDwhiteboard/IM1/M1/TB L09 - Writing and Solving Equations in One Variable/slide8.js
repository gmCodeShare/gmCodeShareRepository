const { ggb1, text1, fib1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("show7by7", false);
  ggb1.instance.setValue("show8by8", false);
  ggb1.instance.setValue("showBlank44", true);
  ggb1.instance.setValue("showTopRight", false);
  ggb1.instance.setValue("showTextTop", true);
  ggb1.instance.setValue("showTextRight", true);
  button1.updateData({
    align: "right",
    disabled: "true",
  });
});

button1.on("click", () => {
  ggb1.instance.setValue("show8by8", true);
  ggb1.instance.setValue("showBlank44", false);
  ggb1.instance.setValue("showTopRight", false);
  ggb1.instance.setValue("showTextTop", false);
  ggb1.instance.setValue("showTextRight", false);
  ggb1.instance.setVisible("noInputTop", false);
  ggb1.instance.setVisible("noInputRight", false);
  button1.updateData({ text: "Submitted", disabled: true });
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

const id1FIB = getPrevFIB("slide-5523a522ba51");

const gridVis = ggb1.instance.getValue("show8by8");

const top = id1FIB.getInput(0).text;
const right = id1FIB.getInput(1).text;

ggb1.instance.setTextValue("textTop", `${top}`);
ggb1.instance.setTextValue("textRight", `${right}`);

const id2ShareInput = getPrevInput(
  "slide-74d8f0053f10",
  "cc_sharewithclass_4d63f1083008_input1"
);

const prompt = `You wrote the equation $${id2ShareInput.data.text}$.`;

text1.updateData({ text: prompt });

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
  prevInput.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
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
