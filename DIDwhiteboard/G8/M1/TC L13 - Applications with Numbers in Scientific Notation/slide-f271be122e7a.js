const { text1, textDisplay1, fillInTheBlank1, feedback } = components;

let ID1 = "slide-0bf2bd9c6324";

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

let breaths = getFromSlide(ID1, "input1.data.text", false) || false;

if (!breaths) {
  breaths = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    ID1
  )}\]}$`;
}

text1.updateData({
  text: `You said it would take $${breaths}$ breaths of $3.6\\times10^{−3}$ cubic meters to reach the goal of $3.6\\times10^{0}$ cubic meters.`,
});

/*
{"compTotals":{"textbox":3,"fillblank":1},"stage":"Learn","lessonInfo":"8 M1 TC L13 - Applications with Numbers in Scientific Notation","teacherView":false,"layout":"one col"}
*/
