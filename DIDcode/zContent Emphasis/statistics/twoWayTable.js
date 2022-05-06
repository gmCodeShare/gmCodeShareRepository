// automatic two-way table totaling
// assumes the left-most and right-most columns and bottom row are reserved for headers/totals

const { table1 } = components;

// these two functions could easily be put into a button click
autorun(() => {
  checkRows();
  checkColumns();
});

function checkRows() {
  let rows = [...table1.data.rows];
  // copy cell values: one small array per row, all in one big array
  let rowVals = rows.map((row) => row.map((cell) => cell.value));
  rowVals.pop(); // ignore the column total row
  let rowsTotal = 0;
  for (let i = 0, L = rowVals.length; i < L; i++) {
    rowVals[i].pop();
    rowVals[i].shift(); // ignore first and last column of each row
    let rowTotal = summinator(rowVals[i]);
    table1.updateCell(i, table1.data.columns.length - 1, {
      value: `${rowTotal}`,
    });
    rowsTotal += rowTotal;
  }
  table1.updateCell(
    table1.data.rows.length - 1,
    table1.data.columns.length - 1,
    { value: `${rowsTotal}` }
  );
}

function checkColumns() {
  let columnVals = [];
  // get cell values: one small array per column, all in one big array
  // loop over each (non-ignored) column
  for (let j = 1, L = table1.data.columns.length - 1; j < L; j++) {
    let indColumn = [];
    // loop over each (non-ignored) row
    for (let i = 0, K = table1.data.rows.length - 1; i < K; i++) {
      indColumn.push(table1.getCell(i, j).value);
    }
    columnVals.push(indColumn);
  }
  for (let i = 0, L = columnVals.length; i < L; i++) {
    let columnTotal = summinator(columnVals[i]);
    table1.updateCell(table1.data.rows.length - 1, i + 1, {
      value: `${columnTotal}`,
    });
  }
}

function summinator(numArray) {
  let total = 0;
  for (let i = 0, L = numArray.length; i < L; i++) {
    const result = utils.math.evaluateLatex(numArray[i]);
    if (!result.error) {
      total += result.value;
    }
  }
  return total;
}
