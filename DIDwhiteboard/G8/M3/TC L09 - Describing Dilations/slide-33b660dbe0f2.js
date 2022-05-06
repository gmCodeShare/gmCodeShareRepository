const {
  ggb1,
  separator4,
  text1,
  button1,
  feedback1,
  text2,
  separator2,
  cc_submit_0b500ceec5d0_textbox1: submitText1,
  cc_submit_0b500ceec5d0_input1: submitInput1,
  cc_submit_0b500ceec5d0_button1: submitButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

// const Home1 = [-2, 0.67];
const slideId = 'slide-040f66a0bd37';
let oldScale;
const prevInner = getFromSlide(slideId, 'ggb1.innerData', false) || false;
if (prevInner) {
  const [x, y] = prevInner['O'];
  oldScale = prevInner['r'];
  ggb1.instance.setCoords('P', x, y);
  // ggb1.instance.setFixed("O", false, false);
  ggb1.instance.setValue('oldR', oldScale);
  oldScale = prevInner['scaleText'].replaceAll(' ', '');
  ggb1.instance.setValue('snapping', true);
} else {
  oldScale = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    slideId
  )}\]}`;
  // ggb1.instance.setCoords("P", ...Home1);
  // ggb1.instance.setCoords(
  //   "P",
  //   ggb1.instance.getXcoord("Home1"),
  //   ggb1.instance.getYcoord("Home1")
  // );
}

slide.on('firstload', () => {
  // ggb1.instance.setValue("showTri", true);
  button1.updateData({ disabled: true });
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
  ggb1.instance.setVisible('P', true);
  // ggb1.instance.setValue("forward", false);
});

text2.updateData({
  text: `You chose a scale factor of $${oldScale}$. $O$ is your original center.

  Map the image back onto its figure.`,
});

autorun(() => {
  const GGBstring = ggb1.innerData['scaleText'].replaceAll(' ', '');
  text1.updateData({
    text: `$\\color{823F98} \\text{Scale Factor: } ${GGBstring}$`,
  });
});

// submitButton1.on("click", () => {
//   button1.updateData({ visible: true });
//   text2.updateData({ visible: true });
// });

button1.on('click', () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  submitText1.updateData({ visible: true });
  submitInput1.updateData({ visible: true });
  submitButton1.updateData({ visible: true });
  button1.updateData({ disabled: true });
});

function refresh() {
  button1.updateData({ disabled: false });
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
}

ggb1.instance.registerObjectUpdateListener('O', refresh);

ggb1.instance.registerObjectUpdateListener('chosen', refresh);

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

/*
{"compTotals":{"geogebra":1,"separator":2,"textbox":3,"button":1,"submit":1},"stage":"Learn","lessonInfo":"8 M3 TC L09 - Describing Dilations","teacherView":false,"layout":"two col"}
*/
