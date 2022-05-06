const { table1, button1, text1 } = components;

button1.updateData({ align: 'right' });
button1.updateData({ disabled: true });

let defPrevTable1NumCol = 4; //your number here
let defPrevTable1NumRow = 5; //your number here
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

let oldTable =
  getFromSlide('slide-7c89821a6721', 'table1', defPrevTable1) || defPrevTable1;

// const oldTable = getFromSlide("slide-7c89821a6721", `table1`);

const oldCell01 = oldTable.data.rows[0][1].value;
const oldCell11 = oldTable.data.rows[1][1].value;
const oldCell21 = oldTable.data.rows[2][1].value;
const oldCell31 = oldTable.data.rows[3][1].value;
const oldCell41 = oldTable.data.rows[4][1].value;
const oldCell00 = oldTable.data.rows[0][0].value;
const oldCell10 = oldTable.data.rows[1][0].value;
const oldCell20 = oldTable.data.rows[2][0].value;
const oldCell30 = oldTable.data.rows[3][0].value;
const oldCell40 = oldTable.data.rows[4][0].value;
const oldCell03 = oldTable.data.rows[0][3].value;
const oldCell13 = oldTable.data.rows[1][3].value;
const oldCell23 = oldTable.data.rows[2][3].value;
const oldCell33 = oldTable.data.rows[3][3].value;
const oldCell43 = oldTable.data.rows[4][3].value;

table1.updateCell(0, 0, { value: oldCell00 });
table1.updateCell(1, 0, { value: oldCell10 });
table1.updateCell(2, 0, { value: oldCell20 });
table1.updateCell(3, 0, { value: oldCell30 });
table1.updateCell(4, 0, { value: oldCell40 });
table1.updateCell(0, 1, { value: oldCell01 });
table1.updateCell(1, 1, { value: oldCell11 });
table1.updateCell(2, 1, { value: oldCell21 });
table1.updateCell(3, 1, { value: oldCell31 });
table1.updateCell(4, 1, { value: oldCell41 });
table1.updateCell(0, 2, { value: oldCell03 });
table1.updateCell(1, 2, { value: oldCell13 });
table1.updateCell(2, 2, { value: oldCell23 });
table1.updateCell(3, 2, { value: oldCell33 });
table1.updateCell(4, 2, { value: oldCell43 });

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

autorun(() => {
  // this example checked these 5 cells; you’ll have to make adjustments
  let entries = [
    table1.getCell(0, 3).value,
    table1.getCell(1, 3).value,
    table1.getCell(2, 3).value,
    table1.getCell(3, 3).value,
    table1.getCell(4, 3).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});

button1.on('click', () => {
  if (
    parseInt(table1.getCell(0, 3).value) !=
    ((oldCell03 / oldCell01) * 100).toFixed(0)
  ) {
    table1.updateCell(0, 3, { className: 'text-danger' });
  } else {
    table1.updateCell(0, 3, { className: 'text-black' });
  }
  //console.log(utils.math.evaluateLatex(table1.getCell(0,3).value));
  if (
    parseInt(table1.getCell(1, 3).value) !=
    ((oldCell13 / oldCell11) * 100).toFixed(0)
  ) {
    table1.updateCell(1, 3, { className: 'text-danger' });
  } else {
    table1.updateCell(1, 3, { className: 'text-black' });
  }
  if (
    parseInt(table1.getCell(2, 3).value) !=
    ((oldCell23 / oldCell21) * 100).toFixed(0)
  ) {
    table1.updateCell(2, 3, { className: 'text-danger' });
  } else {
    table1.updateCell(2, 3, { className: 'text-black' });
  }
  if (
    parseInt(table1.getCell(3, 3).value) !=
    ((oldCell33 / oldCell31) * 100).toFixed(0)
  ) {
    table1.updateCell(3, 3, { className: 'text-danger' });
  } else {
    table1.updateCell(3, 3, { className: 'text-black' });
  }
  if (
    parseInt(table1.getCell(4, 3).value) !=
    ((oldCell43 / oldCell41) * 100).toFixed(0)
  ) {
    table1.updateCell(4, 3, { className: 'text-danger' });
  } else {
    table1.updateCell(4, 3, { className: 'text-black' });
  }
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"table":1,"button":1,"textbox":1},"stage":"Learn","lessonInfo":"7 M5 TD L19 - Applying Percent Error (digital)","teacherView":false,"layout":"two col"}
*/
