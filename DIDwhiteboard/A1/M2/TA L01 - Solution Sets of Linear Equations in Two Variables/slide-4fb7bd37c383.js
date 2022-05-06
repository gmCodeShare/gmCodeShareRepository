const {
  cc_submit_b0239a19a612_textbox1,
  cc_submit_b0239a19a612_input1,
  cc_submit_b0239a19a612_button1: button1,
  separator1,
  cc_submit_c3c732df6ec3_textbox1: text2,
  cc_submit_c3c732df6ec3_input1: input2,
  cc_submit_c3c732df6ec3_button1: button2,
  separator2,
  cc_submit_7ddd9b1b3c85_textbox1: text3,
  cc_submit_7ddd9b1b3c85_input1: input3,
  cc_submit_7ddd9b1b3c85_button1: button3,
  separator3,
  cc_sharewithclass_8936e0a7549f_textbox1: text4,
  cc_sharewithclass_8936e0a7549f_input1: input4,
  cc_sharewithclass_8936e0a7549f_button1: button4,
  cc_sharewithclass_8936e0a7549f_studentanswers1,
  feedback1,
} = components;

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  text3.updateData({ visible: false });
  input3.updateData({ visible: false });
  button3.updateData({ visible: false });
  text4.updateData({ visible: false });
  input4.updateData({ visible: false });
  button4.updateData({ visible: false });
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

button2.on("click", () => {
  text3.updateData({ visible: true });
  input3.updateData({ visible: true });
  button3.updateData({ visible: true });
});

button3.on("click", () => {
  text4.updateData({ visible: true });
  input4.updateData({ visible: true });
  button4.updateData({ visible: true });
});

/*
{"compTotals":{"submit":3,"separator":3,"sharewithclass":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M2 TA L01 - Solution Sets of Linear Equations in Two Variables","teacherView":false,"layout":"one col"}
*/
