const {
  text1,
  cc_sharewithclass_209ad9b8791c_textbox1: shareText1,
  cc_sharewithclass_209ad9b8791c_input1: shareInput1,
  cc_sharewithclass_209ad9b8791c_button1: shareButton1,
  cc_sharewithclass_209ad9b8791c_studentanswers1,
} = components;

let id1 = 'slide-6519f4b8ecbe';

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

let represent = getFromSlide(id1, 'radio1.data.selected', false) || false;

let repArray = ['graph', 'table', 'double numberline'];

let repName = represent
  ? repArray[parseInt(represent)]
  : `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}$`;

text1.updateData({
  text: `Originally you chose a ${repName} as the most helpful representation for comparing ratio relationships.`,
});

/*
{"compTotals":{"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TC L12 - Multiple Ratio Relationships","teacherView":false,"layout":"one col"}
*/
