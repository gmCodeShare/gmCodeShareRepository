const { button1, ggb1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

button1.on('click', () => {
  ggb2.instance.setValue('show', true);
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"button":1,"geogebra":2},"stage":"Learn","lessonInfo":"7 M3 TD L18 - PA Understanding Inequalities and Their Solutions","teacherView":true,"layout":"one col"}
*/
