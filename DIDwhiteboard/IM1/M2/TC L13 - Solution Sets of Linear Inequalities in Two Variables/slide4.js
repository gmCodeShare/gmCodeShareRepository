const { cc_submit_c997e1f0e31b_input1: input1, table1 } = components;

const id1 = "slide-1a0fd993032e";

const id1Table1 = getPrevTable(id1, "table1");
const id1Table2 = getPrevTable(id1, "table2");

id1Table1.fillCells("table1", 1);
id1Table2.fillCells("table1", 2);

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
