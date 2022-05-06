const { ggb1, separator1, button2, feedback1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

ggb1.instance.registerObjectClickListener("Drive", startTime);
ggb1.instance.registerObjectUpdateListener("DragPoint", resetTime);
ggb1.instance.registerObjectUpdateListener("time", lightFuse);

ggb1.instance.registerClientListener(point);
ggb2.instance.registerClientListener(horizontalEvent);
ggb2.instance.registerClientListener(verticalEvent);

function point(a) {
  if (a[0] == "mouseDown") {
    // console.log(a.hits[0]);
    if (a.hits[0] == "DragPoint") {
      ggb1.instance.registerObjectUpdateListener("DragPoint", update1);
      resetTime();
    }
  }
}

function horizontalEvent(a) {
  if (a[0] == "mouseDown") {
    // console.log(a.hits[0]);
    if (a.hits[0] == "tHori") {
      ggb2.instance.registerObjectUpdateListener("tHori", update2);
      resetTime();
    }
  }
}

function verticalEvent(a) {
  if (a[0] == "mouseDown") {
    // console.log(a.hits[0]);
    if (a.hits[0] == "tVert") {
      ggb2.instance.registerObjectUpdateListener("tVert", update2);
      resetTime();
    }
  }
}

function update1() {
  ggb2.instance.unregisterObjectUpdateListener("tHori");
  ggb2.instance.unregisterObjectUpdateListener("tVert");
  let horizontal1 = ggb1.instance.getValue("tFakeHori");
  let vertical1 = ggb1.instance.getValue("tVert");
  ggb2.instance.setValue("tFakeHori", horizontal1);
  ggb2.instance.setValue("tHori", -horizontal1);
  ggb2.instance.setValue("tVert", vertical1);
}

function update2() {
  ggb1.instance.unregisterObjectUpdateListener("DragPoint");
  let horizontal2 = ggb2.instance.getValue("tHori");
  let vertical2 = ggb2.instance.getValue("tVert");
  ggb1.instance.setValue("tHori", horizontal2);
  ggb1.instance.setValue("tFakeHori", -horizontal2);
  ggb1.instance.setValue("tVert", vertical2);
}

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
{"compTotals":{"geogebra":2,"separator":1,"button":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M3 TD L18 - Print Alternate Slide Deck for Exploring Transformations of the Graphs of Functions","teacherView":true,"layout":"two col"}
*/
