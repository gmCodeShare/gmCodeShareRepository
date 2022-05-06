const {
  text1,
  table1,
  button2,
  feedback1,
  text2,
  text3,
  text4,
  text5,
  button1,
} = components;

text1.updateData({ align: "center" });

slide.on("firstload", () => {
  button1.updateData({ visible: false });
  button2.updateData({ disabled: true });
  table1.updateData({ count: 0 });
  text3.updateData({
    visible: true,
    text: `$${num}$ of the students with the mover personality type prefer English.`,
  });
  text4.updateData({
    text: `$${num}$ of the students with the mover personality type prefer English.\n\n$${num2}$ of the students with the thinker personality type prefer Math.`,
  });
  text5.updateData({
    text: `$${num}$ of the students with the mover personality type prefer English.\n\n$${num2}$ of the students with the thinker personality type prefer Math.\n\n$${num3}$ of the students with the connector personality type prefer Math.`,
  });
  text4.updateData({ visible: false });
  text5.updateData({ visible: false });
});

let num = 0;
let num2 = 0;
let num3 = 0;

const defRows = [
  [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ],
  [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ],
  [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ],
];

const rowsContent =
  getFromSlide("slide-dcc43ecceb2e", "table1.data.rows", defRows) || defRows;

table1.updateCell(2, 1, {
  value: rowsContent[2][1].value,
  math: true,
  editable: false,
});
table1.updateCell(2, 2, {
  value: rowsContent[2][2].value,
  math: true,
  editable: false,
});
table1.updateCell(2, 3, {
  value: rowsContent[2][3].value,
  math: true,
  editable: false,
});
table1.updateCell(2, 4, {
  value: rowsContent[2][4].value,
  math: true,
  editable: false,
});
table1.updateCell(2, 5, {
  value: rowsContent[2][5].value,
  math: true,
  editable: false,
});
table1.updateCell(0, 5, {
  value: rowsContent[0][5].value,
  math: true,
  editable: false,
});
table1.updateCell(1, 5, {
  value: rowsContent[1][5].value,
  math: true,
  editable: false,
});

