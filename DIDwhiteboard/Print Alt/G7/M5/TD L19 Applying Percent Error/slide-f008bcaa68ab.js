const { table1, buttonGroup1 } = components;

buttonGroup1.on('click:1', () => {
  table1.addRow();
});

autorun(() => {
  let trigger = table1.data.rows.length;
  table1.updateCol(0, { math: false });
});

buttonGroup1.on('click:2', () => {
  if (table1.data.rows.length > 1) {
    table1.deleteRow(table1.data.rows.length - 1);
  }
  if (table1.data.rows.length < 2) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
});

/*
{"compTotals":{"table":1,"buttongroup":1},"stage":"Learn","lessonInfo":"7 M5 TD L19 - Print Alternate Slide Deck for Applying Percent Error (digital)","teacherView":true,"layout":"one col"}
*/
