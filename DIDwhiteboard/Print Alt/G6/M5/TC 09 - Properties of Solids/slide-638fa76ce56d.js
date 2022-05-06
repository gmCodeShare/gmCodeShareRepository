const { table1, buttonGroup1, feedback1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on('click:1', () => {
  table1.updateCell(3, 2, {
    value: '$\\huge 2n$',
  });
  table1.updateCell(3, 3, {
    value: '$\\huge 3n$',
  });
  table1.updateCell(3, 4, {
    value: '$\\huge n+2$',
  });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  table1.updateCell(3, 2, {
    value: '',
  });
  table1.updateCell(3, 3, {
    value: '',
  });
  table1.updateCell(3, 4, {
    value: '',
  });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"table":1,"buttongroup":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M5 TC L09 - Print Alternate Slide Deck for Properties of Solids","teacherView":true,"layout":"one col"}
*/
