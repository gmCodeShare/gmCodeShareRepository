const { ggb1, separator2, buttonGroup1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

const id1 = "slide-62797c462e04";

let prevTable1 = getPrevTable(id1, "table1", 2, 10);

if (prevTable1.data.hasData) {
  ggb1.instance.evalCommand("SetValue(data, {})");
  for (var i = 0; i < 10; i++) {
    if (prevTable1.data.rows[i][0].value && prevTable1.data.rows[i][1].value) {
      ggb1.instance.evalCommand(
        `SetValue(data,Append(data,(${prevTable1.data.rows[i][0].value},${prevTable1.data.rows[i][1].value})))`
      );
    }
  }
  ggb1.instance.setVisible("data", true);
} else {
  ggb1.instance.evalCommand("SetValue(data, {(1, 5), (2, 8), (3, 15)})");
}

let headerX = prevTable1.data.columns[0].value;
let headerY = prevTable1.data.columns[1].value;
ggb1.instance.setTextValue("text1", headerX);
ggb1.instance.setTextValue("text2", headerY);
ggb1.instance.setValue("showText", true);

if (ggb1.instance.getValue("quadratic")) {
  ggb1.instance.setVisible("shortenedQuadratic", true);
} else if (ggb1.instance.getValue("exponential")) {
  ggb1.instance.setVisible("shortenedExponential", false);
}

// if something is showing, disable its button
buttonGroup1.updateSingleButton(
  { disabled: ggb1.instance.getValue("quadratic") || !prevTable1.data.hasData },
  1
);
buttonGroup1.updateSingleButton(
  {
    disabled: ggb1.instance.getValue("exponential") || !prevTable1.data.hasData,
  },
  2
);

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setVisible("shortenedQuadratic", true);
  ggb1.instance.setVisible("shortenedExponential", false);
  ggb1.instance.setValue("quadratic", true);
  ggb1.instance.setValue("exponential", false);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.setVisible("shortenedQuadratic", false);
  ggb1.instance.setVisible("shortenedExponential", true);
  ggb1.instance.setValue("quadratic", false);
  ggb1.instance.setValue("exponential", true);
});

function getPrevTable(slideID, compName = "table1", numRows, numColumns) {
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
    data: { columns: [], rows: [] },
  };
  for (let i = 0; i < numRows; i++) {
    let newRow = [];
    for (let j = 0; j < numColumns; j++) {
      newRow.push({ value: "" });
      if (i === 0) {
        defTable.data.columns.push({ value: "" });
      }
    }
    defTable.data.rows.push([...newRow]);
  }
  // get previous data
  let prevTable = getFromSlide(slideID, compName, defTable) || defTable;
  // check previous data, fill in useful data
  prevTable.data.hasData =
    prevTable.data.columns.some(({ value }) => value) ||
    prevTable.data.rows.some((row) => row.some(({ value }) => value));
  prevTable.data.isComplete =
    prevTable.data.columns.every(({ value }) => value) &&
    prevTable.data.rows.every((row) => row.every(({ value }) => value));
  prevTable.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
  prevTable.data.slideNum = slideNum;
  prevTable.data.flagText = prevTable.data.isComplete
    ? ""
    : prevTable.data.goBackString;
  // add some useful methods
  prevTable.getCell = function (row, col, leaveBlanks = false) {
    const emptyVal = leaveBlanks ? "" : this.data.goBackString;
    let value = this.data?.rows?.[row]?.[col]?.value
      ? this.data.rows[row][col].value
      : emptyVal;
    return { ...this.data.rows[row][col], value };
  };
  prevTable.fillCells = function (
    tableName,
    rowStart = 0,
    colStart = 0,
    leaveBlanks = false,
    cellUpdates = {}
  ) {
    const emptyVal = leaveBlanks ? "" : this.data.goBackString;
    for (let i = 0, L = numColumns; i < L; i++) {
      for (let j = 0, K = numRows; j < K; j++) {
        let cellVal = this.getCell(j, i, true).value
          ? this.getCell(j, i, true).value
          : emptyVal;
        components[tableName].updateCell(j + rowStart, i + colStart, {
          ...cellUpdates,
          value: cellVal,
        });
      }
    }
  };
  return { ...prevTable };
}

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M6 TA L01 - Print Alternate Slide Deck for Analyzing Paint Splatters","teacherView":true,"layout":"one col"}
*/
