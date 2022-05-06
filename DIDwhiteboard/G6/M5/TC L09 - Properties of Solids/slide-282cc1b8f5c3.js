const {
  ggb1,
  separator10,
  button2,
  feedback1,
  text1,
  separator4,
  select1,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button1.updateData({ disabled: true, align: 'right' });
});

autorun(() => {
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setValue('ABCD', true);
  } else {
    ggb1.instance.setValue('ABCD', false);
  }
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setValue('ABFE', true);
  } else {
    ggb1.instance.setValue('ABFE', false);
  }
  if (select1.data.selected.includes('2')) {
    ggb1.instance.setValue('AEHD', true);
  } else {
    ggb1.instance.setValue('AEHD', false);
  }
  if (select1.data.selected.includes('3')) {
    ggb1.instance.setValue('CDHG', true);
  } else {
    ggb1.instance.setValue('CDHG', false);
  }
  if (select1.data.selected.includes('4')) {
    ggb1.instance.setValue('CBFG', true);
  } else {
    ggb1.instance.setValue('CBFG', false);
  }
  if (select1.data.selected.includes('5')) {
    ggb1.instance.setValue('GHFE', true);
  } else {
    ggb1.instance.setValue('GHFE', false);
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

select1.on('change', (selected) => {
  button1.updateData({ text: 'Submit', disabled: false });
});
button2.on('click', () => {
  ggb1.instance.reset();
  select1.unselectAll();
});

/*
{"compTotals":{"geogebra":1,"separator":2,"button":2,"textbox":2,"select":1},"stage":"Learn","lessonInfo":"6 M5 TC L09 - Properties of Solids","teacherView":false,"layout":"two col"}
*/
