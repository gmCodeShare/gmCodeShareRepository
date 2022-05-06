const { table1, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});
buttonGroup1.on('click:1', () => {
  table1.updateCell(0, 3, {
    value: '5',
  });
  table1.updateCell(1, 3, {
    value: '5.5',
  });
  table1.updateCell(2, 3, {
    value: '4.5',
  });
  table1.updateCell(3, 3, {
    value: '6',
  });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  table1.updateCell(0, 3, {
    value: '',
  });
  table1.updateCell(1, 3, {
    value: '',
  });
  table1.updateCell(2, 3, {
    value: '',
  });
  table1.updateCell(3, 3, {
    value: '',
  });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"table":1,"buttongroup":1},"stage":"Learn","lessonInfo":"7 M1 TA L01 - Print Alt Slide Deck for An Experiment with Ratios and Rates","teacherView":true,"layout":"one col"}
*/
