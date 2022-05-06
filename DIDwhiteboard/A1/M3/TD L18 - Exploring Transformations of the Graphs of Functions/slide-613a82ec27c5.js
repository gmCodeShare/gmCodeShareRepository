const { ggb1, separator8, button2, feedback1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

ggb1.instance.registerObjectClickListener("Drive", startTime);
ggb1.instance.registerObjectUpdateListener("DragPoint", resetTime);
ggb1.instance.registerObjectUpdateListener("ScalePoint", resetTime);
ggb1.instance.registerObjectUpdateListener("time", lightFuse);
ggb1.instance.setAnimating("tScal", false);

autorun(() => {
  let fakeScale = ggb1.innerData["fakeScale"]; //this just makes it so the autorun fires when the point is moved - there may be a better way
  let DragPoint = ggb1.innerData["DragPoint"]; //this just makes it so the autorun fires when the point is moved - there may be a better way
  ggb2.instance.setValue("tVert", ggb1.instance.getValue("tVert"));
  ggb2.instance.setValue("tHori", ggb1.instance.getValue("tHori"));
  ggb1.instance.setValue("tScal", ggb1.instance.getValue("fakeScale"));
  ggb2.instance.setValue("tScal", ggb1.instance.getValue("fakeScale"));
});

autorun(() => {
  let tScal = ggb2.innerData["tScal"]; //this just makes it so the autorun fires when the point is moved - there may be a better way
  let tVert = ggb2.innerData["tVert"]; //this just makes it so the autorun fires when the point is moved - there may be a better way
  let tHori = ggb2.innerData["tHori"]; //this just makes it so the autorun fires when the point is moved - there may be a better way
  ggb1.instance.setValue("tFakeScal", tScal);
  ggb1.instance.setValue("tVert", tVert);
  ggb1.instance.setValue("tHori", tHori);
  // console.log(ggb1.instance.getYcoord("ScalePoint"));
});

function lightFuse() {
  if (ggb1.instance.getValue("time") == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("time", false);
    ggb1.instance.setAnimating("timeA", true);
    ggb1.instance.startAnimation();
  }
}

function startTime() {
  ggb1.instance.evalCommand("fixSpeed=DataFunction(D1:D10, E1:E10)");
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

//button2.on('click', startTime);

button2.on("click", () => {
  button2.updateData({ disabled: true });
  startTime();
});

/*
{"compTotals":{"geogebra":2,"separator":1,"button":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M3 TD L18 - Exploring Transformations of the Graphs of Functions","teacherView":false,"layout":"two col"}
*/
