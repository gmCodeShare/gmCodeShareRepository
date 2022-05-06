const {
  ggb1,
  table1,
  table2,
  cc_sharewithclass_842479309227_textbox1: shareText1,
  cc_sharewithclass_842479309227_input1: shareInput1,
  cc_sharewithclass_842479309227_button1: shareButton1,
  cc_sharewithclass_842479309227_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-c4ce3168ee1b';
let id2 = 'slide-22f92cf58fad';

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
          id2
        )}\]}$`;
    table2.updateCell(i, j, {
      value: val,
      math: true,
      editable: false,
    });
  }
}

let data1 = getFromSlide(id1, `ggb1`, false) || false;

if (data1.innerData) {
  ggb1.instance.setValue('showPoints', true);
  ggb1.instance.evalCommand(`bluePart1Graph1=(${data1.innerData['bluePart']})`);
  ggb1.instance.evalCommand(`redPart1Graph1=(${data1.innerData['redPart']})`);
  ggb1.instance.evalCommand(
    `bluePart2Graph1=(${data1.innerData['bluePart2']})`
  );
  ggb1.instance.evalCommand(`redPart2Graph1=(${data1.innerData['redPart2']})`);
  ggb1.instance.setValue('time', 10);
  ggb1.instance.setValue('time2', 10);
}

let data2 = getFromSlide(id2, `ggb1`, false) || false;

if (data2.innerData) {
  ggb1.instance.setValue('showPoints2', true);
  ggb1.instance.evalCommand(`bluePart1Graph2=(${data2.innerData['bluePart']})`);
  ggb1.instance.evalCommand(`redPart1Graph2=(${data2.innerData['redPart']})`);
  ggb1.instance.evalCommand(
    `bluePart2Graph2=(${data2.innerData['bluePart2']})`
  );
  ggb1.instance.evalCommand(`redPart2Graph2=(${data2.innerData['redPart2']})`);
}

/*
{"compTotals":{"geogebra":1,"table":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TC L12 - Multiple Ratio Relationships","teacherView":false,"layout":"two col"}
*/
