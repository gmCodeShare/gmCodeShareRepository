const {
  table1,
  radio1,
  cc_sharewithclass_9ad26ac0a8b9_textbox1: text2,
  cc_sharewithclass_9ad26ac0a8b9_input1: input1,
  cc_sharewithclass_9ad26ac0a8b9_button1: button1,
} = components;

const createTableCell = (value) => ({
  editable: false,
  math: !isNaN(value),
  value,
});
const createTableRowsData = (rows) =>
  rows.map((row) => row.map(createTableCell));

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

autorun(() => {
  var optionArray = ["Yes because ", "No because "];
  if (radio1.data.selected) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    if (radio1.data.selected != radio1.data.last) {
      let chosen = radio1.data.options[parseInt(radio1.data.selected)].label;
      let sentStart = chosen.replace(".", ","); // in this example, the choices ended with periods
      input1.updateData({ text: optionArray[radio1.data.selected] });
      radio1.updateData({ last: radio1.data.selected });
    }
  }
});

let xValues6 = [];
let yValues6 = [];

utils.RTS.on("datachange", "slide-1a0fd993032e", (register) => {
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { a, b, c, d, e, f, total, total2, total3 } = data;
    // let xValues6 = [];
    // let yValues6 = [];
    if (total == 6) {
      xValues6.push(a);
      yValues6.push(b);
    }
    if (total2 == 6) {
      xValues6.push(c);
      yValues6.push(d);
    }
    if (total3 == 6) {
      xValues6.push(e);
      yValues6.push(f);
    }
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

utils.RTS.on("datachange", "slide-8e74cc3defa1", (register) => {
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { g, h, i, j, k, l, total4, total5, total6 } = data;
    if (total4 == 6) {
      xValues6.push(g);
      yValues6.push(h);
    }
    if (total5 == 6) {
      xValues6.push(i);
      yValues6.push(j);
    }
    if (total6 == 6) {
      xValues6.push(k);
      yValues6.push(l);
    }
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
