const {
  text3,
  table2,
  table3,
  feedback1,
  text1,
  separator5,
  text2,
  table1,
  button1,
} = components;

text2.updateData({ align: "center" });
text3.updateData({ align: "center" });
button1.updateData({ align: "right" });

autorun(() => {
  let entries = [
    table1.getCell(2, 1).value,
    table1.getCell(2, 2).value,
    table1.getCell(2, 3).value,
    table1.getCell(2, 4).value,
    table1.getCell(2, 5).value,
    table1.getCell(0, 5).value,
    table1.getCell(1, 5).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: "Submit",
      disabled: !entries.every((value) => !!value), // use this for enabling only after all cells are filled
      //disabled: !entries.some((value) => !!value), // use this for enabling after any cell is filled
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
});

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
    if (thinker == 1) {
      thinkerCount++;
    }
    if (planner == 1) {
      plannerCount++;
    }
  });
  table2.updateCell(0, 1, {
    value: `$${connectorCount}$`,
    math: true,
    editable: false,
  });
  table2.updateCell(1, 1, {
    value: `$${moverCount}$`,
    math: true,
    editable: false,
  });
  table2.updateCell(2, 1, {
    value: `$${plannerCount}$`,
    math: true,
    editable: false,
  });
  table2.updateCell(3, 1, {
    value: `$${thinkerCount}$`,
    math: true,
    editable: false,
  });
  table3.updateCell(0, 1, {
    value: `$${mathCount}$`,
    math: true,
    editable: false,
  });
  table3.updateCell(1, 1, {
    value: `$${englishCount}$`,
    math: true,
    editable: false,
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
{"compTotals":{"textbox":4,"table":3,"separator":1,"button":1},"stage":"Learn","lessonInfo":"9 M2 TD L22 - Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":false,"layout":"two col"}
*/
