const {
  text1,
  image1,
  separator1,
  input1,
  feedback1,
  image2,
  separator2,
  input2,
  button1,
} = components;

slide.on('firstload', () => {
  input1.updateData({ storedString: '' });
  input2.updateData({ storedString: '' });
  button1.updateData({ align: 'right' });
});

autorun(() => {
  let currentText1 = input1.data.text;
  let currentText2 = input2.data.text;
  if (
    currentText1 != input1.data.storedString ||
    currentText2 != input2.data.storedString
  ) {
    input1.updateData({ storedString: input1.data.text });
    input2.updateData({ storedString: input2.data.text });
    button1.updateData({ disabled: false, text: 'Submit' });
  }
  if (currentText1 == '' || currentText2 == '') {
    button1.updateData({ disabled: true });
  }
});

button1.on('click', () => {
  button1.updateData({ disabled: true, text: 'Submitted' });
});

/*
{"compTotals":{"textbox":2,"uploaded-image":2,"separator":2,"input":2,"button":1},"stage":"Learn","lessonInfo":"8 M5 TC L12 - Solving Historical Problems with Systems of Equations​","teacherView":false,"layout":"T layout"}
*/
