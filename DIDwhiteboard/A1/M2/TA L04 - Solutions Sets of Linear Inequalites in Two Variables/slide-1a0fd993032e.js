const {
  text1,
  table1,
  button1,
  text3,
  text2,
  table2,
  button2,
  text4,
  feedback1,
} = components;

button1.updateData({ align: "right" });
button2.updateData({ align: "right" });

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  table2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

autorun(() => {
  let entries = [table1.getCell(0, 0).value, table1.getCell(0, 2).value];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: "Submit",
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: [...entries] });
  }
});

button1.on("click", () => {
  let total = 0;
  const result = utils.math.evaluateLatex(table1.getCell(0, 0).value);
  const result2 = utils.math.evaluateLatex(table1.getCell(0, 2).value);
  total = result.value - result2.value;
  if (!result.error && !result2.error) {
    button1.updateData({ text: "Submitted", disabled: true });
    if (total < 6) {
      text3.updateData({ visible: false, text: "" });
      text2.updateData({ visible: true });
      table2.updateData({ visible: true });
      button2.updateData({ visible: true });
      if (result2.value < 0) {
        table1.updateCell(0, 3, { className: "bg-success text-white" });
        table1.updateCell(0, 3, {
          value: `$${table1.getCell(0, 0).value}-(${
            table1.getCell(0, 2).value
          })<6$`,
        });
      }
      if (result2.value >= 0) {
        table1.updateCell(0, 3, { className: "bg-success text-white" });
        table1.updateCell(0, 3, {
          value: `$${table1.getCell(0, 0).value}-${
            table1.getCell(0, 2).value
          }<6$`,
        });
      }
    } else {
      text3.updateData({ visible: true, text: "Keep trying!" });
      text2.updateData({ visible: false });
      table2.updateData({ visible: false });
      button2.updateData({ visible: false });
      if (result2.value < 0) {
        table1.updateCell(0, 3, { className: "bg-danger text-white" });
        table1.updateCell(0, 3, {
          value: `$${table1.getCell(0, 0).value}-(${
            table1.getCell(0, 2).value
          })\\ge6$`,
        });
      } else {
        table1.updateCell(0, 3, { className: "bg-danger text-white" });
        table1.updateCell(0, 3, {
          value: `$${table1.getCell(0, 0).value}-${
            table1.getCell(0, 2).value
          }\\ge6$`,
        });
      }
    }
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
      text: "Submit",
      disabled: !entries.every((value) => !!value),
    });
    table2.updateData({ last: [...entries] });
  }
});

button2.on("click", () => {
  let total = 0;
  let prevTotal = 0;
  const prevResult = utils.math.evaluateLatex(table1.getCell(0, 0).value);
  const prevResult2 = utils.math.evaluateLatex(table1.getCell(0, 2).value);
  prevTotal = prevResult.value - prevResult2.value;
  const result = utils.math.evaluateLatex(table2.getCell(0, 0).value);
  const result2 = utils.math.evaluateLatex(table2.getCell(0, 2).value);
  total = result.value - result2.value;
  let total2 = 0;
  const result3 = utils.math.evaluateLatex(table2.getCell(1, 0).value);
  const result4 = utils.math.evaluateLatex(table2.getCell(1, 2).value);
  total2 = result3.value - result4.value;
  if (!result.error && !result2.error && !result3.error && !result4.error) {
    button2.updateData({ text: "Submitted", disabled: true });
    if (total < 6) {
      table2.updateCell(0, 3, { className: "bg-success text-white" });
      if (result2.value < 0) {
        table2.updateCell(0, 3, {
          value: `$${table2.getCell(0, 0).value}-(${
            table2.getCell(0, 2).value
          })<6$`,
        });
      } else {
        table2.updateCell(0, 3, {
          value: `$${table2.getCell(0, 0).value}-${
            table2.getCell(0, 2).value
          }<6$`,
        });
      }
    }
    if (total >= 6) {
      table2.updateCell(0, 3, { className: "bg-danger text-white" });
      if (result2.value < 0) {
        table2.updateCell(0, 3, {
          value: `$${table2.getCell(0, 0).value}-(${
            table2.getCell(0, 2).value
          })\\ge6$`,
        });
      } else {
        table2.updateCell(0, 3, {
          value: `$${table2.getCell(0, 0).value}-${
            table2.getCell(0, 2).value
          }\\ge6$`,
        });
      }
    }
    if (total2 < 6) {
      table2.updateCell(1, 3, { className: "bg-success text-white" });
      if (result4.value < 0) {
        table2.updateCell(1, 3, {
          value: `$${table2.getCell(1, 0).value}-(${
            table2.getCell(1, 2).value
          })<6$`,
        });
      } else {
        table2.updateCell(1, 3, {
          value: `$${table2.getCell(1, 0).value}-${
            table2.getCell(1, 2).value
          }<6$`,
        });
      }
    }
    if (total2 >= 6) {
      table2.updateCell(1, 3, { className: "bg-danger text-white" });
      if (result4.value < 0) {
        table2.updateCell(1, 3, {
          value: `$${table2.getCell(1, 0).value}-(${
            table2.getCell(1, 2).value
          })\\ge6$`,
        });
      } else {
        table2.updateCell(1, 3, {
          value: `$${table2.getCell(1, 0).value}-${
            table2.getCell(1, 2).value
          }\\ge6$`,
        });
      }
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
  let cell00 = table1.getCell(0, 0).value;
  let cell01 = table1.getCell(0, 2).value;
  let cell10 = table2.getCell(0, 0).value;
  let cell11 = table2.getCell(0, 2).value;
  let cell20 = table2.getCell(1, 0).value;
  let cell21 = table2.getCell(1, 2).value;
  let a = utils.math.evaluateLatex(cell00).value;
  let b = utils.math.evaluateLatex(cell01).value;
  let c = utils.math.evaluateLatex(cell10).value;
  let d = utils.math.evaluateLatex(cell11).value;
  let e = utils.math.evaluateLatex(cell20).value;
  let f = utils.math.evaluateLatex(cell21).value;
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-1a0fd993032e", {
      a,
      b,
      c,
      d,
      e,
      f,
      total,
      total2,
      total3,
    });
  }
});

/*
{"compTotals":{"textbox":5,"table":2,"button":2},"stage":"Learn","lessonInfo":"9 M2 TA L04 - Solution Sets of Linear Inequalities in Two Variables","teacherView":false,"layout":"one col"}
*/
