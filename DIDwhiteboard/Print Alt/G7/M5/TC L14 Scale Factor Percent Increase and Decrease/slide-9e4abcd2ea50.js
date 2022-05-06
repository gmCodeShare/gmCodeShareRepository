const { ggb1, feedback1, text1, text2 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue('platformPrintABool', false);
ggb1.instance.setValue('platformPrintCBool', false);
ggb1.instance.setValue('origDimensionsBool', true);

autorun(() => {
  let time = ggb1.innerData['time'];
  let width = Math.round(ggb1.innerData['scaleWidth'] * 1000000) / 1000000;
  let height = ggb1.innerData['scaleHeight'];
  ggb1.instance.setValue('imageOrigOutlineBool', false);
  if (time > 0) {
    ggb1.instance.setValue('imageOrigOutlineBool', true);
  }
  if (time < 1) {
    text2.updateData({ text: '' });
  } else if (time == 1 && width > 3.5 && height < 8) {
    text2.updateData({ text: '#### Great!' });
  } else {
    text2.updateData({ text: '#### Keep trying!' });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3},"stage":"Launch","lessonInfo":"7 M5 TC L14 - Print Alternate Slide Deck fo Scale Factor—Percent Increase and Decrease","teacherView":true,"layout":"two col"}
*/
