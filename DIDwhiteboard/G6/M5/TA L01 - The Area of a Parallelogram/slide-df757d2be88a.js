const {
  ggb1,
  feedback,
  text1,
  button1,
  separator1,
  text2,
  input1,
  text3,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible('hide', false);
    button1.updateData({ align: 'right' });
    text3.updateData({ align: 'right' });
    button2.updateData({ align: 'right', visible: false });
    text2.updateData({ visible: false });
    text3.updateData({ visible: false });
    input1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  ggb1.instance.registerUpdateListener(update);
  button1.updateData({ text: 'Submitted', disabled: true });
  text2.updateData({ visible: true });
  text3.updateData({ visible: true });
  input1.updateData({ visible: true });
  button2.updateData({ visible: true });
});

function update(a) {
  button1.updateData({ text: 'Submit', disabled: false });
  ggb1.instance.unregisterUpdateListener(update);
}

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button2.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button2.on('click', () => {
  button2.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":4,"button":2,"separator":1,"input":1},"stage":"Launch","lessonInfo":"6 M5 TA L01 - The Area of a Parallelogram","teacherView":false,"layout":"two col"}
*/
