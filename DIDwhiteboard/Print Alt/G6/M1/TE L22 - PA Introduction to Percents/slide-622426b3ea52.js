const { ggb1, feedback1, ggb2, textDisplay1, separator1, textDisplay2 } =
  components;

components.feedback1.updateData({ visible: false });

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb2.instance.registerObjectUpdateListener('percent', update);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    textDisplay2.updateData({ align: 'center' });
    textDisplay1.updateData({ align: 'center' });
    ggb1.updateData({ init: true });
  }
}

function update() {
  ggb1.instance.setValue('percent', ggb2.instance.getValue('percent'));
  let num = ggb2.instance.getValue('percent');
  console.log(num);
  textDisplay2.updateData({
    text: `#### $\\large{\\text{Percent: ${num}\\%}}$`,
  });
  textDisplay1.updateData({
    text: `#### $\\large{\\text{Fraction: } \\frac{${num}}{100}}$`,
  });
}

/*
{"compTotals":{"geogebra":2,"textbox":3,"separator":1},"stage":"Learn","lessonInfo":"6 M1 TE L22 - PA Introduction to Percents","teacherView":true,"layout":"two col"}
*/
