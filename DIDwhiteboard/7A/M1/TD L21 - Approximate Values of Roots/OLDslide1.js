const { ggb1, text1, text2, fib1, fib2, button1, button2 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button1.updateData({ align: 'right', disabled: true });
  button2.updateData({ align: 'right', visible: false });
  text2.updateData({ visible: false });
  fib2.setVisible(false);
  ggb1.instance.setValue('showTri', true);
  ggb1.instance.setVisible('viewFrame', false);
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
  text2.updateData({ visible: true });
  fib2.setVisible(true);
  button2.updateData({ visible: true, disabled: true });
});

button2.on('click', () => {
  button2.updateData({ text: 'Submitted', disabled: true });
});

fib1.on('change', ({ values }) => {
  button1.updateData({
    text: 'Submit',
    disabled: !values.every(({ text }) => !!text),
  });
});

fib2.on('change', ({ values }) => {
  button2.updateData({
    text: 'Submit',
    disabled: !values.every(({ text }) => !!text),
  });
});
