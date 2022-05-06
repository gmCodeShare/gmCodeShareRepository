const { ggb1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

let colorItems = ['A', 'u'];
let colorItems2 = ['A', 'B', 'u'];

ggb2.instance.setValue('show', true);
ggb1.instance.deleteObject('text1');
ggb2.instance.deleteObject('text1');
ggb2.instance.deleteObject('text2');

for (let i = 0, L = colorItems.length; i < L; i++) {
  ggb1.instance.setColor(colorItems[i], 0, 127, 175);
}

for (let i = 0, L = colorItems2.length; i < L; i++) {
  ggb2.instance.setColor(colorItems2[i], 0, 127, 175);
}

/*
{"compTotals":{"geogebra":2},"stage":"Learn","lessonInfo":"7 M3 TD L18 - PA Understanding Inequalities and Their Solutions","teacherView":true,"layout":"one col"}
*/