autorun(() => {
  let count = table1.data.count;
  let entries = [
    table1.getCell(0, 1).value,
    table1.getCell(0, 2).value,
    table1.getCell(0, 3).value,
    table1.getCell(0, 4).value,
    table1.getCell(1, 1).value,
    table1.getCell(1, 2).value,
    table1.getCell(1, 3).value,
    table1.getCell(1, 4).value,
  ];
  if (!arrayEquals(entries, table1.data.last) && count < 2) {
    button1.updateData({
      visible: true,
      disabled: !entries.some((value) => !!value),
    });
    button2.updateData({
      visible: true,
      disabled: !entries.some((value) => !!value),
    });
    table1.updateData({ last: [...entries] });
  }
  if (!arrayEquals(entries, table1.data.last) && count <= 2) {
    button2.updateData({
      visible: true,
      disabled: !entries.some((value) => !!value),
    });
    button1.updateData({
      visible: false,
    });
    table1.updateData({ last: [...entries] });
  }
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

button1.on("click", () => {
  let count = table1.data.count;
  if (count == 0) {
    text3.updateData({ visible: false });
    text4.updateData({ visible: true });
  }
  if (count == 1) {
    text4.updateData({ visible: false });
    text5.updateData({ visible: true });
    button1.updateData({ disabled: true, visible: false });
  }
  count++;
  table1.updateData({ count: count });
});

button2.on("click", () => {
  button2.updateData({ disabled: true });
  let connectorTotal = 0;
  let moverTotal = 0;
  let plannerTotal = 0;
  let thinkerTotal = 0;
  let mathTotal = 0;
  let englishTotal = 0;
  let overallTotal = 0;
  const result = utils.math.evaluateLatex(table1.getCell(0, 1).value);
  const result2 = utils.math.evaluateLatex(table1.getCell(1, 1).value);
  const result3 = utils.math.evaluateLatex(table1.getCell(0, 2).value);
  const result4 = utils.math.evaluateLatex(table1.getCell(1, 2).value);
  const result5 = utils.math.evaluateLatex(table1.getCell(0, 3).value);
  const result6 = utils.math.evaluateLatex(table1.getCell(1, 3).value);
  const result7 = utils.math.evaluateLatex(table1.getCell(0, 4).value);
  const result8 = utils.math.evaluateLatex(table1.getCell(1, 4).value);
  connectorTotal = result.value + result2.value;
  moverTotal = result3.value + result4.value;
  plannerTotal = result5.value + result6.value;
  thinkerTotal = result7.value + result8.value;
  mathTotal = result.value + result3.value + result5.value + result7.value;
  englishTotal = result2.value + result4.value + result6.value + result8.value;
  overallTotal =
    result.value +
    result3.value +
    result5.value +
    result7.value +
    result2.value +
    result4.value +
    result6.value +
    result8.value;
  if (connectorTotal == rowsContent[2][1].value) {
    table1.updateCell(2, 1, { className: "bg-success text-white" });
  } else {
    table1.updateCell(2, 1, { className: "bg-danger text-white" });
  }
  if (moverTotal == rowsContent[2][2].value) {
    table1.updateCell(2, 2, { className: "bg-success text-white" });
  } else {
    table1.updateCell(2, 2, { className: "bg-danger text-white" });
  }
  if (plannerTotal == rowsContent[2][3].value) {
    table1.updateCell(2, 3, { className: "bg-success text-white" });
  } else {
    table1.updateCell(2, 3, { className: "bg-danger text-white" });
  }
  if (thinkerTotal == rowsContent[2][4].value) {
    table1.updateCell(2, 4, { className: "bg-success text-white" });
  } else {
    table1.updateCell(2, 4, { className: "bg-danger text-white" });
  }
  if (mathTotal == rowsContent[0][5].value) {
    table1.updateCell(0, 5, { className: "bg-success text-white" });
  } else {
    table1.updateCell(0, 5, { className: "bg-danger text-white" });
  }
  if (englishTotal == rowsContent[1][5].value) {
    table1.updateCell(1, 5, { className: "bg-success text-white" });
  } else {
    table1.updateCell(1, 5, { className: "bg-danger text-white" });
  }
  if (overallTotal == rowsContent[2][5].value) {
    table1.updateCell(2, 5, { className: "bg-success text-white" });
  } else {
    table1.updateCell(2, 5, { className: "bg-danger text-white" });
  }
});

// Retrieving information
utils.RTS.on("datachange", "slide-0238f6cbbc1b", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse();
  let moverEnglishCount = 0;
  let mathThinkerCount = 0;
  let mathConnectorCount = 0;
  lastRegister.forEach(({ data, info }) => {
    const { choiceVal, mover, connector, thinker, planner } = data;
    if (choiceVal == 1 && mover == 1) {
      moverEnglishCount++;
    }
    if (choiceVal == 2 && thinker == 1) {
      mathThinkerCount++;
    }
    if (choiceVal == 2 && connector == 1) {
      mathConnectorCount++;
    }
  });
  num = moverEnglishCount;
  num2 = mathThinkerCount;
  num3 = mathConnectorCount;
  text3.updateData({
    text: `$${num}$ of the students with the mover personality type prefer English.`,
  });
  text4.updateData({
    text: `$${num}$ of the students with the mover personality type prefer English.\n\n$${num2}$ of the students with the thinker personality type prefer Math.`,
  });
  text5.updateData({
    text: `$${num}$ of the students with the mover personality type prefer English.\n\n$${num2}$ of the students with the thinker personality type prefer Math.\n\n$${num3}$ of the students with the connector personality type prefer Math.`,
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
{"compTotals":{"textbox":6,"table":1,"button":2},"stage":"Learn","lessonInfo":"9 M2 TD L22 - Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":false,"layout":"two col"}
*/
