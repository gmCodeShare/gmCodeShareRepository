const { ggb1, feedback1, text1, input1, text2, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  // set initial states
  button1.updateData({ align: 'right' });
});

button1.on('click', () => {
  const result = utils.math.evaluateLatex(input1.data.text);
  if (!result.error) {
    button1.updateData({ disabled: true });
    ggb1.instance.evalLaTeX(`studentResponse= ${input1.data.text}`);
    button1.updateData({ disabled: true, text: 'Submitted' });
    ggb1.instance.setAnimating('dropTime', false);
    ggb1.instance.setValue('dropTime', 0);
    ggb1.instance.setAnimating('dropTime', true);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('dropTime', false);
    ggb1.instance.setValue('dropTime', 0);
    ggb1.instance.setAnimating('upTime', false);
    ggb1.instance.setValue('upTime', 0);
    ggb1.instance.setAnimating('overflowTime', false);
    ggb1.instance.setValue('overflowTime', 0);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"input":1,"button":1},"stage":"Learn","lessonInfo":"6 M2 TF L24 - Living on Mars","teacherView":false,"layout":"two col"}
*/
