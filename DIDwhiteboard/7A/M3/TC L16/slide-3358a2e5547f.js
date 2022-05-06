const {
  text1,
  ggb1,
  feedback1,
  table1,
  cc_sharewithclass_86543d656bd1_textbox1: shareText1,
  cc_sharewithclass_86543d656bd1_input1: shareInput1,
  cc_sharewithclass_86543d656bd1_button1: shareButton1,
  cc_sharewithclass_86543d656bd1_studentanswers1: shareAnswers1,
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

slide.on("firstload", () => {
  ggb1.instance.setValue("aMoved", true);
  ggb1.instance.setValue("bMoved", true);
  ggb1.instance.setValue("showAngle", true);
  ggb1.instance.setValue("showHyp2", true);
  ggb1.instance.setValue("showHyp2Text", true);
  ggb1.instance.setValue("showTriText", true);
  // components.feedback1.updateData({ visible: false });
});

const id = `slide-8adc20bd3080`;
let response1 =
  getFromSlide(id, "cc_submit_d9ff9e8ef7af_input1.data.text", false) || false;
let response2 =
  getFromSlide(id, "cc_sharewithclass_86543d656bd1_input1.data.text", false) ||
  false;

if (!response1) {
  response1 = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
}

if (!response2) {
  response2 = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
}

table1.updateCell(0, 1, { value: response1 });
table1.updateCell(1, 1, { value: response2 });

/*
{"compTotals":{"textbox":2,"geogebra":1,"table":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M2 TD L18 - Proving the Converse of the Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
