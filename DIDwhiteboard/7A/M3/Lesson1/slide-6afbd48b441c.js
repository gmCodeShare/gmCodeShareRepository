const { table1, table2 } = components;

utils.RTS.on("datachange", "slide-cb0a9ab99ed9", (register) => {
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
    table1.updateCell(index, 0, { value: 10 });
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

utils.RTS.on("datachange", "slide-ff4961bf96ba", (register2) => {
  // Don't do anything if we don't have data
  if (!register2 || !register2.length) {
    return;
  }

  // Step 0: Discard old answers
  const lastRegister2 = discardOldResponses(register2);

  for (let i = 0, L = table2.data.rows.length; i < L; i++) {
    table2.deleteRow(0);
  }
  lastRegister2.forEach(({ data }, index) => {
    table2.addRow();
    table2.updateRow(index, { editable: false });
    table2.updateCell(index, 0, { value: 10 });
    table2.updateCell(index, 1, { value: data.leg1 });
    table2.updateCell(index, 2, { value: data.leg2 });
  });
});

function discardOldResponses(register2) {
  const devices2 = new Set();

  return register2
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const device2HasPreviousAnswer = devices2.has(device); // Has device appeared before?
      devices2.add(device); // Mark device as appeared

      return !device2HasPreviousAnswer;
    });
}
