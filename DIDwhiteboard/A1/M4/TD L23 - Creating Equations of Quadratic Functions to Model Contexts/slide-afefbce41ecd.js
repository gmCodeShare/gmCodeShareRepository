const {
  text1,
  cc_submit_7855ac1de91d_textbox1,
  cc_submit_7855ac1de91d_input1,
  cc_submit_7855ac1de91d_button1: button1,
  separator2,
  cc_sharewithclass_be9d37b126c2_textbox1: text3,
  cc_sharewithclass_be9d37b126c2_input1: input2,
  cc_sharewithclass_be9d37b126c2_button1: button2,
  cc_sharewithclass_be9d37b126c2_studentanswers1,
  feedback1,
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

slide.on("firstload", () => {
  text3.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

const id = `slide-08abfceb4a95`;
let equa =
  getFromSlide(id, `cc_sharewithclass_895a8bb3acfc_input1.data.text`, "") || "";

if (!equa || equa == "R(x)=") {
  equa = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id)}\]}`;
  text1.updateData({ text: `$${equa}$` });
} else {
  text1.updateData({ text: `$${equa}$` });
}

button1.on("click", () => {
  text3.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":2,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M4 TD L23 - Creating Equations of Quadratic Functions to Model Contexts","teacherView":false,"layout":"one col"}
*/
