const { ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let desiredMult = 0.8;
ggb1.instance.setValue('platformPrintBBool', false);
ggb1.instance.setValue('platformPrintCBool', true);
ggb1.instance.setValue('platformModeBool', true);
ggb1.instance.setValue('outlineMult', desiredMult);
ggb1.instance.setValue('origDimensionsBool', true);
ggb1.instance.setValue('outlineBool', false);

autorun(() => {
  let time = ggb1.innerData['time'];
  let width = ggb1.innerData['scaleWidth'];
  let height = ggb1.innerData['scaleHeight'];
  ggb1.instance.setValue('imageOrigOutlineBool', false);
  ggb1.instance.setValue('outlineGreenBool', false);
  ggb1.instance.setValue('outlineRedBool', false);

  if (time > 0) {
    ggb1.instance.setValue('imageOrigOutlineBool', true);
  }
  if (time == 1 && ggb1.instance.getValue('multiplier') == desiredMult) {
    ggb1.instance.setValue('outlineBool', false);
    ggb1.instance.setValue('outlineGreenBool', true);
  } else if (time == 1 && ggb1.instance.getValue('multiplier') != desiredMult) {
    ggb1.instance.setValue('outlineBool', false);
    ggb1.instance.setValue('outlineRedBool', true);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"7 M5 TC L14 - Print Alternate Slide Deck fo Scale Factor—Percent Increase and Decrease","teacherView":true,"layout":"one col"}
*/
