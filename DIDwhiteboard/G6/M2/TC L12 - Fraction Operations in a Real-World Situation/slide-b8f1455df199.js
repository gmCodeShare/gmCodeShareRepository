const { table1, feedback1 } = components;

let id11 = 'slide-d5bf2f77a12c'; //slide12: for RTS

const createTableCell = (value) => ({
  editable: false,
  math: !isNaN(value),
  value,
});
const createTableRowsData = (rows) =>
  rows.map((row) => row.map(createTableCell));

utils.RTS.on('datachange', id11, (register) => {
  const actualValue = 20; // Change this accordingly

  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  console.log('All Responses');
  register.forEach(({ data, info }) => console.log({ ...data }, { ...info })); // For illustrative purposes only

  // Step 0: Discard old answers
  const lastRegister = discardOldResponses(register);
  console.log('Last Responses');
  lastRegister.forEach(({ data, info }) =>
    console.log({ ...data }, { ...info })
  ); // For illustrative purposes only

  // Steps 1 through 4
  const rankedStudents = lastRegister
    .filter(({ data }) => !isNaN(data.estimate)) // Step 2: Discard non-numeric estimates
    .map(({ data, info }) => [
      // Step 1: Map all necessary values
      info.device.substring(3),
      parseFloat(data.estimate),
      // actualValue,
      // Math.abs(actualValue - data.estimate),
    ])
    .sort((a, b) => b[1] - a[1]) // Step 3: Sort by difference
    .map((student, i) => [i + 1, ...student]); // Step 4: Add Rank

  console.log('Ranked Students');
  console.table(rankedStudents); // For illustrative purposes only

  // Step 5: Map information into table's data format
  const tableRows = createTableRowsData(rankedStudents);
  console.log('Table Rows', tableRows); // For illustrative purposes only

  // Step 6: Update table
  table1.updateData({ rows: tableRows });
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
{"compTotals":{"table":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M2 TC L12 - Fraction Operations in a Real-World Situation","teacherView":true,"layout":"one col"}
*/
