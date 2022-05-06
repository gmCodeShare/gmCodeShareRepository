const {
  ggb1,
  feedback1,
  cc_sharewithclass_e9729b2e5e8e_textbox1,
  cc_sharewithclass_e9729b2e5e8e_input1,
  cc_sharewithclass_e9729b2e5e8e_button1,
  cc_sharewithclass_e9729b2e5e8e_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue('state', 3);

for (var i = 1; i < 10; i++) {
  ggb1.instance.setVisible('A' + i, false);
}

for (var i = 1; i < 17; i++) {
  ggb1.instance.setVisible('B' + i, false);
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M1 TD L18 - The Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
