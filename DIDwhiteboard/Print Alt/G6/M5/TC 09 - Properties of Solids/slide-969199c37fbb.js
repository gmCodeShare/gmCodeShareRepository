const { ggb1, separator7, feedback1, select1 } = components;

ggb1.instance.setErrorDialogsActive(false);

select1.selectOption('0');

autorun(() => {
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setValue('AB', true);
  } else {
    ggb1.instance.setValue('AB', false);
  }
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setValue('BC', true);
  } else {
    ggb1.instance.setValue('BC', false);
  }
  if (select1.data.selected.includes('2')) {
    ggb1.instance.setValue('CD', true);
  } else {
    ggb1.instance.setValue('CD', false);
  }
  if (select1.data.selected.includes('3')) {
    ggb1.instance.setValue('AD', true);
  } else {
    ggb1.instance.setValue('AD', false);
  }
  if (select1.data.selected.includes('4')) {
    ggb1.instance.setValue('BF', true);
  } else {
    ggb1.instance.setValue('BF', false);
  }
  if (select1.data.selected.includes('5')) {
    ggb1.instance.setValue('DH', true);
  } else {
    ggb1.instance.setValue('DH', false);
  }
  if (select1.data.selected.includes('6')) {
    ggb1.instance.setValue('AE', true);
  } else {
    ggb1.instance.setValue('AE', false);
  }
  if (select1.data.selected.includes('7')) {
    ggb1.instance.setValue('HE', true);
  } else {
    ggb1.instance.setValue('HE', false);
  }
  if (select1.data.selected.includes('8')) {
    ggb1.instance.setValue('CG', true);
  } else {
    ggb1.instance.setValue('CG', false);
  }
  if (select1.data.selected.includes('9')) {
    ggb1.instance.setValue('GF', true);
  } else {
    ggb1.instance.setValue('GF', false);
  }
  if (select1.data.selected.includes('10')) {
    ggb1.instance.setValue('GH', true);
  } else {
    ggb1.instance.setValue('GH', false);
  }
  if (select1.data.selected.includes('11')) {
    ggb1.instance.setValue('EF', true);
  } else {
    ggb1.instance.setValue('EF', false);
  }
});

/*
{"compTotals":{"geogebra":1,"separator":1,"textbox":1,"select":1},"stage":"Learn","lessonInfo":"6 M5 TC L09 - Print Alternate Slide Deck for Properties of Solids","teacherView":true,"layout":"two col"}
*/
