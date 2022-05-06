const { text1, ggb1, feedback1, text2, ggb2 } = components;

const id1 = "slide-a2ee6a48853c";
const id2 = "slide-e8433fe1cb61";

let defPrevTable1NumCol = 10;
let defPrevTable1NumRow = 13;

let defPrevTable1 = {
  data: { columns: [], rows: [] },
};

for (let i = 0; i < defPrevTable1NumCol; i++) {
  defPrevTable1.data.columns.push({ value: "" });
}

for (let i = 0; i < defPrevTable1NumRow; i++) {
  let newRow = [];
  for (let j = 0; j < defPrevTable1NumCol; j++) {
    newRow.push({ value: "" });
  }
  defPrevTable1.data.rows.push([...newRow]);
}

let prevTable1 = getFromSlide(id1, "table1", defPrevTable1) || defPrevTable1;
let prevTable2 = getFromSlide(id2, "table1", defPrevTable1) || defPrevTable1;

let count = 0;
for (var j = 1; j < 11; j = j + 2) {
  for (var i = 0; i < 13; i++) {
    ggb1.instance.setValue(`ans${count}`, prevTable1.data.rows[i][j].value);
    count++;
  }
}

let count2 = 0;
for (var j = 1; j < 11; j = j + 2) {
  for (var i = 0; i < 13; i++) {
    ggb2.instance.setValue(`ans${count2}`, prevTable2.data.rows[i][j].value);
    count2++;
  }
}

/*
{"compTotals":{"textbox":3,"geogebra":2},"stage":"Learn","lessonInfo":"9 M1 TD L18 - Print Alt Distributions and Their Shapes","teacherView":true,"layout":"two col"}
*/
