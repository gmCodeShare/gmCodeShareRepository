const { ggb1, feedback1, text1, text2, Separator1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let pinArray = [
  "pin1",
  "pin2",
  "pin3",
  "pin4",
  "pin5",
  "pin6",
  "pin7",
  "pin8",
  "pin9",
  "pin10",
  "shopAText",
  "shopBText",
  "shopCText",
  "shopDText",
  "shopEText",
  "shopFText",
  "shopGText",
  "shopHText",
  "shopIText",
  "shopJText",
];
let segArray = [
  "seg1",
  "seg2",
  "seg3",
  "seg4",
  "seg5",
  "seg6",
  "seg7",
  "seg8",
  "seg9",
  "seg10",
];

let textPinArray = [
  "textPin1",
  "textPin2",
  "textPin3",
  "textPin4",
  "textPin5",
  "textPin6",
  "textPin7",
  "textPin8",
  "textPin9",
  "textPin10",
];
let planeArray = [
  "plane1",
  "plane2",
  "plane3",
  "plane4",
  "plane5",
  "plane6",
  "plane7",
  "plane8",
  "plane9",
  "plane10",
];
let pinTimeArray = [
  "pin1Time",
  "pin2Time",
  "pin3Time",
  "pin4Time",
  "pin5Time",
  "pin6Time",
  "pin7Time",
  "pin8Time",
  "pin9Time",
  "pin10Time",
];
let greenPinArray = [
  "greenPin1",
  "greenPin2",
  "greenPin3",
  "greenPin4",
  "greenPin5",
  "greenPin6",
  "greenPin7",
  "greenPin8",
  "greenPin9",
  "greenPin10",
];

if (!ggb1.data.init) {
  text2.updateData({ visible: false });
  buttonGroup1.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.updateData({ init: true });
}

autorun(() => {
  let showComponents = ggb1.innerData["show"];
  if (ggb1.innerData["show"]) {
    buttonGroup1.updateData({ visible: true });
  }
  if (ggb1.innerData["animationDone"]) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  text2.updateData({ visible: true });
  ggb1.instance.setValue("showHalos", false);
  ggb1.instance.setVisible("deliver", false);
  ggb1.instance.setVisible("tryAgain", true);
  ggb1.instance.setVisible("customerTextPic", false);
  for (var i = 0, J = pinArray.length; i < J; i++) {
    ggb1.instance.setVisible(pinArray[i], false);
  }
  ggb1.instance.setVisible("textMinutes", true);
  selectionWork(ggb1.instance.getValue("selection"));
});

function selectionWork(selectionNum) {
  ggb1.instance.setVisible(segArray[selectionNum - 1], true);
  ggb1.instance.setVisible(textPinArray[selectionNum - 1], true);
  ggb1.instance.setVisible(planeArray[selectionNum - 1], true);
  ggb1.instance.setAnimating(pinTimeArray[selectionNum - 1], false);
  ggb1.instance.setValue(pinTimeArray[selectionNum - 1], 0);
  ggb1.instance.setAnimating(pinTimeArray[selectionNum - 1], true);
  ggb1.instance.startAnimation();
}

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  text2.updateData({ text: `$0$ days` });
  ggb1.instance.setValue("selection", 0);
  ggb1.instance.setValue("show", false);
  ggb1.instance.setValue("showHalos", true);
  ggb1.instance.setVisible("deliver", true);
  ggb1.instance.setVisible("tryAgain", false);
  ggb1.instance.setVisible("customerTextPic", true);
  ggb1.instance.setVisible("textMinutes", false);
  for (var i = 0, J = pinArray.length; i < J; i++) {
    ggb1.instance.setVisible(pinArray[i], true);
    ggb1.instance.setVisible(planeArray[i], false);
    ggb1.instance.setVisible(greenPinArray[i], false);
    ggb1.instance.setVisible(textPinArray[i], false);
    ggb1.instance.setVisible(segArray[i], false);
    ggb1.instance.setValue(pinTimeArray[i], 0);
  }
});

for (let i = 1, L = pinArray.length + 1; i < L; i++) {
  ggb1.instance.registerObjectUpdateListener(`pin${i}Time`, () => {
    let num = Math.round(ggb1.instance.getValue(`pin${i}Time`) * 1) / 1;
    text2.updateData({ text: `$${num}$ days` });
  });
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"separator":1,"buttongroup":1},"stage":"Launch","lessonInfo":"8 M6 TC L11 - Print Alt: Scatter Plots","teacherView":true,"layout":"two col"}
*/
