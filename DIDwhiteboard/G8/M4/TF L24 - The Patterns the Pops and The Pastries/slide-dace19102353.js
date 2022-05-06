const { text2, ggb1, Separator1, button2, text1, input1, button1, feedback1 } =
  components;

ggb1.instance.setAxisLabels(1, '$\\mathit{x}$', '$\\mathit{y}$');

ggb1.instance.setErrorDialogsActive(false);
button1.updateData({ align: 'right' });

if (!ggb1.data.init) {
  button2.updateData({ disabled: true });
  ggb1.updateData({ init: true });
}

button1.on('click', () => {
  const result = utils.math.evaluateLatex(input1.data.text);
  if (!result.error) {
    ggb1.instance.evalLaTeX(`inputSlope: ${input1.data.text}`);
    ggb1.instance.evalCommand('RunClickScript(tryIt)');
    button1.updateData({ disabled: true });
    button2.updateData({ disabled: false });
  }
});

autorun(() => {
  button1.updateData({ disabled: !input1.data.text });
});

button2.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(reset)');
  button1.updateData({ disabled: false });
  button2.updateData({ disabled: true });
});

/*
{"compTotals":{"textbox":3,"geogebra":1,"separator":1,"button":2,"input":1},"stage":"Launch","lessonInfo":"8 M4 T L0NaN - The Patterns, the Pops, and the Pastries","teacherView":false,"layout":"T layout"}
*/
