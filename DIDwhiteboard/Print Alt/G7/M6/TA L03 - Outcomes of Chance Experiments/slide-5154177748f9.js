const { table1 } = components;

rightSideUpArray = [];
upsideDownArray = [];
sideArray = [];

const id1 = 'slide-82d25bfb889b';

const id1Table = getPrevTable(id1, 'table1', 40, 3);

for (var i = 0, L = id1Table.data.rows.length; i < L; i++) {
  let rightSideUpVal = utils.math.evaluateLatex(id1Table.getCell(i, 0).value)
    .value;
  let upsideDownVal = utils.math.evaluateLatex(id1Table.getCell(i, 1).value)
    .value;
  let sideVal = utils.math.evaluateLatex(id1Table.getCell(i, 2).value).value;
  rightSideUpArray.push(rightSideUpVal);
  upsideDownArray.push(upsideDownVal);
  sideArray.push(sideVal);
}

let rightSideUpCount = rightSideUpArray.reduce((a, b) => a + b, 0);
let upsideDownCount = upsideDownArray.reduce((a, b) => a + b, 0);
let sideCount = sideArray.reduce((a, b) => a + b, 0);

table1.updateCell(0, 1, {
  value: `$${rightSideUpCount}$`,
});

table1.updateCell(0, 2, {
  value: `$${upsideDownCount}$`,
});

table1.updateCell(0, 3, {
  value: `$${sideCount}$`,
});

function getPrevTable(slideID, compName = 'table1', numRows, numColumns) {
  // find slide num of source
  const slideNum = ((slideId) => {
    if (
      typeof controls == 'undefined' ||
      !controls.slidesNavigationData?.length
    ) {
      return 'missing slide!';
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
      newRow.push({ value: '' });
      if (i === 0) {
        defTable.data.columns.push({ value: '' });
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
    ? ''
    : prevTable.data.goBackString;
  // add some useful methods
  prevTable.getCell = function(row, col, leaveBlanks = false) {
    const emptyVal = leaveBlanks ? '' : this.data.goBackString;
    let value = this.data?.rows?.[row]?.[col]?.value
      ? this.data.rows[row][col].value
      : emptyVal;
    return { ...this.data.rows[row][col], value };
  };
  prevTable.fillCells = function(
    tableName,
    rowStart = 0,
    colStart = 0,
    leaveBlanks = false,
    cellUpdates = {}
  ) {
    const emptyVal = leaveBlanks ? '' : this.data.goBackString;
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
{"compTotals":{"table":1},"stage":"Learn","lessonInfo":"7 M6 TA L03 - Print Alt: Outcomes of Chance Experiments","teacherView":true,"layout":"one col"}
*/
