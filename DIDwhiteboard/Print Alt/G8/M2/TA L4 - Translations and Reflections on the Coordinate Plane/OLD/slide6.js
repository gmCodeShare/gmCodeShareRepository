const { ggb1, buttonGroup1 } = components;

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
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
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
});
