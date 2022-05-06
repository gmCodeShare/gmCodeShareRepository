const {
  ggb1,
  feedback1,
  text1,
  text2,
  cc_sharewithclass_2813a576d9f4_textbox1,
  cc_sharewithclass_2813a576d9f4_input1,
  cc_sharewithclass_2813a576d9f4_button1,
  cc_sharewithclass_2813a576d9f4_studentanswers1,
} = components;

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

ggb1.instance.setVisible("Slide17Point", true);
ggb1.instance.setValue("slide17", true);
ggb1.instance.setErrorDialogsActive(false);

const id = `slide-bec103dbf257`;
let choiceData = getFromSlide(id, "select1", false) || false;
let choiceNum = choiceData.data?.selected;

if (!choiceNum) {
  text1.updateData({
    text: `You said that the point $(-5,3)$ is $\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}$.`,
  });
}
if (choiceNum === "0") {
  text1.updateData({
    text: "You said that the point $(-5,3)$ is on only the line represented by $x+y=-2$.",
  });
}
if (choiceNum === "1") {
  text1.updateData({
    text: "You said that the point $(-5,3)$ is on only the line represented by $3x-y=-15$.",
  });
}
if (choiceNum === "2") {
  text1.updateData({
    text: "You said that the point $(-5,3)$ is on both lines.",
  });
}
if (choiceNum === "3") {
  text1.updateData({
    text: "You said that the point $(-5,3)$ is on neither line.",
  });
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M5 TA L02 - Introduction to Systems of Linear Equations","teacherView":false,"layout":"two col"}
*/
