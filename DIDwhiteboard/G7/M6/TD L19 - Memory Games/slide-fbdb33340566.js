const { text1, table1, feedback1, table2, button1 } = components;

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

const id1 = "slide-ae9ff75b3098";

button1.updateData({ align: "right" });
text1.updateData({ align: "center" });

let defPrevTable1NumCol = 3; //your number here
let defPrevTable1NumRow = 2; //your number here
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

let oldTable = getFromSlide(id1, "table1", defPrevTable1) || defPrevTable1; // don't forget to change slide id

// const oldTable = getFromSlide("slide-ae9ff75b3098", "table1");

oldCell01 = oldTable.data.rows[0][1].value;
oldCell11 = oldTable.data.rows[1][1].value;
oldCell02 = oldTable.data.rows[0][2].value;
oldCell12 = oldTable.data.rows[1][2].value;

if (!oldCell01) {
  let missingInputString = `\\color{707070}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}`;
  oldCell01 = missingInputString;
  oldCell11 = missingInputString;
  oldCell02 = missingInputString;
  oldCell12 = missingInputString;
  table1.updateCell(0, 1, {
    value: missingInputString,
  });
  table1.updateCell(1, 1, {
    value: missingInputString,
  });
  table1.updateCell(0, 2, {
    value: missingInputString,
  });
  table1.updateCell(1, 2, {
    value: missingInputString,
  });
} else {
  table1.updateCell(0, 1, { value: oldCell01 });
  table1.updateCell(1, 1, { value: oldCell11 });
  table1.updateCell(0, 2, { value: oldCell02 });
  table1.updateCell(1, 2, { value: oldCell12 });
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
  let entries = [
    table2.getCell(0, 1).value,
    table2.getCell(1, 1).value,
    table2.getCell(2, 1).value,
  ];
  if (!arrayEquals(entries, table2.data.last)) {
    button1.updateData({
      align: "right",
      text: "Submit",
      disabled: !entries.every((value) => !!value),
    });
    table2.updateData({ last: entries });
  }
});
button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});

/*
{"compTotals":{"textbox":2,"table":2,"button":1},"stage":"Learn","lessonInfo":"7 M6 TD L19 - Memory Games","teacherView":false,"layout":"T layout"}
*/
