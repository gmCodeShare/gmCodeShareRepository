const {
  image1,
  feedback,
  button3,
  separator1,
  text1,
  separator2,
  button1,
  separator3,
  text2,
  separator4,
  button2,
  separator5,
  text3,
} = components;

onInit();
function onInit() {
  if (!image1.data.init) {
    text1.updateData({ visible: false });
    text2.updateData({ visible: false });
    button1.updateData({ visible: false });
    button2.updateData({ visible: false });
    text3.updateData({ visible: false });
    image1.updateData({ init: true });
  }
}

button1.on("click", () => {
  text2.updateData({ visible: true });
  button2.updateData({ visible: true });
  button1.updateData({ disabled: true });
});

button2.on("click", () => {
  text3.updateData({ visible: true });
  button2.updateData({ disabled: true });
});

button3.on("click", () => {
  text1.updateData({ visible: true });
  button3.updateData({ disabled: true });
  button1.updateData({ visible: true });
});

/*
{"compTotals":{"bynder-image":1,"textbox":4,"button":3,"separator":5},"stage":"Learn","lessonInfo":"9 M2 TC L20 - Print Alt: Interpreting Correlation","teacherView":true,"layout":"two col"}
*/
