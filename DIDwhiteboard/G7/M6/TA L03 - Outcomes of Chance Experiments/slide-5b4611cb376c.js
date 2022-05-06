const {
  table1,
  feedback1,
  cc_sharewithclass_caa93267763e_textbox1,
  cc_sharewithclass_caa93267763e_input1,
  cc_sharewithclass_caa93267763e_button1,
  cc_sharewithclass_caa93267763e_studentanswers1,
} = components;

// table values need to be the same as the resulting table values from the slide 10
//I don't think the above is true - maybe was text from a duplicate slide?

components.cc_sharewithclass_caa93267763e_button1.updateData({
  align: 'right',
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
  }
  table1.updateCell(0, 1, { value: rightSideUp });
  table1.updateCell(0, 2, { value: upSideDown });
  table1.updateCell(0, 3, { value: side });
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
