const {
  text1,
  ggb1,
  separator2,
  buttonGroup1,
  separator3,
  text3,
  button1,
  separator4,
  text2,
  table2,
  feedback,
  table1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("end", 100);
  table2.updateData({ visible: false });
  text2.updateData({ visible: false });
  // show these to enable hint:
  button1.updateData({ visible: false });
  text3.updateData({ visible: false });
});

buttonGroup1.on("click:1", () => {
  ggb1.instance.evalCommand("RunClickScript(dec)");
  // let gen = ggb1.instance.getValue("gen");
  // delete a row
  let newRows = [...table1.data.rows];
  newRows.pop();
  table1.updateData({ rows: newRows });
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  button1.updateData({ disabled: true });
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
  let newNewSmiles = 2 * Math.pow(3, newGen); //ggb1.instance.getValue("numNew");
  let newTotalSmiles = Math.pow(3, newGen + 1) - 1;
  // 1 * ggb1.instance.getValue("numNew") + 1 * ggb1.instance.getValue("numOld");
  let newRow = createTableRowsData([[newGen, newNewSmiles, newTotalSmiles]]);
  table1.updateData({ rows: [...oldRows, ...newRow] });
});

autorun(() => {
  // disable buttons appropriately
  buttonGroup1.updateSingleButton({ disabled: ggb1.innerData["gen"] < 1 }, 1);
  buttonGroup1.updateSingleButton({ disabled: ggb1.innerData["gen"] > 3 }, 2);
});

autorun(() => {
  if (table1.data.rows.length > 4) {
    table1.updateCell(4, 2, { className: "text-danger" });
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
{"compTotals":{"textbox":4,"geogebra":1,"separator":3,"buttongroup":1,"button":1,"table":2},"stage":"Learn","lessonInfo":"9 M5 TB L08 - Print Alt: Exponential Functions","teacherView":true,"layout":"T layout"}
*/
