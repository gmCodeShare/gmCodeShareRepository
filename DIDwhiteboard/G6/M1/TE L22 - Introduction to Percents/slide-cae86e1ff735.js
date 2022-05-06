const { textDisplay15, table1, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  table1.updateCell(1, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(2, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(3, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(4, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(5, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(6, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(7, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(8, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  table1.updateCell(1, 2, {
    value:
      '\\Large\\frac{\\color{823F98}50}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(2, 2, {
    value:
      '\\Large\\frac{\\color{823F98}60}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(3, 2, {
    value:
      '\\Large\\frac{\\color{823F98}55}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(4, 2, {
    value:
      '\\Large\\frac{\\color{823F98}130}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(5, 2, {
    value:
      '\\Large\\frac{\\color{823F98}75}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(6, 2, {
    value:
      '\\Large\\frac{\\color{823F98}70}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(7, 2, {
    value: '\\Large\\frac{\\color{823F98}8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(8, 2, {
    value:
      '\\Large\\frac{\\color{823F98}240}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });

  table1.updateCell(1, 3, {
    value: '\\Large\\color{823F98}0.5\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(2, 3, {
    value: '\\Large\\color{823F98}0.6\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(3, 3, {
    value: '\\Large\\color{823F98}0.55\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(4, 3, {
    value: '\\Large\\color{823F98}1.3\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(5, 3, {
    value: '\\Large\\color{823F98}0.75\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(6, 3, {
    value: '\\Large\\color{823F98}0.7\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(7, 3, {
    value: '\\Large\\color{823F98}0.08\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(8, 3, {
    value: '\\Large\\color{823F98}2.4\\vphantom{\\huge\\frac{1}{2}}',
  });
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  table1.updateCell(1, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(2, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(3, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(4, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(5, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(6, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(7, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(8, 2, {
    value: '\\Large\\frac{\\vphantom8}{100}\\vphantom{\\huge\\frac{1}{2}}',
  });

  table1.updateCell(1, 3, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(2, 3, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(3, 3, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(4, 3, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(5, 3, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(6, 3, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(7, 3, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(8, 3, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
});

/*
{"compTotals":{"textbox":1,"complextable":1,"buttongroup":1},"stage":"Launch","lessonInfo":"6 M1 TE L22 - Introduction to Percents","teacherView":true,"layout":"one col"}
*/
