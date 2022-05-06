const {
  text1,
  table1,
  feedback1,
  cc_submit_cd62960c8745_textbox1,
  cc_submit_cd62960c8745_input1,
  cc_submit_cd62960c8745_button1: button1,
  separator2,
  cc_sharewithclass_7968e1d8c9fd_textbox1: text3,
  cc_sharewithclass_7968e1d8c9fd_input1: input2,
  cc_sharewithclass_7968e1d8c9fd_button1: button2,
  cc_sharewithclass_7968e1d8c9fd_studentanswers1,
} = components;

slide.on("firstload", () => {
  text3.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

text1.updateData({ align: "center" });

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

button1.on("click", () => {
  text3.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":2,"table":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TD L22 - Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":false,"layout":"two col"}
*/
