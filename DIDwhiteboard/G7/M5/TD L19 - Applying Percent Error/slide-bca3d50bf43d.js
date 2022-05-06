const {
  ggb1,
  text1,
  cc_sharewithclass_f70759b9e739_textbox1,
  cc_sharewithclass_f70759b9e739_input1,
  cc_sharewithclass_f70759b9e739_button1,
  cc_sharewithclass_f70759b9e739_studentanswers1,
} = components;

function getSlideNum(slideId) {
  if (
    typeof controls == 'undefined' ||
    !controls.slidesNavigationData?.length
  ) {
    return 'missing slide!';
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

const id1 = `slide-a61b2c9bc11b`;
let num = getFromSlide(id1, `input1.data.text`, '') || '';
let num1 = Math.abs(num - 1807);
if (!num) {
  num = `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  num1 = `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
}

text1.updateData({
  text: `Earlier, you estimated that the distance from Baton Rouge, LA, to Sacramento, CA, is $${num}$. The actual distance is $1,807$ miles. \n\nYou found the absolute error of your estimate to be $${num1}$.`,
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M5 TD L19 - Applying Percent Error (digital)","teacherView":false,"layout":"two col"}
*/
