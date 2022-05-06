const { ggb1, feedback1, textDisplay1, input1, textDisplay2, button1 } =
  components;

slide.on('firstload', () => {
  button1.updateData({ align: 'right' });
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"input":1,"button":1},"stage":"Learn","lessonInfo":"8 M6 TA L01 - Motion and Speed","teacherView":false,"layout":"two col"}
*/
