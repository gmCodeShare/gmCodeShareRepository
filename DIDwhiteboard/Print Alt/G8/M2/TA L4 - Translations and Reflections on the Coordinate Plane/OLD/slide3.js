const { ggb1, select1, buttonGroup1, text1 } = components;

slide.on("firstload", () => {
  text1.updateData({ visible: false });
  ggb1.instance.setVisible("DragPoint", true);
  ggb1.instance.setVisible("dragPointHalo", true);
  ggb1.instance.setVisible("Slide2B'", true);
  ggb1.instance.setVisible("Slide2C'", true);
  ggb1.instance.setVisible("dragTriangle", true);
  select1.selectOption("1");
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  select1.setVisible(false);
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
  if (ggb1.innerData["timePause"] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("timeMove", true);
    ggb1.instance.setAnimating("timePause", false);
    ggb1.instance.setValue("timeMove", 0);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setVisible("tranVec", true);
  } else {
    ggb1.instance.setVisible("tranVec", false);
  }
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  text1.updateData({ visible: true });
  select1.setVisible(true);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("timeMove", true);
  ggb1.instance.setAnimating("timePause", false);
  ggb1.instance.setValue("timeMove", 0);
  ggb1.instance.setValue("timePause", 0);
  ggb1.instance.startAnimation();
  ggb1.instance.setVisible("DragPoint", false);
  ggb1.instance.setVisible("dragPointHalo", false);
  ggb1.instance.setVisible("Slide2B'", false);
  ggb1.instance.setVisible("Slide2C'", false);
  ggb1.instance.setVisible("dragTriangle", false);
  ggb1.instance.evalCommand("SelectObjects()");
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("timeMove", false);
  ggb1.instance.setAnimating("timePause", false);
  ggb1.instance.setValue("timeMove", 0);
  ggb1.instance.setValue("timePause", 0);
  ggb1.instance.setVisible("DragPoint", true);
  ggb1.instance.setVisible("dragPointHalo", true);
  ggb1.instance.setVisible("Slide2B'", true);
  ggb1.instance.setVisible("Slide2C'", true);
  ggb1.instance.setVisible("dragTriangle", true);
});
