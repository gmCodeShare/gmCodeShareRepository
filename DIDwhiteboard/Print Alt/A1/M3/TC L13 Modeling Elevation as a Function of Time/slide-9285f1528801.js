const { textDisplay2, ggb1, textDisplay3, separator1, textDisplay1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("showBar", false);
  ggb1.instance.setValue("time", 1);
  ggb1.instance.showToolBar(false);
  ggb1.instance.setColor("visPLine", 0, 0, 0);
  ggb1.instance.setLineStyle("visPLine", 0);
});

/*
{"compTotals":{"textbox":3,"geogebra":1,"separator":1},"stage":"Learn","lessonInfo":"9 M3 TC L13 - Print Alternate Slide Deck for Modeling Elevation as a Function of Time","teacherView":true,"layout":"T layout"}
*/
