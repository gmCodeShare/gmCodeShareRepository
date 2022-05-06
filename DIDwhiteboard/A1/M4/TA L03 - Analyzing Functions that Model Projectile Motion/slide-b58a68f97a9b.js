const {
  text1,
  text2,
  ggb1,
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
  text7,
  input3,
  text8,
  button3,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button1.updateData({ align: "right" });
  button2.updateData({ align: "right" });
  button3.updateData({ align: "right" });
  ggb1.instance.setValue("showGraph", true);
  ggb1.instance.setValue("aVal", -1.85);
  ggb1.instance.setValue("bVal", 18);
  ggb1.instance.setValue("cVal", 35);
  ggb1.instance.setValue("xmin", -3);
  ggb1.instance.setValue("xmax", 13);
  ggb1.instance.setValue("ymin", -50);
  ggb1.instance.setValue("ymax", 110);
  text5.updateData({ visible: false });
  input2.updateData({ visible: false });
  text6.updateData({ visible: false });
  button2.updateData({ visible: false });
  text7.updateData({ visible: false });
  input3.updateData({ visible: false });
  text8.updateData({ visible: false });
  button3.updateData({ visible: false });
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
  text7.updateData({ visible: true });
  input3.updateData({ visible: true });
  text8.updateData({ visible: true });
  button3.updateData({ visible: true });
});

button3.on("click", () => {
  button3.updateData({ text: "Submitted", disabled: true });
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

autorun(() => {
  if (input3.data.text != input3.data.last) {
    button3.updateData({ text: "Submit", disabled: !input3.data.text });
    input3.updateData({ last: input3.data.text });
  }
});

/*
{"compTotals":{"textbox":9,"geogebra":1,"input":3,"button":3,"separator":2},"stage":"Learn","lessonInfo":"9 M4 TA L03 - Analyzing Functions that Model Projectile Motion","teacherView":false,"layout":"two col"}
*/
