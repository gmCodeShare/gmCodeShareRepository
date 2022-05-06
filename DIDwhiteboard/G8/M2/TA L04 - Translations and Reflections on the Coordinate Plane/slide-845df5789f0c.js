const {
  ggb1,
  separator1,
  select1,
  feedback1,
  textDisplay6,
  buttonGroup1,
  separator2,
  cc_sharewithclass_56104d8f91e1_textbox1: text2,
  cc_sharewithclass_56104d8f91e1_input1: input1,
  cc_sharewithclass_56104d8f91e1_button1: button2,
  cc_sharewithclass_56104d8f91e1_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button2.updateData({ visible: false });
  // ggb1.instance.setVisible("DragPoint", true);
  ggb1.instance.setVisible("dragPointHalo", true);
  ggb1.instance.setVisible("Slide2B'", true);
  ggb1.instance.setVisible("Slide2C'", true);
  ggb1.instance.setVisible("dragTriangle", true);
  select1.selectOption("1");
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

autorun(() => {
  if (ggb1.innerData["timeMove"] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("timeMove", false);
    ggb1.instance.setAnimating("timePause", true);
    ggb1.instance.setValue("timePause", 0);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (ggb1.innerData["timePause"] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("timeMove", true);
    ggb1.instance.setAnimating("timePause", false);
    ggb1.instance.setValue("timeMove", 0);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setValue("showVector", true);
    ggb1.instance.evalCommand(
      `ReadText("A vector is shown from point A to point A prime.")`
    );
  } else {
    ggb1.instance.setValue("showVector", false);
    ggb1.instance.evalCommand(
      `ReadText("The vector from point A to point A prime is hidden.")`
    );
  }
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  text2.updateData({ visible: true });
  input1.updateData({ visible: true });
  button2.updateData({ visible: true });
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("timeMove", true);
  ggb1.instance.setAnimating("timePause", false);
  ggb1.instance.setValue("timeMove", 0);
  ggb1.instance.setValue("timePause", 0);
  ggb1.instance.startAnimation();
  ggb1.instance.setValue("showDragPoint", false);
  ggb1.instance.setVisible("dragPointHalo", false);
  ggb1.instance.setVisible("Slide2B'", false);
  ggb1.instance.setVisible("Slide2C'", false);
  ggb1.instance.setVisible("dragTriangle", false);
  //ggb1.instance.evalCommand(`ReadText("A triangle is animating.")`);
  ggb1.instance.evalCommand(`ReadText(translateButtonText)`);
  // ggb1.instance.evalCommand('SelectObjects()');
  ggb1.instance.setValue("translating", true);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("timeMove", false);
  ggb1.instance.setAnimating("timePause", false);
  ggb1.instance.setValue("timeMove", 0);
  ggb1.instance.setValue("timePause", 0);
  ggb1.instance.setValue("showDragPoint", true);
  ggb1.instance.setVisible("dragPointHalo", true);
  ggb1.instance.setVisible("Slide2B'", true);
  ggb1.instance.setVisible("Slide2C'", true);
  ggb1.instance.setVisible("dragTriangle", true);
  //ggb1.instance.evalCommand(`ReadText("The animation stops.")`);
  ggb1.instance.evalCommand(`ReadText(resetButtonText)`);
  ggb1.instance.setValue("translating", false);
});

/*
{"compTotals":{"geogebra":1,"separator":2,"select":1,"textbox":2,"buttongroup":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
