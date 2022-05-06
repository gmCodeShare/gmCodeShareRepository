const {
  ggb1,
  feedback1,
  ggb2,
  cc_sharewithclass_a08bdfbbc8c2_textbox1: text1,
  cc_sharewithclass_a08bdfbbc8c2_input1: input1,
  cc_sharewithclass_a08bdfbbc8c2_button1: button1,
  cc_sharewithclass_a08bdfbbc8c2_studentanswers1: answers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

button1.updateData({ align: 'right' });

ggb1.instance.setValue('myPercent', 1.15);

autorun(() => {
  let laps = ggb2.innerData['time'];
  ggb1.instance.setValue('time', laps);
});

/*
{"compTotals":{"geogebra":2,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M5 TA L02 - Racing for Percents","teacherView":false,"layout":"two col"}
*/
