const { ggb1, feedback } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.stopAnimation();
ggb1.instance.setValue("speed", 5);
ggb1.instance.setAnimating("timeMove", true);
ggb1.instance.setAnimating("timePause", false);
ggb1.instance.setValue("timeMove", 0);
ggb1.instance.setValue("timePause", 0);
ggb1.instance.startAnimation();

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

/*
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"8 M3 TA L01 - Print Alt: Exploring Dilations","teacherView":true,"layout":"one col"}
*/
