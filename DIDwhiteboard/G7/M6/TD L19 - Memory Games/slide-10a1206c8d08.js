const {
  table1,
  feedback1,
  cc_sharewithclass_373170ce1882_textbox1,
  cc_sharewithclass_373170ce1882_input1,
  cc_sharewithclass_373170ce1882_button1,
  cc_sharewithclass_373170ce1882_studentanswers1,
} = components;

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

const id1 = "slide-f16a5d41904b";

let defPrevTable1NumCol = 2; //your number here
let defPrevTable1NumRow = 3; //your number here
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

let oldTable = getFromSlide(id1, "table2", defPrevTable1) || defPrevTable1; // don't forget to change slide id

// const oldTable = getFromSlide(id1, "table2");

oldCell01 = oldTable.data.rows[0][1].value;
oldCell11 = oldTable.data.rows[1][1].value;
oldCell21 = oldTable.data.rows[2][1].value;

if (!oldCell01) {
  let missingInputString = `\\color{707070}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}`;
  oldCell01 = missingInputString;
  oldCell11 = missingInputString;
  oldCell21 = missingInputString;
  table1.updateCell(0, 1, {
    value: missingInputString,
  });
  table1.updateCell(1, 1, {
    value: missingInputString,
  });
  table1.updateCell(2, 1, {
    value: missingInputString,
  });
} else {
  table1.updateCell(0, 1, { value: oldCell01 });
  table1.updateCell(1, 1, { value: oldCell11 });
  table1.updateCell(2, 1, { value: oldCell21 });
}

/*
{"compTotals":{"table":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M6 TD L19 - Memory Games","teacherView":false,"layout":"two col"}
*/
