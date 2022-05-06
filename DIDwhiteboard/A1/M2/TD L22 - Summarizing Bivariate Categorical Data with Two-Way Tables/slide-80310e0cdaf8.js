const { text1, table1, table2, feedback1 } = components;

text1.updateData({ align: "center" });

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
  table1.updateCell(0, 1, {
    value: `$${connectorCount}$`,
    math: true,
    editable: false,
  });
  table1.updateCell(1, 1, {
    value: `$${moverCount}$`,
    math: true,
    editable: false,
  });
  table1.updateCell(2, 1, {
    value: `$${plannerCount}$`,
    math: true,
    editable: false,
  });
  table1.updateCell(3, 1, {
    value: `$${thinkerCount}$`,
    math: true,
    editable: false,
  });
  table2.updateCell(0, 1, {
    value: `$${mathCount}$`,
    math: true,
    editable: false,
  });
  table2.updateCell(1, 1, {
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
{"compTotals":{"textbox":2,"table":2},"stage":"Launch","lessonInfo":"9 M2 TD L22 - Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":true,"layout":"one col"}
*/
