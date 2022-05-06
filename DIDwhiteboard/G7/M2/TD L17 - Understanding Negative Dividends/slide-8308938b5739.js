const {
  ggb1,
  feedback,
  text1,
  select1,
  Separator1,
  text2,
  Separator2,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

text2.updateData({ align: 'center' });
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
  if (select1.data.selected == '0') {
    //size
    text2.updateData({ text: `$${size1}$` });
    button1.updateData({ visible: true, disabled: false });
  } else if (select1.data.selected == '1') {
    //num
    text2.updateData({ text: `$${num1}$` });
    button1.updateData({ visible: true, disabled: false });
  }
});

button1.on('click', () => {
  let num1 = ggb1.innerData['numDisplay01'];
  let num2 = ggb1.innerData['numDisplay1'];
  let size1 = ggb1.innerData['sizeDisplay02'];
  let size2 = ggb1.innerData['sizeDisplay2'];
  if (select1.data.selected == '0') {
    //size
    text2.updateData({ text: `$${size2}$` });
  } else if (select1.data.selected == '1') {
    //num
    text2.updateData({ text: `$${num2}$` });
  }
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"radiogroup":1,"separator":2,"button":1},"stage":"Launch","lessonInfo":"7 M2 TD L17 - Understanding Negative Dividends","teacherView":false,"layout":"two col"}
*/
