const { ggb1, feedback1, textDisplay1, ggb2, text1, table1 } = components;

components.feedback1.updateData({ visible: false });

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

textDisplay1.updateData({ align: 'center' });
table1.updateCol(0, { math: false, editable: false });

ggb2.instance.registerObjectUpdateListener('percent', update);

function update() {
  ggb1.instance.setValue('percent', ggb2.instance.getValue('percent'));
  let num = ggb2.instance.getValue('percent') / 100;
  text1.updateData({ text: `#### $\\large{\\text{Decimal: ${num}}}$` });
}

/*
{"compTotals":{"geogebra":2,"textbox":3,"table":1},"stage":"Learn","lessonInfo":"6 M1 TE L22 - PA Introduction to Percents","teacherView":true,"layout":"two col"}
*/
