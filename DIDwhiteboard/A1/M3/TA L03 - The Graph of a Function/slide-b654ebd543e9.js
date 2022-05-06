const { ggb1, feedback1, text1, table1, button1 } = components;

//slide4

ggb1.instance.setErrorDialogsActive(false);

function getSlideNum(slideId) {
  if (
    typeof controls == "undefined" ||
    !controls.slidesNavigationData?.length
  ) {
    return "missing slide!";
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

slide.on("firstload", () => {
  button1.updateData({ disabled: true, align: "right" });
});

const defTable = {
  data: {
    rows: [[{ value: "" }, { value: "" }, { value: "" }]],
  },
};

const id1 = "slide-d21824258239";
const oldTable = getFromSlide(id1, "table1", defTable) || defTable;
table1.updateCell(1, 0, { className: "text-info" });
table1.updateCell(1, 1, { className: "text-info" });
table1.updateCell(1, 2, { className: "text-info" });
table1.updateCell(2, 0, { className: "text-info" });
table1.updateCell(2, 1, { className: "text-info" });
table1.updateCell(2, 2, { className: "text-info" });
const oldCell00 =
  oldTable.data.rows[0][0].value ||
  `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
const oldCell01 =
  oldTable.data.rows[0][1].value ||
  `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
const oldCell02 =
  oldTable.data.rows[0][2].value ||
  `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
table1.updateCell(0, 0, { value: `\\color{#F26A36}{${oldCell00}}` });
table1.updateCell(0, 1, { value: `\\color{#F26A36}{${oldCell01}}` });
table1.updateCell(0, 2, { value: `\\color{#F26A36}{${oldCell02}}` });

let pattern = /(\d+,-?\d+)/;
if (pattern.test(oldCell02)) {
  ggb1.instance.evalLaTeX(`Point1=${oldCell02}`);
  ggb1.instance.setColor("Point1", 242, 106, 54);
  ggb1.instance.setFixed("Point1", false, false);
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
  // this example checked these 5 cells; you’ll have to make adjustments
  let entries = [
    table1.getCell(1, 0).value,
    table1.getCell(1, 1).value,
    table1.getCell(1, 2).value,
    table1.getCell(2, 0).value,
    table1.getCell(2, 1).value,
    table1.getCell(2, 2).value,
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
  if (pattern.test(table1.getCell(1, 2).value)) {
    ggb1.instance.evalLaTeX(`Point2=${table1.getCell(1, 2).value}`);
    ggb1.instance.setLabelVisible("Point2", false);
    ggb1.instance.setFixed("Point2", false, false);
  } else {
    ggb1.instance.deleteObject("Point2");
  }
  if (pattern.test(table1.getCell(2, 2).value)) {
    ggb1.instance.evalLaTeX(`Point3=${table1.getCell(2, 2).value}`);
    ggb1.instance.setLabelVisible("Point3", false);
    ggb1.instance.setFixed("Point3", false, false);
  } else {
    ggb1.instance.deleteObject("Point3");
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"9 M3 TA L03 - The Graph of a Function","teacherView":false,"layout":"two col"}
*/
