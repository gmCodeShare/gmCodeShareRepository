const {
  ggb1,
  feedback1,
  text1,
  input1,
  text2,
  button1,
  separator1,
  text3,
  input2,
  text4,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button1.updateData({ align: "right" });
  button2.updateData({ align: "right", visible: false });
  text2.updateData({ align: "right" });
  text3.updateData({ visible: false });
  text4.updateData({ align: "right", visible: false });
  input2.updateData({ visible: false });

  setTableColor();
});

ggb1.instance.registerObjectUpdateListener("Point1", setTableColor);
ggb1.instance.registerObjectUpdateListener("Point2", setTableColor);

function setTableColor() {
  for (i = 0, L = ggb1.instance.getValue("pointListLength"); i <= L; i++) {
    ggb1.instance.setColor("xText" + (i + 1), 0, 0, 0);
    ggb1.instance.setColor("yText" + (i + 1), 0, 0, 0);
  }

  ggb1.instance.setColor(
    "xText" + ggb1.instance.getValue("point1Index"),
    218,
    41,
    28
  );
  ggb1.instance.setColor(
    "yText" + ggb1.instance.getValue("point1Index"),
    218,
    41,
    28
  );
  ggb1.instance.setColor(
    "xText" + ggb1.instance.getValue("point2Index"),
    218,
    41,
    28
  );
  ggb1.instance.setColor(
    "yText" + ggb1.instance.getValue("point2Index"),
    218,
    41,
    28
  );
}

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
  text3.updateData({ visible: true });
  text4.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

button2.on("click", () => {
  button2.updateData({ text: "Submitted", disabled: true });
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
{"compTotals":{"geogebra":1,"textbox":5,"input":2,"button":2,"separator":1},"stage":"Learn","lessonInfo":"9 M4 TA L03 - Analyzing Functions that Model Projectile Motion","teacherView":false,"layout":"two col"}
*/
