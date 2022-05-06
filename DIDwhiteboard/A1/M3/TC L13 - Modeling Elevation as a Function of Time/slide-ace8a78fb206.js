const {
  ggb1,
  feedback,
  cc_sharewithclass_8864c54161f8_textbox1,
  cc_sharewithclass_8864c54161f8_input1,
  cc_sharewithclass_8864c54161f8_button1,
  cc_sharewithclass_8864c54161f8_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("showBar", false);
  ggb1.instance.setValue("time", 1);
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M3 TC L13 - Modeling Elevation as a Function of Time","teacherView":false,"layout":"two col"}
*/
