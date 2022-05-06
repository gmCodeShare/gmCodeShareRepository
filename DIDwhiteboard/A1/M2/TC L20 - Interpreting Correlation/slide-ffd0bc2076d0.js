const { text1, table1, button1, feedback1 } = components;

button1.updateData({ align: "right" });
table1.deleteRow(0);

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
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      align: "right",
      text: "Submit",
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});

button1.on("click", () => {
  button1.updateData({ disabled: true, text: "Submitted" });

  let num = table1.getCell(0, 1).value;
  let num2 = table1.getCell(0, 2).value;
  let num3 = table1.getCell(1, 1).value;
  let num4 = table1.getCell(1, 2).value;
  let num5 = table1.getCell(2, 1).value;
  let num6 = table1.getCell(2, 2).value;

  const min = 0;
  const max = 10000;

  num = boundIt(num, 0, 1, min, max);
  num2 = boundIt(num2, 0, 2, min, max);
  num3 = boundIt(num3, 1, 1, min, max);
  num4 = boundIt(num4, 1, 2, min, max);
  num5 = boundIt(num5, 2, 1, min, max);
  num6 = boundIt(num6, 2, 2, min, max);

  utils.RTS.sendData("slide-ffd0bc2076d0", {
    num,
    num2,
    num3,
    num4,
    num5,
    num6,
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

/*
{"compTotals":{"textbox":2,"table":1,"button":1},"stage":"Launch","lessonInfo":"9 M2 TC L20 - Interpreting Correlation","teacherView":false,"layout":"one col"}
*/
