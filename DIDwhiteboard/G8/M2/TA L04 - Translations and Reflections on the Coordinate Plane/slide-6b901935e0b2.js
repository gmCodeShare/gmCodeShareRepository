const {
  ggb1,
  separator1,
  select1,
  feedback1,
  text1,
  buttonGroup1,
  cc_submit_fa5312ba013e_textbox1: text2,
  cc_submit_fa5312ba013e_input1: input1,
  cc_submit_fa5312ba013e_button1: button1,
  cc_sharewithclass_f8581eed766c_textbox1: text3,
  cc_sharewithclass_f8581eed766c_input1: input2,
  cc_sharewithclass_f8581eed766c_button1: button2,
  cc_sharewithclass_f8581eed766c_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
  text3.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  select1.selectOption("1");
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  text2.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  // ggb1.instance.setVisible("halo", false);
  ggb1.instance.setFixed("DragPoint", false, false);
  ggb1.instance.setPointSize("DragPoint", 4);
  //ggb1.instance.evalCommand("SelectObjects()");
  ggb1.instance.setValue("lineMovable", false);
  ggb1.instance.setValue("studentFigureShowing", true);
  ggb1.instance.evalCommand("ReadText(tryItButtonText)");
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  // ggb1.instance.setVisible("halo", true);
  ggb1.instance.setFixed("DragPoint", false, true);
  ggb1.instance.setPointSize("DragPoint", 6);
  ggb1.instance.setValue("lineMovable", true);
  ggb1.instance.setValue("studentFigureShowing", false);

  ggb1.instance.evalCommand(
    `ReadText("Move the line of reflection so that the figure maps to its image.")`
  );
});

autorun(() => {
  if (select1.data.selected.includes("0")) {
    // ggb1.instance.setGridVisible(true);
    ggb1.instance.setVisible("fakeXGrid", true);
    ggb1.instance.setVisible("fakeYGrid", true);
    ggb1.instance.setAxesVisible(true, true);
    ggb1.instance.setValue("showCoordinatePlane", true);
    ggb1.instance.evalCommand(`ReadText("The coordinate plane is shown.")`);
  } else {
    // ggb1.instance.setGridVisible(false);
    ggb1.instance.setVisible("fakeXGrid", false);
    ggb1.instance.setVisible("fakeYGrid", false);
    ggb1.instance.setAxesVisible(false, false);
    ggb1.instance.setValue("showCoordinatePlane", false);
    ggb1.instance.evalCommand(`ReadText("The coordinate plane is hidden.")`);
  }
});

button1.on("click", () => {
  text3.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"separator":1,"select":1,"textbox":2,"buttongroup":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
