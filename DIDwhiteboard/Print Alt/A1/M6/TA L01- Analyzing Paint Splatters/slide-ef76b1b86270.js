const { ggb1, ggb2, separator1, buttonGroup1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!getData("init")) {
    // set initial states
    ggb2.updateData({ visible: false });
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    saveData({
      linearResiduals: [],
      linearXValues: [],
      linearResidualValues: [],
    });
    // create/update a dummy variable to keep track of whether the slide has initialized
    saveData({ init: true });
  }
}

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
  ggb1.instance.setVisible("shortenedLinear", true);
  clearResiduals();
} else {
  ggb1.instance.evalCommand("SetValue(data, {(1, 5), (2, 8), (3, 15)})");
}

let headerX = prevTable1.data.columns[0].value;
let headerY = prevTable1.data.columns[1].value;
ggb1.instance.setTextValue("text1", headerX);
ggb2.instance.setTextValue("text2", headerX);
ggb1.instance.setTextValue("text2", headerY);
ggb1.instance.setValue("showText", true);

if (prevTable1.data.hasData) {
  createResiduals();
  createResidualPlot();
  let linearResiduals = getData("linearResiduals");
  for (var i = 0, J = linearResiduals.length; i < J; i++) {
    ggb1.instance.setVisible(linearResiduals[i], false);
  }
  ggb2.instance.setVisible("linearData", true);
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.updateData({ visible: true });
  ggb2.updateData({ visible: false });
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
});

function clearResiduals() {
  let linearResiduals = getData("linearResiduals");
  let linearXValues = getData("linearXValues");
  let linearResidualValues = getData("linearResidualValues");
  for (var i = 0, J = linearResiduals.length; i < J; i++) {
    ggb1.instance.deleteObject(linearResiduals[i]);
    ggb1.instance.deleteObject(linearXValues[i]);
    ggb1.instance.deleteObject(linearResidualValues[i]);
  }
  saveData({
    linearResiduals: [],
    linearXValues: [],
    linearResidualValues: [],
  });
}

function createResiduals() {
  let listLength = ggb1.instance.getValue("listLength");
  let linearResiduals = getData("linearResiduals");
  let linearXValues = getData("linearXValues");
  let linearResidualValues = getData("linearResidualValues");
  for (let i = 0, L = listLength; i < L; i++) {
    linRes = ggb1.instance.evalCommandGetLabels(
      `Segment(Element(data, ${
        i + 1
      }), Intersect(linearBestFit, x = x(Element(data, ${i + 1}))))`
    );
    linXVal = ggb1.instance.evalCommandGetLabels(`x(Element(data, ${i + 1}))`);
    linResVal = ggb1.instance.evalCommandGetLabels(
      `y(Vector(Intersect(linearBestFit, x = x(Element(data, ${
        i + 1
      }))),Element(data, ${i + 1})))`
    );
    linearResiduals.push(linRes);
    linearXValues.push(linXVal);
    linearResidualValues.push(linResVal);
    saveData({ linearResiduals, linearXValues, linearResidualValues });
  }
}

function createResidualPlot() {
  let listLength = ggb1.instance.getValue("listLength");
  let linearXValues = getData("linearXValues");
  let linearResidualValues = getData("linearResidualValues");
  for (var i = 0, L = listLength; i < L; i++) {
    ggb2.instance.evalCommand(
      `SetValue(linearData, Append(linearData, (${ggb1.instance.getValue(
        linearXValues[i]
      )},${ggb1.instance.getValue(linearResidualValues[i])})))`
    );
  }
}

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

function saveData(dataObj = {}, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataObj !== "object") {
    console.error(
      "saveData error: Parameters should be an object and a string!"
    );
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataName !== "string") {
    console.error("getData error: Parameters should both be strings!");
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}

/*
{"compTotals":{"geogebra":2,"separator":1,"buttongroup":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M6 TA L01 - Print Alternate Slide Deck for Analyzing Paint Splatters","teacherView":true,"layout":"one col"}
*/
