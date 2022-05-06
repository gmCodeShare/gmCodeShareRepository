const { ggb1, feedback1, text1, separator1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setVisible("studentImage", true);
  // ggb1.instance.setVisible('StudentAHalo', false);
  // ggb1.instance.setVisible('StudentBHalo', false);
  // ggb1.instance.setVisible('StudentCHalo', false);
  // ggb1.instance.setVisible('StudentDHalo', false);
  ggb1.instance.setFixed("StudentAIG", false, false);
  ggb1.instance.setFixed("StudentBIG", false, false);
  ggb1.instance.setFixed("StudentCIG", false, false);
  ggb1.instance.setFixed("StudentDIG", false, false);
  ggb1.instance.setPointSize("StudentAIG", 4);
  ggb1.instance.setPointSize("StudentBIG", 4);
  ggb1.instance.setPointSize("StudentCIG", 4);
  ggb1.instance.setPointSize("StudentDIG", 4);
  //ggb1.instance.evalCommand("SelectObjects()");
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  ggb1.instance.evalCommand("ReadText(animationCheckText)");
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setVisible("studentImage", false);
  // ggb1.instance.setVisible('StudentAHalo', true);
  // ggb1.instance.setVisible('StudentBHalo', true);
  // ggb1.instance.setVisible('StudentCHalo', true);
  // ggb1.instance.setVisible('StudentDHalo', true);
  ggb1.instance.setFixed("StudentAIG", false, true);
  ggb1.instance.setFixed("StudentBIG", false, true);
  ggb1.instance.setFixed("StudentCIG", false, true);
  ggb1.instance.setFixed("StudentDIG", false, true);
  ggb1.instance.setPointSize("StudentAIG", 6);
  ggb1.instance.setPointSize("StudentBIG", 6);
  ggb1.instance.setPointSize("StudentCIG", 6);
  ggb1.instance.setPointSize("StudentDIG", 6);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.evalCommand("ReadText(resetStatus)");
});

ggb1.instance.registerObjectUpdateListener("allMoved", buttonWork);

function buttonWork() {
  if (ggb1.instance.getValue("allMoved")) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
