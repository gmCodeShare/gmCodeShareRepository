const {
  text1,
  text2,
  ggb1,
  feedback1,
  cc_submit_472cd3c74402_textbox1,
  cc_submit_472cd3c74402_input1,
  cc_submit_472cd3c74402_button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("showGraph", true);
  ggb1.instance.setValue("aVal", -1.85);
  ggb1.instance.setValue("bVal", 18);
  ggb1.instance.setValue("cVal", 35);
  ggb1.instance.setValue("xmin", -3);
  ggb1.instance.setValue("xmax", 13);
  ggb1.instance.setValue("ymin", -50);
  ggb1.instance.setValue("ymax", 110);
});

/*
{"compTotals":{"textbox":3,"geogebra":1,"submit":1},"stage":"Learn","lessonInfo":"9 M4 TA L03 - Analyzing Functions that Model Projectile Motion","teacherView":false,"layout":"two col"}
*/
