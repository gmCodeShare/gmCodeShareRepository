const { ggb1, feedback } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerStoreUndoListener(() => {
  ggb1.updateData({ save64: ggb1.instance.getBase64() });
});

/*
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"7 M5 TE L22 - Print Alternate Slide Deck for Making Mixtures","teacherView":true,"layout":"one col"}
*/
