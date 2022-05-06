const { text1, table1, feedback1, radio1, separator1, text2, text3 } =
  components;

text1.updateData({ align: "center" });

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  text3.updateData({ visible: false });
});

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

autorun(() => {
  if (radio1.data.selected === "0") {
    table1.updateCell(0, 1, { className: "bg-info text-white" });
    table1.updateCell(0, 2, { className: "bg-info text-white" });
    table1.updateCell(0, 3, { className: "bg-info text-white" });
    table1.updateCell(0, 4, { className: "bg-info text-white" });
    table1.updateCell(1, 1, { className: "bg-info text-white" });
    table1.updateCell(1, 2, { className: "bg-info text-white" });
    table1.updateCell(1, 3, { className: "bg-info text-white" });
    table1.updateCell(1, 4, { className: "bg-info text-white" });
    table1.updateCell(2, 1, { className: "" });
    table1.updateCell(2, 2, { className: "" });
    table1.updateCell(2, 3, { className: "" });
    table1.updateCell(2, 4, { className: "" });
    table1.updateCell(2, 5, { className: "" });
    table1.updateCell(0, 5, { className: "" });
    table1.updateCell(1, 5, { className: "" });
    text2.updateData({ visible: true });
    text3.updateData({ visible: false });
  }
  if (radio1.data.selected === "1") {
    table1.updateCell(0, 1, { className: "" });
    table1.updateCell(0, 2, { className: "" });
    table1.updateCell(0, 3, { className: "" });
    table1.updateCell(0, 4, { className: "" });
    table1.updateCell(1, 1, { className: "" });
    table1.updateCell(1, 2, { className: "" });
    table1.updateCell(1, 3, { className: "" });
    table1.updateCell(1, 4, { className: "" });
    table1.updateCell(2, 1, { className: "bg-info text-white" });
    table1.updateCell(2, 2, { className: "bg-info text-white" });
    table1.updateCell(2, 3, { className: "bg-info text-white" });
    table1.updateCell(2, 4, { className: "bg-info text-white" });
    table1.updateCell(2, 5, { className: "" });
    table1.updateCell(0, 5, { className: "bg-info text-white" });
    table1.updateCell(1, 5, { className: "bg-info text-white" });
    text2.updateData({ visible: false });
    text3.updateData({ visible: true });
  }
});

/*
{"compTotals":{"textbox":4,"table":1,"radiogroup":1,"separator":1},"stage":"Learn","lessonInfo":"9 M2 TD L22 - Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":false,"layout":"two col"}
*/
