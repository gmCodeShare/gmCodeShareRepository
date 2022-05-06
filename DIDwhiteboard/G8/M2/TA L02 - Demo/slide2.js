const { ggb1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener("animate", flip);
ggb1.instance.registerObjectUpdateListener("timer", pause);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue("initialState", false);
  ggb1.instance.setValue("playText", true);
  ggb1.instance.evalCommand("ReadText(playButtonText)");
  if (ggb1.instance.getValue("animate") < 1) {
    ggb1.instance.setAnimating("animate", true);
    ggb1.instance.startAnimation();
  } else {
    ggb1.instance.setAnimating("timer", true);
    ggb1.instance.startAnimation();
  }
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.setValue("playText", false);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.evalCommand("ReadText(stopButtonText)");
  ggb1.instance.setAnimating("animate", false);
  ggb1.instance.setAnimating("timer", false);
  ggb1.instance.stopAnimation();
});

function flip() {
  if (ggb1.instance.getValue("animate") == 1) {
    ggb1.instance.setLabelVisible("A'", true);
    ggb1.instance.setLabelVisible("B'", true);
    ggb1.instance.setLabelVisible("C'", true);
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("animate", false);
    ggb1.instance.setAnimating("timer", true);
    //timer slider 0 to 5 by 0.1, oscillating, speed 5
    ggb1.instance.startAnimation();
  }
}

function pause() {
  if (ggb1.instance.getValue("timer") == 1) {
    ggb1.instance.setLabelVisible("A'", false);
    ggb1.instance.setLabelVisible("B'", false);
    ggb1.instance.setLabelVisible("C'", false);
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("timer", false);
    ggb1.instance.setValue("timer", 0);
    ggb1.instance.setValue("animate", 0);
    ggb1.instance.setAnimating("animate", true);
    ggb1.instance.startAnimation();
  }
}
