const {
  cc_submit_d77102da3e71_textbox1,
  cc_submit_d77102da3e71_input1,
  cc_submit_d77102da3e71_button1: button1,
  separator1,
  cc_sharewithclass_ab68df56654b_textbox1: text2,
  cc_sharewithclass_ab68df56654b_input1: input2,
  cc_sharewithclass_ab68df56654b_button1: button2,
  cc_sharewithclass_ab68df56654b_studentanswers1,
  feedback1,
} = components;

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
{"compTotals":{"submit":1,"separator":1,"sharewithclass":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M2 TA L01 - Solution Sets of Linear Equations in Two Variables","teacherView":false,"layout":"one col"}
*/
