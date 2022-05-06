const { table1, button1, text1, feedback } = components;

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
  getFromSlide('slide-487250b13950', 'table1', defPrevTable1) || defPrevTable1;

// const oldTable = getFromSlide("slide-487250b13950", `table1`);

const oldCell00 = oldTable.data.rows[0][2].value;
const oldCell12 = oldTable.data.rows[1][2].value;
const oldCell22 = oldTable.data.rows[2][2].value;
const oldCell32 = oldTable.data.rows[3][2].value;
const oldCell42 = oldTable.data.rows[4][2].value;
const oldCell03 = oldTable.data.rows[0][3].value;
const oldCell13 = oldTable.data.rows[1][3].value;
const oldCell23 = oldTable.data.rows[2][3].value;
const oldCell33 = oldTable.data.rows[3][3].value;
const oldCell43 = oldTable.data.rows[4][3].value;

table1.updateCell(0, 0, { value: oldCell00 });
table1.updateCell(1, 0, { value: oldCell12 });
table1.updateCell(2, 0, { value: oldCell22 });
table1.updateCell(3, 0, { value: oldCell32 });
table1.updateCell(4, 0, { value: oldCell42 });
table1.updateCell(0, 1, { value: oldCell03 });
table1.updateCell(1, 1, { value: oldCell13 });
table1.updateCell(2, 1, { value: oldCell23 });
table1.updateCell(3, 1, { value: oldCell33 });
table1.updateCell(4, 1, { value: oldCell43 });

//Makes a Fake Submit Button wiht table
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
    table1.getCell(0, 2).value,
    table1.getCell(1, 2).value,
    table1.getCell(2, 2).value,
    table1.getCell(3, 2).value,
    table1.getCell(4, 2).value,
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
  //changing the color of text if incorrect after a button click
  if (table1.getCell(0, 2).value != oldCell00 - oldCell03) {
    table1.updateCell(0, 2, { className: 'text-danger' });
  } else {
    table1.updateCell(0, 2, { className: 'text-black' });
  }
  if (table1.getCell(1, 2).value != oldCell12 - oldCell13) {
    table1.updateCell(1, 2, { className: 'text-danger' });
  } else {
    table1.updateCell(1, 2, { className: 'text-black' });
  }
  if (table1.getCell(2, 2).value != oldCell22 - oldCell23) {
    table1.updateCell(2, 2, { className: 'text-danger' });
  } else {
    table1.updateCell(2, 2, { className: 'text-black' });
  }
  if (table1.getCell(3, 2).value != oldCell32 - oldCell33) {
    table1.updateCell(3, 2, { className: 'text-danger' });
  } else {
    table1.updateCell(3, 2, { className: 'text-black' });
  }
  if (table1.getCell(4, 2).value != oldCell42 - oldCell43) {
    table1.updateCell(4, 2, { className: 'text-danger' });
  } else {
    table1.updateCell(4, 2, { className: 'text-black' });
  }
  if (table1.getCell(0, 3).value != Math.abs(oldCell00 - oldCell03)) {
    table1.updateCell(0, 3, { className: 'text-danger' });
  } else {
    table1.updateCell(0, 3, { className: 'text-black' });
  }
  if (table1.getCell(1, 3).value != Math.abs(oldCell12 - oldCell13)) {
    table1.updateCell(1, 3, { className: 'text-danger' });
  } else {
    table1.updateCell(1, 3, { className: 'text-black' });
  }
  if (table1.getCell(2, 3).value != Math.abs(oldCell22 - oldCell23)) {
    table1.updateCell(2, 3, { className: 'text-danger' });
  } else {
    table1.updateCell(2, 3, { className: 'text-black' });
  }
  if (table1.getCell(3, 3).value != Math.abs(oldCell32 - oldCell33)) {
    table1.updateCell(3, 3, { className: 'text-danger' });
  } else {
    table1.updateCell(3, 3, { className: 'text-black' });
  }
  if (table1.getCell(4, 3).value != Math.abs(oldCell42 - oldCell43)) {
    table1.updateCell(4, 3, { className: 'text-danger' });
  } else {
    table1.updateCell(4, 3, { className: 'text-black' });
  }
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"table":1,"button":1,"textbox":2},"stage":"Learn","lessonInfo":"7 M5 TD L19 - Applying Percent Error (digital)","teacherView":false,"layout":"two col"}
*/
