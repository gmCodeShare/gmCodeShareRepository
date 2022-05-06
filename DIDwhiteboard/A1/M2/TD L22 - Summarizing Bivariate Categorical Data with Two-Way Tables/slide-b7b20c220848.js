const {
  text1,
  ggb1,
  feedback1,
  text4,
  table2,
  text2,
  table1,
  button1,
  separator1,
  cc_sharewithclass_0e19b2ecfaa8_textbox1: text3,
  cc_sharewithclass_0e19b2ecfaa8_input1: input1,
  cc_sharewithclass_0e19b2ecfaa8_button1: button2,
  cc_sharewithclass_0e19b2ecfaa8_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
text1.updateData({ align: "center" });
text2.updateData({ align: "center" });
button1.updateData({ align: "right" });

slide.on("firstload", () => {
  text3.updateData({ visible: false });
  input1.updateData({ visible: false });
  button2.updateData({ visible: false });
});

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
const rowsContent2 =
  getFromSlide("slide-b266a791cd1c", "table1.data.rows", defRows) || defRows;

table2.updateCell(2, 1, {
  value: rowsContent[2][1].value,
  math: true,
  editable: false,
});
table2.updateCell(2, 2, {
  value: rowsContent[2][2].value,
  math: true,
  editable: false,
});
table2.updateCell(2, 3, {
  value: rowsContent[2][3].value,
  math: true,
  editable: false,
});
table2.updateCell(2, 4, {
  value: rowsContent[2][4].value,
  math: true,
  editable: false,
});
table2.updateCell(2, 5, {
  value: rowsContent[2][5].value,
  math: true,
  editable: false,
});
table2.updateCell(0, 5, {
  value: rowsContent[0][5].value,
  math: true,
  editable: false,
});
table2.updateCell(1, 5, {
  value: rowsContent[1][5].value,
  math: true,
  editable: false,
});
table2.updateCell(0, 1, {
  value: rowsContent2[0][1].value,
  math: true,
  editable: false,
});
table2.updateCell(0, 2, {
  value: rowsContent2[0][2].value,
  math: true,
  editable: false,
});
table2.updateCell(0, 3, {
  value: rowsContent2[0][3].value,
  math: true,
  editable: false,
});
table2.updateCell(0, 4, {
  value: rowsContent2[0][4].value,
  math: true,
  editable: false,
});
table2.updateCell(1, 1, {
  value: rowsContent2[1][1].value,
  math: true,
  editable: false,
});
table2.updateCell(1, 2, {
  value: rowsContent2[1][2].value,
  math: true,
  editable: false,
});
table2.updateCell(1, 3, {
  value: rowsContent2[1][3].value,
  math: true,
  editable: false,
});
table2.updateCell(1, 4, {
  value: rowsContent2[1][4].value,
  math: true,
  editable: false,
});

autorun(() => {
  let entries = [
    table1.getCell(0, 2).value,
    table1.getCell(0, 3).value,
    table1.getCell(0, 4).value,
    table1.getCell(0, 5).value,
    table1.getCell(1, 2).value,
    table1.getCell(1, 3).value,
    table1.getCell(1, 4).value,
    table1.getCell(1, 5).value,
    table1.getCell(2, 2).value,
    table1.getCell(2, 3).value,
    table1.getCell(2, 4).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: "Submit",
      disabled: !entries.every((value) => !!value),
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
  button1.updateData({ text: "Submitted", disabled: true });
  text3.updateData({ visible: true });
  input1.updateData({ visible: true });
  button2.updateData({ visible: true });
  let num4 = table1.getCell(0, 2).value;
  let num6 = table1.getCell(0, 3).value;
  let num8 = table1.getCell(0, 4).value;
  let num3 = table1.getCell(1, 2).value;
  let num5 = table1.getCell(1, 3).value;
  let num7 = table1.getCell(1, 4).value;
  const min = 0;
  const max = 100;

  num3 = boundIt(num3, 1, 2, min, max);
  num4 = boundIt(num4, 0, 2, min, max);
  num5 = boundIt(num5, 1, 3, min, max);
  num6 = boundIt(num6, 0, 3, min, max);
  num7 = boundIt(num7, 1, 4, min, max);
  num8 = boundIt(num8, 0, 4, min, max);

  ggb1.instance.setValue("y3", num4);
  ggb1.instance.setValue("y4", num3 + num4);
  ggb1.instance.setValue("y5", num6);
  ggb1.instance.setValue("y6", num5 + num6);
  ggb1.instance.setValue("y7", num8);
  ggb1.instance.setValue("y8", num7 + num8);
});

function boundIt(inp, row, column, min, max) {
  const result = utils.math.evaluateLatex(inp);
  if (result.error) {
    table1.updateCell(row, column, { value: `0` });
    return 0;
  } else if (result.value < min) {
    table1.updateCell(row, column, { value: `${inp}` });
    return inp;
  } else if (result.value > max) {
    table1.updateCell(row, column, { value: `${inp}` });
    return inp;
  }
  return result.value;
}

// Retrieving information
utils.RTS.on("datachange", "slide-0238f6cbbc1b", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse();
  let englishCount = 0;
  let mathCount = 0;
  let moverCount = 0;
  let connectorCount = 0;
  let englishConnectorCount = 0;
  let mathConnectorCount = 0;
  let thinkerCount = 0;
  let plannerCount = 0;
  lastRegister.forEach(({ data, info }) => {
    const { choiceVal, mover, connector, thinker, planner } = data;
    if (choiceVal == 1) {
      englishCount++;
    } else if (choiceVal == 2) {
      mathCount++;
    }
    if (mover == 1) {
      moverCount++;
    }
    if (connector == 1) {
      connectorCount++;
    }
    if (connector == 1 && choiceVal == 1) {
      englishConnectorCount++;
    }
    if (connector == 1 && choiceVal == 2) {
      mathConnectorCount++;
    }
    if (thinker == 1) {
      thinkerCount++;
    }
    if (planner == 1) {
      plannerCount++;
    }
  });
  let total = moverCount + connectorCount + thinkerCount + plannerCount;
  let englishCell = englishConnectorCount / total;
  let mathCell = mathConnectorCount / total;
  table1.updateCell(0, 1, { value: `$\\frac${mathConnectorCount}${total}$` });
  table1.updateCell(1, 1, {
    value: `$\\frac${englishConnectorCount}${total}$`,
  });
  table1.updateCell(2, 1, { value: `$\\frac${connectorCount}${total}$` });
  table1.updateCell(2, 5, { value: `$\\frac${total}${total}$` });
  ggb1.instance.setValue("y1", mathCell);
  ggb1.instance.setValue("y2", englishCell + mathCell);
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
{"compTotals":{"textbox":4,"geogebra":1,"table":2,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TD L22 - Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":false,"layout":"T layout"}
*/
