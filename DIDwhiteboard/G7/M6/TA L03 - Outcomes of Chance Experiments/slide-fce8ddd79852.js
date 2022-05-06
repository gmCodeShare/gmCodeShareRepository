const {
  table1,
  feedback1,
  cc_sharewithclass_caa93267763e_textbox1,
  cc_sharewithclass_caa93267763e_input1,
  cc_sharewithclass_caa93267763e_button1,
  cc_sharewithclass_caa93267763e_studentanswers1,
} = components;

// table values need to be the same as the resulting table values from the slide 10

components.cc_sharewithclass_caa93267763e_button1.updateData({
  align: 'right',
});

const id1 = `slide-b8eeffc472d4`;

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

let oldTable = getFromSlide(id1, 'table2', defPrevTable1) || defPrevTable1;

// const oldTable = getFromSlide(`slide-b8eeffc472d4`, "table2");

const oldCell00 = oldTable.data.rows[0][0].value;
const oldCell01 = oldTable.data.rows[0][1].value;
const oldCell02 = oldTable.data.rows[0][2].value;

table1.updateCell(0, 1, { value: oldCell00 });
table1.updateCell(0, 2, { value: oldCell01 });
table1.updateCell(0, 3, { value: oldCell02 });

// Retrieving information
utils.RTS.on('datachange', 'slide-2cfe81abfc55', (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register);

  // console.log("register[0].data.upSideDown: ", lastRegister[0].data.upSideDown);
  // console.log("register[0].data.side: ", lastRegister[0].data.side);
  let rightSideUp = 0;
  let upSideDown = 0;
  let side = 0;
  for (let i = 0, L = lastRegister.length; i < L; i++) {
    rightSideUp = rightSideUp + lastRegister[i].data.rightSideUp;
    upSideDown = upSideDown + lastRegister[i].data.upSideDown;
    side = side + lastRegister[i].data.side;
  }
  table1.updateCell(1, 1, { value: rightSideUp });
  table1.updateCell(1, 2, { value: upSideDown });
  table1.updateCell(1, 3, { value: side });
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
{"compTotals":{"table":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M6 TA L03 - Outcomes of Chance Experiments","teacherView":false,"layout":"two col"}
*/
