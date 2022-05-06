const { text1, table1, text2, table2, text3, table3 } = components;

text1.updateData({ align: 'center' });
text2.updateData({ align: 'center' });
text3.updateData({ align: 'center' });

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

//Diamond is at 30.
/*const table1Data = getFromSlide('slide-19d7b095b436', 'table1',{});

table1.updateData({rows: [
[{value: table1Data.data.rows[0][0].value}, {value: table1Data.data.rows[0][1].value}],
[{value: table1Data.data.rows[1][0].value}, {value: table1Data.data.rows[1][1].value}],
[{value: table1Data.data.rows[2][0].value}, {value: table1Data.data.rows[2][1].value}]
]});

table1.updateCol(0,{math:true,editable:false});
table1.updateCol(1,{math:true,editable:false});

//Diamond is at 105.
const table2Data = getFromSlide('slide-07d5e49fdeaa', 'table1',{});

table2.updateData({rows: [
[{value: table2Data.data.rows[0][0].value}, {value: table2Data.data.rows[0][1].value}],
[{value: table2Data.data.rows[1][0].value}, {value: table2Data.data.rows[1][1].value}],
[{value: table2Data.data.rows[2][0].value}, {value: table2Data.data.rows[2][1].value}]
]});

table2.updateCol(0,{math:true,editable:false});
table2.updateCol(1,{math:true,editable:false});

//Diamond is at 0.
const table3Data = getFromSlide('slide-ed7d90fba7e6', 'table1',{});

table3.updateData({rows: [
[{value: table3Data.data.rows[0][0].value}, {value: table3Data.data.rows[0][1].value}],
[{value: table3Data.data.rows[1][0].value}, {value: table3Data.data.rows[1][1].value}],
[{value: table3Data.data.rows[2][0].value}, {value: table3Data.data.rows[2][1].value}]
]});

table3.updateCol(0,{math:true,editable:false});
table3.updateCol(1,{math:true,editable:false});*/

/*
{"compTotals":{"textbox":3,"table":3},"stage":"Launch","lessonInfo":"6 M3 TA L02 - PA Integers","teacherView":true,"layout":"one col"}
*/
