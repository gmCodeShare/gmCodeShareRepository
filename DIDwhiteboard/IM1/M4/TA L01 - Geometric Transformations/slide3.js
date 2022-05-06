const { ggb1, ggb2, button1 } = components;

slide.on("firstload", () => {
  ggb2.instance.setVisible("functionMachineF", false);
  ggb2.instance.setVisible("functionMachineH", true);
});

let inputPoints = ["A", "B", "C", "D"];
let ggb1Booleans = ["showA", "showB", "showC", "showD"];
let sliders = ["time1", "time2", "time3", "time4"];
let hoverBooleans = [
  "enableAHover",
  "enableBHover",
  "enableCHover",
  "enableDHover",
];
let buttons = [
  "buttonARegion",
  "buttonBRegion",
  "buttonCRegion",
  "buttonDRegion",
];

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb2.instance.registerObjectUpdateListener("dropAll", finalDrop);
ggb2.instance.registerObjectUpdateListener("time5", updateGGB1Time5);

ggb2.instance.registerObjectClickListener("buttonARegion", buttonAWork);
ggb2.instance.registerObjectClickListener("buttonBRegion", buttonBWork);
ggb2.instance.registerObjectClickListener("buttonCRegion", buttonCWork);
ggb2.instance.registerObjectClickListener("buttonDRegion", buttonDWork);

ggb2.instance.registerClientListener(focusIndicators);

function focusIndicators(a) {
  if (a.type == "select") {
    if (a.target == "buttonARegion") {
      ggb2.instance.setVisible("selectIndicatorA", true);
    } else {
      ggb2.instance.setVisible("selectIndicatorA", false);
    }
    if (a.target == "buttonBRegion") {
      ggb2.instance.setVisible("selectIndicatorB", true);
    } else {
      ggb2.instance.setVisible("selectIndicatorB", false);
    }
    if (a.target == "buttonCRegion") {
      ggb2.instance.setVisible("selectIndicatorC", true);
    } else {
      ggb2.instance.setVisible("selectIndicatorC", false);
    }
    if (a.target == "buttonDRegion") {
      ggb2.instance.setVisible("selectIndicatorD", true);
    } else {
      ggb2.instance.setVisible("selectIndicatorD", false);
    }
  }
  if (a.type == "deselect") {
    ggb2.instance.setVisible("selectIndicatorA", false);
    ggb2.instance.setVisible("selectIndicatorB", false);
    ggb2.instance.setVisible("selectIndicatorC", false);
    ggb2.instance.setVisible("selectIndicatorD", false);
  }
}

function buttonAWork() {
  ggb1.instance.setVisible("A", true);
  ggb2.instance.setFixed("buttonARegion", true, false);
  ggb2.instance.setValue("enableAHover", false);
  ggb2.instance.setAnimating("time1", false);
  ggb2.instance.setValue("time1", 0);
  ggb2.instance.setAnimating("time1", true);
  ggb2.instance.startAnimation();
}

function buttonBWork() {
  ggb1.instance.setVisible("B", true);
  ggb2.instance.setFixed("buttonBRegion", true, false);
  ggb2.instance.setValue("enableBHover", false);
  ggb2.instance.setAnimating("time2", false);
  ggb2.instance.setValue("time2", 0);
  ggb2.instance.setAnimating("time2", true);
  ggb2.instance.startAnimation();
}

function buttonCWork() {
  ggb1.instance.setVisible("C", true);
  ggb2.instance.setFixed("buttonCRegion", true, false);
  ggb2.instance.setValue("enableCHover", false);
  ggb2.instance.setAnimating("time3", false);
  ggb2.instance.setValue("time3", 0);
  ggb2.instance.setAnimating("time3", true);
  ggb2.instance.startAnimation();
}

function buttonDWork() {
  ggb1.instance.setVisible("D", true);
  ggb2.instance.setFixed("buttonDRegion", true, false);
  ggb2.instance.setValue("enableDHover", false);
  ggb2.instance.setAnimating("time4", false);
  ggb2.instance.setValue("time4", 0);
  ggb2.instance.setAnimating("time4", true);
  ggb2.instance.startAnimation();
}

for (let i = 1, L = sliders.length + 1; i < L; i++) {
  ggb2.instance.registerObjectUpdateListener(`time${i}`, () => {
    ggb1.instance.setValue(`time${i}`, ggb2.instance.getValue(`time${i}`));
    if (ggb2.instance.getValue(`time${i}`) == 1) {
      if (ggb2.instance.getValue("time1") == 1) {
        ggb1.instance.setValue("showA", true);
      }
      if (ggb2.instance.getValue("time2") == 1) {
        ggb1.instance.setValue("showB", true);
      }
      if (ggb2.instance.getValue("time3") == 1) {
        ggb1.instance.setValue("showC", true);
      }
      if (ggb2.instance.getValue("time4") == 1) {
        ggb1.instance.setValue("showD", true);
      }
      ggb2.instance.setAnimating("pause", false);
      ggb2.instance.setValue("pause", 0);
      ggb2.instance.setAnimating("pause", true);
      ggb2.instance.startAnimation();
    }
  });
}

function finalDrop() {
  if (ggb2.instance.getValue("dropAll")) {
    ggb2.instance.setAnimating("time5", false);
    ggb2.instance.setValue("time5", 0);
    ggb2.instance.setAnimating("time5", true);
    ggb2.instance.startAnimation();
  }
}

function updateGGB1Time5() {
  ggb1.instance.setValue(`time5`, ggb2.instance.getValue(`time5`));
}

button1.on("click", () => {
  ggb1.instance.stopAnimation();
  ggb2.instance.stopAnimation();
  for (let i = 0, L = sliders.length; i < L; i++) {
    ggb1.instance.setAnimating(sliders[i], false);
    ggb2.instance.setAnimating(sliders[i], false);
    ggb1.instance.setValue(sliders[i], 0);
    ggb2.instance.setValue(sliders[i], 0);
    ggb2.instance.setFixed(buttons[i], true, true);
    ggb2.instance.setValue(hoverBooleans[i], true);
    ggb1.instance.setValue(ggb1Booleans[i], false);
    ggb1.instance.setVisible(inputPoints[i], false);
  }
  ggb2.instance.setAnimating("time5", false);
  ggb2.instance.setValue("time5", 0);
  ggb1.instance.setAnimating("timeZoom", false);
  ggb1.instance.setValue("timeZoom", 0);
});

// autorun(() => {
//   const time = ggb1.innerData["time5"];
//   if (time === 1) {
//     ggb1.instance.stopAnimation();
//     ggb1.instance.setAnimating("time5", false);
//     ggb1.instance.setAnimating("timeZoom", true);
//     ggb1.instance.startAnimation();
//   }
// });
