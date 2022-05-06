const { textDisplay2, ggb1, feedback, textDisplay1, separator1, textDisplay3 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("showBar", false);
  ggb1.instance.setValue("time", 1);
  ggb1.instance.showToolBar(false);
});

/*
{"compTotals":{"textbox":4,"geogebra":1,"separator":1},"stage":"Learn","lessonInfo":"9 M3 TC L13 - Modeling Elevation as a Function of Time","teacherView":true,"layout":"T layout"}
*/
