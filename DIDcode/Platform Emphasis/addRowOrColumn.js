const { table1 } = components;

// rows can now be added simply. rows added this way are math: true and editable: true by default.
// rows are added to the end of the table. pairs well with one or more updateCells!
table1.addRow();
table1.updateCell(table1.data.rows.length - 1, 0, { editable: false });

// alternatively, updateRow could be useful
table1.updateRow(table1.data.rows.length - 1, { editable: false });

// commonly, you might have an array of values that need to go into the table.
// make sure the array is the same length as the number of columns in your table!
const someValues = [0, 1, 2, 3, 4];
for (let i = 0, L = someValues.length; i < L; i++) {
  table1.updateCell(table1.data.rows.length - 1, i, { value: someValues[i] });
}

// rows can be deleted simply as well.
// CAVEAT: only rows added with addRow or added by students can be deleted this way.
// if you need to delete a row under other conditions, consult the old click:1 script below.
table1.deleteRow(table1.data.rows.length - 1);

// columns can be added simply as well. rules are the same as for rows, including an editable header.
table1.addCol();
table1.updateHeader(table1.data.columns.length - 1, { editable: false });

/**
 *
 */
// Below is some old code for adding rows. The updated API above is recommended instead!

const { table1, buttonGroup1 } = components;

buttonGroup1.on("click:1", () => {
  // this example uses a button group, but this could be done on different events
  // delete the last row:
  let newRows = [...table1.data.rows];
  newRows.pop();
  table1.updateData({ rows: newRows });
});

buttonGroup1.on("click:2", () => {
  let oldRows = table1.data.rows;
  let newRow = [];
  for (let i = 0, L = table1.data.columns.length; i < L; i++) {
    // create a new cell from scratch.
    let sampleCell = {
      className: false,
      editable: true,
      math: true,
      value: "",
    };
    newRow.push(sampleCell);
  }
  table1.updateData({ rows: [...oldRows, [...newRow]] });
});

autorun(() => {
  // disable deletion of first row
  buttonGroup1.updateSingleButton({ disabled: table1.data.rows.length < 2 }, 1);
});

// Note: an old version featured the following code. Due to how mobx makes proxies, it shouldn't be used!
// // grab cell data from the table and use it to create new cells in new rows
// // let sampleCell = table1.data.rows[0][0];
