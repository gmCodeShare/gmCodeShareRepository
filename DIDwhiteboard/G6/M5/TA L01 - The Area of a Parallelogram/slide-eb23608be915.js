const {
  ggb1,
  feedback,
  text1,
  button1,
  separator3,
  text2,
  input2,
  text4,
  button2,
  separator4,
  text3,
  input3,
  text5,
  button3,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.updateData({ init: true });
    button1.updateData({ align: 'center' });
    ggb1.instance.setVisible('hide', false);
    text3.updateData({ visible: false });
    input3.updateData({ visible: false });
    button3.updateData({ visible: false });
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    button3.updateData({ align: 'right' });
    button2.updateData({ align: 'right' });
    text5.updateData({ visible: false });
    text4.updateData({ visible: false });
    text5.updateData({ align: 'right' });
    text4.updateData({ align: 'right' });
  }
}

ggb1.instance.registerStoreUndoListener(() => {
  ggb1.updateData({ save64: ggb1.instance.getBase64() });
});

/*ggb1.instance.registerObjectUpdateListener("Follow", updateRight);
  
function updateRight() {
button1.updateData({text: "Submit", disabled: false});  
}*/

button1.on('click', () => {
  button1.updateData({ disabled: true });
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
  text4.updateData({ visible: true });
});
autorun(() => {
  if (input2.data.text != input2.data.last) {
    button2.updateData({ text: 'Submit', disabled: !input2.data.text });
    input2.updateData({ last: input2.data.text });
  }
});

button2.on('click', () => {
  button2.updateData({ text: 'Submitted', disabled: true });
  ggb1.instance.setVisible('hide', true);
  ggb1.instance.setVisible('dashedLine', false);
  text3.updateData({ visible: true });
  input3.updateData({ visible: true });
  button3.updateData({ visible: true });
  text5.updateData({ visible: true });
});

autorun(() => {
  if (input3.data.text != input3.data.last) {
    button3.updateData({ text: 'Submit', disabled: !input3.data.text });
    input3.updateData({ last: input3.data.text });
  }
});

button3.on('click', () => {
  button3.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":6,"button":3,"separator":2,"input":2},"stage":"Learn","lessonInfo":"6 M5 TA L01 - The Area of a Parallelogram","teacherView":false,"layout":"two col"}
*/
