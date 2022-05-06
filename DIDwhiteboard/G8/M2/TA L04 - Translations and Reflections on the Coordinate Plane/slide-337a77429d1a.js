const {
  ggb1,
  separator5,
  select1,
  select2,
  feedback1,
  text1,
  radio1,
  cc_sharewithclass_725a467ff96b_textbox1: text2,
  cc_sharewithclass_725a467ff96b_input1: input1,
  cc_sharewithclass_725a467ff96b_button1: button1,
  cc_sharewithclass_725a467ff96b_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
  ggb1.instance.setAnimating("timeMove", false);
  ggb1.instance.setValue("timeMove", 1);
  select1.selectOption("1");
  select2.selectOption("1");
});

autorun(() => {
  if (radio1.data.selected) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
});

autorun(() => {
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setValue("showVector", true);
    ggb1.instance.evalCommand(
      `ReadText("A vector from Point A to Point a prime is shown.")`
    );
  } else {
    ggb1.instance.setValue("showVector", false);
    ggb1.instance.evalCommand(
      `ReadText("A vector from Point A to Point a prime is hidden.")`
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

/*
{"compTotals":{"geogebra":1,"separator":1,"select":2,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
