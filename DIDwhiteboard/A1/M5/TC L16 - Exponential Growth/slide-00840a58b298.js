const {
  ggb1,
  Separator2,
  feedback,
  text5,
  text1,
  button2,
  text4,
  text2,
  button3,
  text6,
  text3,
  button4,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

slide.on("firstload", () => {
  button2.updateData({ align: "center", visible: true });
  button3.updateData({ align: "center", visible: false });
  button4.updateData({ align: "center", visible: false });
  text1.updateData({ visible: true });
  text2.updateData({ visible: false });
  text3.updateData({ visible: false });
  text4.updateData({ visible: false });
  text6.updateData({ visible: false });
});

button2.on("click", () => {
  text1.updateData({ className: "text-muted" });
  text5.updateData({ className: "text-muted" });
  text2.updateData({ visible: true });
  button2.updateData({ visible: false });
  button3.updateData({ visible: true });
  text4.updateData({ visible: true });
});

button3.on("click", () => {
  text2.updateData({ className: "text-muted" });
  text4.updateData({ className: "text-muted" });
  text3.updateData({ visible: true });
  button2.updateData({ disabled: true });
  button3.updateData({ visible: false });
  button4.updateData({ visible: true });
  text6.updateData({ visible: true });
});

button4.on("click", () => {
  text3.updateData({ className: "text-muted" });
  text6.updateData({ className: "text-muted" });
  button3.updateData({ disabled: true });
  button4.updateData({ visible: false });
  ggb1.instance.setValue("showFunction", true);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"textbox":7,"button":3},"stage":"Learn","lessonInfo":"9 M5 TC L16 - Exponential Growth","teacherView":true,"layout":"two col"}
*/
