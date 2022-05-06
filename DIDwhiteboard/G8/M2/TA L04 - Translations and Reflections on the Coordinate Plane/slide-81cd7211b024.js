const { ggb1, separator1, buttonGroup1, feedback1, categorizing1 } = components;

ggb1.instance.setErrorDialogsActive(false);

//No longer need code below because Play & Stop buttons have been removed for accessibilty.
/*
slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("timeMove", true);
  ggb1.instance.setAnimating("tran2a", true);
  ggb1.instance.setAnimating("timePause", false);
  ggb1.instance.setValue("timeMove", 0);
  ggb1.instance.setValue("tran2a", 0);
  ggb1.instance.setValue("timePause", 0);
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("timeMove", true);
  ggb1.instance.setAnimating("tran2a", true);
  ggb1.instance.setAnimating("timePause", false);
  ggb1.instance.setValue("timeMove", 0);
  ggb1.instance.setValue("tran2a", 0);
  ggb1.instance.setValue("timePause", 0);
  ggb1.instance.startAnimation();
  ggb1.instance.evalCommand(
    `ReadText("Figures animate in each graph. Press tab to hear a description of each graph.")`
  );
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.evalCommand(
    `ReadText("Figures stop animating in each graph. Press tab to hear a description of each graph.")`
  );
});

autorun(() => {
  if (ggb1.innerData["timeMove"] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("timeMove", false);
    ggb1.instance.setAnimating("timePause", true);
    ggb1.instance.setValue("timePause", 0);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (ggb1.innerData["tran2a"] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("tran2a", false);
    ggb1.instance.setAnimating("tran2b", true);
    ggb1.instance.setValue("tran2b", 0);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (ggb1.innerData["timePause"] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("timeMove", true);
    ggb1.instance.setAnimating("tran2a", true);
    ggb1.instance.setAnimating("timePause", false);
    ggb1.instance.setAnimating("tran2b", false);
    ggb1.instance.setValue("timeMove", 0);
    ggb1.instance.setValue("tran2a", 0);
    ggb1.instance.setValue("tran2b", 0);
    ggb1.instance.startAnimation();
  }
}); */

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1,"categorization":1},"stage":"Land","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
