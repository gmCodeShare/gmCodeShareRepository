const {
  ggb1,
  separator7,
  button2,
  feedback1,
  cc_sharewithclass_90eedbc156d9_textbox1: textDisplay1,
  cc_sharewithclass_90eedbc156d9_input1: textInput1,
  cc_sharewithclass_90eedbc156d9_button1: button1,
  cc_sharewithclass_90eedbc156d9_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button2.updateData({ visible: false });
    textDisplay1.updateData({ visible: true });
    textInput1.updateData({ visible: true });
    button1.updateData({ visible: true });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let fakeScale = ggb1.innerData["fakeScale"]; //this just makes it so the autorun fires when the point is moved - there may be a better way
  ggb1.instance.setValue("tScal", ggb1.instance.getValue("fakeScale"));
});

ggb1.instance.registerObjectClickListener("Drive", startTime);
ggb1.instance.registerObjectUpdateListener("DragPoint", resetTime);
ggb1.instance.registerObjectUpdateListener("ScalePoint", resetTime);
ggb1.instance.registerObjectUpdateListener("time", lightFuse);
ggb1.instance.setAnimating("tScal", false);

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
  textDisplay1.updateData({ visible: true });
  textInput1.updateData({ visible: true });
  button1.updateData({ visible: true });
  button2.updateData({ disabled: false });
}

button1.on("click", () => {
  button2.updateData({ visible: true });
});

//button2.on('click', startTime);

button2.on("click", () => {
  button2.updateData({ disabled: true });
  startTime();
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M3 TD L18 - Exploring Transformations of the Graphs of Functions","teacherView":false,"layout":"two col"}
*/
