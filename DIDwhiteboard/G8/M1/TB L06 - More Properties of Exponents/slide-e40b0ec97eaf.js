const {
  ggb1,
  feedback,
  cc_sharewithclass_9fa6af34a19d_textbox1: shareText1,
  cc_sharewithclass_9fa6af34a19d_input1: shareInput1,
  cc_sharewithclass_9fa6af34a19d_button1: shareButton1,
  cc_sharewithclass_9fa6af34a19d_studentanswers1,
} = components;

let ID1 = "slide-86c7fa5fe2a0";

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

ggb1.instance.setErrorDialogsActive(false);

let num1 =
  getFromSlide(ID1, "cc_sharewithclass_36ecab6799b8_input1.data.text", false) ||
  false;

if (!num1) {
  num1 = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    ID1
  )}\]}$`;
}

shareText1.updateData({
  text: `Earlier, you wrote $\\big(\\frac{x}{y}\\big)^n$ as $${num1}$.
  
  How can you verify your expression? Use the tool to explore this relationship.`,
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M1 TB L06 - More Properties of Exponents","teacherView":false,"layout":"two col"}
*/
