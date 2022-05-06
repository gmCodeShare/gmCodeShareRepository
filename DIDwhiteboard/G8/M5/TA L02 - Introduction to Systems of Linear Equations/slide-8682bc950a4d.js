const { text1, input1, button1, separator1, input2, button2, feedback1 } =
  components;

button1.updateData({ align: 'right' });
button2.updateData({ align: 'right' });

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
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
{"compTotals":{"textbox":2,"input":2,"button":2,"separator":1},"stage":"Learn","lessonInfo":"8 M5 TA L02 - Introduction to Systems of Linear Equations","teacherView":false,"layout":"one col"}
*/
