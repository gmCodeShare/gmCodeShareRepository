const { ggb1, text1, table1, button1, select1 } = components;

ggb1.instance.setErrorDialogsActive(false);

const min = -300;
const max = 300;

slide.on('firstload', () => {
  text1.updateData({ visibilityBehavior: 'hide' });
  ggb1.instance.setFixed('h', true, false);
});

select1.on('change', ({ selected }) => {
  const entries = buttonAndSelectFunction();
  ggb1.instance.setValue('showLine', false);
  entries.forEach((el, index) => {
    table1.updateCell(index + 1, 2, { value: '' });
  });
  text1.updateData({ visible: false });
  selected.forEach((el) => {
    switch (el) {
      case '0':
        ggb1.instance.setValue('showLine', true);
        break;
      case '1':
        showRatios(entries);
        break;
      case '2':
        findMean(entries);
        break;
      default:
        console.warn('error in select component switch statement');
        break;
    }
  });
});

button1.on('click', () => {
  const entries = buttonAndSelectFunction();
  if (select1.data.selected.includes('1')) {
    showRatios(entries);
  }
  if (select1.data.selected.includes('2')) {
    findMean(entries);
  }
});

function buttonAndSelectFunction() {
  const entries = (function () {
    tempArray = [];
    for (let i = 1, L = table1.data.rows.length; i < L; i++) {
      tempArray.push([table1.getCell(i, 0).value, table1.getCell(i, 1).value]);
    }
    return tempArray;
  })();
  if (
    entries[entries.length - 1][0] === '' &&
    entries[entries.length - 1][1] === ''
  ) {
    entries.pop();
  } else {
    // add a row
    table1.addRow(entries.length + 1);
    table1.updateCell(entries.length + 1, 2, {
      editable: false,
    });
  }
  if (entries.length > 0) {
    for (let i = 0, L = entries.length; i < L; i++) {
      //eval cell values and adjust as needed
      let tempCelli0 = parseInt(entries[i][0]);
      let tempCelli1 = parseInt(entries[i][1]);
      tempCelli0 = boundIt(tempCelli0, i + 1, 0, min, max);
      tempCelli1 = boundIt(tempCelli1, i + 1, 1, min, max);
      //make points
      ggb1.instance.deleteObject('P' + i);
      ggb1.instance.evalCommand(
        'P' + i + ': (' + tempCelli0 + ', ' + tempCelli1 + ')'
      );
      ggb1.instance.setFixed('P' + i, true, false);
      ggb1.instance.setColor('P' + i, 0, 127, 175);
      ggb1.instance.evalCommand('SetValue(data, Append(data, P' + i + '))');
    }
    addedPoints();
    let allLines = ggb1.instance.getAllObjectNames('line');
    for (let i = 0, L = allLines.length; i < L; i++) {
      ggb1.instance.setFixed(allLines[i], false, false);
      ggb1.instance.setColor(allLines[i], 0, 0, 0);
    }
  }
  return entries;
}

function showRatios(entries) {
  entries.forEach((el, index) => {
    let tempCellText = `\\text{check inputs}`;
    if (el[0] === '0') {
      tempCellText = `\\text{undefined}`;
    } else {
      const tempVal = round(el[1] / el[0], 2);
      tempCellText = isNaN(tempVal) ? `\\text{undefined}` : tempVal;
    }
    table1.updateCell(index + 1, 2, { value: tempCellText });
  });
}

function findMean(entries) {
  const mean = (function () {
    tempArray = [];
    const numOfEntries = entries.length;
    if (numOfEntries === 0) {
      return '';
    } else {
      for (let i = 0, L = numOfEntries; i < L; i++) {
        let tempVal = table1.getCell(i + 1, 2).value;
        if (typeof tempVal === 'number') {
          tempArray.push(table1.getCell(i + 1, 2).value);
        }
      }
      if (tempArray.length > 0) {
        const meanAvg = round(
          tempArray.reduce((acc, next) => acc + next) / tempArray.length,
          2
        );
        return meanAvg;
      } else {
        return '';
      }
    }
  })();
  text1.updateData({
    text:
      typeof mean === 'number'
        ? `Mean of Ratios: $${mean}$`
        : `Mean of Ratios:`,
    visible: true,
  });
}

function boundIt(inp, row, column, min, max) {
  if (isNaN(inp)) {
    table1.updateCell(row, column, { value: `0` });
    return 0;
  } else if (inp < min) {
    table1.updateCell(row, column, { value: `${min}` });
    return min;
  } else if (inp > max) {
    table1.updateCell(row, column, { value: `${max}` });
    return max;
  }
  return inp;
}

function addedPoints() {
  let nums = [];
  for (let i = 0, l = table1.data.rows.length; i < l; i++) {
    nums.push(ggb1.instance.getXcoord('P' + i));
    nums.push(ggb1.instance.getYcoord('P' + i));
  }
  let ggbMax = Math.max(...nums);
  if (ggbMax > 10) {
    ggb1.instance.setValue('max', ggbMax + 2);
  } else {
    ggb1.instance.setValue('max', 11);
  }
}

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
