const {
  ggb1,
  feedback1,
  cc_submit_c700867743a5_textbox1: text1,
  cc_submit_c700867743a5_input1: input1,
  cc_submit_c700867743a5_button1: button1,
  separator4,
  cc_sharewithclass_553b8153e595_textbox1: text2,
  cc_sharewithclass_553b8153e595_input1: input2,
  cc_sharewithclass_553b8153e595_button1: button2,
  cc_sharewithclass_553b8153e595_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  ggb1.instance.setVisible("button2", false);
  ggb1.instance.setVisible("button3", false);
});
button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M3 TA L03 - The Graph of a Function","teacherView":false,"layout":"two col"}
*/
