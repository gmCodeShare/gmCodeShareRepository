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

/*const id = `slide-45834b10817f`;
let swallowInput = getFromSlide(id, `input1.data.text`, "") || "";
let sparrowInput = getFromSlide(id, `input2.data.text`, "") || "";

if (!swallowInput) {
  swallowInput = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
}

if (!sparrowInput) {
  sparrowInput = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
}

text2.updateData({ text: `${swallowInput}\n\n${sparrowInput}` });

button1.updateData({ align: "right" });

slide.on("firstload", () => {
  input1.updateData({ storedString: "" });
  input2.updateData({ storedString: "" });
});*/

let bottomImageA1 =
  getFromSlide("slide-4de50a577000", "ggb1.data.bottomImageA", "") || "";
let bottomImageB1 =
  getFromSlide("slide-4de50a577000", "ggb1.data.bottomImageB", "") || "";
let bottomImageA2 =
  getFromSlide("slide-705d219ad8ee", "ggb1.data.bottomImageA", "") || "";
let bottomImageB2 =
  getFromSlide("slide-705d219ad8ee", "ggb1.data.bottomImageB", "") || "";

let snapshot1 =
  getFromSlide("slide-4de50a577000", "ggb1.data.save64", "") || "";

if (snapshot1) {
  ggb1.instance.setBase64(snapshot1, onCallback1);
} else {
  onCallback1();
}

let snapshot2 =
  getFromSlide("slide-705d219ad8ee", "ggb1.data.save64", "") || "";

if (snapshot2) {
  ggb2.instance.setBase64(snapshot2, onCallback2);
} else {
  onCallback2();
}

function onCallback1() {
  ggb1.instance.setVisible("drawer", false);
  ggb1.instance.setVisible("picSparrowText", false);
  ggb1.instance.setVisible("picSwallowText", false);
  ggb1.instance.setVisible(bottomImageA1, false);
  ggb1.instance.setVisible(bottomImageB1, false);
  let myArray = ggb1.instance.getAllObjectNames("image");
  for (let i = 0, L = myArray.length; i < L; i++) {
    ggb1.instance.setFixed(myArray[i], false, false);
  }
}

function onCallback2() {
  ggb2.instance.setVisible("drawer", false);
  ggb2.instance.setVisible("defaultMinusObjARight", false);
  ggb2.instance.setVisible("defaultMinusObjBRight", false);
  ggb2.instance.setVisible("defaultPlusObjARight", false);
  ggb2.instance.setVisible("defaultPlusObjBRight", false);
  ggb2.instance.setFilling("disabledMinusObjARight", 0);
  ggb2.instance.setFilling("disabledMinusObjBRight", 0);
  ggb2.instance.setFilling("disabledPlusObjARight", 0);
  ggb2.instance.setFilling("disabledPlusObjBRight", 0);
  ggb2.instance.setFilling("hoverMinusObjARight", 0);
  ggb2.instance.setFilling("hoverMinusObjBRight", 0);
  ggb2.instance.setFilling("hoverPlusObjARight", 0);
  ggb2.instance.setFilling("hoverPlusObjBRight", 0);
  ggb2.instance.setVisible(bottomImageA2, false);
  ggb2.instance.setVisible(bottomImageB2, false);
  let myArray = ggb2.instance.getAllObjectNames("image");
  for (let i = 0, L = myArray.length; i < L; i++) {
    ggb2.instance.setFixed(myArray[i], false, false);
  }
}

/*autorun(() => {
  let currentText1 = input1.data.text;
  let currentText2 = input2.data.text;
  if (
    currentText1 != input1.data.storedString ||
    currentText2 != input2.data.storedString
  ) {
    input1.updateData({ storedString: input1.data.text });
    input2.updateData({ storedString: input2.data.text });
    button1.updateData({ disabled: false, text: "Submit" });
  }
  if (currentText1 == "" || currentText2 == "") {
    button1.updateData({ disabled: true });
  }
});

button1.on("click", () => {
  button1.updateData({ disabled: true, text: "Submitted" });
});*/

/*
{"compTotals":{"geogebra":2,"textbox":1},"stage":"Learn","lessonInfo":"8 M5 TC L12 - Print Alternate Slide Deck for Solving Historical Problems with Systems of Equations​","teacherView":true,"layout":"T layout"}
*/
