const {
  text1,
  text2,
  feedback,
  cc_sharewithclass_fc39568b10ab_textbox1,
  cc_sharewithclass_fc39568b10ab_input1,
  cc_sharewithclass_fc39568b10ab_button1,
  cc_sharewithclass_fc39568b10ab_studentanswers1,
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

const id = 'slide-b58c00990740';
let detail = getFromSlide(id, 'text2.data.text', '') || '';

if (!detail) {
  detail = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
}

text2.updateData({ text: `Your detail: \n\n * ${detail}` });

/*
{"compTotals":{"textbox":3,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M4 TB L11 - Planning a Trip","teacherView":false,"layout":"two col"}
*/
