const { text1, ggb1, text2, text3, feedback1, ggb2, text4, text5 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('percent', update1);
ggb2.instance.registerObjectUpdateListener('percent', update2);

function update1() {
  let num = ggb1.instance.getValue('percent');
  text2.updateData({ text: `$${num}$ %` });
}

function update2() {
  let num = ggb2.instance.getValue('percent');
  text4.updateData({ text: `$${num}$%` });
}

/*
{"compTotals":{"textbox":6,"geogebra":2},"stage":"Learn","lessonInfo":"6 M1 TE L22 - Introduction to Percents","teacherView":false,"layout":"T layout"}
*/
