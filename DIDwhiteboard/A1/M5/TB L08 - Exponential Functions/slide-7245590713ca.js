const {
  text1,
  ggb1,
  separator2,
  buttonGroup1,
  table2,
  feedback,
  table1,
  separator1,
  cc_sharewithclass_def0dec3e642_textbox1: shareText1,
  cc_sharewithclass_def0dec3e642_input1: shareInput1,
  cc_sharewithclass_def0dec3e642_button1: shareButton1,
  cc_sharewithclass_def0dec3e642_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("end", 100);
  table2.updateData({ visible: false });
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

buttonGroup1.on("click:1", () => {
  ggb1.instance.evalCommand("RunClickScript(dec)");
  // let gen = ggb1.instance.getValue("gen");
  // delete a row
  let newRows = [...table1.data.rows];
  newRows.pop();
  table1.updateData({ rows: newRows });
});

const createTableCell = (value) => ({
  editable: false,
  math: true,
  value,
});
const createTableRowsData = (rows) =>
  rows.map((row) => row.map(createTableCell));

buttonGroup1.on("click:2", () => {
  let oldRows = [...table1.data.rows];
  ggb1.instance.evalCommand("RunClickScript(inc)");
  // let gen = ggb1.instance.getValue("gen");
  // table2.updateCell(0, 0, { value: `${ggb1.instance.getValue("gen")}` });
  // table2.updateCell(0, 1, { value: `${ggb1.instance.getValue("numNew")}` });
  // table2.updateCell(0, 2, {
  //   value: `${totalSmiles}`,
  // });
  // let newRows = [...table2.data.rows];
  let newGen = ggb1.instance.getValue("gen");
  let newNewSmiles = 3 * Math.pow(2, newGen); //ggb1.instance.getValue("numNew");
  let newTotalSmiles = 3 * Math.pow(2, newGen + 1) - 3;
  // 1 * ggb1.instance.getValue("numNew") + 1 * ggb1.instance.getValue("numOld");
  let newRow = createTableRowsData([[newGen, newNewSmiles, newTotalSmiles]]);
  table1.updateData({ rows: [...oldRows, ...newRow] });
});

autorun(() => {
  // disable buttons appropriately
  buttonGroup1.updateSingleButton({ disabled: ggb1.innerData["gen"] < 1 }, 1);
  buttonGroup1.updateSingleButton({ disabled: ggb1.innerData["gen"] > 4 }, 2);
  if (ggb1.innerData["gen"] > 4) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
});

autorun(() => {
  if (table1.data.rows.length > 5) {
    table1.updateCell(5, 2, { className: "text-danger" });
  }
});

// function displayVals(gen) {
//   for (let i = 1, L = table1.data.rows.length; i < L; i++) {
//     if (i == gen) {
//       table1.updateCell(i, 1, { value: `${ggb1.instance.getValue("numNew")}` });
//       let totalSmiles =
//         1 * ggb1.instance.getValue("numNew") +
//         1 * ggb1.instance.getValue("numOld");
//       table1.updateCell(i, 2, {
//         value: `${totalSmiles}`,
//       });
//     } else if (i > gen) {
//       table1.updateCell(i, 1, { value: "" });
//       table1.updateCell(i, 2, { value: "" });
//     }
//   }
// }

/*
{"compTotals":{"textbox":2,"geogebra":1,"separator":2,"buttongroup":1,"table":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TB L08 - Exponential Functions","teacherView":false,"layout":"T layout"}
*/
