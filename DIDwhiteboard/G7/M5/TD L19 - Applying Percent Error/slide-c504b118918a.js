const { text1, textDisplay9, table1, textDisplay10, table2 } = components;

text1.updateData({ align: 'center' });

const createTableCell = (value) => ({
  editable: false,
  math: !isNaN(value),
  value,
});
const createTableRowsData = (rows) =>
  rows.map((row) => row.map(createTableCell));

const createTableCell2 = (value) => ({
  editable: false,
  math: !isNaN(value),
  value,
});
const createTableRowsData2 = (rows) =>
  rows.map((row) => row.map(createTableCell2));

utils.RTS.on('datachange', 'slide-e132e330b200.input1', (register) => {
  //const actualValue = 1800; // Change this accordingly

  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  // console.log("All Responses");
  // register.forEach(({ data, info }) => console.log({ ...data }, { ...info })); // For illustrative purposes only

  // Step 0: Discard old answers
  const lastRegister = discardOldResponses(register);
  // console.log("Last Responses");
  // lastRegister.forEach(({ data, info }) =>
  //   console.log({ ...data }, { ...info })
  // ); // For illustrative purposes only

  // Steps 1 through 4
  const rankedStudents = lastRegister
    .filter(({ data }) => !isNaN(data.estimate)) // Step 2: Discard non-numeric estimates
    .map(({ data, info }) => [
      // Step 1: Map all necessary values
      info.device.substring(3),
      parseFloat(data.estimate),
      data.actualValue,
      Math.abs(data.actualValue - data.estimate),
    ])
    .sort((a, b) => a[3] - b[3]) // Step 3: Sort by difference
    .map((student, i) => [i + 1, ...student]); // Step 4: Add Rank

  // Steps 1 through 4
  const rankedStudents2 = lastRegister
    .filter(({ data }) => !isNaN(data.estimate)) // Step 2: Discard non-numeric estimates
    .map(({ data, info }) => [
      // Step 1: Map all necessary values
      info.device.substring(3),
      parseFloat(data.estimate),
      data.actualValue,
      (Math.abs(data.actualValue - data.estimate) / data.actualValue).toFixed(
        2
      ) * 100,
    ])
    .sort((a, b) => a[3] - b[3]) // Step 3: Sort by difference
    .map((student, i) => [i + 1, ...student]); // Step 4: Add Rank

  // console.log("Ranked Students");
  // console.table(rankedStudents); // For illustrative purposes only

  // Step 5: Map information into table's data format
  const tableRows = createTableRowsData(rankedStudents);
  // console.log("Table Rows", tableRows); // For illustrative purposes only

  // Step 5: Map information into table's data format
  const tableRows2 = createTableRowsData2(rankedStudents2);
  // console.log("Table Rows2", tableRows2); // For illustrative purposes only

  // Step 6: Update table
  table1.updateData({ rows: tableRows });
  table2.updateData({ rows: tableRows2 });
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
{"compTotals":{"textbox":3,"table":2},"stage":"Learn","lessonInfo":"7 M5 TD L19 - Applying Percent Error (digital)","teacherView":false,"layout":"T layout"}
*/
