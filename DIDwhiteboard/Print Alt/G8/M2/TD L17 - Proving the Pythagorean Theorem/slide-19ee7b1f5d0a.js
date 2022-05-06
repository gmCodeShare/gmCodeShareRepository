const { buttonGroup1, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

ggb1.instance.setValue("timeRot", 1);
ggb1.instance.setValue("timeGrowthA", 0);
ggb1.instance.setValue("timeGrowthB", 0);
ggb1.instance.setValue("timeGrowthC", 0);

autorun(() => {
  let timer1 = ggb1.innerData["timeTran1"];
  let timer2 = ggb1.innerData["timeTran2"];
  let timer3 = ggb1.innerData["timeTran3"];
  let finalCountdown = ggb1.innerData["timeFinalA"];
  if (timer1 == 1 && timer2 == 0) {
    ggb1.instance.evalCommand("RunClickScript(button2)");
  }
  if (timer2 == 1 && timer3 == 0 && finalCountdown == 0) {
    ggb1.instance.evalCommand("RunClickScript(button2)");
  }
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue("step", 6);
  ggb1.instance.setValue("timeTran1", 0);
  ggb1.instance.setValue("timeTran2", 0);
  ggb1.instance.setValue("timeTran3", 0);
  ggb1.instance.setValue("showBigSquare", true);
  ggb1.instance.evalCommand("RunClickScript(button2)");
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue("timeTran1", 0);
  ggb1.instance.setValue("timeTran2", 0);
  ggb1.instance.setValue("timeTran3", 0);
  ggb1.instance.setValue("showBigSquare", false);
});

/*
{"compTotals":{"buttongroup":1,"geogebra":1},"stage":"Land","lessonInfo":"8 M2 TD L17 - Print Alt: Proving the Pythagorean Theorem","teacherView":false,"layout":"one col"}
*/
