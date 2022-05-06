const {
  table1,
  ggb1,
  feedback1,
  text1,
  button1,
  separator1,
  cc_sharewithclass_2097292f0d52_textbox1: shareText1,
  cc_sharewithclass_2097292f0d52_input1: shareInput1,
  cc_sharewithclass_2097292f0d52_button1: shareButton1,
  cc_sharewithclass_2097292f0d52_studentanswers1: shareAnswers1,
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

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    table1.updateData({ storedCell31: '' });
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    shareAnswers1.updateData({ visible: false });
    ggb1.instance.setValue('picSet', 2);
    ggb1.instance.setValue('picWidth1', 5);
    ggb1.instance.setValue('scaleFactor', 0.5);
    ggb1.instance.setValue('clickCount', 102);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

components.cc_sharewithclass_2097292f0d52_button1.updateData({
  align: 'right',
});
const id1 = 'slide-c0de9a71c8d8';

let cell00 = getFromSlide(id1, 'table1.data.cell00', '') || '';
let cell01 = getFromSlide(id1, 'table1.data.cell01', '') || '';
let cell10 = getFromSlide(id1, 'table1.data.cell10', '') || '';
let cell11 = getFromSlide(id1, 'table1.data.cell11', '') || '';
let cell20 = getFromSlide(id1, 'table1.data.cell20', '') || '';
let cell21 = getFromSlide(id1, 'table1.data.cell21', '') || '';

// let cell00 = getFromSlide("slide-c0de9a71c8d8", "table1.data.cell00");
// let cell01 = getFromSlide("slide-c0de9a71c8d8", "table1.data.cell01");
// let cell10 = getFromSlide("slide-c0de9a71c8d8", "table1.data.cell10");
// let cell11 = getFromSlide("slide-c0de9a71c8d8", "table1.data.cell11");
// let cell20 = getFromSlide("slide-c0de9a71c8d8", "table1.data.cell20");
// let cell21 = getFromSlide("slide-c0de9a71c8d8", "table1.data.cell21");

if (!cell00) {
  cell00 = `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
}
if (!cell01) {
  cell01 = `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
}
if (!cell10) {
  cell10 = `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
}
if (!cell11) {
  cell11 = `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
}
if (!cell20) {
  cell20 = `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
}
if (!cell21) {
  cell21 = `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
}

table1.updateCell(0, 0, { value: cell00 });
table1.updateCell(0, 1, { value: cell01 });
table1.updateCell(1, 0, { value: cell10 });
table1.updateCell(1, 1, { value: cell11 });
table1.updateCell(2, 0, { value: cell20 });
table1.updateCell(2, 1, { value: cell21 });

autorun(() => {
  let currentCell31 = table1.getCell(3, 1).value;
  if (currentCell31 != table1.data.storedCell31) {
    table1.updateData({ storedCell31: '' });
    button1.updateData({ disabled: false });
  }
  if (currentCell31 == '') {
    button1.updateData({ disabled: true });
  }
});

button1.on('click', () => {
  table1.updateData({ storedCell31: table1.getCell(3, 1).value });
  button1.updateData({ disabled: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareAnswers1.updateData({ visible: true });
});

/*
{"compTotals":{"table":1,"geogebra":1,"textbox":2,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M1 TC L15 - Scale Drawings","teacherView":false,"layout":"two col"}
*/
