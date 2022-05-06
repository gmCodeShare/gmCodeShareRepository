const { text1, ggb1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

const dividend = -12;
const divisor = 4;

autorun(() => {
  let num1 = ggb1.innerData['numDisplay01'];
  let num2 = ggb1.innerData['numDisplay1'];
  let size1 = ggb1.innerData['sizeDisplay02'];
  let size2 = ggb1.innerData['sizeDisplay2'];
  ggb1.instance.setVisible('pic1', false);
  ggb1.instance.setVisible('pic2', false);
  ggb1.instance.setVisible('numTexts', false);
  ggb1.instance.setValue('show', false);
  button1.updateData({ visible: true, disabled: false });
});

button1.on('click', () => {
  let num1 = ggb1.innerData['numDisplay01'];
  let num2 = ggb1.innerData['numDisplay1'];
  let size1 = ggb1.innerData['sizeDisplay02'];
  let size2 = ggb1.innerData['sizeDisplay2'];
  ggb1.instance.setValue('show', true);
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"textbox":1,"geogebra":1,"button":1},"stage":"Learn","lessonInfo":"7 M2 TD L17 - Print Alt: Understanding Negative Dividends","teacherView":false,"layout":"one col"}
*/
