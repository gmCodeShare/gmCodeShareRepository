const { ggb1, feedback1, text1, text2 } = components;

ggb1.instance.setErrorDialogsActive(false);

let desiredMult = 0.8;
ggb1.instance.setValue('platformPrintABool', false);
ggb1.instance.setValue('platformPrintBBool', false);
ggb1.instance.setValue('outlineMult', desiredMult);
ggb1.instance.setValue('origDimensionsBool', true);
ggb1.instance.setValue('outlineBool', true);

autorun(() => {
  let time = ggb1.innerData['time'];
  let multiplier = ggb1.innerData['multiplier'];
  ggb1.instance.setValue('imageOrigOutlineBool', false);
  if (time > 0) {
    ggb1.instance.setValue('imageOrigOutlineBool', true);
  }
  if (time < 1) {
    ggb1.instance.setValue('outlineGreenBool', false);
    ggb1.instance.setValue('outlineRedBool', false);
    ggb1.instance.setValue('outlineBool', true);
    text2.updateData({ text: '' });
  } else if (time == 1 && multiplier == desiredMult) {
    ggb1.instance.setValue('outlineBool', false);
    ggb1.instance.setValue('outlineGreenBool', true);
    text2.updateData({ text: 'Great!' });
  } else if (time == 1 && multiplier != desiredMult) {
    ggb1.instance.setValue('outlineBool', false);
    ggb1.instance.setValue('outlineRedBool', true);
    text2.updateData({ text: 'Keep trying!' });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3},"stage":"Learn","lessonInfo":"7 M5 TC L14 - Scale Factor—Percent Increase and Decrease","teacherView":false,"layout":"two col"}
*/
