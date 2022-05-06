const { text1, table1, button1, text2, table2, button2 } = components;

button1.updateData({ align: 'right' });
button2.updateData({ align: 'right' });

slide.on('firstload', () => {
  text2.updateData({ visible: false });
  table2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

autorun(() => {
  let entries = [table1.getCell(0, 0).value, table1.getCell(0, 2).value];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: [...entries] });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
  text2.updateData({ visible: true });
  table2.updateData({ visible: true });
  button2.updateData({ visible: true });
  let total = 0;
  const result = utils.math.evaluateLatex(table1.getCell(0, 0).value);
  const result2 = utils.math.evaluateLatex(table1.getCell(0, 2).value);
  total = result.value - result2.value;
  table1.updateCell(0, 4, { value: `${total}` });
  if (total == 6) {
    table1.updateCell(0, 4, { className: 'bg-success text-white' });
  } else {
    table1.updateCell(0, 4, { className: 'bg-danger text-white' });
  }
});

autorun(() => {
  let entries = [
    table2.getCell(0, 0).value,
    table2.getCell(0, 2).value,
    table2.getCell(1, 0).value,
    table2.getCell(1, 2).value,
  ];
  if (!arrayEquals(entries, table2.data.last)) {
    button2.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table2.updateData({ last: [...entries] });
  }
});

button2.on('click', () => {
  button2.updateData({ text: 'Submitted', disabled: true });
  let total = 0;
  const result = utils.math.evaluateLatex(table2.getCell(0, 0).value);
  const result2 = utils.math.evaluateLatex(table2.getCell(0, 2).value);
  total = result.value - result2.value;
  table2.updateCell(0, 4, { value: `${total}` });
  let total2 = 0;
  const result3 = utils.math.evaluateLatex(table2.getCell(1, 0).value);
  const result4 = utils.math.evaluateLatex(table2.getCell(1, 2).value);
  total2 = result3.value - result4.value;
  table2.updateCell(1, 4, { value: `${total2}` });
  if (total == 6) {
    table2.updateCell(0, 4, { className: 'bg-success text-white' });
  } else {
    table2.updateCell(0, 4, { className: 'bg-danger text-white' });
  }
  if (total2 == 6) {
    table2.updateCell(1, 4, { className: 'bg-success text-white' });
  } else {
    table2.updateCell(1, 4, { className: 'bg-danger text-white' });
  }
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

let row1Total;
let row2Total;
let row3Total;
let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
autorun(() => {
  x1 = parseInt(table1.getCell(0, 0).value.replaceAll('$', ''));
  y1 = parseInt(table1.getCell(0, 2).value.replaceAll('$', ''));
  x2 = parseInt(table2.getCell(0, 0).value.replaceAll('$', ''));
  y2 = parseInt(table2.getCell(0, 2).value.replaceAll('$', ''));
  x3 = parseInt(table2.getCell(1, 0).value.replaceAll('$', ''));
  y3 = parseInt(table2.getCell(1, 2).value.replaceAll('$', ''));
  row1Total = x1 + y1;
  row2Total = x2 + y2;
  row3Total = x3 + y3;
});

let now = controls.current;
autorun(() => {
  let total = 0;
  const result = utils.math.evaluateLatex(table1.getCell(0, 0).value);
  const result2 = utils.math.evaluateLatex(table1.getCell(0, 2).value);
  total = result.value - result2.value;
  let total2 = 0;
  const result3 = utils.math.evaluateLatex(table2.getCell(0, 0).value);
  const result4 = utils.math.evaluateLatex(table2.getCell(0, 2).value);
  total2 = result3.value - result4.value;
  let total3 = 0;
  const result5 = utils.math.evaluateLatex(table2.getCell(1, 0).value);
  const result6 = utils.math.evaluateLatex(table2.getCell(1, 2).value);
  total3 = result5.value - result6.value;
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-1a0fd993032e', {
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      row1Total,
      row2Total,
      row3Total,
      a: table1.getCell(0, 0).value,
      b: table1.getCell(0, 2).value,
      c: table2.getCell(0, 0).value,
      d: table2.getCell(0, 2).value,
      e: table2.getCell(1, 0).value,
      f: table2.getCell(1, 2).value,
      total,
      total2,
      total3,
    });
  }
});

/*
{"compTotals":{"textbox":3,"table":2,"button":2},"stage":"Launch","lessonInfo":"9 M2 TA L01 - Solution Sets of Linear Equations in Two Variables","teacherView":false,"layout":"one col"}
*/
