const { table1, buttonGroup1 } = components;

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  table1.addRow();
  table1.updateCell(4, 0, {
    value: `$7 \\cdot \\underline{\\phantom{12345}}$`,
    editable: false,
  });
  table1.updateCell(4, 1, {
    value: `$0$`,
    editable: false,
  });
});

/*
{"compTotals":{"table":1,"buttongroup":1},"stage":"Launch","lessonInfo":"7 M2 TC L13 - Print Alt: Understanding Multiples of Negative Numbers","teacherView":false,"layout":"one col"}
*/
