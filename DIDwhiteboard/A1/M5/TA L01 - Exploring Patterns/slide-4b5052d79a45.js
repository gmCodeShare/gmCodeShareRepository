const { ggb1, feedback1, ggb2, text1, table1, button1 } = components;

button1.updateData({ align: "right" });
ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

autorun(() => {
  let entries = [
    table1.getCell(0, 1).value,
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
    table1.getCell(3, 1).value,
    table1.getCell(4, 1).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: "Submit",
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: [...entries] });
  }
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
  let num = table1.getCell(0, 1).value;
  let num2 = table1.getCell(1, 1).value;
  let num3 = table1.getCell(2, 1).value;
  let num4 = table1.getCell(3, 1).value;
  let num5 = table1.getCell(4, 1).value;

  const min = 0;
  const max = 1000;

  num = boundIt(num, 0, 1, min, max);
  num2 = boundIt(num2, 1, 1, min, max);
  num3 = boundIt(num3, 2, 1, min, max);
  num4 = boundIt(num4, 3, 1, min, max);
  num5 = boundIt(num5, 4, 1, min, max);

  ggb1.instance.evalCommand("A=(1," + num + ")");
  ggb1.instance.setVisible("A", true);
  ggb1.instance.evalCommand("B=(2, " + num2 + ")");
  ggb1.instance.setVisible("B", true);
  ggb1.instance.evalCommand("C=(3, " + num3 + ")");
  ggb1.instance.setVisible("C", true);
  ggb1.instance.evalCommand("D=(4, " + num4 + ")");
  ggb1.instance.setVisible("D", true);
  ggb1.instance.evalCommand("E=(5, " + num5 + ")");
  ggb1.instance.setVisible("E", true);
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

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
{"compTotals":{"geogebra":2,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"9 M5 TA L01 - Exploring Patterns","teacherView":false,"layout":"two col"}
*/
