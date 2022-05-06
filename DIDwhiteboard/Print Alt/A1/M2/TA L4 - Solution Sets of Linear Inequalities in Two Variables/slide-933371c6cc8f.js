const { table1, buttonGroup1, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);
buttonGroup1.updateSingleButton({ disabled: true }, 2);

const id1 = "slide-bdb5269a986a"; //put in your slideID

const id1prevTable = getPrevTable(id1, "table1");
/**
 * STEP 3: use data from your previous select in your code
 */
/**
 * STEP 4: copy the getPrevTable function and paste into your code
 * (putting it at the bottom keeps it out of the way as much as possible)
 */
function getPrevTable(slideID, compName = "table1") {
  // find slide num of source
  const slideNum = ((slideId) => {
    if (
      typeof controls == "undefined" ||
      !controls.slidesNavigationData?.length
    ) {
      return "missing slide!";
    }
    let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
    return allIds.indexOf(slideId) + 1;
  })(slideID);
  // establish default in same data structure as original
  let defTable = {
    data: {
      rows: [
        {
          0: { value: "" },
          1: { value: "" },
          2: { value: "" },
          length: 3,
        },
      ],
      columns: [{ 0: { value: "" }, 1: { value: "" }, length: 2 }],
    },
  };
  // get previous data
  let prevTable = getFromSlide(slideID, compName, defTable) || defTable;
  // fill in other useful data
  prevTable.data.goBackString = `\\text{\[no input yet on slide ${slideNum}\]}`;
  prevTable.data.hasData = !!prevTable.data.rows.length;
  prevTable.data.slideNum = slideNum;
  // set text values
  prevTable.data.flagText = prevTable.data.hasData
    ? ""
    : prevTable.data.goBackString;
  return { ...prevTable };
}
while (table1.data.rows.length < id1prevTable.data.rows.length) {
  table1.addRow();
}
console.log(id1prevTable.data.goBackString);
for (let i = 0, L1 = id1prevTable.data.rows.length; i < L1; i++) {
  for (let j = 0, L2 = id1prevTable.data.columns.length; j < L2; j++) {
    table1.updateCell(i, j, {
      value:
        id1prevTable.data.rows[i][j].value == ""
          ? id1prevTable.data.goBackString
          : id1prevTable.data.rows[i][j].value,
    });
  }
}
autorun(() => {
  for (let i = 0, L1 = table1.data.rows.length; i < L1; i++) {
    ggb1.instance.evalCommand(
      `Point${i}=(${table1.data.rows[i][0].value},${table1.data.rows[i][1].value})`
    );
    ggb1.instance.setLabelVisible(`Point${i}`, false);
    ggb1.instance.setFixed(`Point${i}`, true, false);
  }
  for (
    let k = id1prevTable.data.rows.length, L1 = table1.data.rows.length;
    k < L1;
    k++
  ) {
    ggb1.instance.evalCommand(
      `Point${k}=(${table1.data.rows[k][0].value},${table1.data.rows[k][1].value})`
    );
    ggb1.instance.setLabelVisible(`Point${k}`, false);
    ggb1.instance.setFixed(`Point${k}`, true, false);
    ggb1.instance.setColor(`Point${k}`, 218, 41, 28);
  }
});
buttonGroup1.on("click:1", () => {
  if (table1.data.rows.length > 0) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
  table1.addRow();
  table1.updateCell(table1.data.rows.length - 1, 0, {
    editable: true,
    math: true,
  });
  table1.updateCell(table1.data.rows.length - 1, 1, {
    editable: true,
    math: true,
  });
  console.log(table1.data.rows.length);
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.deleteObject(`Point${table1.data.rows.length - 1}`);

  if (table1.data.rows.length > id1prevTable.data.rows.length) {
    table1.deleteRow(table1.data.rows.length - 1);
  }
  if (table1.data.rows.length <= id1prevTable.data.rows.length) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
  console.log(table1.data.rows.length);
});

/*
{"compTotals":{"table":1,"buttongroup":1,"geogebra":1},"stage":"Learn","lessonInfo":"9 M2 TA L04 - Print Alternate Slide Deck for Solution Sets of Linear Inequalities in Two Variables.","teacherView":true,"layout":"two col"}
*/
