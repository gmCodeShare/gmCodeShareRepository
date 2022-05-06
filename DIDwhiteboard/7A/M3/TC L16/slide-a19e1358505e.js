const { ggb1, feedback1, text1, input1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ align: "right" });

if (input1.data.storedString == undefined) {
  input1.updateData({ storedString: "" });
}

autorun(() => {
  let currentText = input1.data.text;
  if (currentText != input1.data.storedString) {
    input1.updateData({ storedString: "" });
    button1.updateData({ disabled: false });
  }
  if (currentText == "") {
    button1.updateData({ disabled: true });
  }
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
});

button1.on("click", () => {
  input1.updateData({ storedString: input1.data.text });
  button1.updateData({ disabled: true });
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"input":1,"button":1},"stage":"Launch","lessonInfo":"8 M2 TD L18 - Proving the Converse of the Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
