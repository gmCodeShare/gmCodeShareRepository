const {
  ggb1,
  table1,
  table2,
  cc_sharewithclass_65fc52056268_textbox1: shareText1,
  cc_sharewithclass_65fc52056268_input1: shareInput1,
  cc_sharewithclass_65fc52056268_button1: shareButton1,
  cc_sharewithclass_65fc52056268_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-6706e4d7cd0a';
let id2 = 'slide-1912c4519a27';

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

const rowsContent1 = getFromSlide(id1, 'table1.data.rows', false) || false;

for (let j = 1, L1 = table1.data.columns.length; j < L1; j++) {
  for (let i = 0, L2 = rowsContent1.length; i < L2; i++) {
    let val = !!rowsContent1[i][j].value
      ? rowsContent1[i][j].value
      : `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
          id1
        )}\]}$`;
    table1.updateCell(i, j, {
      value: val,
      math: true,
      editable: false,
    });
  }
}

const rowsContent2 = getFromSlide(id2, 'table1.data.rows', false) || false;

for (let j = 1, L1 = table2.data.columns.length; j < L1; j++) {
  for (let i = 0, L2 = rowsContent2.length; i < L2; i++) {
    let val = !!rowsContent2[i][j].value
      ? rowsContent2[i][j].value
      : `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
          id1
        )}\]}$`;
    table2.updateCell(i, j, {
      value: val,
      math: true,
      editable: false,
    });
  }
}

const cellt101 = table1.getCell(0, 1);
const cellt102 = table1.getCell(0, 2);
const cellt111 = table1.getCell(1, 1);
const cellt112 = table1.getCell(1, 2);
const cellt201 = table2.getCell(0, 1);
const cellt202 = table2.getCell(0, 2);
const cellt211 = table2.getCell(1, 1);
const cellt212 = table2.getCell(1, 2);

if (
  rowsContent2 &&
  cellt201.value != '' &&
  cellt202.value != '' &&
  cellt211.value != '' &&
  cellt212.value != ''
) {
  ggb1.instance.setValue('showPoints2', true);
  ggb1.instance.evalCommand(`bluePart1Graph2=(${table2.getCell(0, 1).value})`);
  ggb1.instance.evalCommand(`redPart1Graph2=(${table2.getCell(1, 1).value})`);
  ggb1.instance.evalCommand(`bluePart2Graph2=(${table2.getCell(0, 2).value})`);
  ggb1.instance.evalCommand(`redPart2Graph2=(${table2.getCell(1, 2).value})`);
}

if (
  rowsContent1 &&
  cellt101.value != '' &&
  cellt102.value != '' &&
  cellt111.value != '' &&
  cellt112.value != ''
) {
  ggb1.instance.setValue('showPoints', true);
  ggb1.instance.evalCommand(`bluePart1Graph1=(${table1.getCell(0, 1).value})`);
  ggb1.instance.evalCommand(`redPart1Graph1=(${table1.getCell(1, 1).value})`);
  ggb1.instance.evalCommand(`bluePart2Graph1=(${table1.getCell(0, 2).value})`);
  ggb1.instance.evalCommand(`redPart2Graph1=(${table1.getCell(1, 2).value})`);
}

/*
{"compTotals":{"geogebra":1,"table":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TC L12 - Multiple Ratio Relationships","teacherView":false,"layout":"two col"}
*/
