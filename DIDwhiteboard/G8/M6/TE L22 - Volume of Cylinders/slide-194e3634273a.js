const {
  ggb1,
  feedback1,
  cc_sharewithclass_14e06f29d031_textbox1,
  cc_sharewithclass_14e06f29d031_input1,
  cc_sharewithclass_14e06f29d031_button1,
  cc_sharewithclass_14e06f29d031_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.evalCommand('SetSpinSpeed(3)');

ggb1.instance.getAllObjectNames().forEach((element) => {
  ggb1.instance.setFixed(element, true, false);
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M6 TE L0NaN - Volume of Cylinders","teacherView":false,"layout":"two col"}
*/
