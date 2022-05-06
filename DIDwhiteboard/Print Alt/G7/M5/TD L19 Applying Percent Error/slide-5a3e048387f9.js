const { select1, buttonGroup1, table1 } = components;

autorun(() => {
  buttonGroup1.updateSingleButton(
    { disabled: !select1.data.selected.length },
    1
  );
});

autorun(() => {
  let trigger = table1.data.rows.length;
  table1.updateCol(1, { math: false });
});

buttonGroup1.on('click:1', () => {
  let chosen = select1.data.options[select1.data.selected[0]].label;
  for (let i = 0, L = table1.data.rows.length; i < L; i++) {
    let cityVal = table1.getCell(i, 0).value;
    if (!cityVal) {
      table1.updateCell(i, 0, {
        editable: false,
        value: chosen,
        math: false,
      });
      return;
    }
  }
  table1.addRow();
  table1.updateCell(table1.data.rows.length - 1, 0, {
    editable: false,
    value: chosen,
    math: false,
  });
});

/*
{"compTotals":{"select":1,"buttongroup":1,"table":1},"stage":"Learn","lessonInfo":"7 M5 TD L19 - Print Alternate Slide Deck for Applying Percent Error (digital)","teacherView":true,"layout":"two col"}
*/
