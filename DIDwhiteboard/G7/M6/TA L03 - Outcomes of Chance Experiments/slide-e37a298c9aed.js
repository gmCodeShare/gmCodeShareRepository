const {
  table1,
  feedback1,
  cc_sharewithclass_caa93267763e_textbox1,
  cc_sharewithclass_caa93267763e_input1,
  cc_sharewithclass_caa93267763e_button1,
  cc_sharewithclass_caa93267763e_studentanswers1,
} = components;

components.cc_sharewithclass_caa93267763e_button1.updateData({
  align: 'right',
});

const id1 = `slide-2cfe81abfc55`;

let defPrevTable1NumCol = 3; //your number here
let defPrevTable1NumRow = 1; //your number here
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

let oldTable = getFromSlide(id1, 'table1', defPrevTable1) || defPrevTable1;

// const oldTable = getFromSlide(`slide-2cfe81abfc55`, "table1");

const oldCell00 = oldTable.data.rows[0][0].value;
const oldCell01 = oldTable.data.rows[0][1].value;
const oldCell02 = oldTable.data.rows[0][2].value;

table1.updateCell(0, 0, { value: `$${oldCell00}$` });
table1.updateCell(0, 1, { value: `$${oldCell01}$` });
table1.updateCell(0, 2, { value: `$${oldCell02}$` });

/*
{"compTotals":{"table":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M6 TA L03 - Outcomes of Chance Experiments","teacherView":false,"layout":"two col"}
*/
