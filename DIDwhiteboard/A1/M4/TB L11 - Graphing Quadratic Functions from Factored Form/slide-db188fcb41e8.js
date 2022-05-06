const {
  ggb1,
  feedback1,
  cc_submit_dc2bc1ce173d_textbox1,
  cc_submit_dc2bc1ce173d_input1,
  cc_submit_dc2bc1ce173d_button1: button1,
  separator4,
  cc_submit_f158fb556ef7_textbox1: text2,
  cc_submit_f158fb556ef7_input1: input2,
  cc_submit_f158fb556ef7_button1: button2,
  text3,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  text3.updateData({ visible: false });
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

button2.on("click", () => {
  text3.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":2,"separator":1},"stage":"Learn","lessonInfo":"9 M4 TB L11 - Graphing Quadratic Functions from Factored Form","teacherView":false,"layout":"two col"}
*/
