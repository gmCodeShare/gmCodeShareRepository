const {
  ggb1,
  feedback1,
  text1,
  table1,
  separator1,
  cc_sharewithclass_7968e1d8c9fd_textbox1,
  cc_sharewithclass_7968e1d8c9fd_input1,
  cc_sharewithclass_7968e1d8c9fd_button1,
  cc_sharewithclass_7968e1d8c9fd_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
text1.updateData({ align: "center" });

const defGGB = {
  innerData: false,
};

let data = getFromSlide("slide-e8d3cd8b2be0", "ggb1", defGGB) || defGGB;

if (data.innerData) {
  ggb1.instance.setValue("y1", data.innerData["y1"]);
  ggb1.instance.setValue("y2", data.innerData["y2"]);
  ggb1.instance.setValue("y3", data.innerData["y3"]);
  ggb1.instance.setValue("y4", data.innerData["y4"]);
  ggb1.instance.setValue("y5", data.innerData["y5"]);
  ggb1.instance.setValue("y6", data.innerData["y6"]);
  ggb1.instance.setValue("y7", data.innerData["y7"]);
  ggb1.instance.setValue("y8", data.innerData["y8"]);
}

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

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TD L22 - Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":false,"layout":"two col"}
*/
