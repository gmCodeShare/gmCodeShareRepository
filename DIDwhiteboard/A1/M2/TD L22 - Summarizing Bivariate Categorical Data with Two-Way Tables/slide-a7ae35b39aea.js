const {
  text1,
  table1,
  table2,
  separator2,
  buttonGroup1,
  feedback1,
  cc_submit_078e9f489aac_textbox1,
  cc_submit_078e9f489aac_input1,
  cc_submit_078e9f489aac_button1: button1,
  separator1,
  cc_sharewithclass_58b799b2ab17_textbox1: text3,
  cc_sharewithclass_58b799b2ab17_input1: input2,
  cc_sharewithclass_58b799b2ab17_button1: button2,
  cc_sharewithclass_58b799b2ab17_studentanswers1,
} = components;

text1.updateData({ align: "center" });

slide.on("firstload", () => {
  text3.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  table2.updateData({ visible: false });
});

button1.on("click", () => {
  text3.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
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
  let englishMoverCount = 0;
  let mathMoverCount = 0;
  let connectorCount = 0;
  let englishConnectorCount = 0;
  let mathConnectorCount = 0;
  let thinkerCount = 0;
  let englishThinkerCount = 0;
  let mathThinkerCount = 0;
  let plannerCount = 0;
  let englishPlannerCount = 0;
  let mathPlannerCount = 0;
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
    if (mover == 1 && choiceVal == 1) {
      englishMoverCount++;
    }
    if (mover == 1 && choiceVal == 2) {
      mathMoverCount++;
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
    if (thinker == 1 && choiceVal == 1) {
      englishThinkerCount++;
    }
    if (thinker == 1 && choiceVal == 2) {
      mathThinkerCount++;
    }
    if (planner == 1) {
      plannerCount++;
    }
    if (planner == 1 && choiceVal == 1) {
      englishPlannerCount++;
    }
    if (planner == 1 && choiceVal == 2) {
      mathPlannerCount++;
    }
  });
  let total = moverCount + connectorCount + thinkerCount + plannerCount;
  let englishConnectorCell =
    Math.round((englishConnectorCount / total) * 100) / 100;
  let mathConnectorCell = Math.round((mathConnectorCount / total) * 100) / 100;
  let connectorCell = Math.round((connectorCount / total) * 100) / 100;
  let englishMoverCell = Math.round((englishMoverCount / total) * 100) / 100;
  let mathMoverCell = Math.round((mathMoverCount / total) * 100) / 100;
  let moverCell = Math.round((moverCount / total) * 100) / 100;
  let englishPlannerCell =
    Math.round((englishPlannerCount / total) * 100) / 100;
  let mathPlannerCell = Math.round((mathPlannerCount / total) * 100) / 100;
  let plannerCell = Math.round((plannerCount / total) * 100) / 100;
  let englishThinkerCell =
    Math.round((englishThinkerCount / total) * 100) / 100;
  let mathThinkerCell = Math.round((mathThinkerCount / total) * 100) / 100;
  let thinkerCell = Math.round((thinkerCount / total) * 100) / 100;
  let mathCell = Math.round((mathCount / total) * 100) / 100;
  let englishCell = Math.round((englishCount / total) * 100) / 100;
  table2.updateCell(0, 1, { value: `$${mathConnectorCell}$` });
  table2.updateCell(1, 1, { value: `$${englishConnectorCell}$` });
  table2.updateCell(2, 1, { value: `$${connectorCell}$` });
  table2.updateCell(0, 2, { value: `$${mathMoverCell}$` });
  table2.updateCell(1, 2, { value: `$${englishMoverCell}$` });
  table2.updateCell(2, 2, { value: `$${moverCell}$` });
  table2.updateCell(0, 3, { value: `$${mathPlannerCell}$` });
  table2.updateCell(1, 3, { value: `$${englishPlannerCell}$` });
  table2.updateCell(2, 3, { value: `$${plannerCell}$` });
  table2.updateCell(0, 4, { value: `$${mathThinkerCell}$` });
  table2.updateCell(1, 4, { value: `$${englishThinkerCell}$` });
  table2.updateCell(2, 4, { value: `$${thinkerCell}$` });
  table2.updateCell(0, 5, { value: `$${mathCell}$` });
  table2.updateCell(1, 5, { value: `$${englishCell}$` });
  table1.updateCell(0, 1, { value: `$\\frac${mathConnectorCount}${total}$` });
  table1.updateCell(1, 1, {
    value: `$\\frac${englishConnectorCount}${total}$`,
  });
  table1.updateCell(2, 1, { value: `$\\frac${connectorCount}${total}$` });
  table1.updateCell(0, 2, { value: `$\\frac${mathMoverCount}${total}$` });
  table1.updateCell(1, 2, { value: `$\\frac${englishMoverCount}${total}$` });
  table1.updateCell(2, 2, { value: `$\\frac${moverCount}${total}$` });
  table1.updateCell(0, 3, { value: `$\\frac${mathPlannerCount}${total}$` });
  table1.updateCell(1, 3, { value: `$\\frac${englishPlannerCount}${total}$` });
  table1.updateCell(2, 3, { value: `$\\frac${plannerCount}${total}$` });
  table1.updateCell(0, 4, { value: `$\\frac${mathThinkerCount}${total}$` });
  table1.updateCell(1, 4, { value: `$\\frac${englishThinkerCount}${total}$` });
  table1.updateCell(2, 4, { value: `$\\frac${thinkerCount}${total}$` });
  table1.updateCell(0, 5, { value: `$\\frac${mathCount}${total}$` });
  table1.updateCell(1, 5, { value: `$\\frac${englishCount}${total}$` });
  table1.updateCell(2, 5, { value: `$\\frac${total}${total}$` });
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

const indexStartingInOne = 1;

function updateSingleButtonGroup(indexStartingInOne, data, buttonGroup1) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroup1.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data }; // Merge the single button data with the respective button using the index
    } else {
      newButtonGroupData[i] = bgButtons[i]; // Every other button remain the same
    }
  }
  buttonGroup1.updateData({ buttons: newButtonGroupData }); // Run updateData over buttons prop
}

buttonGroup1.on("click:1", () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  table1.updateData({ visible: true });
  table2.updateData({ visible: false });
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  table1.updateData({ visible: false });
  table2.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":2,"table":2,"separator":2,"buttongroup":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TD L22 - Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":false,"layout":"two col"}
*/
