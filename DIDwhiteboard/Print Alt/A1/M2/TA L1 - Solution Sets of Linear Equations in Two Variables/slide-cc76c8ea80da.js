const { table1, buttonGroup1, ggb1 } = components;

const id1 = "slide-d089868d12ee";

const id1Table1 = getPrevTable(id1, "table1", 6, 2);

id1Table1.fillCells("table1");

for (let i = 0, L = id1Table1.data.rows.length; i < L; i++) {
  let row = id1Table1.data.rows[i];
  let x = utils.math.evaluateLatex(row[0].value);
  let y = utils.math.evaluateLatex(row[1].value);
  if (!x.error && !y.error) {
    ggb1.instance.setCoords(`Point${i + 1}`, x.value, y.value);
    table1.updateCell(i, 2, { value: `(${x.value},${y.value})` });
  }
}

slide.on("firstload", () => {
  showPoints(1, 25, false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

buttonGroup1.on("click:1", () => {
  showPoints(1, 6);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

function showPoints(start, end, vis = true) {
  for (let i = start - 1, L = end; i < L; i++) {
    ggb1.instance.setVisible(`Point${i + 1}`, vis);
  }
}

/* buttonGroup1.on("click:2", () => {
  ggb1.instance.evalCommand("RunClickScript(button2)");
});

buttonGroup1.on("click:3", () => {
  ggb1.instance.evalCommand("RunClickScript(button1)");
}); */

function getPrevTable(slideID, compName = "table1", numRows, numColumns) {
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
  for (let i = 0; i < numRows; i++) {
    let newRow = [];
    for (let j = 0; j < numColumns; j++) {
      newRow.push({ value: "" });
      if (i === 0) {
        defTable.data.columns.push({ value: "" });
      }
    }
    defTable.data.rows.push([...newRow]);
  }
  // get previous data
  let prevTable = getFromSlide(slideID, compName, defTable) || defTable;
  // check previous data, fill in useful data
  prevTable.data.hasData =
    prevTable.data.columns.some(({ value }) => value) ||
    prevTable.data.rows.some((row) => row.some(({ value }) => value));
  prevTable.data.isComplete =
    prevTable.data.columns.every(({ value }) => value) &&
    prevTable.data.rows.every((row) => row.every(({ value }) => value));
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
    return { ...this.data.rows[row][col], value };
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
        let cellVal = this.getCell(j, i, true).value
          ? this.getCell(j, i, true).value
          : emptyVal;
        components[tableName].updateCell(j + rowStart, i + colStart, {
          ...cellUpdates,
          value: cellVal,
        });
      }
    }
  };
  return { ...prevTable };
}

/*
{"compTotals":{"table":1,"buttongroup":1,"geogebra":1},"stage":"Launch","lessonInfo":"9 M2 TA L01 - Print Alternate Slide Deck for Solution Sets of Linear Equations in Two Variables","teacherView":true,"layout":"two col"}
*/
