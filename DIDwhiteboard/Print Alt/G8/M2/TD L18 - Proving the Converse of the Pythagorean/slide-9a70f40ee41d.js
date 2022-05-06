const { buttonGroup1, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let timeForAngle = 0.5;

ggb1.instance.setValue("speed", 7);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

ggb1.instance.registerObjectUpdateListener("time", whatsNext);

function whatsNext() {
  if (
    ggb1.instance.getValue("time") == 1 &&
    ggb1.instance.getValue("showHyp2Growing")
  ) {
    ggb1.instance.setValue("showHyp2", true);
    ggb1.instance.setValue("showTriText", true);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  } else if (
    ggb1.instance.getValue("time") == 1 &&
    ggb1.instance.getValue("bMoved")
  ) {
    ggb1.instance.setValue("showHyp2Growing", true);
    runAgain();
  } else if (
    ggb1.instance.getValue("time") > timeForAngle &&
    ggb1.instance.getValue("bMoved") &&
    !ggb1.instance.getValue("showAngle")
  ) {
    ggb1.instance.setValue("showAngle", true);
  } else if (
    ggb1.instance.getValue("time") == 1 &&
    !ggb1.instance.getValue("bMoved") &&
    ggb1.instance.getValue("aMoved")
  ) {
    ggb1.instance.setValue("bMoved", true);
    runAgain();
  } else if (
    ggb1.instance.getValue("time") == 1 &&
    !ggb1.instance.getValue("aMoved")
  ) {
    ggb1.instance.setValue("aMoved", true);
    runAgain();
  }
}

function runAgain() {
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setValue("aMoved", false);
  ggb1.instance.setValue("bMoved", false);
  ggb1.instance.setValue("showAngle", false);
  ggb1.instance.setValue("showEquations", false);
  ggb1.instance.setValue("showHyp2", false);
  ggb1.instance.setValue("showHyp2Growing", false);
  ggb1.instance.setValue("showHyp2Text", false);
  ggb1.instance.setValue("showTriText", false);
});

/*
{"compTotals":{"buttongroup":1,"geogebra":1},"stage":"Learn","lessonInfo":"8 M2 TD L18 - Print Alt: Proving the Converse of the Pythagorean Theorem","teacherView":false,"layout":"one col"}
*/
