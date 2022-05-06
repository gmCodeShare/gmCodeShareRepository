const {
  ggb1,
  feedback1,
  cc_submit_f56f03b679cc_textbox1: text1,
  cc_submit_f56f03b679cc_input1: input1,
  cc_submit_f56f03b679cc_button1: button1,
  separator2,
  cc_submit_e85e327b3d2c_textbox1: text2,
  cc_submit_e85e327b3d2c_input1: input2,
  cc_submit_e85e327b3d2c_button1: button2,
  separator3,
  cc_sharewithclass_ea2cf95b3465_textbox1: text3,
  cc_sharewithclass_ea2cf95b3465_input1: input3,
  cc_sharewithclass_ea2cf95b3465_button1: button3,
  cc_sharewithclass_ea2cf95b3465_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  text3.updateData({ visible: false });
  input3.updateData({ visible: false });
  button3.updateData({ visible: false });
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

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":2,"separator":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M3 TA L03 - The Graph of a Function","teacherView":false,"layout":"two col"}
*/
