const {
  ggb1,
  feedback1,
  text1,
  cc_sharewithclass_4bd8959226d1_textbox1,
  cc_sharewithclass_4bd8959226d1_input1: shareInput1,
  cc_sharewithclass_4bd8959226d1_button1,
  cc_sharewithclass_4bd8959226d1_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

autorun(() => {
  text1.updateData({ visible: false });
  let repSum = ggb1.innerData['repSum'];
  if (ggb1.instance.getValue('repSum') == 9) {
    text1.updateData({ visible: true });
  } else {
    text1.updateData({ visible: false });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M2 TB L08 - Subtracting Integers, Part 1","teacherView":false,"layout":"two col"}
*/
