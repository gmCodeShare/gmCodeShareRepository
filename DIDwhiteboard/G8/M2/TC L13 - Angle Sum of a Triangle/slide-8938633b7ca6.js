const { ggb1, feedback1, text2, buttongroup1, text4, table1, text3 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

table1.updateCell(0, 3, { value: '' });
table1.updateCell(1, 3, { value: '' });
table1.updateCell(2, 3, { value: '' });
buttongroup1.updateSingleButton({ disabled: true }, 2);
buttongroup1.updateSingleButton({ disabled: true }, 1);
text3.updateData({ visible: false });
text4.updateData({ visible: false });
table1.updateData({ visible: false });

buttongroup1.on('click:1', () => {
  buttongroup1.updateSingleButton({ disabled: false }, 2);
  text4.updateData({ visible: true });
  table1.updateData({ visible: true });
  buttongroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setValue('step', ggb1.instance.getValue('step') + 1);
  ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  let angleA1 = (ggb1.instance.getValue('angleA') * 180) / Math.PI;
  let angleA = angleA1.toFixed(0);
  let angleB1 = (ggb1.instance.getValue('angleB') * 180) / Math.PI;
  let angleB = angleB1.toFixed(0);
  if (ggb1.instance.getValue('step') == 3) {
    table1.updateCell(0, 0, { value: angleA + '\\degree' });
    table1.updateCell(0, 1, { value: angleB + '\\degree' });
  }
  if (ggb1.instance.getValue('step') == 4) {
    table1.updateCell(1, 0, { value: angleA + '\\degree' });
    table1.updateCell(1, 1, { value: angleB + '\\degree' });
  }
  if (ggb1.instance.getValue('step') == 5) {
    table1.updateCell(2, 0, { value: angleA + '\\degree' });
    table1.updateCell(2, 1, { value: angleB + '\\degree' });
    text3.updateData({ visible: false });
  }
});

autorun(() => {
  let sum1 =
    parseInt(table1.getCell(0, 2).value) +
    parseInt(table1.getCell(0, 1).value) +
    parseInt(table1.getCell(0, 0).value);
  if (isNaN(sum1)) {
    table1.updateCell(0, 3, { value: '' });
  } else {
    table1.updateCell(0, 3, { value: sum1 + '\\degree' });
  }
});

autorun(() => {
  let sum2 =
    parseInt(table1.getCell(1, 2).value) +
    parseInt(table1.getCell(1, 1).value) +
    parseInt(table1.getCell(1, 0).value);
  if (isNaN(sum2)) {
    table1.updateCell(1, 3, { value: '' });
  } else {
    table1.updateCell(1, 3, { value: sum2 + '\\degree' });
  }
});

autorun(() => {
  let sum3 =
    parseInt(table1.getCell(2, 2).value) +
    parseInt(table1.getCell(2, 1).value) +
    parseInt(table1.getCell(2, 0).value);
  if (isNaN(sum3)) {
    table1.updateCell(2, 3, { value: '' });
  } else {
    table1.updateCell(2, 3, { value: sum3 + '\\degree' });
  }
});

ggb1.instance.registerObjectUpdateListener('A', updateRight);
ggb1.instance.registerObjectUpdateListener('C', updateRight);
ggb1.instance.registerObjectUpdateListener('B', updateRight);

function updateRight() {
  if (ggb1.instance.getValue('count') < 3) {
    buttongroup1.updateSingleButton({ disabled: false }, 1);
  }
}

buttongroup1.on('click:2', () => {
  ggb1.instance.setValue('step', 2);
  table1.updateCell(0, 0, { value: '' });
  table1.updateCell(0, 1, { value: '' });
  table1.updateCell(0, 2, { value: '' });
  table1.updateCell(0, 3, { value: '' });
  table1.updateCell(1, 0, { value: '' });
  table1.updateCell(1, 1, { value: '' });
  table1.updateCell(1, 2, { value: '' });
  table1.updateCell(1, 3, { value: '' });
  table1.updateCell(2, 0, { value: '' });
  table1.updateCell(2, 1, { value: '' });
  table1.updateCell(2, 2, { value: '' });
  table1.updateCell(2, 3, { value: '' });
  buttongroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.setValue('count', 0);
});

/*
{"compTotals":{"geogebra":1,"textbox":4,"buttongroup":1,"table":1},"stage":"Learn","lessonInfo":"8 M2 TC L13 - Angle Sum of a Triangle","teacherView":false,"layout":"two col"}
*/
