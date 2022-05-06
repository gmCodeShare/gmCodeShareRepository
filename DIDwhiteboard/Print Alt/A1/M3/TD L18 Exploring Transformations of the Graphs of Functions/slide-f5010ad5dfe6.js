const { ggb1, textDisplay1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener("time", lightFuse);
ggb1.instance.registerObjectUpdateListener("timeA", restart);

// This function listens for time to end and starts the fireworks.
function lightFuse() {
  if (ggb1.instance.getValue("time") == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("time", false);
    ggb1.instance.setAnimating("timeA", true);
    ggb1.instance.startAnimation();
  }
}

// This function had to be added so that the fireworks timer would restart. Without this, it only runs once.
function restart() {
  if (ggb1.instance.getValue("timeA") > 745) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("timeA", false);
    ggb1.updateInnerData({ timeA: 0 });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Launch","lessonInfo":"9 M3 TD L18 - Print Alternate Slide Deck for Exploring Transformations of the Graphs of Functions","teacherView":true,"layout":"one col"}
*/
