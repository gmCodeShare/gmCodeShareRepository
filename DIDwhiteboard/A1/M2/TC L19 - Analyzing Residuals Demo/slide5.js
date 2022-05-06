const { table1, text1, button1 } = components;

button1.updateData({ align: 'right' });

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
autorun(() => {
  let entries = [
    table1.getCell(0, 0).value,
    table1.getCell(0, 1).value,
    table1.getCell(0, 2).value,
    table1.getCell(1, 0).value,
    table1.getCell(1, 1).value,
    table1.getCell(1, 2).value,
    table1.getCell(2, 0).value,
    table1.getCell(2, 1).value,
    table1.getCell(2, 2).value,
    table1.getCell(3, 0).value,
    table1.getCell(3, 1).value,
    table1.getCell(3, 2).value,
    table1.getCell(4, 0).value,
    table1.getCell(4, 1).value,
    table1.getCell(4, 2).value,
    table1.getCell(5, 0).value,
    table1.getCell(5, 1).value,
    table1.getCell(5, 2).value,
    table1.getCell(6, 0).value,
    table1.getCell(6, 1).value,
    table1.getCell(6, 2).value,
    table1.getCell(7, 0).value,
    table1.getCell(7, 1).value,
    table1.getCell(7, 2).value,
    table1.getCell(8, 0).value,
    table1.getCell(8, 1).value,
    table1.getCell(8, 2).value,
    table1.getCell(9, 0).value,
    table1.getCell(9, 1).value,
    table1.getCell(9, 2).value,
    table1.getCell(10, 0).value,
    table1.getCell(10, 1).value,
    table1.getCell(10, 2).value,
    table1.getCell(11, 0).value,
    table1.getCell(11, 1).value,
    table1.getCell(11, 2).value,
    table1.getCell(12, 0).value,
    table1.getCell(12, 1).value,
    table1.getCell(12, 2).value,
    table1.getCell(13, 0).value,
    table1.getCell(13, 1).value,
    table1.getCell(13, 2).value,
    table1.getCell(14, 0).value,
    table1.getCell(14, 1).value,
    table1.getCell(14, 2).value,
    table1.getCell(15, 0).value,
    table1.getCell(15, 1).value,
    table1.getCell(15, 2).value,
    table1.getCell(16, 0).value,
    table1.getCell(16, 1).value,
    table1.getCell(16, 2).value,
    table1.getCell(17, 0).value,
    table1.getCell(17, 1).value,
    table1.getCell(17, 2).value,
    table1.getCell(18, 0).value,
    table1.getCell(18, 1).value,
    table1.getCell(18, 2).value,
    table1.getCell(19, 0).value,
    table1.getCell(19, 1).value,
    table1.getCell(19, 2).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      align: 'right',
      text: 'Submit',
      disabled: !entries.some((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});

button1.on('click', () => {
  button1.updateData({ disabled: true, text: 'Submitted' });

  let num = table1.getCell(0, 1).value;
  let num2 = table1.getCell(0, 2).value;
  let num3 = table1.getCell(1, 1).value;
  let num4 = table1.getCell(1, 2).value;
  let num5 = table1.getCell(2, 1).value;
  let num6 = table1.getCell(2, 2).value;
  let num7 = table1.getCell(3, 1).value;
  let num8 = table1.getCell(3, 2).value;
  let num9 = table1.getCell(4, 1).value;
  let num10 = table1.getCell(4, 2).value;
  let num11 = table1.getCell(5, 1).value;
  let num12 = table1.getCell(5, 2).value;
  let num13 = table1.getCell(6, 1).value;
  let num14 = table1.getCell(6, 2).value;
  let num15 = table1.getCell(7, 1).value;
  let num16 = table1.getCell(7, 2).value;
  let num17 = table1.getCell(8, 1).value;
  let num18 = table1.getCell(8, 2).value;
  let num19 = table1.getCell(9, 1).value;
  let num20 = table1.getCell(9, 2).value;
  let num21 = table1.getCell(10, 1).value;
  let num22 = table1.getCell(10, 2).value;
  let num23 = table1.getCell(11, 1).value;
  let num24 = table1.getCell(11, 2).value;
  let num25 = table1.getCell(12, 1).value;
  let num26 = table1.getCell(12, 2).value;
  let num27 = table1.getCell(13, 1).value;
  let num28 = table1.getCell(13, 2).value;
  let num29 = table1.getCell(14, 1).value;
  let num30 = table1.getCell(14, 2).value;
  let num31 = table1.getCell(15, 1).value;
  let num32 = table1.getCell(15, 2).value;
  let num33 = table1.getCell(16, 1).value;
  let num34 = table1.getCell(16, 2).value;
  let num35 = table1.getCell(17, 1).value;
  let num36 = table1.getCell(17, 2).value;
  let num37 = table1.getCell(18, 1).value;
  let num38 = table1.getCell(18, 2).value;
  let num39 = table1.getCell(19, 1).value;
  let num40 = table1.getCell(19, 2).value;

  const min = 0;
  const max = 10000;

  num = boundIt(num, 0, 1, min, max);
  num2 = boundIt(num2, 0, 2, min, max);
  num3 = boundIt(num3, 1, 1, min, max);
  num4 = boundIt(num4, 1, 2, min, max);
  num5 = boundIt(num5, 2, 1, min, max);
  num6 = boundIt(num6, 2, 2, min, max);
  num7 = boundIt(num7, 3, 1, min, max);
  num8 = boundIt(num8, 3, 2, min, max);
  num9 = boundIt(num9, 4, 1, min, max);
  num10 = boundIt(num10, 4, 2, min, max);
  num11 = boundIt(num11, 5, 1, min, max);
  num12 = boundIt(num12, 5, 2, min, max);
  num13 = boundIt(num13, 6, 1, min, max);
  num14 = boundIt(num14, 6, 2, min, max);
  num15 = boundIt(num15, 7, 1, min, max);
  num16 = boundIt(num16, 7, 2, min, max);
  num17 = boundIt(num17, 8, 1, min, max);
  num18 = boundIt(num18, 8, 2, min, max);
  num19 = boundIt(num19, 9, 1, min, max);
  num20 = boundIt(num20, 9, 2, min, max);
  num21 = boundIt(num21, 10, 1, min, max);
  num22 = boundIt(num22, 10, 2, min, max);
  num23 = boundIt(num23, 11, 1, min, max);
  num24 = boundIt(num24, 11, 2, min, max);
  num25 = boundIt(num25, 12, 1, min, max);
  num26 = boundIt(num26, 12, 2, min, max);
  num27 = boundIt(num27, 13, 1, min, max);
  num28 = boundIt(num28, 13, 2, min, max);
  num29 = boundIt(num29, 14, 1, min, max);
  num30 = boundIt(num30, 14, 2, min, max);
  num31 = boundIt(num31, 15, 1, min, max);
  num32 = boundIt(num32, 15, 2, min, max);
  num33 = boundIt(num33, 16, 1, min, max);
  num34 = boundIt(num34, 16, 2, min, max);
  num35 = boundIt(num35, 17, 1, min, max);
  num36 = boundIt(num36, 17, 2, min, max);
  num37 = boundIt(num37, 18, 1, min, max);
  num38 = boundIt(num38, 18, 2, min, max);
  num39 = boundIt(num39, 19, 1, min, max);
  num40 = boundIt(num40, 19, 2, min, max);

  utils.RTS.sendData('slide-d6ce052ba84a', {
    num,
    num2,
    num3,
    num4,
    num5,
    num6,
    num7,
    num8,
    num9,
    num10,
    num11,
    num12,
    num13,
    num14,
    num15,
    num16,
    num17,
    num18,
    num19,
    num20,
    num21,
    num22,
    num23,
    num24,
    num25,
    num26,
    num27,
    num28,
    num29,
    num30,
    num31,
    num32,
    num33,
    num34,
    num35,
    num36,
    num37,
    num38,
    num39,
    num40,
  });
});

function boundIt(inp, row, column, min, max) {
  const result = utils.math.evaluateLatex(inp);
  if (result.error) {
    table1.updateCell(row, column, { value: `0` });
    return 0;
  } else if (result.value < min) {
    table1.updateCell(row, column, { value: `${min}` });
    return min;
  } else if (result.value > max) {
    table1.updateCell(row, column, { value: `${max}` });
    return max;
  }
  return result.value;
}
