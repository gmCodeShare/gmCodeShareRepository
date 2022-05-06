const {
  text1,
  text2,
  feedback1,
  text3,
  input1,
  text4,
  button1,
  separator1,
  text5,
  input2,
  text6,
  button2,
  separator2,
  cc_submit_66c9da7650ae_textbox1: submitText1,
  cc_submit_66c9da7650ae_input1: submitInput1,
  cc_submit_66c9da7650ae_button1: submitButton1,
} = components;

slide.on("firstload", () => {
  button1.updateData({ align: "right" });
  button2.updateData({ align: "right" });
  text5.updateData({ visible: false });
  input2.updateData({ visible: false });
  text6.updateData({ visible: false });
  button2.updateData({ visible: false });
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
  text5.updateData({ visible: true });
  input2.updateData({ visible: true });
  text6.updateData({ visible: true });
  button2.updateData({ visible: true });
});

button2.on("click", () => {
  button2.updateData({ text: "Submitted", disabled: true });
  submitText1.updateData({ visible: true });
  submitInput1.updateData({ visible: true });
  submitButton1.updateData({ visible: true });
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: "Submit", disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

autorun(() => {
  if (input2.data.text != input2.data.last) {
    button2.updateData({ text: "Submit", disabled: !input2.data.text });
    input2.updateData({ last: input2.data.text });
  }
});

/*
{"compTotals":{"textbox":7,"input":2,"button":2,"separator":2,"submit":1},"stage":"Learn","lessonInfo":"9 M4 TA L03 - Analyzing Functions that Model Projectile Motion","teacherView":false,"layout":"two col"}
*/
