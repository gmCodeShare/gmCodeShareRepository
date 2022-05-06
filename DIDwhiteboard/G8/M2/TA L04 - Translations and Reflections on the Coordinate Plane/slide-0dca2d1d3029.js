const {
  ggb1,
  separator2,
  buttonGroup1,
  feedback1,
  cc_submit_2d9cb1779e76_textbox1,
  cc_submit_2d9cb1779e76_input1,
  cc_submit_2d9cb1779e76_button1: button1,
  separator1,
  cc_sharewithclass_2c9f9dc0a372_textbox1: text2,
  cc_sharewithclass_2c9f9dc0a372_input1: input2,
  cc_sharewithclass_2c9f9dc0a372_button1: button2,
  cc_sharewithclass_2c9f9dc0a372_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("timeMove", true);
  ggb1.instance.setAnimating("timePause", false);
  ggb1.instance.setValue("timeMove", 0);
  ggb1.instance.setValue("timePause", 0);
  ggb1.instance.startAnimation();
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
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

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("timeMove", true);
  ggb1.instance.setAnimating("timePause", false);
  ggb1.instance.setValue("timeMove", 0);
  ggb1.instance.setValue("timePause", 0);
  ggb1.instance.startAnimation();
  ggb1.instance.evalCommand(`ReadText("The animation starts.")`);
  ggb1.instance.setValue("animationPaused", false);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.evalCommand(`ReadText("The animation stops.")`);
  ggb1.instance.setValue("animationPaused", true);
});

/*
{"compTotals":{"geogebra":1,"separator":2,"buttongroup":1,"textbox":1,"submit":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
