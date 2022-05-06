const {
  ggb1,
  feedback1,
  text1,
  separator1,
  button1,
  separator2,
  text2,
  separator3,
  button2,
  separator4,
  text3,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button2.updateData({ visible: false });
    text2.updateData({ visible: false });
    text3.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

button1.on("click", () => {
  button2.updateData({ visible: true });
  text2.updateData({ visible: true });
  button1.updateData({ disabled: true });
});

button2.on("click", () => {
  button2.updateData({ disabled: true });
  text3.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":4,"separator":4,"button":2},"stage":"Learn","lessonInfo":"8 M6 TA L01 - Print Alt: Motion and Speed","teacherView":true,"layout":"two col"}
*/
