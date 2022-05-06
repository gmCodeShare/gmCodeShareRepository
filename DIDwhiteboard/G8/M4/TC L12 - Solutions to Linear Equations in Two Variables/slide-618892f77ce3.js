const {
  table1,
  feedback1,
  cc_submit_d3576c88c2a6_textbox1: submitText1,
  cc_submit_d3576c88c2a6_input1: submitInput1,
  cc_submit_d3576c88c2a6_button1: submitButton1,
  separator1,
  cc_sharewithclass_52fe72fea036_textbox1: shareText1,
  cc_sharewithclass_52fe72fea036_input1: shareInput1,
  cc_sharewithclass_52fe72fea036_button1: shareButton1,
  cc_sharewithclass_52fe72fea036_studentanswers1,
} = components;

const createTableCell = (value) => ({
  editable: false,
  math: !isNaN(value),
  value,
});
const createTableRowsData = (rows) =>
  rows.map((row) => row.map(createTableCell));

onInit();
function onInit() {
  if (!table1.data.init) {
    shareButton1.updateData({ visible: false });
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    table1.updateData({ init: true });
  }
}

submitButton1.on('click', show);

function show() {
  shareButton1.updateData({ visible: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
}

// Retrieving information
utils.RTS.on('datachange', 'slide-dc880babda70', (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { x1, y1, x2, y2, row1Total, row2Total } = data;
    let xValues32 = [];
    let yValues32 = [];
    if (row1Total == 32) {
      xValues32.push(x1);
      yValues32.push(y1);
    }
    if (row2Total == 32) {
      xValues32.push(x2);
      yValues32.push(y2);
    }
    for (let j = 0, L = xValues32.length; j < L; j++) {
      let matches = 0;
      for (let i = 0, L = table1.data.rows.length; i < L; i++) {
        let xCheck = table1.getCell(i, 0).value;
        if (xCheck == xValues32[j]) {
          matches++;
        }
      }
      if (matches == 0) {
        let newRow = createTableRowsData([
          [`${xValues32[j]}`, `${yValues32[j]}`],
        ]);
        let allRows = [...table1.data.rows, ...newRow];
        table1.updateData({ rows: allRows });
      }
    }
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
{"compTotals":{"table":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M4 TC L12 - Solutions to Linear Equations in Two Variables","teacherView":false,"layout":"two col"}
*/
