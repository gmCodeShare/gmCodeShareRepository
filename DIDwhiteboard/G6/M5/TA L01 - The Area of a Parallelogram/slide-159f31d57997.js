const {
  ggb1,
  feedback,
  text1,
  button1,
  separator2,
  text2,
  input1,
  text3,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button2.updateData({ visible: false });
    text2.updateData({ visible: false });
    text3.updateData({ visible: false });
    text3.updateData({ align: 'right' });
    input1.updateData({ visible: false });
    button2.updateData({ align: 'right' });
    button1.updateData({ align: 'right' });
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerStoreUndoListener(() => {
  ggb1.updateData({ save64: ggb1.instance.getBase64() });
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
  ggb1.instance.registerUpdateListener(update);
  button2.updateData({ visible: true });
  text2.updateData({ visible: true });
  text3.updateData({ visible: true });
  input1.updateData({ visible: true });
});

function update(a) {
  // console.log("updated");
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
