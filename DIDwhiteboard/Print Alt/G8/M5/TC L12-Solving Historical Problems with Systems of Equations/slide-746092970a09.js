const { button1, ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

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

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    button1.updateData({ disabled: true });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

/*const id = "slide-3636b837dd6b";
let oldTable = getFromSlide(id, "table1", false) || false;

let oldCell00 = 0;
let oldCell01 = 0;
if (oldTable.data?.rows?.length) {
  oldCell00 = oldTable.data.rows[0][0].value;
  oldCell01 = oldTable.data.rows[0][1].value;
}

if (!oldCell00) {
  oldCell00 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}`;
}

if (!oldCell01) {
  oldCell01 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}`;
}

shareText1.updateData({
  text: `Earlier, you said oxen were worth $${oldCell00}$ liang and that sheep were worth $${oldCell01}$ liang.​\n\nBased on your new trade, are your values still possible? Explain.`,
});*/

ggb1.instance.registerClientListener(listenToClient);
ggb1.instance.registerClickListener(deletePoint);

let selectedPoint;
let selectedObj;
let fromDisplay;
let copiedObj;

//set max number of pics
let maxPicsA = 10;
let maxPicsB = 10;
//if there is a max number of pics, set percent fill for unselectable shadow pic
let shadowFill = 0.2;
let normalFill = 1;

//set filling percent and line style for targets when dragging and when point is in target regions
let fillPercentNormal = 0.0;
let fillPercentInRegion = 0.2;
let lineStyleNormal = 1;
let lineStyleInRegion = 0;

let numOfImagesThatCanBeCopied = 2; //here, both the cow and the sheep can be copied
let objToInitCopy = ["objADrawer", "objBDrawer", "objADisplay", "objBDisplay"];
let objToCopy = ["objADisplay", "objBDisplay"];
let objInitPoint = ["ObjAInit", "ObjBInit", "ObjALanding", "ObjBLanding"];

//name hover buttons for function in select
let hoverButtons = [
  "hoverPlusObjA",
  "hoverPlusObjB",
  "hoverMinusObjA",
  "hoverMinusObjB",
];

takeSnapshot();

//take snapshot of ggb for use on different slide
function takeSnapshot() {
  ggb1.instance.setVisible("target1", false);
  ggb1.instance.setVisible("target2", false);
  ggb1.updateData({ imageA: ggb1.instance.getPNGBase64(1, true, 300) });
  //ggb1.updateData({ imageB: ggb1.instance.getPNGBase64(0.75, true, 300) });
  ggb1.updateData({ save64: ggb1.instance.getBase64() });
}

button1.on("click", () => {
  ggb1.updateInnerData({ showResultBool: true });
  ggb1.updateData({ imageA: ggb1.instance.getPNGBase64(1, true, 300) });
  ggb1.updateData({ save64: ggb1.instance.getBase64() });
  button1.updateData({ disabled: true });
  ggb1.instance.setVisible("drawer", false);
  ggb1.instance.setVisible("f", false);
  ggb1.instance.setVisible("defaultMinusObjA", false);
  ggb1.instance.setVisible("defaultMinusObjB", false);
  ggb1.instance.setVisible("defaultPlusObjA", false);
  ggb1.instance.setVisible("defaultPlusObjB", false);
  ggb1.instance.setVisible("objADrawer", false);
  ggb1.instance.setVisible("objBDrawer", false);
  ggb1.instance.setFilling("disabledMinusObjA", 0);
  ggb1.instance.setFilling("disabledMinusObjB", 0);
  ggb1.instance.setFilling("disabledPlusObjA", 0);
  ggb1.instance.setFilling("disabledPlusObjB", 0);
  ggb1.instance.setFilling("hoverMinusObjA", 0);
  ggb1.instance.setFilling("hoverMinusObjB", 0);
  ggb1.instance.setFilling("hoverPlusObjA", 0);
  ggb1.instance.setFilling("hoverPlusObjB", 0);
  //ggb1.instance.setVisible(bottomImageA2, false);
  //ggb1.instance.setVisible(bottomImageB2, false);
  let myArray = ggb1.instance.getAllObjectNames("image");
  for (let i = 0, L = myArray.length; i < L; i++) {
    ggb1.instance.setFixed(myArray[i], false, false);
  }
});

function listenToClient(a) {
  if (a[0] == "select" && objToInitCopy.includes(a[1])) {
    copyImage(objToInitCopy.indexOf(a[1]));
    // console.log(selectedPoint);
  }
  if (a[0] == "dragEnd") {
    addIfNeeded(selectedObj);
    subtractIfNeeded(selectedObj);
    deleteCopiedImage();
    ggb1.instance.evalCommand("SelectObjects()");
    selectedPoint = undefined;
    selectedObj = undefined;
    fromDisplay = undefined;
    copiedObj = undefined;
  }
  if (a[0] == "mouseDown" && ggb1.innerData["hoverPlusObjABool"]) {
    ggb1.updateInnerData({
      numInTarget1: ggb1.innerData["numInTarget1"] + 1,
    });
    ggb1.updateInnerData({ showResultBool: false });
    button1.updateData({ disabled: false });
  }
  if (a[0] == "mouseDown" && ggb1.innerData["hoverPlusObjBBool"]) {
    ggb1.updateInnerData({
      numInTarget2: ggb1.innerData["numInTarget2"] + 1,
    });
    ggb1.updateInnerData({ showResultBool: false });
    button1.updateData({ disabled: false });
  }
  if (a[0] == "mouseDown" && ggb1.innerData["hoverMinusObjABool"]) {
    ggb1.updateInnerData({
      numInTarget1: ggb1.innerData["numInTarget1"] - 1,
    });
    ggb1.updateInnerData({ showResultBool: false });
    button1.updateData({ disabled: false });
  }
  if (a[0] == "mouseDown" && ggb1.innerData["hoverMinusObjBBool"]) {
    ggb1.updateInnerData({
      numInTarget2: ggb1.innerData["numInTarget2"] - 1,
    });
    ggb1.updateInnerData({ showResultBool: false });
    button1.updateData({ disabled: false });
  }
}

//setting targets' visibility and styling
autorun(() => {
  let Follow = ggb1.innerData["Follow"];
  switch (selectedObj) {
    //if selectedObj is A, set target1 styling
    case "A":
      ggb1.instance.setVisible("target1", true);
      if (ggb1.innerData["inTarget1"]) {
        ggb1.instance.setFilling("target1", fillPercentInRegion);
        ggb1.instance.setLineStyle("target1", lineStyleInRegion);
      } else {
        ggb1.instance.setFilling("target1", fillPercentNormal);
        ggb1.instance.setLineStyle("target1", lineStyleNormal);
      }
      break;
    //if selectedObj is B, set target2 styling
    case "B":
      ggb1.instance.setVisible("target2", true);
      if (ggb1.innerData["inTarget2"]) {
        ggb1.instance.setFilling("target2", fillPercentInRegion);
        ggb1.instance.setLineStyle("target2", lineStyleInRegion);
      } else {
        ggb1.instance.setFilling("target2", fillPercentNormal);
        ggb1.instance.setLineStyle("target2", lineStyleNormal);
      }
      break;
    //if selected point is undefined, hide all targets
    case undefined:
      ggb1.instance.setVisible("target1", false);
      ggb1.instance.setVisible("target2", false);
      break;
    default:
      console.log("error in follow switch statement");
  }
});

function addIfNeeded(a) {
  switch (a) {
    case "A":
      if (ggb1.innerData["inTarget1"]) {
        ggb1.updateInnerData({
          numInTarget1: ggb1.innerData["numInTarget1"] + 1,
        });
      }
      ggb1.updateInnerData({ showResultBool: false });
      button1.updateData({ disabled: false });
      break;
    case "B":
      if (ggb1.innerData["inTarget2"]) {
        ggb1.updateInnerData({
          numInTarget2: ggb1.innerData["numInTarget2"] + 1,
        });
      }
      ggb1.updateInnerData({ showResultBool: false });
      button1.updateData({ disabled: false });
      break;
    default:
    //do not add anything
  }
}

function subtractIfNeeded(a) {
  switch (a) {
    case "A":
      if (fromDisplay) {
        ggb1.updateInnerData({
          numInTarget1: ggb1.innerData["numInTarget1"] - 1,
        });
      }
      ggb1.updateInnerData({ showResultBool: false });
      button1.updateData({ disabled: false });
      break;
    case "B":
      if (fromDisplay) {
        ggb1.updateInnerData({
          numInTarget2: ggb1.innerData["numInTarget2"] - 1,
        });
      }
      ggb1.updateInnerData({ showResultBool: false });
      button1.updateData({ disabled: false });
      break;
    default:
    //do not subtract anything
  }
}

function addOrSubtractFromButtons(a) {
  switch (hoverButtons.indexOf(a)) {
    case 0:
      ggb1.updateInnerData({
        numInTarget1: ggb1.innerData["numInTarget1"] + 1,
      });
      ggb1.updateInnerData({ showResultBool: false });
      button1.updateData({ disabled: false });
      break;
    case 1:
      ggb1.updateInnerData({
        numInTarget2: ggb1.innerData["numInTarget2"] + 1,
      });
      ggb1.updateInnerData({ showResultBool: false });
      button1.updateData({ disabled: false });
      break;
    case 2:
      ggb1.updateInnerData({
        numInTarget1: ggb1.innerData["numInTarget1"] - 1,
      });
      ggb1.updateInnerData({ showResultBool: false });
      button1.updateData({ disabled: false });
      break;
    case 3:
      ggb1.updateInnerData({
        numInTarget2: ggb1.innerData["numInTarget2"] - 1,
      });
      ggb1.updateInnerData({ showResultBool: false });
      button1.updateData({ disabled: false });
      break;
    default:
  }
}

function copyImage(a) {
  switch (a % numOfImagesThatCanBeCopied) {
    case 0:
      selectedObj = "A";
      break;
    case 1:
      selectedObj = "B";
      break;
    default:
      console.log("error in copyImage switch statement");
  }
  if (objToInitCopy[a].includes("Display")) {
    fromDisplay = true;
  }
  selectedPoint = ggb1.instance.evalCommandGetLabels(
    "CopyFreeObject(" + objInitPoint[a] + ")"
  );
  copiedObj = ggb1.instance.evalCommandGetLabels(
    "CopyFreeObject(" + objToCopy[a % numOfImagesThatCanBeCopied] + ")"
  );
  ggb1.instance.setVisible(selectedPoint, false);
  let xmlstring = ggb1.instance.getXML(copiedObj);
  let parser = new DOMParser();
  let xmldom = parser.parseFromString(xmlstring, "application/xml");
  xmldom
    .getElementsByTagName("startPoint")[0]
    .setAttribute("exp", selectedPoint);
  xmldom.getElementsByTagName("startPoint")[0].removeAttribute("x");
  xmldom.getElementsByTagName("startPoint")[0].removeAttribute("y");
  xmldom.getElementsByTagName("startPoint")[0].removeAttribute("z");
  let serializer = new XMLSerializer();
  xmlstring = serializer.serializeToString(xmldom);
  ggb1.instance.evalXML(xmlstring);
  ggb1.instance.evalCommand("SelectObjects(" + selectedPoint + ")");
}

function deleteCopiedImage() {
  ggb1.instance.deleteObject(selectedPoint);
  ggb1.instance.deleteObject(copiedObj);
}

//prevent selection of objADisplay when too many or too few
autorun(() => {
  let numInTarget1 = ggb1.innerData["numInTarget1"];
  if (numInTarget1 <= 1) {
    ggb1.instance.setFixed("objADisplay", false, false);
  } else if (numInTarget1 >= maxPicsA) {
    ggb1.instance.setFixed("objADrawer", false, false);
  } else {
    ggb1.instance.setFixed("objADisplay", false, true);
    ggb1.instance.setFixed("objADrawer", false, true);
  }
});

//prevent selection of objBDisplay when too many or too few
autorun(() => {
  let numInTarget2 = ggb1.innerData["numInTarget2"];
  if (numInTarget2 <= 1) {
    ggb1.instance.setFixed("objBDisplay", false, false);
  } else if (numInTarget2 >= maxPicsB) {
    ggb1.instance.setFixed("objBDrawer", false, false);
  } else {
    ggb1.instance.setFixed("objBDisplay", false, true);
    ggb1.instance.setFixed("objBDrawer", false, true);
  }
});

function deletePoint() {
  ggb1.instance.deleteObject(selectedPoint);
  ggb1.instance.evalCommand("SelectObjects()");
  selectedPoint = undefined;
  selectedObj = undefined;
}

/*
{"compTotals":{"button":1,"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"8 M5 TC L12 - Print Alternate Slide Deck for Solving Historical Problems with Systems of Equations​","teacherView":true,"layout":"one col"}
*/
