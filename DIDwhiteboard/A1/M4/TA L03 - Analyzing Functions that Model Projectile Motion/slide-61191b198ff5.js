const {
  text1,
  text2,
  feedback1,
  cc_submit_472cd3c74402_textbox1: submitText1,
  cc_submit_472cd3c74402_input1: submitInput1,
  cc_submit_472cd3c74402_button1: submitButton1,
  separator1,
  cc_submit_13bedcef964b_textbox1: submitText2,
  cc_submit_13bedcef964b_input1: submitInput2,
  cc_submit_13bedcef964b_button1: submitButton2,
} = components;

slide.on("firstload", () => {
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
});

submitButton1.on("click", () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":3,"submit":2,"separator":1},"stage":"Learn","lessonInfo":"9 M4 TA L03 - Analyzing Functions that Model Projectile Motion","teacherView":false,"layout":"two col"}
*/
