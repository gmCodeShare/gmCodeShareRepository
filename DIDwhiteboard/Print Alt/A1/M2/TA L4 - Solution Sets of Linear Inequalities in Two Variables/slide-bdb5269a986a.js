const { table1, buttonGroup1 } = components;

buttonGroup1.updateSingleButton({ disabled: true }, 2);

buttonGroup1.on("click:1", () => {
  if (table1.data.rows.length > 0) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
  table1.addRow();
  table1.updateCell(table1.data.rows.length - 1, 0, {
    editable: true,
    math: true,
  });
  table1.updateCell(table1.data.rows.length - 1, 1, {
    editable: true,
    math: true,
  });
  console.log(table1.data.rows.length);
});

buttonGroup1.on("click:2", () => {
  if (table1.data.rows.length > 6) {
    table1.deleteRow(table1.data.rows.length - 1);
  }
  if (table1.data.rows.length < 7) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
  console.log(table1.data.rows.length);
});

/*
{"compTotals":{"table":1,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M2 TA L04 - Print Alternate Slide Deck for Solution Sets of Linear Inequalities in Two Variables.","teacherView":true,"layout":"one col"}
*/
