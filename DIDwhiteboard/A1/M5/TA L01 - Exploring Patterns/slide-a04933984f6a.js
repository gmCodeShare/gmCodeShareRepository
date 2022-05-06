const {
  ggb1,
  feedback1,
  cc_submit_bc52a0269599_textbox1,
  cc_submit_bc52a0269599_input1,
  cc_submit_bc52a0269599_button1: button1,
  separator2,
  cc_sharewithclass_fe70aef9e23a_textbox1: text2,
  cc_sharewithclass_fe70aef9e23a_input1: input2,
  cc_sharewithclass_fe70aef9e23a_button1: button2,
  cc_sharewithclass_fe70aef9e23a_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TA L01 - Exploring Patterns","teacherView":false,"layout":"two col"}
*/
