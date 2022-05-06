const { text1, table1, button1, feedback1 } = components;

button1.updateData({ align: "right" });

autorun(() => {
  let entries = [
    table1.getCell(0, 0).value,
    table1.getCell(1, 0).value,
    table1.getCell(2, 0).value,
    table1.getCell(0, 1).value,
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
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
  let num = table1.getCell(0, 0).value;
  let num2 = table1.getCell(1, 0).value;
  let num3 = table1.getCell(2, 0).value;
  let num4 = table1.getCell(0, 1).value;
  let num5 = table1.getCell(1, 1).value;
  let num6 = table1.getCell(2, 1).value;
  table1.updateCell(0, 2, { value: `(${num},${num4})` });
  table1.updateCell(1, 2, { value: `(${num2},${num5})` });
  table1.updateCell(2, 2, { value: `(${num3},${num6})` });
  let total = 0;
  const result = utils.math.evaluateLatex(table1.getCell(0, 0).value);
  const result2 = utils.math.evaluateLatex(table1.getCell(0, 1).value);
  total = result.value - result2.value;
  // console.log(total);
  // console.log(result.value);
  // console.log(result2.value);
  if (total > 5.999999999999998 && total < 6.000000000000002) {
    table1.updateCell(0, 2, { className: "bg-success text-white" });
    if (Number.isInteger(result.value) || Number.isInteger(result2.value)) {
      // console.log(result.value, result2.value);
      table1.updateCell(0, 2, { className: "bg-danger text-white" });
    }
  } else {
    table1.updateCell(0, 2, { className: "bg-danger text-white" });
  }
  let total2 = 0;
  const result3 = utils.math.evaluateLatex(table1.getCell(1, 0).value);
  const result4 = utils.math.evaluateLatex(table1.getCell(1, 1).value);
  total2 = result3.value - result4.value;
  if (total2 == 6) {
    table1.updateCell(1, 2, { className: "bg-success text-white" });
    if (
      parseInt(num2) == parseFloat(num2) ||
      parseInt(num5) == parseFloat(num5)
    ) {
      table1.updateCell(1, 2, { className: "bg-danger text-white" });
    }
  } else {
    table1.updateCell(1, 2, { className: "bg-danger text-white" });
  }
  let total3 = 0;
  const result5 = utils.math.evaluateLatex(table1.getCell(2, 0).value);
  const result6 = utils.math.evaluateLatex(table1.getCell(2, 1).value);
  total3 = result5.value - result6.value;
  if (total3 == 6) {
    table1.updateCell(2, 2, { className: "bg-success text-white" });
    if (
      parseInt(num3) == parseFloat(num3) ||
      parseInt(num6) == parseFloat(num6)
    ) {
      table1.updateCell(2, 2, { className: "bg-danger text-white" });
    }
  } else {
    table1.updateCell(2, 2, { className: "bg-danger text-white" });
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
  x1 = parseInt(table1.getCell(0, 0).value.replaceAll("$", ""));
  y1 = parseInt(table1.getCell(0, 1).value.replaceAll("$", ""));
  x2 = parseInt(table1.getCell(1, 0).value.replaceAll("$", ""));
  y2 = parseInt(table1.getCell(1, 1).value.replaceAll("$", ""));
  x3 = parseInt(table1.getCell(2, 0).value.replaceAll("$", ""));
  y3 = parseInt(table1.getCell(2, 1).value.replaceAll("$", ""));
  row1Total = x1 + y1;
  row2Total = x2 + y2;
  row3Total = x3 + y3;
});

let now = controls.current;
autorun(() => {
  let total4 = 0;
  const result = utils.math.evaluateLatex(table1.getCell(0, 0).value);
  const result2 = utils.math.evaluateLatex(table1.getCell(0, 1).value);
  total4 = result.value - result2.value;
  let total5 = 0;
  const result3 = utils.math.evaluateLatex(table1.getCell(1, 0).value);
  const result4 = utils.math.evaluateLatex(table1.getCell(1, 1).value);
  total5 = result3.value - result4.value;
  let total6 = 0;
  const result5 = utils.math.evaluateLatex(table1.getCell(2, 0).value);
  const result6 = utils.math.evaluateLatex(table1.getCell(2, 1).value);
  total6 = result5.value - result6.value;
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-8e74cc3defa1", {
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      row1Total,
      row2Total,
      row3Total,
      g: table1.getCell(0, 0).value,
      h: table1.getCell(0, 1).value,
      i: table1.getCell(1, 0).value,
      j: table1.getCell(1, 1).value,
      k: table1.getCell(2, 0).value,
      l: table1.getCell(2, 1).value,
      total4,
      total5,
      total6,
    });
  }
});

/*
{"compTotals":{"textbox":2,"table":1,"button":1},"stage":"Launch","lessonInfo":"9 M2 TA L01 - Solution Sets of Linear Equations in Two Variables","teacherView":false,"layout":"one col"}
*/
