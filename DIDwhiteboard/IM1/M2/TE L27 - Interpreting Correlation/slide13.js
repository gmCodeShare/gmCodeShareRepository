const {
  ggb1,
  ggb2,
  cc_sharewithclass_5945554ff6a5_textbox1: shareText1,
  cc_sharewithclass_5945554ff6a5_input1: shareInput1,
  cc_sharewithclass_5945554ff6a5_button1: shareButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

function getSlideNum(slideId) {
  if (
    typeof controls == "undefined" ||
    !controls.slidesNavigationData?.length
  ) {
    return "missing slide!";
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

autorun(() => {
  let rValue = ggb2.innerData["r"]; //this just makes it so the autorun fires when the point is moved - there may be a better way
  ggb1.instance.setValue("r", ggb2.instance.getValue("r"));
});

const id1 = "slide-e3f92c1f145b";
let studentInput =
  getFromSlide(id1, "cc_sharewithclass_4f50d6f4b87e_input1.data.text", "") ||
  "";
if (!studentInput) {
  studentInput = `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
}

shareText1.updateData({
  text: `This is what you thought the value of $r$ represented earlier in this activity:
  
>${studentInput}
  
Refine your statement to include any new thoughts about the value of $r$.`,
});
