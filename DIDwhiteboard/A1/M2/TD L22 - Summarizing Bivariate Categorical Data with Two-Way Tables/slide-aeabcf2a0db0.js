const { text1, table1, ggb1, feedback1, text2, table2, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
text1.updateData({ align: "center" });
text2.updateData({ align: "center" });

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
  let englishConnectorCell = englishConnectorCount / total;
  let mathConnectorCell = mathConnectorCount / total;
  let englishMoverCell = englishMoverCount / total;
  let mathMoverCell = mathMoverCount / total;
  let englishPlannerCell = englishPlannerCount / total;
  let mathPlannerCell = mathPlannerCount / total;
  let englishThinkerCell = englishThinkerCount / total;
  let mathThinkerCell = mathThinkerCount / total;
  ggb2.instance.setValue("y1", mathConnectorCell);
  ggb2.instance.setValue("y2", englishConnectorCell + mathConnectorCell);
  ggb2.instance.setValue("y3", mathMoverCell);
  ggb2.instance.setValue("y4", englishMoverCell + mathMoverCell);
  ggb2.instance.setValue("y5", mathPlannerCell);
  ggb2.instance.setValue("y6", englishPlannerCell + mathPlannerCell);
  ggb2.instance.setValue("y7", mathThinkerCell);
  ggb2.instance.setValue("y8", englishThinkerCell + mathThinkerCell);
  table2.updateCell(0, 1, { value: `$\\frac${mathConnectorCount}${total}$` });
  table2.updateCell(1, 1, {
    value: `$\\frac${englishConnectorCount}${total}$`,
  });
  table2.updateCell(2, 1, { value: `$\\frac${connectorCount}${total}$` });
  table2.updateCell(0, 2, { value: `$\\frac${mathMoverCount}${total}$` });
  table2.updateCell(1, 2, { value: `$\\frac${englishMoverCount}${total}$` });
  table2.updateCell(2, 2, { value: `$\\frac${moverCount}${total}$` });
  table2.updateCell(0, 3, { value: `$\\frac${mathPlannerCount}${total}$` });
  table2.updateCell(1, 3, { value: `$\\frac${englishPlannerCount}${total}$` });
  table2.updateCell(2, 3, { value: `$\\frac${plannerCount}${total}$` });
  table2.updateCell(0, 4, { value: `$\\frac${mathThinkerCount}${total}$` });
  table2.updateCell(1, 4, { value: `$\\frac${englishThinkerCount}${total}$` });
  table2.updateCell(2, 4, { value: `$\\frac${thinkerCount}${total}$` });
  table2.updateCell(0, 5, { value: `$\\frac${mathCount}${total}$` });
  table2.updateCell(1, 5, { value: `$\\frac${englishCount}${total}$` });
  table2.updateCell(2, 5, { value: `$\\frac${total}${total}$` });

  table1.updateCell(0, 1, { value: `$${mathConnectorCount}$` });
  table1.updateCell(1, 1, { value: `$${englishConnectorCount}$` });
  table1.updateCell(2, 1, { value: `$${connectorCount}$` });
  table1.updateCell(0, 2, { value: `$${mathMoverCount}$` });
  table1.updateCell(1, 2, { value: `$${englishMoverCount}$` });
  table1.updateCell(2, 2, { value: `$${moverCount}$` });
  table1.updateCell(0, 3, { value: `$${mathPlannerCount}$` });
  table1.updateCell(1, 3, { value: `$${englishPlannerCount}$` });
  table1.updateCell(2, 3, { value: `$${plannerCount}$` });
  table1.updateCell(0, 4, { value: `$${mathThinkerCount}$` });
  table1.updateCell(1, 4, { value: `$${englishThinkerCount}$` });
  table1.updateCell(2, 4, { value: `$${thinkerCount}$` });
  table1.updateCell(0, 5, { value: `$${mathCount}$` });
  table1.updateCell(1, 5, { value: `$${englishCount}$` });
  table1.updateCell(2, 5, { value: `$${total}$` });
  ggb1.instance.setValue("y1", mathConnectorCount);
  ggb1.instance.setValue("y2", englishConnectorCount + mathConnectorCount);
  ggb1.instance.setValue("y3", mathMoverCount);
  ggb1.instance.setValue("y4", englishMoverCount + mathMoverCount);
  ggb1.instance.setValue("y5", mathPlannerCount);
  ggb1.instance.setValue("y6", englishPlannerCount + mathPlannerCount);
  ggb1.instance.setValue("y7", mathThinkerCount);
  ggb1.instance.setValue("y8", englishThinkerCount + mathThinkerCount);
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
{"compTotals":{"textbox":3,"table":2,"geogebra":2},"stage":"Learn","lessonInfo":"9 M2 TD L22 - Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":true,"layout":"two col"}
*/
