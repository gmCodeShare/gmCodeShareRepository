const { table1, button1, text2 } = components;

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
  let num = table1.getCell(0, 0).value;
  let num2 = table1.getCell(1, 0).value;
  let num3 = table1.getCell(2, 0).value;
  let num4 = table1.getCell(0, 1).value;
  let num5 = table1.getCell(1, 1).value;
  let num6 = table1.getCell(2, 1).value;
  let total = 0;
  const result = utils.math.evaluateLatex(table1.getCell(0, 0).value);
  const result2 = utils.math.evaluateLatex(table1.getCell(0, 1).value);
  total = result.value - result2.value;
  let total2 = 0;
  const result3 = utils.math.evaluateLatex(table1.getCell(1, 0).value);
  const result4 = utils.math.evaluateLatex(table1.getCell(1, 1).value);
  total2 = result3.value - result4.value;
  let total3 = 0;
  const result5 = utils.math.evaluateLatex(table1.getCell(2, 0).value);
  const result6 = utils.math.evaluateLatex(table1.getCell(2, 1).value);
  total3 = result5.value - result6.value;
  if (
    !result.error &&
    !result2.error &&
    !result3.error &&
    !result4.error &&
    !result5.error &&
    !result6.error
  ) {
    button1.updateData({ text: "Submitted", disabled: true });
    table1.updateCell(0, 2, { value: `(${num},${num4})` });
    table1.updateCell(1, 2, { value: `(${num2},${num5})` });
    table1.updateCell(2, 2, { value: `(${num3},${num6})` });
    if (total < 6 && total != 5.999999999999999) {
      table1.updateCell(0, 2, { className: "bg-success text-white" });
      if (
        parseInt(num) == parseFloat(num) ||
        parseInt(num4) == parseFloat(num4)
      ) {
        table1.updateCell(0, 2, { className: "bg-danger text-white" });
      }
    } else {
      table1.updateCell(0, 2, { className: "bg-danger text-white" });
    }
    if (total2 < 6 && total2 != 5.999999999999999) {
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
    if (total3 < 6 && total3 != 5.999999999999999) {
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
    let cell00 = table1.getCell(0, 0).value;
    let cell01 = table1.getCell(0, 1).value;
    let cell10 = table1.getCell(1, 0).value;
    let cell11 = table1.getCell(1, 1).value;
    let cell20 = table1.getCell(2, 0).value;
    let cell21 = table1.getCell(2, 1).value;
    let g = utils.math.evaluateLatex(cell00).value;
    let h = utils.math.evaluateLatex(cell01).value;
    let i = utils.math.evaluateLatex(cell10).value;
    let j = utils.math.evaluateLatex(cell11).value;
    let k = utils.math.evaluateLatex(cell20).value;
    let l = utils.math.evaluateLatex(cell21).value;
    utils.RTS.sendData("slide-8e74cc3defa1", {
      g,
      h,
      i,
      j,
      k,
      l,
      total4,
      total5,
      total6,
    });
  }
});
