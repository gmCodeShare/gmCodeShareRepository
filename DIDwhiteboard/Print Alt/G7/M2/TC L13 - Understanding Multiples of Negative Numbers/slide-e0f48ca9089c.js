const {
  fib1,
  separator1,
  text2,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button10,
  separator2,
  text3,
  button0,
  button1,
  separator3,
  line1,
  separator4,
  why1,
  separator5,
  line2,
  separator6,
  why2,
  separator7,
  line3,
  separator8,
  why3,
  separator9,
  line4,
  separator10,
  why4,
  separator11,
  line5,
  fib2,
  button11,
} = components;

button1.updateData({ align: 'left' });
button11.updateData({ align: 'right' });

slide.on('firstload', () => {
  text2.updateData({ visible: false, align: 'right' });
  button2.updateData({ align: 'right', visible: false });
  button3.updateData({ align: 'right', visible: false });
  button4.updateData({ align: 'right', visible: false });
  button5.updateData({ align: 'right', visible: false });
  button6.updateData({ align: 'right', visible: false });
  button7.updateData({ align: 'right', visible: false });
  button8.updateData({ align: 'right', visible: false });
  button9.updateData({ align: 'right', visible: false });
  button10.updateData({ align: 'right', visible: false });
  line1.updateData({ align: 'left', visible: false });
  line2.updateData({ align: 'left', visible: false });
  line3.updateData({ align: 'left', visible: false });
  line4.updateData({ align: 'left', visible: false });
  line5.updateData({ align: 'left', visible: false });
  why1.updateData({ align: 'left', visible: false });
  why2.updateData({ align: 'left', visible: false });
  why3.updateData({ align: 'left', visible: false });
  why4.updateData({ align: 'left', visible: false });
  fib2.setVisible(false);
  fib2.updateInput(0, { text: '' });
  button11.updateData({ align: 'left', visible: false });
  text3.updateData({ align: 'left', visible: false });
  button0.updateData({ disabled: true, align: 'right' });
});

autorun(() => {
  if (fib1.getInput(0).text != '') {
    button1.updateData({ disabled: false });
  }
});

button1.on('click', () => {
  text2.updateData({
    visible: true,
    text: `Conjecture: $3\⋅(-5)$ $= ${fib1.getInput(0).text}$`,
  });
  button1.updateData({ disabled: true });
  button2.updateData({ visible: true });
  button0.updateData({ disabled: false });
});

button2.on('click', () => {
  line1.updateData({ visible: true });
  button3.updateData({ visible: true });
  button2.updateData({ disabled: true });
});

button3.on('click', () => {
  why1.updateData({ visible: true });
  button4.updateData({ visible: true });
  button3.updateData({ disabled: true });
});

button4.on('click', () => {
  line2.updateData({ visible: true });
  button5.updateData({ visible: true });
  button4.updateData({ disabled: true });
});

button5.on('click', () => {
  why2.updateData({ visible: true });
  button6.updateData({ visible: true });
  button5.updateData({ disabled: true });
});

button6.on('click', () => {
  line3.updateData({ visible: true });
  button7.updateData({ visible: true });
  button6.updateData({ disabled: true });
});

button7.on('click', () => {
  why3.updateData({ visible: true });
  button8.updateData({ visible: true });
  button7.updateData({ disabled: true });
});

button8.on('click', () => {
  line4.updateData({ visible: true });
  button9.updateData({ visible: true });
  button8.updateData({ disabled: true });
});

button9.on('click', () => {
  why4.updateData({ visible: true });
  button10.updateData({ visible: true });
  button9.updateData({ disabled: true });
});

button10.on('click', () => {
  line5.updateData({ visible: true });
  button11.updateData({ visible: true });
  fib2.setVisible(true);
  button10.updateData({ disabled: true });
});

button11.on('click', () => {
  text3.updateData({ visible: true });
  button11.updateData({ disabled: true });
});

button0.on('click', () => {
  text2.updateData({ visible: false, align: 'right' });
  button2.updateData({ align: 'right', visible: false, disabled: false });
  button3.updateData({ align: 'right', visible: false, disabled: false });
  button4.updateData({ align: 'right', visible: false, disabled: false });
  button5.updateData({ align: 'right', visible: false, disabled: false });
  button6.updateData({ align: 'right', visible: false, disabled: false });
  button7.updateData({ align: 'right', visible: false, disabled: false });
  button8.updateData({ align: 'right', visible: false, disabled: false });
  button9.updateData({ align: 'right', visible: false, disabled: false });
  button10.updateData({ align: 'right', visible: false, disabled: false });
  line1.updateData({ align: 'left', visible: false });
  line2.updateData({ align: 'left', visible: false });
  line3.updateData({ align: 'left', visible: false });
  line4.updateData({ align: 'left', visible: false });
  line5.updateData({ align: 'left', visible: false });
  why1.updateData({ align: 'left', visible: false });
  why2.updateData({ align: 'left', visible: false });
  why3.updateData({ align: 'left', visible: false });
  why4.updateData({ align: 'left', visible: false });
  fib2.setVisible(false);
  fib2.updateInput(0, { text: '' });
  button11.updateData({ align: 'left', visible: false, disabled: false });
  text3.updateData({ align: 'left', visible: false });
  button1.updateData({ disabled: false });
  button0.updateData({ disabled: true });
});

autorun(() => {
  if (fib2.getInput(0).text != '') {
    button11.updateData({ disabled: false });
  } else {
    button11.updateData({ disabled: true });
  }
});

autorun(() => {
  if (fib1.getInput(0).text != '') {
    button1.updateData({ disabled: false });
  } else {
    button1.updateData({ disabled: true });
  }
});

/*
{"compTotals":{"fillblank":2,"separator":11,"textbox":11,"button":12},"stage":"Learn","lessonInfo":"7 M2 TC L13 - Print Alt: Understanding Multiples of Negative Numbers","teacherView":false,"layout":"two col"}
*/
