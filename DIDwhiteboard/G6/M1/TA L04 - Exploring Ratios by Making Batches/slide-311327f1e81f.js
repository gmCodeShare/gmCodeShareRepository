const {
  table1,
  cc_sharewithclass_cc8f0b6cfcf4_textbox1: shareText1,
  cc_sharewithclass_cc8f0b6cfcf4_input1: shareInput1,
  cc_sharewithclass_cc8f0b6cfcf4_button1,
  cc_sharewithclass_cc8f0b6cfcf4_studentanswers1,
} = components;

let id1 = 'slide-73a422614d1e';

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

const rowsContent = getFromSlide(id1, 'table1.data.rows', false) || false;

for (let j = 1, L1 = table1.data.columns.length; j < L1; j++) {
  for (let i = 0, L2 = rowsContent.length; i < L2; i++) {
    let val = !!rowsContent[i][j].value
      ? rowsContent[i][j].value
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

/*
{"compTotals":{"table":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TA L04 - Exploring Ratios by Making Batches","teacherView":false,"layout":"two col"}
*/
