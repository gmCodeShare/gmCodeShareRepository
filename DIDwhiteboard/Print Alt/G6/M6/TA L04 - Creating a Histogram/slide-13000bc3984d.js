const { buttonGroup1, table1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  table1.updateCell(0, 1, { value: `$4$` });
  table1.updateCell(1, 1, { value: `$10$` });
  table1.updateCell(2, 1, { value: `$8$` });
  table1.updateCell(3, 1, { value: `$5$` });
  table1.updateCell(4, 1, { value: `$3$` });
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  table1.updateCell(0, 1, { value: `` });
  table1.updateCell(1, 1, { value: `` });
  table1.updateCell(2, 1, { value: `` });
  table1.updateCell(3, 1, { value: `` });
  table1.updateCell(4, 1, { value: `` });
});

/*
{"compTotals":{"buttongroup":1,"table":1},"stage":"Learn","lessonInfo":"6 M6 TA L04 - Print Alt: Creating a Histogram","teacherView":true,"layout":"one col"}
*/
