const {
  text1,
  table1,
  text2,
  table2,
  feedback1,
  text3,
  cc_sharewithclass_15e17b5042a0_textbox1,
  cc_sharewithclass_15e17b5042a0_input1,
  cc_sharewithclass_15e17b5042a0_button1,
  cc_sharewithclass_15e17b5042a0_studentanswers1,
} = components;

let id1 = 'slide-e78173b36b94';
let id2 = 'slide-cc60d6c6e510';

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

let data1 = getFromSlide(id1, 'ggb1', false) || false;
let data2 = getFromSlide(id2, 'ggb1', false) || false;

let num1 =
  typeof data1.innerData == 'undefined' ||
  typeof data1.innerData['count'] == 'undefined'
    ? `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(id1)}\]}$`
    : data1.innerData['count'];

let num2 =
  typeof data2.innerData == 'undefined' ||
  typeof data1.innerData['count'] == 'undefined'
    ? `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(id2)}\]}$`
    : data2.innerData['count'];

table1.updateCell(0, 0, { value: num1 });
table2.updateCell(0, 0, { value: num2 });

/*
{"compTotals":{"textbox":4,"table":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TD L18 - Comparing Rates","teacherView":false,"layout":"two col"}
*/
