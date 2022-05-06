const { 
    textDisplay1,
    cc_submit_a2a8bf0840ec_button1: submitButton1,
    cc_sharewithclass_4914933fed71_textbox1: shareTextbox1,
    cc_sharewithclass_4914933fed71_input1: shareInput1,
    cc_sharewithclass_4914933fed71_button1: shareButton1,
    } = components;


    slide.on("firstload", () => {
        shareTextbox1.updateData({visible: false});
        shareInput1.updateData({visible: false});
        shareButton1.updateData({visible: false});

    });

    submitButton1.on('click', () => {
        shareTextbox1.updateData({visible: true});
        shareInput1.updateData({visible: true});
        shareButton1.updateData({visible: true});
      });


const id1 = "slide-4389c2cb7c20";

const id1PrevInput1 = getPrevInput(id1, "cc_submit_c89b3a130dc4_input1");
const id1PrevInput2 = getPrevInput(id1, "cc_submit_7f9d38442d9a_input1");

textDisplay1.updateData({
  text: `You said $${id1PrevInput1.data.text}$ and $${id1PrevInput2.data.text}$.`,
});

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

