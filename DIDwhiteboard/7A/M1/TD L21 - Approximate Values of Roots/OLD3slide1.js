const { ggb1, text1, text2, fib1, button1, cc_submit_a5aca3617f6c_textbox1: submitText1, cc_submit_a5aca3617f6c_input1: submitInput1, cc_submit_a5aca3617f6c_button1: submitButton1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('timeStudentSquare', showComps);

slide.on('firstload', () => {
  ggb1.instance.setVisible('studentSquare', true);
  ggb1.instance.setVisible('sideALabel', true);
  ggb1.instance.setVisible('sideBLabel', true);
  ggb1.instance.setVisible('sideCLabelQuestionMark', true);
  button1.updateData({ align: 'right', disabled: true, visible: false });
  text1.updateData({ visible: false });
  fib1.setVisible(false);
});

submitButton1.on('click', () => {
  let length = utils.math.evaluateLatex(submitInput1.data.text).value;
  ggb1.instance.stopAnimation();
  ggb1.instance.setVisible('sideCLabelQuestionMark', false);
  ggb1.instance.setVisible('sideCLabel', true);
  ggb1.instance.setValue('timeStudentSquare', 0);
  ggb1.instance.setValue('studentInput', length);
  ggb1.instance.setAnimating('timeStudentSquare', true);
  ggb1.instance.startAnimation();
});

fib1.on('change', ({ values }) => {
  button1.updateData({
    text: 'Submit',
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

function showComps() {
  if (ggb1.instance.getValue('timeStudentSquare') == 1) {
    text1.updateData({ visible: true });
    button1.updateData({ visible: true });
    fib1.setVisible(true);
  }
}

autorun(() => {
  let submitInput = submitInput1.data.text;
  ggb1.instance.setVisible('sideCLabel', false);
  ggb1.instance.setVisible('sideCLabelQuestionMark', true);
});
