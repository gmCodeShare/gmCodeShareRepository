const {
  ggb1,
  separator1,
  button2,
  feedback1,
  text1,
  button3,
  separator2,
  text2,
  button1,
  separator3,
  text3,
  button4,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ align: 'right' });
    button1.updateData({ visible: false });
    text2.updateData({ visible: false });
    button3.updateData({ align: 'right' });
    button4.updateData({ align: 'right' });
    button4.updateData({ visible: false });
    text3.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

button3.on('click', () => {
  button1.updateData({ visible: true });
  text2.updateData({ visible: true });
  button3.updateData({ text: 'Submitted', disabled: true });
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
  button4.updateData({ visible: true });
  text3.updateData({ visible: true });
});

button4.on('click', () => {
  button4.updateData({ text: 'Submitted', disabled: true });
});

button2.on('click', () => {
  ggb1.instance.reset();
  button3.updateData({ text: 'Submit', disabled: false });
  button1.updateData({ text: 'Submit', disabled: false });
  button4.updateData({ text: 'Submit', disabled: false });
});

ggb1.instance.registerStoreUndoListener(() => {
  ggb1.updateData({ save64: ggb1.instance.getBase64() });
});

/*
{"compTotals":{"geogebra":1,"separator":3,"button":4,"textbox":4},"stage":"Launch","lessonInfo":"6 M3 TC L12 - Reflections in the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
