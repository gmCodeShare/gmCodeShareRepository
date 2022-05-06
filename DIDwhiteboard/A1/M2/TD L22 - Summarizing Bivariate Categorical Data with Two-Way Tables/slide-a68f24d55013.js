const {
  text1,
  table1,
  table2,
  feedback1,
  cc_submit_ac96ce5dfb2f_textbox1,
  cc_submit_ac96ce5dfb2f_input1,
  cc_submit_ac96ce5dfb2f_button1: button1,
  separator3,
  cc_submit_bbae0c7fac62_textbox1: text3,
  cc_submit_bbae0c7fac62_input1: input2,
  cc_submit_bbae0c7fac62_button1: button2,
  separator4,
  cc_sharewithclass_106b0fc21d56_textbox1: text4,
  cc_sharewithclass_106b0fc21d56_input1: input3,
  cc_sharewithclass_106b0fc21d56_button1: button3,
  cc_sharewithclass_106b0fc21d56_studentanswers1,
} = components;

text1.updateData({ align: "center" });

slide.on("firstload", () => {
  text3.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  text4.updateData({ visible: false });
  input3.updateData({ visible: false });
  button3.updateData({ visible: false });
});

button1.on("click", () => {
  text3.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

button2.on("click", () => {
  text4.updateData({ visible: true });
  input3.updateData({ visible: true });
  button3.updateData({ visible: true });
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
{"compTotals":{"textbox":2,"table":2,"submit":2,"separator":2,"sharewithclass":1},"stage":"Launch","lessonInfo":"9 M2 TD L22 - Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":false,"layout":"two col"}
*/
