const {
  cc_submit_b421eec4a142_textbox1: submitText1,
  cc_submit_b421eec4a142_input1: submitInput1,
  cc_submit_b421eec4a142_button1: submitButton1,
  separator4,
  cc_sharewithclass_9d4f7fa9c547_textbox1: shareText1,
  cc_sharewithclass_9d4f7fa9c547_input1: shareInput1,
  cc_sharewithclass_9d4f7fa9c547_button1: shareButton1,
  cc_sharewithclass_9d4f7fa9c547_studentanswers1,
  feedback,
} = components;

const safeRound = 13;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

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

const id = 'slide-e86dfdf5fbdc';
const prevInner = getFromSlide(id, 'ggb1.innerData', false) || false;
let range;
if (prevInner) {
  const low = round(prevInner['lowEnd'], safeRound);
  const high = round(prevInner['highEnd'], safeRound);
  range = `between $${low}$ and $${high}$`;
} else {
  range = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
}
submitText1.updateData({
  text: `You said that the value of $\\pi$ is ${range}.

What does that mean about the value of $\\pi^2$?`,
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

/*
{"compTotals":{"submit":1,"separator":1,"sharewithclass":1,"textbox":1},"stage":"Learn","lessonInfo":"8 M1 TE L21 - Approximate Values of Roots and π²","teacherView":false,"layout":"one col"}
*/
