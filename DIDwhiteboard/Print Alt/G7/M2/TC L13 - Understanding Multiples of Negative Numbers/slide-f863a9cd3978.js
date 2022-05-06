const { textDisplay115, table1, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});
buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  table1.updateCell(1, 2, {
    value: '\\color{823F98}\\huge3(2)\\vphantom{\\Huge\\frac{1}{2}}',
  });
  table1.updateCell(1, 3, {
    value: '\\color{823F98}\\huge6\\vphantom{\\Huge\\frac{1}{2}}',
  });
  table1.updateCell(2, 1, {
    value: '\\color{823F98}\\huge6+6+6\\vphantom{\\Huge\\frac{1}{2}}',
  });
  table1.updateCell(2, 3, {
    value: '\\color{823F98}\\huge18\\vphantom{\\Huge\\frac{1}{2}}',
  });
  table1.updateCell(3, 1, {
    value: '\\color{823F98}\\huge3+3+3\\vphantom{\\Huge\\frac{1}{2}}',
  });
  table1.updateCell(4, 2, {
    value: '\\color{823F98}\\huge4(5)\\vphantom{\\Huge\\frac{1}{2}}',
  });
  table1.updateCell(4, 3, {
    value: '\\color{823F98}\\huge20\\vphantom{\\Huge\\frac{1}{2}}',
  });
  table1.updateCell(5, 2, {
    value: '\\color{823F98}\\huge5(7)\\vphantom{\\Huge\\frac{1}{2}}',
  });
  table1.updateCell(5, 3, {
    value: '\\color{823F98}\\huge35\\vphantom{\\Huge\\frac{1}{2}}',
  });
});
buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  table1.updateCell(1, 2, { value: '\\vphantom{\\Huge\\frac{1}{2}}' });
  table1.updateCell(1, 3, { value: '\\vphantom{\\Huge\\frac{1}{2}}' });
  table1.updateCell(2, 1, { value: '\\vphantom{\\Huge\\frac{1}{2}}' });
  table1.updateCell(2, 3, { value: '\\vphantom{\\Huge\\frac{1}{2}}' });
  table1.updateCell(3, 1, { value: '\\vphantom{\\Huge\\frac{1}{2}}' });
  table1.updateCell(4, 2, { value: '\\vphantom{\\Huge\\frac{1}{2}}' });
  table1.updateCell(4, 3, { value: '\\vphantom{\\Huge\\frac{1}{2}}' });
  table1.updateCell(5, 2, { value: '\\vphantom{\\Huge\\frac{1}{2}}' });
  table1.updateCell(5, 3, { value: '\\vphantom{\\Huge\\frac{1}{2}}' });
});

/*
{"compTotals":{"textbox":1,"complextable":1,"buttongroup":1},"stage":"Launch","lessonInfo":"7 M2 TC L13 - Print Alt: Understanding Multiples of Negative Numbers","teacherView":true,"layout":"one col"}
*/
