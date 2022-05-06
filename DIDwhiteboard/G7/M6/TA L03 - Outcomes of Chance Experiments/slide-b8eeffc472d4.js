const { table1, feedback1, text1, table2, button1 } = components;

button1.updateData({ disabled: true });
button1.updateData({ align: 'right' });

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

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
autorun(() => {
  let entries = [
    table2.getCell(0, 0).value,
    table2.getCell(0, 1).value,
    table2.getCell(0, 2).value,
  ];
  if (!arrayEquals(entries, table2.data.last)) {
    button1.updateData({
      align: 'right',
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table2.updateData({ last: entries });
  }
});
button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

// Retrieving information
utils.RTS.on('datachange', 'slide-2cfe81abfc55', (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register);

  let rightSideUp = 0;
  let upSideDown = 0;
  let side = 0;
  for (let i = 0, L = lastRegister.length; i < L; i++) {
    rightSideUp = rightSideUp + lastRegister[i].data.rightSideUp;
    upSideDown = upSideDown + lastRegister[i].data.upSideDown;
    side = side + lastRegister[i].data.side;
    total = rightSideUp + upSideDown + side;
  }
  text1.updateData({
    text: `The total number of flips for the entire class is $${total}$. Based on the data you collected, predict the counts for the entire class.`,
  });
});

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}

/*
{"compTotals":{"table":2,"textbox":2,"button":1},"stage":"Learn","lessonInfo":"7 M6 TA L03 - Outcomes of Chance Experiments","teacherView":false,"layout":"two col"}
*/
