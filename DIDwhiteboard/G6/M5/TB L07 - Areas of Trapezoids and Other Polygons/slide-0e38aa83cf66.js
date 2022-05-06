const { ggb1, feedback1, text1, input1, text2, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
text2.updateData({ align: 'right' });
button1.updateData({ align: 'right' });

ggb1.instance.setErrorDialogsActive(false);

button1.on('click', () => {
  const result = utils.math.evaluateLatex(input1.data.text);
  if (!result.error) {
    button1.updateData({ hasBeenClicked: true });
    button1.updateData({ disabled: true, text: 'Submitted' });
    ggb1.instance.evalLaTeX(`studentAnswer= ${input1.data.text}`);
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
    ggb1.instance.setValue('showBoxes', false);
    ggb1.instance.setVisible('I', false);
    ggb1.instance.setVisible('J', false);
    ggb1.instance.setVisible('K', false);
    ggb1.instance.setValue('showHalo', false);
  }
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('overflowTime', false);
    ggb1.instance.setValue('overflowTime', 0);
    ggb1.instance.setValue('showBoxes', true);
    ggb1.instance.setVisible('I', true);
    ggb1.instance.setVisible('J', true);
    ggb1.instance.setVisible('K', true);
    ggb1.instance.setValue('showHalo', true);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"input":1,"button":1},"stage":"Learn","lessonInfo":"6 M5 TB L07 - Areas of Trapezoids and Other Polygons","teacherView":false,"layout":"two col"}
*/
