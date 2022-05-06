const {
  ggb1,
  cc_sharewithclass_4d63f1083008_textbox1: shareText1,
  cc_sharewithclass_4d63f1083008_input1: shareInput1,
  cc_sharewithclass_4d63f1083008_button1: shareButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("show7by7", false);
  ggb1.instance.setValue("show8by8", false);
  ggb1.instance.setValue("showBlank44", true);
  ggb1.instance.setValue("showTopRight", false);
  ggb1.instance.setValue("showTextTop", true);
  ggb1.instance.setValue("showTextRight", true);
});

const id1FIB = getPrevFIB("slide-5523a522ba51");

const top = id1FIB.getInput(0).text;
const right = id1FIB.getInput(1).text;

ggb1.instance.setTextValue("textTop", `${top}`);
ggb1.instance.setTextValue("textRight", `${right}`);

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
