const { ggb1, feedback, text1, input1, text2, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ align: 'right' });
text2.updateData({ align: 'right' });

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on('click', () => {
  const result = utils.math.evaluateLatex(input1.data.text);
  if (result.value < 0 || result.error) {
    return;
  }
  button1.updateData({ text: 'Submitted', disabled: true });
  ggb1.instance.setValue('studentAns', result.value);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"input":1,"button":1},"stage":"Learn","lessonInfo":"6 M5 TA L01 - The Area of a Parallelogram","teacherView":false,"layout":"two col"}
*/
