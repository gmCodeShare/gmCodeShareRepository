const { text1, ggb1, table1, ggb2, table2, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

const createTableCell = (value) => ({
  editable: false,
  math: !isNaN(value),
  value,
});
const createTableRowsData = (rows) =>
  rows.map((row) => row.map(createTableCell));

const prev64 = getFromSlide("slide-15596c4169b5", "ggb2.data.save64", "") || "";

if (prev64) {
  ggb1.instance.setBase64(prev64, configApp);
}

function configApp() {
  let allPenstrokes = ggb1.instance.getAllObjectNames("penstroke");
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let allLines = ggb1.instance.getAllObjectNames("line");
  for (let i = 0; i < allPoints.length; i++) {
    ggb1.instance.setFixed(allPoints[i], false, false);
  }
  for (let i = 0; i < allLines.length; i++) {
    ggb1.instance.setFixed(allLines[i], false, false);
  }
  for (let i = 0; i < allPenstrokes.length; i++) {
    ggb1.instance.setFixed(allPenstrokes[i], false, false);
  }
}

const prev642 =
  getFromSlide("slide-1cba24759350", "ggb2.data.save64", "") || "";

if (prev642) {
  ggb2.instance.setBase64(prev642, configApp2);
}

function configApp2() {
  let allPenstrokes = ggb2.instance.getAllObjectNames("penstroke");
  let allPoints = ggb2.instance.getAllObjectNames("point");
  let allLines = ggb2.instance.getAllObjectNames("line");
  for (let i = 0; i < allPoints.length; i++) {
    ggb2.instance.setFixed(allPoints[i], false, false);
  }
  for (let i = 0; i < allLines.length; i++) {
    ggb2.instance.setFixed(allLines[i], false, false);
  }
  for (let i = 0; i < allPenstrokes.length; i++) {
    ggb2.instance.setFixed(allPenstrokes[i], false, false);
  }
}

slide.on("firstload", () => {
  ggb1.instance.setVisible("C1", true);
  ggb2.updateData({ visible: false });
  table2.updateData({ visible: false });
  text1.updateData({ text: "$25$ kilometers" });
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
});

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
  ggb1.instance.setVisible("C1", true);
  text1.updateData({ text: "$25$ kilometers" });
  ggb1.updateData({ visible: true });
  table1.updateData({ visible: true });
  ggb2.updateData({ visible: false });
  table2.updateData({ visible: false });
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  text1.updateData({ text: "$25$ songs" });
  ggb2.instance.setVisible("C2", true);
  ggb1.updateData({ visible: false });
  table1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
  table2.updateData({ visible: true });
});

utils.RTS.on("datachange", "slide-102b2e9edb49", (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("pointList={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { distance, remaining } = data;
    ggb1.instance.evalCommand(
      "SetValue(pointList,Append(pointList,(" +
        distance +
        "," +
        remaining +
        ")))"
    );
    let xValues6 = [];
    let yValues6 = [];
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

utils.RTS.on("datachange", "slide-fd85e50c42c6", (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb2.instance.evalCommand("pointList={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { distance, remaining } = data;
    ggb2.instance.evalCommand(
      "SetValue(pointList,Append(pointList,(" +
        distance +
        "," +
        remaining +
        ")))"
    );
    let xValues6 = [];
    let yValues6 = [];
    xValues6.push(distance);
    yValues6.push(remaining);
    for (let j = 0, L = xValues6.length; j < L; j++) {
      let matches = 0;
      for (let i = 0, L = table2.data.rows.length; i < L; i++) {
        let xCheck = table2.getCell(i, 0).value;
        if (xCheck == xValues6[j]) {
          matches++;
        }
      }
      if (matches == 0) {
        let newRow = createTableRowsData([
          [`${xValues6[j]}`, `${yValues6[j]}`],
        ]);
        let allRows = [...table2.data.rows, ...newRow];
        table2.updateData({ rows: allRows });
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
