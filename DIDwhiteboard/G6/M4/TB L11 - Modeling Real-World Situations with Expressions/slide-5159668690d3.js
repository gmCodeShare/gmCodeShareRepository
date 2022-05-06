const {
  table1,
  feedback1,
  cc_sharewithclass_ad482ed136a0_textbox1,
  cc_sharewithclass_ad482ed136a0_input1,
  cc_sharewithclass_ad482ed136a0_button1,
  cc_sharewithclass_ad482ed136a0_studentanswers1,
} = components;

let id1 = 'slide-f1e6a76391a3';

let defPrevTable1NumCol = 4; //your number here
let defPrevTable1NumRow = 6; //your number here

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

let defPrevTable1 = {
  data: { columns: [], rows: [] },
};

for (let i = 0; i < defPrevTable1NumCol; i++) {
  defPrevTable1.data.columns.push({ value: '' });
}

for (let i = 0; i < defPrevTable1NumRow; i++) {
  let newRow = [];
  for (let j = 0; j < defPrevTable1NumCol; j++) {
    newRow.push({ value: '' });
  }
  defPrevTable1.data.rows.push([...newRow]);
}

let prevTable1 = getFromSlide(id1, 'table1', defPrevTable1) || defPrevTable1; // don't forget to change slide id

for (let i = 0, L1 = prevTable1.data.rows.length; i < L1; i++) {
  for (let j = 0, L2 = prevTable1.data.columns.length; j < L2; j++) {
    table1.updateCell(i, j, {
      value:
        prevTable1.data.rows[i][j].value == ''
          ? `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
              id1
            )}\]}$`
          : prevTable1.data.rows[i][j].value,
    });
  }
}

/*
{"compTotals":{"table":1,"textbox":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M4 TB L11 - Modeling Real-Life Situations and Expressions","teacherView":false,"layout":"two col"}
*/
