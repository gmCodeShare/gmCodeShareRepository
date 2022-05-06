const { ggb1, separator5, button2, feedback1, fib1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

ggb1.instance.registerObjectClickListener("Drive", startTime);
ggb1.instance.registerObjectUpdateListener("DragPoint", resetTime);
ggb1.instance.registerObjectUpdateListener("time", lightFuse);
// ggb2.instance.registerObjectUpdateListener("tHori", update1);
// ggb2.instance.registerObjectUpdateListener("tVert", update1);

fib1.on("change", update1);

function update1() {
  // let horizontal2 = ggb2.instance.getValue("tHori");
  // let vertical2 = ggb2.instance.getValue("tVert");
  const resultHori = utils.math.evaluateLatex(fib1.getInput(0).text);
  if (!resultHori.error) {
    let horizontal2 = resultHori.value;
    ggb1.instance.setValue("tHori", horizontal2);
    ggb1.instance.setValue("tFakeHori", -horizontal2);
  }
  const resultVert = utils.math.evaluateLatex(fib1.getInput(1).text);
  if (!resultVert.error) {
    let vertical2 = resultVert.value;
    ggb1.instance.setValue("tVert", vertical2);
  }
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

//button2.on('click', startTime);

button2.on("click", () => {
  button2.updateData({ disabled: true });
  startTime();
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":1,"fillblank":1},"stage":"Learn","lessonInfo":"9 M3 TD L18 - Print Alternate Slide Deck for Exploring Transformations of the Graphs of Functions","teacherView":true,"layout":"two col"}
*/
