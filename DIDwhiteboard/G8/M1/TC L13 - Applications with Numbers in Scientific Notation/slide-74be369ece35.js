const {
  cc_sharewithclass_5b4a1ec3ac8e_textbox1: shareText1,
  cc_sharewithclass_5b4a1ec3ac8e_input1: shareInput1,
  cc_sharewithclass_5b4a1ec3ac8e_button1: shareButton1,
  cc_sharewithclass_5b4a1ec3ac8e_studentanswers1,
  feedback,
} = components;

let ID1 = "slide-aa970e1d4a9f";

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

let moonStack = getFromSlide(ID1, "input1.data.text", false) || false;

if (!moonStack) {
  moonStack = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    ID1
  )}\]}$`;
}

shareText1.updateData({
  text: `You said it would take $${moonStack}$ dollar bills to make a stack from Earth to the moon.
  
  In February $2019$, the United States national debt was about  
  $22$ trillion dollars, or $2.2\\times10^{13}$ dollars.
  
  Make a comparison statement between the value of your Earth-to-moon stack and the national debt.`,
});

/*
{"compTotals":{"sharewithclass":1,"textbox":1},"stage":"Learn","lessonInfo":"8 M1 TC L13 - Applications with Numbers in Scientific Notation","teacherView":false,"layout":"one col"}
*/
