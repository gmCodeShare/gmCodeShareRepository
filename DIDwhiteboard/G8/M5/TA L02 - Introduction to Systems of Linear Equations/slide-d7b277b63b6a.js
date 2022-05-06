const {
  text1,
  input1,
  text2,
  button1,
  text3,
  input2,
  text4,
  button2,
  separator1,
  text5,
  feedback1,
} = components;

button1.updateData({ align: 'right' });
button2.updateData({ align: 'right' });

slide.on('firstload', () => {
  text3.updateData({ visible: false });
  input2.updateData({ visible: false });
  text4.updateData({ visible: false });
  button2.updateData({ visible: false });
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
  let num = input1.data.text;
  const min = -80;
  const max = 130;
  num = boundIt(num, min, max);
});

autorun(() => {
  if (input2.data.text != input2.data.last) {
    button2.updateData({ text: 'Submit', disabled: !input2.data.text });
    input2.updateData({ last: input2.data.text });
  }
});

button2.on('click', () => {
  text5.updateData({ text: '' });
  button2.updateData({ text: 'Submitted', disabled: true });
  let num2 = input2.data.text;
  const min = -80;
  const max = 130;
  num2 = boundIt2(num2, min, max);
});

function boundIt(inp, min, max) {
  const result = utils.math.evaluateLatex(inp);
  if (result.error) {
    input1.updateData({ text: '0' });
    return 0;
  } else if (result.value < min) {
    input1.updateData({ text: `${min}` });
    return min;
  } else if (result.value > max) {
    input1.updateData({ text: `${max}` });
    return max;
  }
  return result.value;
}

function boundIt2(inp, min, max) {
  const result = utils.math.evaluateLatex(inp);
  if (result.error) {
    input2.updateData({ text: '0' });
    return 0;
  } else if (result.value < min) {
    input2.updateData({ text: `${min}` });
    text5.updateData({
      text: 'Your second temperature was lower than the lowest temperature ever recorded in the US, try again!',
    });
    return min;
  } else if (result.value > max) {
    input2.updateData({ text: `${max}` });
    text5.updateData({
      text: 'Your second temperature was higher than the highest temperature ever recorded in the US, try again!',
    });
    return max;
  }
  return result.value;
}

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-d7b277b63b6a', {
      numX: input1.data.text,
      numY: input2.data.text,
    });
  }
});

/*
{"compTotals":{"textbox":6,"input":2,"button":2,"separator":1},"stage":"Launch","lessonInfo":"8 M5 TA L02 - Introduction to Systems of Linear Equations","teacherView":false,"layout":"one col"}
*/
