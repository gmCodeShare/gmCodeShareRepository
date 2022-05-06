const {
  text1,
  table1,
  text2,
  table2,
  text3,
  table3,
  feedback1,
  cc_sharewithclass_5776e4d220fe_textbox1,
  cc_sharewithclass_5776e4d220fe_input1,
  cc_sharewithclass_5776e4d220fe_button1,
  cc_sharewithclass_5776e4d220fe_studentanswers1,
} = components;

let id1 = 'slide-19d7b095b436';
let id2 = 'slide-07d5e49fdeaa';
let id3 = 'slide-ed7d90fba7e6';

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

const table1Data = getFromSlide(id1, 'table1', false) || false;

if (!!table1Data) {
  for (let i = 0, L1 = table1Data.data.rows.length; i < L1; i++) {
    for (let j = 0, L2 = table1Data.data.columns.length; j < L2; j++) {
      table1.updateCell(i, j, {
        value:
          table1Data.data.rows[i][j].value == ''
            ? `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
                id1
              )}\]}$`
            : table1Data.data.rows[i][j].value,
      });
    }
  }
}

const table2Data = getFromSlide(id2, 'table1', false) || false;

if (!!table2Data) {
  for (let i = 0, L1 = table2Data.data.rows.length; i < L1; i++) {
    for (let j = 0, L2 = table2Data.data.columns.length; j < L2; j++) {
      table2.updateCell(i, j, {
        value:
          table2Data.data.rows[i][j].value == ''
            ? `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
                id2
              )}\]}$`
            : table2Data.data.rows[i][j].value,
      });
    }
  }
}

const table3Data = getFromSlide(id3, 'table1', false) || false;

if (!!table3Data) {
  for (let i = 0, L1 = table3Data.data.rows.length; i < L1; i++) {
    for (let j = 0, L2 = table3Data.data.columns.length; j < L2; j++) {
      table3.updateCell(i, j, {
        value:
          table3Data.data.rows[i][j].value == ''
            ? `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
                id3
              )}\]}$`
            : table3Data.data.rows[i][j].value,
      });
    }
  }
}

/*
{"compTotals":{"textbox":4,"table":3,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M3 TA L02 - Integers","teacherView":false,"layout":"two col"}
*/
