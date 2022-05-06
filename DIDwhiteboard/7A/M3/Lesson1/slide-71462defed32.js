const { table1, table2 } = components;

utils.RTS.on("datachange", "slide-1fc2b69f94b9", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  // Step 0: Discard old answers
  const lastRegister = discardOldResponses(register);
  console.log(lastRegister);
  for (let i = 0, L = table1.data.rows.length; i < L; i++) {
    table1.deleteRow(0);
  }
  lastRegister.forEach(({ data }, index) => {
    table1.addRow();
    table1.updateRow(index, { editable: false });
    table1.updateCell(index, 0, { value: data.leg3 });
    table1.updateCell(index, 1, { value: data.leg1 });
    table1.updateCell(index, 2, { value: data.leg2 });
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
