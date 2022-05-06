const { ggb1, Textbox1, feedback } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerStoreUndoListener(() => {
  ggb1.updateData({ save64: ggb1.instance.getBase64() });
});

/*
{"compTotals":{"geogebra":1,"textbox":2},"stage":"Launch","lessonInfo":"7 M5 TE L22 - Making Mixtures","teacherView":false,"layout":"two col"}
*/
