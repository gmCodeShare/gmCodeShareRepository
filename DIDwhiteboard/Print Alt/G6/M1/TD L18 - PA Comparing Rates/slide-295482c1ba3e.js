const { text1, table1, feedback1, separator1, text2, table2 } = components;

feedback1.updateData({ visible: false });
text1.updateData({ align: 'center' });
text2.updateData({ align: 'center' });
let id1 = 'slide-dd1f16402492';
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
    ? `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}$`
    : data1.innerData['count'];

let num2 =
  typeof data2.innerData == 'undefined' ||
  typeof data1.innerData['count'] == 'undefined'
    ? `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id2)}\]}$`
    : data2.innerData['count'];

table1.updateCell(0, 0, { value: num1 });
table2.updateCell(0, 0, { value: num2 });

/*
{"compTotals":{"textbox":3,"table":2,"separator":1},"stage":"Learn","lessonInfo":"6 M1 TD L18 - PA Comparing Rates","teacherView":true,"layout":"one col"}
*/
