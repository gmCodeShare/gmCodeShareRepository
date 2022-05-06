const {
  ggb1,
  separator1,
  button2,
  feedback1,
  cc_sharewithclass_57a3b251f6bb_textbox1,
  cc_sharewithclass_57a3b251f6bb_input1,
  cc_sharewithclass_57a3b251f6bb_button1,
  cc_sharewithclass_57a3b251f6bb_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue('AB', false);

button2.on('click', () => {
  ggb1.instance.reset();
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M5 TC L09 - Properties of Solids","teacherView":false,"layout":"two col"}
*/
