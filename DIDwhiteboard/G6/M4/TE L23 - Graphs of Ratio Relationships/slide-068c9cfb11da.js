const {
  ggb1,
  feedback1,
  text2,
  ggb2,
  text3,
  cc_sharewithclass_1485c72162d3_textbox1: text1,
  cc_sharewithclass_1485c72162d3_input1: input1,
  cc_sharewithclass_1485c72162d3_button1: button1,
  cc_sharewithclass_1485c72162d3_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb2.instance.registerObjectUpdateListener('ratio', updateRight);

function updateRight() {
  ggb1.instance.setValue('ratio', ggb2.instance.getValue('ratio'));
  let ratio = ggb2.instance.getValue('ratio');
  text3.updateData({ text: `$t=${ratio}n$` });
}

/*
{"compTotals":{"geogebra":2,"textbox":3,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TE L23 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
