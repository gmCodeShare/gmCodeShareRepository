const { ggb1, text1, table1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
autorun(() => {
  let entries = [table1.getCell(0, 1).value, table1.getCell(0, 2).value];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({ disabled: !entries.every((value) => !!value) });
    table1.updateData({ last: entries });
  }
});

button1.on("click", tryIt);

function tryIt() {
  let Number = table1.getCell(0, 1).value;
  let Number2 = table1.getCell(0, 2).value;
  if (Number2 > 0) {
    ggb1.instance.setValue("yMin", Number);
    ggb1.instance.setValue("yMax", Number2);
  }
  if (Number2 == 0) {
    ggb1.instance.setValue("yMin", Number);
    ggb1.instance.setValue("yMax", 0.1);
  }

  button1.updateData({ disabled: true });
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"table":1,"button":1},"stage":"Learn","lessonInfo":"8 M6 TC L11 - Print Alt: Scatter Plots","teacherView":true,"layout":"two col"}
*/
