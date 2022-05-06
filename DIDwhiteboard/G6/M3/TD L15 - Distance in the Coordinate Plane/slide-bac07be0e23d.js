const { ggb1, feedback1, text1, button1, separator1, button2, text2, button3 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setValue('next', false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text2.updateData({ visible: false });
    button3.updateData({ visible: false });
    button2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  ggb1.instance.setValue('AB', true);
  button1.updateData({ disabled: true });
  button2.updateData({ visible: true });
});

button2.on('click', () => {
  ggb1.instance.setValue('next', true);
  button2.updateData({ disabled: true });
  text2.updateData({ visible: true });
  button3.updateData({ visible: true });
});

button3.on('click', () => {
  ggb1.instance.setValue('CD', true);
  button3.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"button":3,"separator":1},"stage":"Learn","lessonInfo":"6 M3 TD L15 - Distance in the Coordinate Plane","teacherView":true,"layout":"two col"}
*/
