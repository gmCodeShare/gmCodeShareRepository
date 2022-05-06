const { table1, button1 } = components;

button1.updateData({ align: "right" });

const id1 = "slide-1a0fd993032e";
const id1Table1 = getPrevTable(id1, "table1");
const id1Table2 = getPrevTable(id1, "table2");

table1.updateCell(0, 0, { value: id1Table1.getCell(0, 0).value });
table1.updateCell(0, 1, { value: id1Table1.getCell(0, 2).value });
table1.updateCell(1, 0, { value: id1Table2.getCell(0, 0).value });
table1.updateCell(1, 1, { value: id1Table2.getCell(0, 2).value });
table1.updateCell(2, 0, { value: id1Table2.getCell(1, 0).value });
table1.updateCell(2, 1, { value: id1Table2.getCell(1, 2).value });

autorun(() => {
  let entries = table1.data.rows
    .map((row) => row.map((cell) => cell.value))
    .flat();
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: "Submit",
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: [...entries] });
  }
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

// let row1Total;
// let row2Total;
// let row3Total;
// let x1;
// let y1;
// let x2;
// let y2;
// let x3;
// let y3;
autorun(() => {
  // x1 = parseInt(table1.getCell(0, 0).value.replaceAll("$", ""));
  // y1 = parseInt(table1.getCell(0, 1).value.replaceAll("$", ""));
  // x2 = parseInt(table1.getCell(1, 0).value.replaceAll("$", ""));
  // y2 = parseInt(table1.getCell(1, 1).value.replaceAll("$", ""));
  // x3 = parseInt(table1.getCell(2, 0).value.replaceAll("$", ""));
  // y3 = parseInt(table1.getCell(2, 1).value.replaceAll("$", ""));
  // row1Total = x1 + y1;
  // row2Total = x2 + y2;
  // row3Total = x3 + y3;
});

let now = controls.current;
autorun(() => {
  const rowEntries = table1.data.rows
    .map((row) => row.map((cell) => cell.value))
    .flat();
  const [
    trash1,
    trash2,
    trash3,
    trash4,
    trash5,
    trash6,
    x1,
    y1,
    x2,
    y2,
    x3,
    y3,
  ] = rowEntries;
  // const row1Total = x1 + y1;
  // const row2Total = x2 + y2;
  // const row3Total = x3 + y3;
  // let total4 = 0;
  const result = utils.math.evaluateLatex(x1);
  const result2 = utils.math.evaluateLatex(y1);
  // total4 = result.value - result2.value;
  // let total5 = 0;
  const result3 = utils.math.evaluateLatex(x2);
  const result4 = utils.math.evaluateLatex(y2);
  // total5 = result3.value - result4.value;
  // let total6 = 0;
  const result5 = utils.math.evaluateLatex(x3);
  const result6 = utils.math.evaluateLatex(y3);
  // total6 = result5.value - result6.value;
  // round all values to 13 decimal places to avoid junk decimals
  const [row1Total, row2Total, row3Total, total4, total5, total6] = [
    x1 + y1,
    x2 + y2,
    x3 + y3,
    result.value - result2.value,
    result3.value - result4.value,
    result5.value - result6.value,
  ].map((val) => round(val, 13));
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-8e74cc3defa1", {
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      row1Total,
      row2Total,
      row3Total,
      g: x1,
      h: y1,
      i: x2,
      j: y2,
      k: x3,
      l: y3,
      total4,
      total5,
      total6,
    });
  }
});

// library

function getPrevTable(
  slideID,
  compName = "table1",
  inpRows = 0,
  inpColumns = 0
) {
  // find slide num of source
  const slideNum = ((slideId) => {
    if (
      typeof controls == "undefined" ||
      !controls.slidesNavigationData?.length
    ) {
      return "missing slide!";
    }
    let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
    return allIds.indexOf(slideId) + 1;
  })(slideID);
  // establish default in same data structure as original
  let defTable = {
    data: { columns: [], rows: [] },
  };
  const prelimTable = getFromSlide(slideID, compName, defTable) || defTable;
  const numRows = !!prelimTable.data?.rows?.length
    ? prelimTable.data.rows.length
    : inpRows;
  const numColumns = !!prelimTable.data?.rows?.[0]?.length
    ? prelimTable.data.rows[0].length
    : inpColumns;
  for (let i = 0; i < numRows; i++) {
    let newRow = [];
    for (let j = 0; j < numColumns; j++) {
      newRow.push({ value: "" });
    }
    defTable.data.rows.push([...newRow]);
  }
  // get previous data
  let prevTable = getFromSlide(slideID, compName, defTable) || defTable;
  // check previous data, fill in useful data
  prevTable.data.hasData =
    // uncomment following line for original tables where students edit headers:
    //prevTable.data.columns.some(({ value }) => value) ||
    prevTable.data.rows.some((row) =>
      row.some(({ value, mixedText }) =>
        !!getMixed(mixedText) ? getMixed(mixedText) : value
      )
    );
  prevTable.data.isComplete =
    // uncomment following line for original tables where students edit headers:
    //prevTable.data.columns.every(({ value }) => value) &&
    prevTable.data.rows.every((row) =>
      row.every(({ value, mixedText }) =>
        !!getMixed(mixedText) ? getMixed(mixedText) : value
      )
    );
  prevTable.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
  prevTable.data.slideNum = slideNum;
  prevTable.data.flagText = prevTable.data.isComplete
    ? ""
    : prevTable.data.goBackString;
  // add some useful methods
  prevTable.getCell = function (row, col, leaveBlanks = false) {
    const emptyVal = leaveBlanks ? "" : this.data.goBackString;
    let value = this.data?.rows?.[row]?.[col]?.value
      ? this.data.rows[row][col].value
      : emptyVal;
    let mixedText = this.data?.rows?.[row]?.[col]?.mixedText
      ? [...this.data.rows[row][col].mixedText]
      : [{ children: [{ text: emptyVal }] }];
    return { ...this.data.rows[row][col], value, mixedText };
  };
  prevTable.fillCells = function (
    tableName,
    rowStart = 0,
    colStart = 0,
    leaveBlanks = false,
    cellUpdates = {}
  ) {
    const emptyVal = leaveBlanks ? "" : this.data.goBackString;
    for (let i = 0, L = numColumns; i < L; i++) {
      for (let j = 0, K = numRows; j < K; j++) {
        if (this.getCell(j, i).merged) {
          continue;
        }
        let cellVal = this.getCell(j, i, true).value
          ? this.getCell(j, i, true).value
          : emptyVal;
        const rawMixed = this.getCell(j, i, true).mixedText;
        const cellMixed = getMixed(rawMixed) ? getMixed(rawMixed) : emptyVal;
        const fillVal =
          this.getCell(j, i, true).inputType === "mixed" ? cellMixed : cellVal;
        components[tableName].updateCell(j + rowStart, i + colStart, {
          ...cellUpdates,
          value: fillVal,
        });
      }
    }
  };
  return { ...prevTable };
}

function getMixed(mixedText) {
  return mixedText[0]?.children
    .map((child) => {
      if (child.text) {
        return child.text;
      } else if (child.latex) {
        return `$${child.latex}$`;
      } else {
        return "";
      }
    })
    .filter((val) => !!val)
    .join("");
}

// library

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}
