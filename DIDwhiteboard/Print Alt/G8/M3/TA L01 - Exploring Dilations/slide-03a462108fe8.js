const { text2, ggb2, feedback, text3, ggb3, buttonGroup1, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb3.instance.setErrorDialogsActive(false);
ggb1.updateData({ visible: false });

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("speed", 5);
  ggb1.instance.setAnimating("timeMove", true);
  ggb1.instance.setAnimating("timePause", false);
  ggb1.instance.setValue("timeMove", 0);
  ggb1.instance.setValue("timePause", 0);
  ggb1.instance.startAnimation();
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
  let timeMove = ggb1.innerData["timeMove"];
  //let timePause = ggb1.innerData["timePause"];
  ggb2.instance.setValue("timeMove", timeMove);
  ggb3.instance.setValue("timeMove", timeMove);
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("timeMove", true);
  ggb1.instance.setAnimating("timePause", false);
  ggb1.instance.setValue("timeMove", 0);
  ggb1.instance.setValue("timePause", 0);
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
});

/*
{"compTotals":{"textbox":3,"geogebra":3,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M3 TA L01 - Print Alt: Exploring Dilations","teacherView":true,"layout":"one col"}
*/
