const {
  ggb1,
  feedback1,
  text1,
  table1,
  button1,
  separator3,
  cc_sharewithclass_df49a07d0b76_textbox1: shareText1,
  cc_sharewithclass_df49a07d0b76_input1: shareInput1,
  cc_sharewithclass_df49a07d0b76_button1: shareButton1,
  cc_sharewithclass_df49a07d0b76_studentanswers1,
} = components;

onInit();
function onInit() {
  if (!text1.data.init) {
    shareButton1.updateData({ visible: false });
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    text1.updateData({ init: true });
  }
}

ggb1.instance.setErrorDialogsActive(false);

button1.on("click", show);

function show() {
  console.log(ggb1.instance.getValue("ShowPoints"));
  shareButton1.updateData({ visible: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  button1.updateData({ disabled: true, text: "Submitted" });
  let num = table1.getCell(0, 1).value;
  let num2 = table1.getCell(1, 0).value;
  let num3 = table1.getCell(2, 0).value;
  let num4 = table1.getCell(2, 1).value;
  let num5 = table1.getCell(3, 0).value;
  let num6 = table1.getCell(3, 1).value;
  const min = -100;
  const max = 100;

  num = boundIt(num, 0, 1, min, max);
  num2 = boundIt(num2, 1, 0, min, max);
  num3 = boundIt(num3, 2, 0, min, max);
  num4 = boundIt(num4, 2, 1, min, max);
  num5 = boundIt(num5, 3, 0, min, max);
  num6 = boundIt(num6, 3, 1, min, max);

  ggb1.instance.evalCommand("A=(-1," + num + ")");
  ggb1.instance.setVisible("A", true);
  ggb1.instance.evalCommand("B=(" + num2 + ", 2)");
  ggb1.instance.setVisible("B", true);
  ggb1.instance.evalCommand("C=(" + num3 + ", " + num4 + ")");
  ggb1.instance.setVisible("C", true);
  ggb1.instance.evalCommand("D=(" + num5 + ", " + num6 + ")");
  ggb1.instance.setVisible("D", true);

  let nums = [num, num2, num3, num4, num5, num6];
  let ggbMin = Math.min(...nums);
  let ggbMax = Math.max(...nums);

  if (ggbMin < -10) {
    ggb1.instance.setValue("min", ggbMin - 1);
  } else {
    ggb1.instance.setValue("min", -11);
  }

  if (ggbMax > 10) {
    ggb1.instance.setValue("max", ggbMax + 1);
  } else {
    ggb1.instance.setValue("max", 11);
  }

  utils.RTS.sendData("slide-25f0913f123b", {
    pointA: [-1, num],
    pointB: [num2, 2],
    pointC: [num3, num4],
    pointD: [num5, num6],
  });

  ggb1.instance.setValue("ShowPoints", true);
  console.log(ggb1.instance.getValue("ShowPoints"));
}

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
    table1.getCell(0, 1).value,
    table1.getCell(1, 0).value,
    table1.getCell(2, 0).value,
    table1.getCell(3, 0).value,
    table1.getCell(2, 1).value,
    table1.getCell(3, 1).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      align: "center",
      text: "Submit",
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
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
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M4 TC L12 - Solutions to Linear Equations in Two Variables","teacherView":false,"layout":"two col"}
*/
