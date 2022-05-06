const { ggb1, ggb2, fib1, button2, button3 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

// ggb1.instance.registerObjectClickListener('Drive', startTime);
// ggb1.instance.registerObjectUpdateListener('DragPoint', resetTime);
ggb1.instance.registerObjectUpdateListener("time", lightFuse);
ggb2.instance.registerObjectUpdateListener("tHori", update1);
ggb2.instance.registerObjectUpdateListener("tVert", update1);
ggb2.instance.registerObjectUpdateListener("tScal", update1);

button3.on("click", update2);

function update1() {
  button2.updateData({ disabled: false });
  button3.updateData({ disabled: false });
}

function update2() {
  button3.updateData({ disabled: true });
  let horizontal2 = ggb2.instance.getValue("tHori");
  let vertical2 = ggb2.instance.getValue("tVert");
  let scale2 = ggb2.instance.getValue("tScal");
  ggb1.instance.setValue("tHori", horizontal2);
  ggb1.instance.setValue("tFakeHori", -horizontal2);
  ggb1.instance.setValue("tVert", vertical2);
  ggb1.instance.setValue("tScal", scale2);
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
