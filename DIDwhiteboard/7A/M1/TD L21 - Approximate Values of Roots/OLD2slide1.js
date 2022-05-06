const { ggb1, text1, fib1, button1, cc_submit_a5aca3617f6c_textbox1: submitText1, cc_submit_a5aca3617f6c_input1: submitInput1, cc_submit_a5aca3617f6c_button1: submitButton1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button1.updateData({ align: 'right', disabled: true, visible: false });
  text1.updateData({ visible: false });
  fib1.setVisible(false);
});

submitButton1.on('click', () => {
  ggb1.instance.setValue('inputLength', 0.01);
  ggb1.instance.setValue('time', 0.01);
  var length = utils.math.evaluateLatex(submitInput1.data.text).value;
  console.log(length);
  ggb1.instance.setValue('inputLength', length);
  ggb1.instance.setValue('show', true);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  /*  setTimeout(() => {
      text1.updateData({ visible: true });
      button1.updateData({ visible: true });
      fib1.setVisible(true);
    }, 2000);*/
});
