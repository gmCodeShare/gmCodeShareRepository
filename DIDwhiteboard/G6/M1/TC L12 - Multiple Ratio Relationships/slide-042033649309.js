const {
  ggb1,
  text1,
  input1,
  text2,
  input2,
  button1,
  separator1,
  text3,
  input3,
  text4,
  input4,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible('d', false);
    ggb1.instance.setVisible('e', false);
    ggb1.instance.setVisible('paint2', false);
    text3.updateData({ visible: false });
    text4.updateData({ visible: false });
    input3.updateData({ visible: false });
    input4.updateData({ visible: false });
    button2.updateData({ visible: false });
    button1.updateData({ align: 'right' });
    button2.updateData({ align: 'right' });
    ggb1.instance.setVisible('H', false);
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  if (
    input1.data.text != input1.data.last ||
    input2.data.text != input2.data.last
  ) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    button1.updateData({ text: 'Submit', disabled: !input2.data.text });
    input1.updateData({ last: input1.data.text });
    input2.updateData({ last: input2.data.text });
  }
});

autorun(() => {
  if (
    input3.data.text != input3.data.last ||
    input4.data.text != input4.data.last
  ) {
    button2.updateData({ text: 'Submit', disabled: !input3.data.text });
    button2.updateData({ text: 'Submit', disabled: !input4.data.text });
    input3.updateData({ last: input3.data.text });
    input4.updateData({ last: input4.data.text });
  }
});

button1.on('click', () => {
  let blueNum = utils.math.evaluateLatex(input1.data.text);
  if (blueNum.value < 1 || blueNum.error || blueNum.value > 50) {
    return;
  }
  let redNum = utils.math.evaluateLatex(input2.data.text);
  if (redNum.value < 1 || redNum.error || redNum.value > 50) {
    return;
  }
  button1.updateData({ text: 'Submitted', disabled: true });
  ggb1.instance.setValue('bluePart', blueNum.value);
  ggb1.instance.setValue('redPart', redNum.value);
  ggb1.instance.setVisible('d', true);
  text3.updateData({ visible: true });
  text4.updateData({ visible: true });
  input3.updateData({ visible: true });
  input4.updateData({ visible: true });
  button2.updateData({ visible: true });
  ggb1.instance.setVisible('paint2', true);
});

button2.on('click', () => {
  let blueNum2 = utils.math.evaluateLatex(input3.data.text);
  let redNum2 = utils.math.evaluateLatex(input4.data.text);
  if (
    blueNum2.value < 1 ||
    blueNum2.error ||
    blueNum2.value > 50 ||
    (blueNum2.value == ggb1.instance.getValue('bluePart') &&
      redNum2.value == ggb1.instance.getValue('redPart'))
  ) {
    return;
  }

  if (
    redNum2.value < 1 ||
    redNum2.error ||
    redNum2.value > 50 ||
    (redNum2.value == ggb1.instance.getValue('redPart') &&
      blueNum2.value == ggb1.instance.getValue('bluePart'))
  ) {
    return;
  }
  if (
    ggb1.instance.getValue('redPart') / ggb1.instance.getValue('bluePart') !=
    redNum2.value / blueNum2.value
  ) {
    ggb1.instance.setVisible('H', true);
  } else {
    ggb1.instance.setVisible('H', false);
  }
  button2.updateData({ text: 'Submitted', disabled: true });
  ggb1.instance.setValue('bluePart2', blueNum2.value);
  ggb1.instance.setValue('redPart2', redNum2.value);
  ggb1.instance.setVisible('e', true);
});

/*
{"compTotals":{"geogebra":1,"textbox":4,"input":4,"button":2,"separator":1},"stage":"Launch","lessonInfo":"6 M1 TC L12 - Multiple Ratio Relationships","teacherView":false,"layout":"two col"}
*/
