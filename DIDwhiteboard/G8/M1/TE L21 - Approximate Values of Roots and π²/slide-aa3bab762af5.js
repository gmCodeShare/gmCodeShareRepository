const {
  textDisplay1,
  ggb1,
  feedback,
  cc_sharewithclass_718768e99425_textbox1,
  cc_sharewithclass_718768e99425_input1,
  cc_sharewithclass_718768e99425_button1,
  cc_sharewithclass_718768e99425_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setValue('showCu', true);
  ggb1.instance.setVisible('viewFrame', false);
});

/*
{"compTotals":{"textbox":2,"geogebra":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M1 TE L21 - Approximate Values of Roots and π²","teacherView":false,"layout":"two col"}
*/
