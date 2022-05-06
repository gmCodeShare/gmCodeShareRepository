const {
  ggb1,
  feedback,
  text1,
  input1,
  text2,
  button1,
  separator4,
  text3,
  input2,
  text4,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button1.updateData({ align: 'right' });
  text3.updateData({ visible: false });
  input2.updateData({ visible: false });
  text4.updateData({ visible: false });
  button2.updateData({ visible: false, align: 'right' });
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
  text3.updateData({ visible: true });
  input2.updateData({ visible: true });
  text4.updateData({ visible: true });
  button2.updateData({ visible: true });
});

autorun(() => {
  if (input2.data.text != input2.data.last) {
    button2.updateData({ text: 'Submit', disabled: !input2.data.text });
    input2.updateData({ last: input2.data.text });
  }
});

button2.on('click', () => {
  button2.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":5,"input":2,"button":2,"separator":1},"stage":"Learn","lessonInfo":"8 M1 TC L13 - Applications with Numbers in Scientific Notation","teacherView":false,"layout":"two col"}
*/
