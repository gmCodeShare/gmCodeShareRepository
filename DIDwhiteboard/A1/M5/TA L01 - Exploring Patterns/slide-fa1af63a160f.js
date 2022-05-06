const {
  ggb1,
  feedback1,
  cc_submit_242f9db37710_textbox1,
  cc_submit_242f9db37710_input1,
  cc_submit_242f9db37710_button1: button1,
  separator1,
  cc_sharewithclass_4cabc3386c1d_textbox1: text2,
  cc_sharewithclass_4cabc3386c1d_input1: input2,
  cc_sharewithclass_4cabc3386c1d_button1: button2,
  cc_sharewithclass_4cabc3386c1d_studentanswers1,
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
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"9 M5 TA L01 - Exploring Patterns","teacherView":false,"layout":"two col"}
*/
