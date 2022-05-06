const {
  table1,
  feedback1,
  cc_sharewithclass_e322b40afa63_textbox1: shareText1,
  cc_sharewithclass_e322b40afa63_input1: shareInput1,
  cc_sharewithclass_e322b40afa63_button1: shareButton1,
  cc_sharewithclass_e322b40afa63_studentanswers1: shareAnswers1,
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

const id1 = `slide-2ede02c9c86d`;

let response1 = getFromSlide(id1, 'radio1.data.selected', false) || false;
let response2 = getFromSlide(id1, 'radio2.data.selected', false) || false;

// console.log(response1);
// console.log(response2);

if (response1 === '0') {
  response1 = 'True';
} else if (response1 === '1') {
  response1 = 'False';
} else {
  response1 = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
}

if (response2 === '0') {
  response2 = 'True';
} else if (response2 === '1') {
  response2 = 'False';
} else {
  response2 = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
}

table1.updateCell(0, 2, { value: response1 });
table1.updateCell(1, 2, { value: response2 });

/*
{"compTotals":{"table":1,"textbox":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M2 TD L18 - Proving the Converse of the Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
