const { ggb2, text1, table1, button1, select1 } = components;

button1.updateData({ align: "right" });
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  select1.setVisible(false);
});

button1.on("click", () => {
  select1.setVisible(true);
  button1.updateData({ disabled: true, text: "Submitted" });
  let num = table1.getCell(0, 0).value;
  let num2 = table1.getCell(0, 1).value;
  let num3 = table1.getCell(1, 0).value;
  let num4 = table1.getCell(1, 1).value;
  let num5 = table1.getCell(2, 0).value;
  let num6 = table1.getCell(2, 1).value;
  let num7 = table1.getCell(3, 0).value;
  let num8 = table1.getCell(3, 1).value;
  let num9 = table1.getCell(4, 0).value;
  let num10 = table1.getCell(4, 1).value;

  const min = 0;
  const max = 50;

  num = boundIt(num, 0, 0, min, max);
  num2 = boundIt(num2, 0, 1, min, max);
  num3 = boundIt(num3, 1, 0, min, max);
  num4 = boundIt(num4, 1, 1, min, max);
  num5 = boundIt(num5, 2, 0, min, max);
  num6 = boundIt(num6, 2, 1, min, max);
  num7 = boundIt(num7, 3, 0, min, max);
  num8 = boundIt(num8, 3, 1, min, max);
  num9 = boundIt(num9, 4, 0, min, max);
  num10 = boundIt(num10, 4, 1, min, max);

  ggb2.instance.evalCommand("A=(" + num + "," + num2 + ")");
  ggb2.instance.setVisible("A", true);
  ggb2.instance.evalCommand("B=(" + num3 + ", " + num4 + ")");
  ggb2.instance.setVisible("B", true);
  ggb2.instance.evalCommand("C=(" + num5 + ", " + num6 + ")");
  ggb2.instance.setVisible("C", true);
  ggb2.instance.evalCommand("D=(" + num7 + ", " + num8 + ")");
  ggb2.instance.setVisible("D", true);
  ggb2.instance.evalCommand("E=(" + num9 + ", " + num10 + ")");
  ggb2.instance.setVisible("E", true);
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

autorun(() => {
  let entries = [
    table1.getCell(0, 0).value,
    table1.getCell(0, 1).value,
    table1.getCell(1, 0).value,
    table1.getCell(1, 1).value,
    table1.getCell(2, 0).value,
    table1.getCell(2, 1).value,
    table1.getCell(3, 0).value,
    table1.getCell(3, 1).value,
    table1.getCell(4, 0).value,
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

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

autorun(() => {
  if (!select1.data.selected.length) {
    ggb2.instance.setVisible("shortenedLine", false);
    ggb2.instance.setVisible("resA", false);
    ggb2.instance.setVisible("resB", false);
    ggb2.instance.setVisible("resC", false);
    ggb2.instance.setVisible("resD", false);
    ggb2.instance.setVisible("resE", false);
    ggb2.instance.setVisible("equationText", false);
    ggb2.instance.setVisible("sumText", false);
  }
  if (select1.data.selected.includes("0")) {
    ggb2.instance.setVisible("shortenedLine", true);
  } else {
    ggb2.instance.setVisible("shortenedLine", false);
  }
  if (select1.data.selected.includes("1")) {
    ggb2.instance.setVisible("resA", true);
    ggb2.instance.setVisible("resB", true);
    ggb2.instance.setVisible("resC", true);
    ggb2.instance.setVisible("resD", true);
    ggb2.instance.setVisible("resE", true);
    ggb2.instance.setVisible("shortenedLine", true);
  } else {
    ggb2.instance.setVisible("resA", false);
    ggb2.instance.setVisible("resB", false);
    ggb2.instance.setVisible("resC", false);
    ggb2.instance.setVisible("resD", false);
    ggb2.instance.setVisible("resE", false);
  }
  if (select1.data.selected.includes("2")) {
    ggb2.instance.setVisible("equationText", true);
  } else {
    ggb2.instance.setVisible("equationText", false);
  }
  if (select1.data.selected.includes("3")) {
    ggb2.instance.setVisible("sumText", true);
  } else {
    ggb2.instance.setVisible("sumText", false);
  }
});
