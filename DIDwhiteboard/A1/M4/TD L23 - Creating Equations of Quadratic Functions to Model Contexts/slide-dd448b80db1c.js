const {
  text1,
  cc_submit_7855ac1de91d_textbox1: text2,
  cc_submit_7855ac1de91d_input1,
  cc_submit_7855ac1de91d_button1,
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

const id1 = `slide-08abfceb4a95`;
let equa =
  getFromSlide(id1, `cc_sharewithclass_895a8bb3acfc_input1.data.text`, "") ||
  "";

const id2 = `slide-241826208231`;
let estimate =
  getFromSlide(id2, `cc_sharewithclass_895a8bb3acfc_input1.data.text`, "") ||
  "";

if (!equa || equa == "R(x)=") {
  equa = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  text1.updateData({ text: `$${equa}$` });
} else {
  text1.updateData({ text: `$${equa}$` });
}

if (!estimate || estimate == "$") {
  estimate = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id2
  )}\]}`;
  text2.updateData({
    text: `You predicted that a service charge of $${estimate}$ would maximize the revenue. What is the actual charge for services that will maximize the revenue? How close were you?`,
  });
} else {
  text2.updateData({
    text: `You predicted that a service charge of $${estimate}$ would maximize the revenue. What is the actual charge for services that will maximize the revenue? How close were you?`,
  });
}

/*
{"compTotals":{"textbox":2,"submit":1},"stage":"Learn","lessonInfo":"9 M4 TD L23 - Creating Equations of Quadratic Functions to Model Contexts","teacherView":false,"layout":"one col"}
*/
