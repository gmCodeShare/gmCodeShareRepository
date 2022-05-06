const { ggb1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerClickListener(labelOn);

function labelOn(clickedThing) {
  if (ggb1.instance.getObjectType(clickedThing) !== "point") {
    return;
  }
  const boolName = "show" + clickedThing;
  ggb1.instance.setValue(boolName, true);
}

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.setValue("showI", false);
  ggb1.instance.setValue("showJ", false);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  ggb1.instance.setValue("graphed4", true);
  ggb1.instance.setValue("graphed7", false);
  ggb1.instance.setValue("reset", false);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.setValue("showK", false);
  ggb1.instance.setValue("showL", false);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setAnimating("time2", true);
  ggb1.instance.startAnimation();
  ggb1.instance.setValue("graphed4", false);
  ggb1.instance.setValue("graphed7", true);
  ggb1.instance.setValue("reset", false);
});

buttonGroup1.on("click:3", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.stopAnimation();
  const booPoints = ["showI", "showJ", "showK", "showL"];
  for (let i = 0; i < booPoints.length; i++) {
    ggb1.instance.setValue(booPoints[i], false);
  }
  ggb1.instance.setValue("graphed4", false);
  ggb1.instance.setValue("graphed7", false);
  ggb1.instance.setValue("reset", true);
});
