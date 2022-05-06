const { ggb1, separator2, button2, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectClickListener("Drive", startTime);
ggb1.instance.registerObjectUpdateListener("DragPoint", resetTime);
ggb1.instance.registerObjectUpdateListener("time", lightFuse);

function lightFuse() {
  if (ggb1.instance.getValue("time") == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("time", false);
    ggb1.instance.setAnimating("timeA", true);
    ggb1.instance.startAnimation();
  }
}

function startTime() {
  ggb1.updateInnerData({ time: 0, time2: -1, timeA: 0 });
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.setAnimating("time2", true);
  ggb1.instance.setAnimating("timeA", false);
  ggb1.instance.startAnimation();
}

function resetTime() {
  ggb1.updateInnerData({ time: 0, time2: -1, timeA: 0 });
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("timeA", false);
  ggb1.instance.stopAnimation();
  button2.updateData({ disabled: false });
}

button2.on("click", () => {
  button2.updateData({ disabled: true });
  startTime();
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":1},"stage":"Launch","lessonInfo":"9 M3 TD L18 - Print Alternate Slide Deck for Exploring Transformations of the Graphs of Functions","teacherView":true,"layout":"one col"}
*/
