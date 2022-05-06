const { ggb1, feedback1, text1, table1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button1.updateData({ disabled: true, align: "right" });
});

table1.updateCell(0, 0, { className: "text-info" });
table1.updateCell(0, 1, { className: "text-info" });
table1.updateCell(0, 2, { className: "text-info" });
//table1.updateCell(0, 0, {value: `\\text\\color{#007FAF}{}`,});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
autorun(() => {
  // this example checked these 5 cells; you’ll have to make adjustments
  let entries = [
    table1.getCell(0, 0).value,
    table1.getCell(0, 1).value,
    table1.getCell(0, 2).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: "Submit",
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
  let pattern = /(\d+,-?\d+)/;
  // let pattern2 = /(\d+. . ,. . -?\d+)/;
  if (pattern.test(table1.getCell(0, 2).value)) {
    ggb1.instance.evalLaTeX(`Point1=${table1.getCell(0, 2).value}`);
    ggb1.instance.setLabelVisible("Point1", false);
    ggb1.instance.setFixed("Point1", false, false);
  } else {
    ggb1.instance.deleteObject("Point1");
  }
  /*if(pattern2.test(table1.getCell(0,2).value)){
  ggb1.instance.evalLaTeX(`Point1=${table1.getCell(0,2).value}`);
  ggb1.instance.setLabelVisible("Point1", false);
  ggb1.instance.setFixed("Point1",false, false);
} else {
  ggb1.instance.deleteObject("Point1");
};*/
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"9 M3 TA L03 - The Graph of a Function","teacherView":false,"layout":"two col"}
*/
