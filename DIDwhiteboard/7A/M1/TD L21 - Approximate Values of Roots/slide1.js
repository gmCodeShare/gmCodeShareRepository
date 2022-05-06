const { ggb1, text1, fib1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button1.updateData({ align: 'right', disabled: true });
  ggb1.instance.setVisible('sideALabel', true);
  ggb1.instance.setVisible('sideBLabel', true);
  ggb1.instance.setVisible('sideCLabelQuestionMark', true);
});

fib1.on('change', ({ values }) => {
  button1.updateData({
    text: 'Submit',
    disabled: !values.every(({ text }) => !!text),
  });
  ggb1.instance.setVisible('sideCLabelShown', false);
  ggb1.instance.setVisible('sideCLabelQuestionMark', true);
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
  ggb1.instance.setVisible('sideCLabelQuestionMark', false);
  ggb1.instance.setTextValue('sideCLabelTextHolder', fib1.getInput(0).text);
  ggb1.instance.setVisible('sideCLabelShown', true);
});
