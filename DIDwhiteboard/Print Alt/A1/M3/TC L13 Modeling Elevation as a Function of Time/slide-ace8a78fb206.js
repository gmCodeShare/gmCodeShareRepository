const { buttonGroup1, ggb1, feedback } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("showBar", false);
  ggb1.instance.setValue("time", 1);
  ggb1.instance.setVisible("text1", false);
  ggb1.instance.setVisible("text2", false);
  ggb1.instance.setVisible("text3", false);
  ggb1.instance.setVisible("text4", false);
  ggb1.instance.setVisible("text5", false);
  ggb1.instance.setVisible("f", false);
  ggb1.instance.setVisible("g", false);
  ggb1.instance.setVisible("h", false);
  ggb1.instance.setVisible("j", false);
  ggb1.instance.setVisible("k", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:1", () => {
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setVisible("text1", true);
  ggb1.instance.setVisible("text2", true);
  ggb1.instance.setVisible("text3", true);
  ggb1.instance.setVisible("text4", true);
  ggb1.instance.setVisible("text5", true);
  ggb1.instance.setVisible("f", true);
  ggb1.instance.setVisible("g", true);
  ggb1.instance.setVisible("h", true);
  ggb1.instance.setVisible("j", true);
  ggb1.instance.setVisible("k", true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.setValue("time", 1);
  ggb1.instance.setVisible("text1", false);
  ggb1.instance.setVisible("text2", false);
  ggb1.instance.setVisible("text3", false);
  ggb1.instance.setVisible("text4", false);
  ggb1.instance.setVisible("text5", false);
  ggb1.instance.setVisible("f", false);
  ggb1.instance.setVisible("g", false);
  ggb1.instance.setVisible("h", false);
  ggb1.instance.setVisible("j", false);
  ggb1.instance.setVisible("k", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"buttongroup":1,"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M3 TC L13 - Print Alternate Slide Deck for Modeling Elevation as a Function of Time","teacherView":true,"layout":"one col"}
*/
