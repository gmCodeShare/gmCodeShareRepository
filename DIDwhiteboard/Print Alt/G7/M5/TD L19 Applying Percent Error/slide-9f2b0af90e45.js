const { text1, textDisplay6, table1, textDisplay7, table2 } = components;

const id1 = 'slide-5a3e048387f9';
const id1Rows = getFromSlide(id1, 'table1.data.rows', []) || [];
const numRows = id1Rows.length;
const id1prevTable = getPrevTable(id1, 'table1', numRows, 3);

const createTableCell = (value) => ({
  editable: false,
  math: !isNaN(value),
  value,
});
const createTableRowsData = (rows) =>
  rows.map((row) => row.map(createTableCell));

const createTableCell2 = (value) => ({
  editable: false,
  math: !isNaN(value),
  value,
});
const createTableRowsData2 = (rows) =>
  rows.map((row) => row.map(createTableCell2));

const register = id1prevTable.data.rows.map((row) => ({
  capitol: { city: row[0].value },
  data: { estimate: row[2].value },
  info: { device: row[1].value },
}));

((register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  // Steps 1 through 4
  const rankedStudents = register
    .filter(({ data }) => !isNaN(data.estimate)) // Step 2: Discard non-numeric estimates
    .map(({ data, info, capitol }) => {
      let actualValue = 0; // Change this accordingly
      if (capitol.city.includes('Concord')) {
        actualValue = 348;
      } else if (capitol.city.includes('Olympia')) {
        actualValue = 2385;
      } else if (capitol.city.includes('Salt Lake City')) {
        actualValue = 1171;
      }
      const estimate = !!parseFloat(data.estimate)
        ? parseFloat(data.estimate)
        : id1prevTable.data.goBackString;
      const absValue = !!parseFloat(data.estimate)
        ? Math.abs(actualValue - data.estimate)
        : id1prevTable.data.goBackString;
      return [
        // Step 1: Map all necessary values
        capitol.city,
        info.device,
        estimate,
        actualValue,
        absValue,
      ];
    })
    .sort((a, b) => a[4] - b[4]) // Step 3: Sort by difference
    .map((student, i) => [i + 1, ...student]); // Step 4: Add Rank

  // Steps 1 through 4
  const rankedStudents2 = register
    .filter(({ data }) => !isNaN(data.estimate)) // Step 2: Discard non-numeric estimates
    .map(({ data, info, capitol }) => {
      let actualValue = 0; // Change this accordingly
      if (capitol.city.includes('Concord')) {
        actualValue = 348;
      } else if (capitol.city.includes('Olympia')) {
        actualValue = 2385;
      } else if (capitol.city.includes('Salt Lake City')) {
        actualValue = 1171;
      }
      const estimate = !!parseFloat(data.estimate)
        ? parseFloat(data.estimate)
        : id1prevTable.data.goBackString;
      const percent = !!parseFloat(data.estimate)
        ? (Math.abs(actualValue - data.estimate) / actualValue).toFixed(2) * 100
        : id1prevTable.data.goBackString;

      return [
        // Step 1: Map all necessary values
        capitol.city,
        info.device,
        estimate,
        actualValue,
        percent,
      ];
    })
    .sort((a, b) => a[4] - b[4]) // Step 3: Sort by difference
    .map((student, i) => [i + 1, ...student]); // Step 4: Add Rank

  console.log(rankedStudents, rankedStudents2);
  // Step 5: Map information into table's data format
  const tableRows = createTableRowsData(rankedStudents);

  // Step 5: Map information into table's data format
  const tableRows2 = createTableRowsData2(rankedStudents2);

  // Step 6: Update table
  table1.updateData({ rows: tableRows });
  table2.updateData({ rows: tableRows2 });
})(register);

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
{"compTotals":{"textbox":3,"table":2},"stage":"Learn","lessonInfo":"7 M5 TD L19 - Print Alternate Slide Deck for Applying Percent Error (digital)","teacherView":true,"layout":"T layout"}
*/
