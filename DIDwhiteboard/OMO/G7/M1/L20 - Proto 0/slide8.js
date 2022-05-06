const {
  media1,
  cc_submit_bb0491568c39_button1: button1,
  cc_submit_bb0491568c39_textbox1: text1,
} = components;

media1.on("ready", ({ data: vid }) => {
  vid.time(10);
  button1.on("click", () => {
    button1.updateData({ disabled: true, text: "Submitted" });
    vid.play();
  });
  vid.bind("end", controls.next);
});

const prevInput = getPrevInput(
  "slide-5f351e3f7fc0",
  "cc_submit_b1b791c2fb51_input1"
);

const instructions = `Earlier, you said:

>${prevInput.data.text}

Do you think figure 3 is a scale drawing of figure 1? Explain.`;

text1.updateData({ text: instructions });

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
