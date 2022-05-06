const { ggb1, text1, text2, text3, text4, button1, button2, button3, button4 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setCoords(
    "Tele1",
    ggb1.instance.getXcoord("Target1"),
    ggb1.instance.getYcoord("Target1")
  );
  ggb1.instance.setCoords(
    "Tele2",
    ggb1.instance.getXcoord("Target2"),
    ggb1.instance.getYcoord("Target2")
  );
  const hideEm = [text2, text3, text4, button2, button3, button4];
  for (let i = 0, L = hideEm.length; i < L; i++) {
    hideEm[i].updateData({ visible: false });
  }
});

holdUp();
// ggb1.instance.registerObjectClickListener("button1", "start1");
ggb1.instance.registerObjectUpdateListener("timeBases", advance1);
// ggb1.instance.registerObjectClickListener("button2", "start2");
ggb1.instance.registerObjectUpdateListener("timeEdge", advance2);
// ggb1.instance.registerObjectClickListener("button3", "start3");
ggb1.instance.registerObjectUpdateListener("end1", cycle1);
ggb1.instance.registerObjectUpdateListener("end2", cycle2);
// ggb1.instance.registerObjectClickListener("button4", "start4");

button1.on("click", start1);
button2.on("click", start2);
button3.on("click", start3);
button4.on("click", start4);

function start1() {
  button1.updateData({ disabled: true });
  holdUp();
  ggb1.instance.setAnimating("timeBases", true);
  ggb1.instance.startAnimation();
}

function advance1() {
  if (ggb1.instance.getValue("timeBases") == 1) {
    // ggb1.instance.setVisible("text2", true);
    // ggb1.instance.setVisible("button2", true);
    text2.updateData({ visible: true });
    button2.updateData({ visible: true });
  }
}

function start2() {
  button2.updateData({ disabled: true });
  holdUp();
  ggb1.instance.setAnimating("timeEdge", true);
  ggb1.instance.startAnimation();
}

function advance2() {
  if (ggb1.instance.getValue("timeEdge") == 1) {
    // ggb1.instance.setVisible("text3", true);
    // ggb1.instance.setVisible("button3", true);
    text3.updateData({ visible: true });
    button3.updateData({ visible: true });
  }
}

function start3() {
  button3.updateData({ disabled: true });
  holdUp();
  ggb1.instance.setAnimating("time1", true);
  ggb1.instance.setAnimating("time2", true);
  // ggb1.instance.setVisible("text5", true);
  // ggb1.instance.setVisible("button4", true);
  text4.updateData({ visible: true });
  button4.updateData({ visible: true });
  ggb1.instance.startAnimation();
}

function start4() {
  button4.updateData({ disabled: true });
  ggb1.instance.setAnimating("timeHeight", true);
  ggb1.instance.setValue("showPlanes", true);
  ggb1.instance.startAnimation();
}

function holdUp() {
  ggb1.instance.setAnimating("timeBases", false);
  ggb1.instance.setAnimating("timeEdge", false);
  ggb1.instance.setAnimating("time1", false);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("timeHeight", false);
}

function genericCycle(segment, target, mover, step, time, check) {
  ggb1.instance.setValue(check, false);
  ggb1.instance.stopAnimation();
  let segName = ggb1.instance.evalCommandGetLabels(
    "CopyFreeObject(" + segment + ")"
  );
  buryIt(segName);
  ggb1.instance.setValue(step, ggb1.instance.getValue(step) + 1);
  ggb1.instance.setCoords(
    mover,
    ggb1.instance.getXcoord(target),
    ggb1.instance.getYcoord(target)
  );
  ggb1.instance.setValue(time, 0);
  ggb1.instance.setAnimating(time, true);
  ggb1.instance.startAnimation();
  ggb1.instance.setValue(check, true);
}

function cycle1() {
  if (ggb1.instance.getValue("end1") && ggb1.instance.getValue("check1")) {
    genericCycle("drip1", "Target1", "Tele1", "step1", "time1", "check1");
  }
}

function cycle2() {
  if (ggb1.instance.getValue("end2") && ggb1.instance.getValue("check2")) {
    genericCycle("drip2", "Target2", "Tele2", "step2", "time2", "check2");
  }
}

function buryIt(a) {
  ggb1.instance.setLayer(a, 1);
  ggb1.instance.setFixed(a, true, false);
}
