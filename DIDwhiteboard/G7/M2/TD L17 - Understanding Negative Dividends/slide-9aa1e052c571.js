const {
  ggb1,
  feedback,
  text1,
  select1,
  Separator1,
  button1,
  Separator2,
  text2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

const dividend = -12;
const divisor = 4;

text2.updateData({ visible: false, align: 'center' });
button1.updateData({ visible: false });

autorun(() => {
  if (select1.data.selected == '0') {
    ggb1.instance.setValue('showSlider', 'true');
    ggb1.instance.setValue('divSize', 'true');
    button1.updateData({ visible: true, disabled: false });
  } else if (select1.data.selected == '1') {
    ggb1.instance.setValue('showSlider', 'true');
    ggb1.instance.setValue('divSize', 'false');
    button1.updateData({ visible: true, disabled: false });
  }
});

autorun(() => {
  let num1 = ggb1.innerData['numDisplay01'];
  let num2 = ggb1.innerData['numDisplay1'];
  let size1 = ggb1.innerData['sizeDisplay02'];
  let size2 = ggb1.innerData['sizeDisplay2'];
  ggb1.instance.setVisible('pic1', false);
  ggb1.instance.setVisible('pic2', false);
  ggb1.instance.setVisible('numTexts', false);
  if (select1.data.selected == '0') {
    //size
    text2.updateData({ visible: false, text: `$${size1}$` });
    button1.updateData({ visible: true, disabled: false });
  } else if (select1.data.selected == '1') {
    //num
    text2.updateData({ visible: false, text: `$${num1}$` });
    button1.updateData({ visible: true, disabled: false });
  }
});

button1.on('click', () => {
  let num1 = ggb1.innerData['numDisplay01'];
  let num2 = ggb1.innerData['numDisplay1'];
  let size1 = ggb1.innerData['sizeDisplay02'];
  let size2 = ggb1.innerData['sizeDisplay2'];
  if (
    select1.data.selected == '1' &&
    ggb1.instance.getValue('dividend') == dividend &&
    ggb1.instance.getValue('divisor') == divisor
  ) {
    //correct
    text2.updateData({ visible: true, text: `$${num2}$` });
    ggb1.instance.setVisible('pic2', true);
    ggb1.instance.setVisible('numTexts', true);
  } else {
    //incorrect
    ggb1.instance.setVisible('pic1', true);
  }
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"radiogroup":1,"separator":2,"button":1},"stage":"Learn","lessonInfo":"7 M2 TD L17 - Understanding Negative Dividends","teacherView":false,"layout":"two col"}
*/
