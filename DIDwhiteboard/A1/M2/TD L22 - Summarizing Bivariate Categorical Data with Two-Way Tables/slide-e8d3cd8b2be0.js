const { ggb1, feedback1, text1, separator4, text2, table1 } = components;

ggb1.instance.setErrorDialogsActive(false);
text2.updateData({ align: "center" });

const defRows = [
  [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ],
  [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ],
  [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ],
];

const rowsContent =
  getFromSlide("slide-dcc43ecceb2e", "table1.data.rows", defRows) || defRows;
const rowsContent2 =
  getFromSlide("slide-b266a791cd1c", "table1.data.rows", defRows) || defRows;

table1.updateCell(2, 1, {
  value: rowsContent[2][1].value,
  math: true,
  editable: false,
});
table1.updateCell(2, 2, {
  value: rowsContent[2][2].value,
  math: true,
  editable: false,
});
table1.updateCell(2, 3, {
  value: rowsContent[2][3].value,
  math: true,
  editable: false,
});
table1.updateCell(2, 4, {
  value: rowsContent[2][4].value,
  math: true,
  editable: false,
});
table1.updateCell(2, 5, {
  value: rowsContent[2][5].value,
  math: true,
  editable: false,
});
table1.updateCell(0, 5, {
  value: rowsContent[0][5].value,
  math: true,
  editable: false,
});
table1.updateCell(1, 5, {
  value: rowsContent[1][5].value,
  math: true,
  editable: false,
});
table1.updateCell(0, 1, {
  value: rowsContent2[0][1].value,
  math: true,
  editable: false,
});
table1.updateCell(0, 2, {
  value: rowsContent2[0][2].value,
  math: true,
  editable: false,
});
table1.updateCell(0, 3, {
  value: rowsContent2[0][3].value,
  math: true,
  editable: false,
});
table1.updateCell(0, 4, {
  value: rowsContent2[0][4].value,
  math: true,
  editable: false,
});
table1.updateCell(1, 1, {
  value: rowsContent2[1][1].value,
  math: true,
  editable: false,
});
table1.updateCell(1, 2, {
  value: rowsContent2[1][2].value,
  math: true,
  editable: false,
});
table1.updateCell(1, 3, {
  value: rowsContent2[1][3].value,
  math: true,
  editable: false,
});
table1.updateCell(1, 4, {
  value: rowsContent2[1][4].value,
  math: true,
  editable: false,
});

ggb1.instance.registerObjectUpdateListener("cell01", updateB1);
ggb1.instance.registerObjectUpdateListener("cell02", updateB2);
ggb1.instance.registerObjectUpdateListener("cell03", updateB3);
ggb1.instance.registerObjectUpdateListener("cell04", updateB4);
ggb1.instance.registerObjectUpdateListener("cell11", updateR1);
ggb1.instance.registerObjectUpdateListener("cell12", updateR2);
ggb1.instance.registerObjectUpdateListener("cell13", updateR3);
ggb1.instance.registerObjectUpdateListener("cell14", updateR4);

function updateB1() {
  if (ggb1.instance.getValue("cell01")) {
    table1.updateCell(0, 1, { className: "" });
    table1.updateCell(0, 2, { className: "" });
    table1.updateCell(0, 3, { className: "" });
    table1.updateCell(0, 4, { className: "" });
    table1.updateCell(1, 1, { className: "bg-danger text-white" });
    table1.updateCell(1, 2, { className: "" });
    table1.updateCell(1, 3, { className: "" });
    table1.updateCell(1, 4, { className: "" });
  }
}

function updateB2() {
  if (ggb1.instance.getValue("cell02")) {
    table1.updateCell(0, 1, { className: "" });
    table1.updateCell(0, 2, { className: "" });
    table1.updateCell(0, 3, { className: "" });
    table1.updateCell(0, 4, { className: "" });
    table1.updateCell(1, 1, { className: "" });
    table1.updateCell(1, 2, { className: "bg-danger text-white" });
    table1.updateCell(1, 3, { className: "" });
    table1.updateCell(1, 4, { className: "" });
  }
}

function updateB3() {
  if (ggb1.instance.getValue("cell03")) {
    table1.updateCell(0, 1, { className: "" });
    table1.updateCell(0, 2, { className: "" });
    table1.updateCell(0, 3, { className: "" });
    table1.updateCell(0, 4, { className: "" });
    table1.updateCell(1, 1, { className: "" });
    table1.updateCell(1, 2, { className: "" });
    table1.updateCell(1, 3, { className: "bg-danger text-white" });
    table1.updateCell(1, 4, { className: "" });
  }
}

function updateB4() {
  if (ggb1.instance.getValue("cell04")) {
    table1.updateCell(0, 1, { className: "" });
    table1.updateCell(0, 2, { className: "" });
    table1.updateCell(0, 3, { className: "" });
    table1.updateCell(0, 4, { className: "" });
    table1.updateCell(1, 1, { className: "" });
    table1.updateCell(1, 2, { className: "" });
    table1.updateCell(1, 3, { className: "" });
    table1.updateCell(1, 4, { className: "bg-danger text-white" });
  }
}

function updateR1() {
  if (ggb1.instance.getValue("cell11")) {
    table1.updateCell(0, 1, { className: "bg-info text-white" });
    table1.updateCell(0, 2, { className: "" });
    table1.updateCell(0, 3, { className: "" });
    table1.updateCell(0, 4, { className: "" });
    table1.updateCell(1, 1, { className: "" });
    table1.updateCell(1, 2, { className: "" });
    table1.updateCell(1, 3, { className: "" });
    table1.updateCell(1, 4, { className: "" });
  }
}

function updateR2() {
  if (ggb1.instance.getValue("cell12")) {
    table1.updateCell(0, 1, { className: "" });
    table1.updateCell(0, 2, { className: "bg-info text-white" });
    table1.updateCell(0, 3, { className: "" });
    table1.updateCell(0, 4, { className: "" });
    table1.updateCell(1, 1, { className: "" });
    table1.updateCell(1, 2, { className: "" });
    table1.updateCell(1, 3, { className: "" });
    table1.updateCell(1, 4, { className: "" });
  }
}

function updateR3() {
  if (ggb1.instance.getValue("cell13")) {
    table1.updateCell(0, 1, { className: "" });
    table1.updateCell(0, 2, { className: "" });
    table1.updateCell(0, 3, { className: "bg-info text-white" });
    table1.updateCell(0, 4, { className: "" });
    table1.updateCell(1, 1, { className: "" });
    table1.updateCell(1, 2, { className: "" });
    table1.updateCell(1, 3, { className: "" });
    table1.updateCell(1, 4, { className: "" });
  }
}

function updateR4() {
  if (ggb1.instance.getValue("cell14")) {
    table1.updateCell(0, 1, { className: "" });
    table1.updateCell(0, 2, { className: "" });
    table1.updateCell(0, 3, { className: "" });
    table1.updateCell(0, 4, { className: "bg-info text-white" });
    table1.updateCell(1, 1, { className: "" });
    table1.updateCell(1, 2, { className: "" });
    table1.updateCell(1, 3, { className: "" });
    table1.updateCell(1, 4, { className: "" });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"separator":1,"table":1},"stage":"Learn","lessonInfo":"9 M2 TD L22 - Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":false,"layout":"two col"}
*/
