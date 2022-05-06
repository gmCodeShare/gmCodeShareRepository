const {
  ggb1,
  feedback1,
  cc_sharewithclass_6cd41e2a649c_textbox1: shareText1,
  cc_sharewithclass_6cd41e2a649c_input1,
  cc_sharewithclass_6cd41e2a649c_button1,
  cc_sharewithclass_6cd41e2a649c_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

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

const id = `slide-d7b277b63b6a`;
let num = getFromSlide(id, `input1.data.text`, false) || false;
let num2 = getFromSlide(id, `input2.data.text`, false) || false;

if (!num) {
  num = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(id)}\]}$`;
}

if (!num2) {
  num2 = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
}

shareText1.updateData({
  text: `We can work with one constraint at a time.\n\nEarlier, you said that $${num2}$$\\degree$$\\text{F}$ is $3$ times as much as $${num}$$\\degree$$\\text{F}$.\n\nHow do the point’s coordinates relate to the temperatures you chose?`,
});

if (num && num2) {
  ggb1.instance.setVisible("Slide4Point", true);
  ggb1.instance.setValue("slide4X", num);
  ggb1.instance.setValue("slide4Y", num2);
  let nums = [num, num2];
  let ggbMin = Math.min(...nums);
  let ggbMax = Math.max(...nums);

  if (ggbMin < -4) {
    ggb1.instance.setValue("min", ggbMin - 2);
  } else {
    ggb1.instance.setValue("min", -4.8);
  }

  if (ggbMax > 15 && ggbMin >= -4) {
    ggb1.instance.setValue("max", ggbMax + 2);
    ggb1.instance.setValue("min", -0.15 * ggbMax);
  }
  if (ggbMax > 15 && ggbMin < -4) {
    ggb1.instance.setValue("max", ggbMax + 2);
  }
  if (ggbMax < 15) {
    ggb1.instance.setValue("max", 16);
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M5 TA L02 - Introduction to Systems of Linear Equations","teacherView":false,"layout":"two col"}
*/
