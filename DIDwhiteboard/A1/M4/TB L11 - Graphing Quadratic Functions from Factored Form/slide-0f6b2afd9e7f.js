const {
  image1,
  feedback1,
  text1,
  input1,
  text2,
  button1,
  separator1,
  cc_sharewithclass_1d370aac0451_textbox1: text3,
  cc_sharewithclass_1d370aac0451_input1: input2,
  cc_sharewithclass_1d370aac0451_button1: button2,
  cc_sharewithclass_1d370aac0451_studentanswers1,
} = components;

button1.updateData({ align: "right" });
text2.updateData({ align: "right" });

slide.on("firstload", () => {
  text3.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: "Submit", disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
  text3.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"uploaded-image":1,"textbox":3,"input":1,"button":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"9 M4 TB L11 - Graphing Quadratic Functions from Factored Form","teacherView":false,"layout":"two col"}
*/
