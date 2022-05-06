const { textDisplay1, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('Dragger', () => {
  if (ggb1.instance.getValue('trailEnd')) {
    ggb1.instance.setValue('showHint', false);
    ggb1.instance.unregisterObjectUpdateListener('Dragger');
  }
});

/*
{"compTotals":{"textbox":1,"geogebra":1},"stage":"Learn","lessonInfo":"8 M1 TE L21 - Print Alt: Approximate Values of Roots and π²","teacherView":true,"layout":"one col"}
*/
