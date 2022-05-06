const { ggb1, feedback1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

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

const id = `slide-c969e090344e`;
let oxInput = getFromSlide(id, `input1.data.text`, "") || "";
let sheepInput = getFromSlide(id, `input2.data.text`, "") || "";

if (!oxInput) {
  oxInput = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
}

if (!sheepInput) {
  sheepInput = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
}

let snapshot1 =
  getFromSlide("slide-3636b837dd6b", "ggb1.data.save64", "") || "";
if (snapshot1) {
  ggb1.instance.setBase64(snapshot1);
}

let snapshot2 =
  getFromSlide("slide-746092970a09", "ggb1.data.save64", "") || "";
if (snapshot2) {
  ggb2.instance.setBase64(snapshot2, onCallback);
}
let bottomImageA2 =
  getFromSlide("slide-705d219ad8ee", "ggb1.data.bottomImageA", "") || "";
let bottomImageB2 =
  getFromSlide("slide-705d219ad8ee", "ggb1.data.bottomImageB", "") || "";

function onCallback() {
  ggb2.instance.setVisible("drawer", false);
  ggb2.instance.setVisible("f", false);
  ggb2.instance.setVisible("defaultMinusObjA", false);
  ggb2.instance.setVisible("defaultMinusObjB", false);
  ggb2.instance.setVisible("defaultPlusObjA", false);
  ggb2.instance.setVisible("defaultPlusObjB", false);
  ggb2.instance.setVisible("objADrawer", false);
  ggb2.instance.setVisible("objBDrawer", false);
  ggb2.instance.setFilling("disabledMinusObjA", 0);
  ggb2.instance.setFilling("disabledMinusObjB", 0);
  ggb2.instance.setFilling("disabledPlusObjA", 0);
  ggb2.instance.setFilling("disabledPlusObjB", 0);
  ggb2.instance.setFilling("hoverMinusObjA", 0);
  ggb2.instance.setFilling("hoverMinusObjB", 0);
  ggb2.instance.setFilling("hoverPlusObjA", 0);
  ggb2.instance.setFilling("hoverPlusObjB", 0);
  //ggb2.instance.setVisible(bottomImageA2, false);
  //ggb2.instance.setVisible(bottomImageB2, false);
  let myArray = ggb2.instance.getAllObjectNames("image");
  for (let i = 0, L = myArray.length; i < L; i++) {
    ggb2.instance.setFixed(myArray[i], false, false);
  }
}

/*
{"compTotals":{"geogebra":2,"textbox":1},"stage":"Learn","lessonInfo":"8 M5 TC L12 - Print Alternate Slide Deck for Solving Historical Problems with Systems of Equations​","teacherView":true,"layout":"T layout"}
*/
