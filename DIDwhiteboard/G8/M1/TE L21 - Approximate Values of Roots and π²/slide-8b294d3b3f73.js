const { ggb1, feedback, textDisplay2, input1, textDisplay3, button1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setValue('showTri', true);
  ggb1.instance.evalCommand('SetValue(currentHyp, 4 sqrt(2))');
  button1.updateData({ align: 'right' });
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"input":1,"button":1},"stage":"Learn","lessonInfo":"8 M1 TE L21 - Approximate Values of Roots and π²","teacherView":false,"layout":"two col"}
*/
