const { ggb1, separator5, select1, select2, feedback1, text1, buttonGroup1 } =
  components;

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setVisible("DragPoint", true);
  ggb1.instance.setValue("dragPointShown", true);
  ggb1.instance.setVisible("dragPointHalo", true);
  ggb1.instance.setVisible("Slide2B'", true);
  ggb1.instance.setVisible("Slide2C'", true);
  ggb1.instance.setVisible("dragTriangle", true);
  select1.selectOption("1");
  select2.selectOption("1");
});

ggb1.instance.setErrorDialogsActive(false);

autorun(() => {
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setValue("showVector", true);
    ggb1.instance.evalCommand(
      `ReadText("A vector from Point A to Point A prime is shown.")`
    );
  } else {
    ggb1.instance.setValue("showVector", false);
    ggb1.instance.evalCommand(
      `ReadText("A vector from Point A to Point A prime is hidden.")`
    );
  }
});

autorun(() => {
  if (select2.data.selected.includes("0")) {
    ggb1.instance.setGridVisible(true);
    ggb1.instance.setAxesVisible(true, true);
    ggb1.instance.setValue("showCoordinatePlane", true);
    ggb1.instance.evalCommand(`ReadText("The coordinate plane is shown.")`);
  } else {
    ggb1.instance.setGridVisible(false);
    ggb1.instance.setAxesVisible(false, false);
    ggb1.instance.setValue("showCoordinatePlane", false);
    ggb1.instance.evalCommand(`ReadText("The coordinate plane is hidden.")`);
  }
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  // ggb1.instance.setVisible('dragPointHalo', false);
  ggb1.instance.setFixed("DragPoint", false, false);
  //ggb1.instance.evalCommand("SelectObjects()");
  ggb1.instance.setColor("DragPoint", 218, 41, 28);
  ggb1.instance.setPointSize("DragPoint", 4);
  ggb1.instance.setValue("dragPointShown", false);
  ggb1.instance.evalCommand(
    `ReadText("Triangle A prime B prime C prime is locked in.")`
  );
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  // ggb1.instance.setVisible("dragPointHalo", true);
  ggb1.instance.setFixed("DragPoint", false, true);
  ggb1.instance.setColor("DragPoint", 0, 0, 0);
  ggb1.instance.setPointSize("DragPoint", 6);
  ggb1.instance.setValue("dragPointShown", true);
  ggb1.instance.evalCommand(
    `ReadText("Triangle A prime B prime C prime is unlocked. Move point A to move the entire triangle.")`
  );
});

/*
{"compTotals":{"geogebra":1,"separator":1,"select":2,"textbox":2,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
