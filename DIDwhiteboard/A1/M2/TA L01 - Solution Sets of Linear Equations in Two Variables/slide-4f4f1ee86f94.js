const {
  table1,
  feedback1,
  text1,
  text2,
  input1,
  text3,
  input2,
  text4,
  input3,
  button1,
} = components;

const createTableCell = (value) => ({
  editable: false,
  math: !isNaN(value),
  value,
});
const createTableRowsData = (rows) =>
  rows.map((row) => row.map(createTableCell));

button1.updateData({ align: "right" });

autorun(() => {
  if (
    input1.data.text != input1.data.last ||
    input2.data.text != input2.data.last ||
    input3.data.text != input3.data.last
  ) {
    button1.updateData({ text: "Submit", disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
    input2.updateData({ last: input2.data.text });
    input3.updateData({ last: input3.data.text });
  }
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});

utils.RTS.on("datachange", "slide-fd85e50c42c6", (register) => {
  if (!register || !register.length) {
    return;
  }
  let xValues6 = [];
  let yValues6 = [];
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { distance, remaining } = data;
    //let xValues6 = [];
    //let yValues6 = [];
    xValues6.push(distance);
    yValues6.push(remaining);
    for (let j = 0, L = xValues6.length; j < L; j++) {
      let matches = 0;
      for (let i = 0, L = table1.data.rows.length; i < L; i++) {
        let xCheck = table1.getCell(i, 0).value;
        if (xCheck == xValues6[j]) {
          matches++;
        }
      }
      if (matches == 0) {
        let newRow = createTableRowsData([
          [`${xValues6[j]}`, `${yValues6[j]}`],
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
{"compTotals":{"table":1,"textbox":5,"input":3,"button":1},"stage":"Learn","lessonInfo":"9 M2 TA L01 - Solution Sets of Linear Equations in Two Variables","teacherView":false,"layout":"two col"}
*/
