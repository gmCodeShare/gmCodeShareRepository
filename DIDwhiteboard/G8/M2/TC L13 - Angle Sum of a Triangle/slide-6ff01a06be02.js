const {
  ggb1,
  feedback1,
  text1,
  text2,
  cc_sharewithclass_567bdeaf2e3b_textbox1,
  cc_sharewithclass_567bdeaf2e3b_input1,
  cc_sharewithclass_567bdeaf2e3b_button1,
  cc_sharewithclass_567bdeaf2e3b_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

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

const id1 = `slide-eca26d287f92`;
let num =
  getFromSlide(id1, `cc_submit_f0f5cb851922_input1.data.text`, false) || false;

if (!num) {
  num = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
  text1.updateData({
    text: `You said the following about the measures of $\\color{#DA291C}\\angle1$ and $\\color{#007FAF}\\angle4$:
      >$${num}$.`,
  });
} else {
  text1.updateData({
    text: `You said the following about the measures of $\\color{#DA291C}\\angle1$ and $\\color{#007FAF}\\angle4$:
      >${num}.`,
  });
}

const id2 = `slide-eca26d287f92`;
let num2 =
  getFromSlide(id2, `cc_sharewithclass_567bdeaf2e3b_input1.data.text`, false) ||
  false;

if (!num2) {
  num2 = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id2
  )}\]}$`;
  text2.updateData({
    text: `You said the following about the measures of $\\color{#DA291C}\\angle1$ and $\\color{#DA291C}\\angle5$:
     >$${num2}$.`,
  });
} else {
  text2.updateData({
    text: `You said the following about the measures of $\\color{#DA291C}\\angle1$ and $\\color{#DA291C}\\angle5$:
      >${num2}.`,
  });
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M2 TC L13 - Angle Sum of a Triangle","teacherView":false,"layout":"two col"}
*/
