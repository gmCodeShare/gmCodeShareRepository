const { textDisplay116, table1, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});
buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  table1.updateCell(2, 2, {
    value: '\\color{823F98}\\Large10\\cdot4=40\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(2, 3, {
    value: '\\color{823F98}\\Large40\\div4=10\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(2, 4, {
    value: '\\color{823F98}\\Large40\\div10=4\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(3, 1, {
    value: '\\color{823F98}\\Large5\\cdot7=35\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(3, 2, {
    value: '\\color{823F98}\\Large7\\cdot5=35\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(3, 4, {
    value: '\\color{823F98}\\Large35\\div7=5\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(4, 1, {
    value: '\\color{823F98}\\Large12\\cdot7=84\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(4, 2, {
    value: '\\color{823F98}\\Large7\\cdot12=84\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(4, 3, {
    value: '\\color{823F98}\\Large84\\div12=7\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(5, 1, {
    value: '\\color{823F98}\\Large3\\cdot6=18\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(5, 2, {
    value: '\\color{823F98}\\Large6\\cdot3=18\\vphantom{\\huge\\frac{1}{2}}',
  });
  table1.updateCell(5, 4, {
    value: '\\color{823F98}\\Large18\\div6=3\\vphantom{\\huge\\frac{1}{2}}',
  });
});
buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  table1.updateCell(2, 2, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(2, 3, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(2, 4, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(3, 1, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(3, 2, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(3, 4, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(4, 1, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(4, 2, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(4, 3, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(5, 1, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(5, 2, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
  table1.updateCell(5, 4, { value: '\\vphantom{\\huge\\frac{1}{2}}' });
});

/*
{"compTotals":{"textbox":1,"complextable":1,"buttongroup":1},"stage":"Launch","lessonInfo":"7 M2 TD L17 - Print Alt: Understanding Negative Dividends","teacherView":true,"layout":"one col"}
*/
