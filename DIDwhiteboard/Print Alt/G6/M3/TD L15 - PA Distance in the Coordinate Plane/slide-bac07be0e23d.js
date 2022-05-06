const { ggb1, feedback, separator1, button1, button3, button2 } = components;

components.feedback.updateData({ visible: false });

ggb1.instance.setValue('next', false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button2.updateData({ visible: false });
    button3.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  ggb1.instance.setValue('AB', true);
  button1.updateData({ disabled: true });
  button3.updateData({ visible: true });
  button1.updateData({ visible: false });
});

button3.on('click', () => {
  ggb1.instance.setValue('next', true);
  button3.updateData({ disabled: true });
  button2.updateData({ visible: true });
  button3.updateData({ visible: false });
});

button2.on('click', () => {
  ggb1.instance.setValue('CD', true);
  button2.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"separator":1,"button":3},"stage":"Learn","lessonInfo":"6 M3 TD L15 - PA Distance in the Coordinate Plane","teacherView":true,"layout":"one col"}
*/
