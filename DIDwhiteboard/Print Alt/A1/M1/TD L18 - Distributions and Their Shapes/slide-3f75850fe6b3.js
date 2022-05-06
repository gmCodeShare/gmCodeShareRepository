const {
  separator1,
  text1,
  button1,
  text2,
  separator2,
  text3,
  text4,
  ggb1,
  feedback1,
} = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text2.updateData({ visible: false });
    text3.updateData({ visible: false });
    text4.updateData({ visible: false });
    ggb1.updateData({ visible: false });
    ggb1.instance.setValue("time", 30);
    ggb1.instance.setValue("time1", 45);
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener("time", updateTime);
ggb1.instance.registerObjectUpdateListener("time1", updateRight);

function updateTime() {
  let seconds = ggb1.instance.getValue("time");
  text3.updateData({ text: `Time: $${seconds}$ seconds` });
  if (ggb1.instance.getValue("time") == 0) {
    text1.updateData({ visible: false });
    ggb1.instance.setAnimating("time", false);
  }
}
function updateRight() {
  if (ggb1.instance.getValue("time1") == 0) {
    text4.updateData({ visible: true });
    text2.updateData({ visible: false });
    text3.updateData({ visible: false });
    ggb1.instance.setAnimating("time1", false);
  }
  let seconds1 = ggb1.instance.getValue("time1");
  text3.updateData({ text: `Time: $${seconds1}$ seconds` });
}

button1.on("click", () => {
  text2.updateData({ visible: true });
  text3.updateData({ visible: true });
  ggb1.instance.setAnimating("time1", true);
  ggb1.instance.startAnimation();
  button1.updateData({ visible: false });
  text1.updateData({ visible: false });
});

/*
{"compTotals":{"separator":2,"textbox":5,"button":1,"geogebra":1},"stage":"Launch","lessonInfo":"9 M1 TD L18 - Print Alt Distributions and Their Shapes","teacherView":true,"layout":"one col"}
*/
