const {
  ggb1,
  feedback,
  cc_sharewithclass_035a5dc1f7fc_textbox1,
  cc_sharewithclass_035a5dc1f7fc_input1,
  cc_sharewithclass_035a5dc1f7fc_button1,
  cc_sharewithclass_035a5dc1f7fc_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.deleteObject("C");
  ggb1.instance.deleteObject("D");
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M3 TB L07 - Exploring Key Features of a Function and Its Graph","teacherView":false,"layout":"T layout"}
*/
