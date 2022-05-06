const { table1, buttonGroup1, feedback, table2 } = components;

// this example uses a button group, but this could be done on different events

table2.updateData({ visible: false });

buttonGroup1.on("click:1", () => {
  // delete a row
  let newRows = [...table1.data.rows];
  newRows.pop();
  table1.updateData({ rows: newRows });
});

buttonGroup1.on("click:2", () => {
  // add a row
  let oldRows = table1.data.rows;
  let newRow = [];
  for (let i = 0, L = table1.data.columns.length; i < L; i++) {
    // grab cell data from the table and use it to create new cells in new rows
    //let sampleCell = table2.data.rows[0][0];
    // alternatively, the following creates a new cell from scratch.
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

/*
{"compTotals":{"table":2,"buttongroup":1,"textbox":1},"stage":"Launch","lessonInfo":"9 M5 TB L08 - Exponential Functions","teacherView":true,"layout":"one col"}
*/
