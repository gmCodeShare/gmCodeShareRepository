const { ggb1, feedback1, text1, buttonGroup1 } = components;

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

ggb1.instance.setErrorDialogsActive(false);

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  // ggb1.instance.setVisible("ab", true);
  // ggb1.instance.setVisible("bc", true);
  // ggb1.instance.setVisible("cd", true);
  // ggb1.instance.setVisible("da", true);
  ggb1.instance.setVisible("studentPoly", true);
  // ggb1.instance.setVisible("A'Halo", false);
  // ggb1.instance.setVisible("B'Halo", false);
  // ggb1.instance.setVisible("C'Halo", false);
  // ggb1.instance.setVisible("D'Halo", false);
  ggb1.instance.setFixed("Ab'", false, false);
  ggb1.instance.setFixed("B'", false, false);
  ggb1.instance.setFixed("C'", false, false);
  ggb1.instance.setFixed("D'", false, false);
  ggb1.instance.setPointSize("Ab'", 4);
  ggb1.instance.setPointSize("B'", 4);
  ggb1.instance.setPointSize("C'", 4);
  ggb1.instance.setPointSize("D'", 4);
  //ggb1.instance.evalCommand("SelectObjects()");
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setValue("time3", 0);
  ggb1.instance.setAnimating("time2", true);
  ggb1.instance.startAnimation();
  ggb1.instance.evalCommand("ReadText(animationCheckText)");
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  // ggb1.instance.setVisible("ab", false);
  // ggb1.instance.setVisible("bc", false);
  // ggb1.instance.setVisible("cd", false);
  // ggb1.instance.setVisible("da", false);
  ggb1.instance.setVisible("studentPoly", false);
  // ggb1.instance.setVisible("A'Halo", true);
  // ggb1.instance.setVisible("B'Halo", true);
  // ggb1.instance.setVisible("C'Halo", true);
  // ggb1.instance.setVisible("D'Halo", true);
  ggb1.instance.setPointSize("Ab'", 6);
  ggb1.instance.setPointSize("B'", 6);
  ggb1.instance.setPointSize("C'", 6);
  ggb1.instance.setPointSize("D'", 6);
  ggb1.instance.setFixed("Ab'", false, true);
  ggb1.instance.setFixed("B'", false, true);
  ggb1.instance.setFixed("C'", false, true);
  ggb1.instance.setFixed("D'", false, true);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("time3", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setValue("time3", 0);
  ggb1.instance.evalCommand("ReadText(resetStatus)");
});

ggb1.instance.registerObjectUpdateListener("allMoved", buttonWork);

function buttonWork() {
  if (ggb1.instance.getValue("allMoved")) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
