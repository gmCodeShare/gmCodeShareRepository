const {
  ggb1,
  feedback1,
  cc_submit_1ea69d72d592_textbox1,
  cc_submit_1ea69d72d592_input1,
  cc_submit_1ea69d72d592_button1: button1,
  separator1,
  text2,
  separator2,
  buttonGroup1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  text2.updateData({ visible: false });
  buttonGroup1.updateData({ visible: false });
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  buttonGroup1.updateData({ visible: true });
  ggb1.instance.setColor("StudentAIG", 0, 0, 0);
  ggb1.instance.setColor("pointALabel", 0, 0, 0);
  ggb1.instance.setFixed("StudentAIG", false, true);
  ggb1.instance.setPointSize("StudentAIG", 6);
  // ggb1.instance.setVisible("StudentAHalo", true);
  ggb1.instance.setColor("StudentBIG", 0, 0, 0);
  ggb1.instance.setColor("pointBLabel", 0, 0, 0);
  ggb1.instance.setFixed("StudentBIG", false, true);
  ggb1.instance.setPointSize("StudentBIG", 6);
  // ggb1.instance.setVisible("StudentBHalo", true);
  ggb1.instance.setColor("StudentCIG", 0, 0, 0);
  ggb1.instance.setColor("pointCLabel", 0, 0, 0);
  ggb1.instance.setFixed("StudentCIG", false, true);
  ggb1.instance.setPointSize("StudentCIG", 6);
  // ggb1.instance.setVisible("StudentCHalo", true);
  ggb1.instance.setColor("StudentDIG", 0, 0, 0);
  ggb1.instance.setColor("pointDLabel", 0, 0, 0);
  ggb1.instance.setFixed("StudentDIG", false, true);
  ggb1.instance.setPointSize("StudentDIG", 6);
  // ggb1.instance.setVisible("StudentDHalo", true);
  ggb1.instance.setValue("q1Submitted", true);
  ggb1.instance.evalCommand(
    `ReadText("The vertices of Figure S are movable.")`
  );
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setColor("StudentAIG", 218, 41, 28);
  ggb1.instance.setColor("pointALabel", 218, 41, 28);
  ggb1.instance.setFixed("StudentAIG", false, false);
  ggb1.instance.setPointSize("StudentAIG", 4);
  // ggb1.instance.setVisible("StudentAHalo", false);
  ggb1.instance.setColor("StudentBIG", 218, 41, 28);
  ggb1.instance.setColor("pointBLabel", 218, 41, 28);
  ggb1.instance.setFixed("StudentBIG", false, false);
  ggb1.instance.setPointSize("StudentBIG", 4);
  // ggb1.instance.setVisible("StudentBHalo", false);
  ggb1.instance.setColor("StudentCIG", 218, 41, 28);
  ggb1.instance.setColor("pointCLabel", 218, 41, 28);
  ggb1.instance.setFixed("StudentCIG", false, false);
  ggb1.instance.setPointSize("StudentCIG", 4);
  // ggb1.instance.setVisible("StudentCHalo", false);
  ggb1.instance.setColor("StudentDIG", 218, 41, 28);
  ggb1.instance.setColor("pointDLabel", 218, 41, 28);
  ggb1.instance.setFixed("StudentDIG", false, false);
  ggb1.instance.setPointSize("StudentDIG", 4);
  // ggb1.instance.setVisible("StudentDHalo", false);
  //ggb1.instance.evalCommand("SelectObjects( )");
  ggb1.instance.setValue("figureLocked", true);
  ggb1.instance.evalCommand(`ReadText("Figure S is locked in.")`);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setColor("StudentAIG", 0, 0, 0);
  ggb1.instance.setColor("pointALabel", 0, 0, 0);
  ggb1.instance.setFixed("StudentAIG", false, true);
  ggb1.instance.setPointSize("StudentAIG", 6);
  // ggb1.instance.setVisible("StudentAHalo", true);
  ggb1.instance.setColor("StudentBIG", 0, 0, 0);
  ggb1.instance.setColor("pointBLabel", 0, 0, 0);
  ggb1.instance.setFixed("StudentBIG", false, true);
  ggb1.instance.setPointSize("StudentBIG", 6);
  // ggb1.instance.setVisible("StudentBHalo", true);
  ggb1.instance.setColor("StudentCIG", 0, 0, 0);
  ggb1.instance.setColor("pointCLabel", 0, 0, 0);
  ggb1.instance.setFixed("StudentCIG", false, true);
  ggb1.instance.setPointSize("StudentCIG", 6);
  // ggb1.instance.setVisible("StudentCHalo", true);
  ggb1.instance.setColor("StudentDIG", 0, 0, 0);
  ggb1.instance.setColor("pointDLabel", 0, 0, 0);
  ggb1.instance.setFixed("StudentDIG", false, true);
  ggb1.instance.setPointSize("StudentDIG", 6);
  // ggb1.instance.setVisible("StudentDHalo", true);
  //ggb1.instance.evalCommand("SelectObjects( )");
  ggb1.instance.setValue("figureLocked", false);
  ggb1.instance.evalCommand(
    `ReadText("The vertices of Figure S are movable.")`
  );
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-c629aced8c39", {
      x1: ggb1.instance.getValue("x1"),
      y1: ggb1.instance.getValue("y1"),
      x2: ggb1.instance.getValue("x2"),
      y2: ggb1.instance.getValue("y2"),
      x3: ggb1.instance.getValue("x3"),
      y3: ggb1.instance.getValue("y3"),
      x4: ggb1.instance.getValue("x4"),
      y4: ggb1.instance.getValue("y4"),
      imageCorrect: ggb1.instance.getValue("imageCorrect"),
      MyCentroid: ggb1.instance.getValue("MyCentroid"),
      readIndex: ggb1.instance.getValue("readIndex"),
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":2,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
