const { ggb1, table1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

/*slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});*/

const id1 = 'slide-e0d1b46cc4af';

const id1Table = getPrevTable(id1, 'table1', 11, 10);

ggb1.instance.evalCommand('data={}');

buttonGroup1.updateSingleButton({ disabled: false }, 1);
buttonGroup1.updateSingleButton({ disabled: true }, 2);

for (let i = 0, L = table1.data.rows.length; i < L; i++) {
  table1.updateCell(i, 1, { value: `` });
}

for (let j = 1; j < 11; j = j + 2) {
  for (let i = 0; i < 11; i++) {
    let cellInput = parseInt(id1Table.getCell(i, j).value);
    let actualVal = parseInt(id1Table.getCell(i, j - 1).value);
    if (cellInput > 0) {
      for (let h = 0; h < cellInput; h++) {
        ggb1.instance.evalCommand(`SetValue(data,Append(data,${actualVal}))`);
      }
    }
  }
}

buttonGroup1.on('click:1', () => {
  if (ggb1.instance.getValue('ready')) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    table1.updateCell(0, 1, { value: `$${ggb1.instance.getValue('min')}$` });
    table1.updateCell(1, 1, { value: `$${ggb1.instance.getValue('Q1')}$` });
    table1.updateCell(2, 1, { value: `$${ggb1.instance.getValue('median')}$` });
    table1.updateCell(3, 1, { value: `$${ggb1.instance.getValue('Q3')}$` });
    table1.updateCell(4, 1, { value: `$${ggb1.instance.getValue('max')}$` });
  }
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  for (let i = 0, L = table1.data.rows.length; i < L; i++) {
    table1.updateCell(i, 1, { value: `` });
  }
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
  prevTable.getCell = function (row, col, leaveBlanks = false) {
    const emptyVal = leaveBlanks ? '' : this.data.goBackString;
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
{"compTotals":{"geogebra":1,"table":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M6 TC L15 - Print Alt: More Practice with Box Plots","teacherView":true,"layout":"two col"}
*/
