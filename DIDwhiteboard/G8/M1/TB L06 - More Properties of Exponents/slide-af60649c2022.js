const {
  textDisplay1,
  ggb1,
  feedback,
  cc_sharewithclass_07c4c3127ba9_textbox1: shareText1,
  cc_sharewithclass_07c4c3127ba9_input1: shareInput1,
  cc_sharewithclass_07c4c3127ba9_button1: shareButton1,
  cc_sharewithclass_07c4c3127ba9_studentanswers1,
} = components;

let ID1 = "slide-c87414de8061";
let ID2 = "slide-9148135cd090";

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

//num1 = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum("slide-differentNumbers")}\]}$`

ggb1.instance.setErrorDialogsActive(false);

let prevEnd = getFromSlide(ID2, "ggb1.innerData.end", false) || false;

if (prevEnd) {
  ggb1.updateInnerData({ repeats: prevEnd });
}

let num1 =
  getFromSlide(ID1, "cc_sharewithclass_fda0a467ce03_input1.data.text", false) ||
  false;

if (!num1) {
  num1 = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    ID1
  )}\]}$`;
}

shareText1.updateData({
  text: `Earlier, you wrote $3^4\\cdot3^4\\cdot3^4\\cdot3^4\\cdot3^4\\cdot3^4\\cdot3^4\\cdot3^4\\cdot3^4$  
  as $${num1}$.
  
  Apply the properties of exponents to write an equivalent expression to $(3^4)^5$. Explain your reasoning.`,
});

/*
{"compTotals":{"textbox":2,"geogebra":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M1 TB L06 - More Properties of Exponents","teacherView":false,"layout":"two col"}
*/
