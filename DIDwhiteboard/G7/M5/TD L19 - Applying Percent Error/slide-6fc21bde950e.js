const {
  textDisplay4,
  table1,
  feedback,
  cc_sharewithclass_4b9d10f58f0b_textbox1,
  cc_sharewithclass_4b9d10f58f0b_input1,
  cc_sharewithclass_4b9d10f58f0b_button1,
  cc_sharewithclass_4b9d10f58f0b_studentanswers1,
} = components;

onInit();
function onInit() {
  if (!table1.data.init) {
    cc_sharewithclass_4b9d10f58f0b_input1.updateData({
      text: `I notice \n\nI wonder `,
    });
    cc_sharewithclass_4b9d10f58f0b_button1.updateData({ disabled: true });
    table1.updateData({ init: true });
  }
}

const createTableCell = (value) => ({
  editable: false,
  math: !isNaN(value),
  value,
});
const createTableRowsData = (rows) =>
  rows.map((row) => row.map(createTableCell));

/*function discardOldResponses(register3) {
  const devices = new Set();

  return register3
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}*/

utils.RTS.on('datachange', 'slide-e132e330b200.input1', (register) => {
  //const actualValue = 1807; // Change this accordingly

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
  // console.log({ ...data }, { ...info })
  // For illustrative purposes only
  console.log(lastRegister);

  // Steps 1 through 4
  const rankedStudents = lastRegister
    .filter(({ data }) => !isNaN(data.estimate)) // Step 2: Discard non-numeric estimates
    .map(({ data, info }) => [
      // Step 1: Map all necessary values
      info.device.substring(3),
      parseFloat(data.estimate),
      data.actualValue,
      data.estimate - data.actualValue,
    ])
    .sort((a, b) => Math.abs(a[3]) - Math.abs(b[3])) // Step 3: Sort by difference
    .map((student, i) => [i + 1, ...student]); // Step 4: Add Rank

  // console.log("Ranked Students");
  // console.table(rankedStudents); // For illustrative purposes only

  // Step 5: Map information into table's data format
  const tableRows = createTableRowsData(rankedStudents);
  // console.log("Table Rows", tableRows); // For illustrative purposes only

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
{"compTotals":{"textbox":2,"table":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M5 TD L19 - Applying Percent Error (digital)","teacherView":false,"layout":"two col"}
*/
