const { ggb1, separator2, feedback1, text1, fib1, separator1, buttonGroup1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue("horizontal", fib1.data.values[0].text);
  ggb1.instance.setValue("vertical", fib1.data.values[1].text);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  ggb1.instance.evalCommand("ReadText(animationCheckText)");
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.evalCommand("ReadText(AAppletStatus)");
});

fib1.on("change", ({ values }) => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
});

/*
{"compTotals":{"geogebra":1,"separator":2,"textbox":2,"fillblank":1,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
