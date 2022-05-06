const { ggb1 } = components;

ggb1.instance.registerStoreUndoListener(snap);
function snap() {
  ggb1.updateData({ image: ggb1.instance.getPNGBase64(1, true, 300) });
}
snap();

/*
{"compTotals":{"geogebra":1},"stage":"Launch","lessonInfo":"6 M2 TE L17 - PA Partial Quotients","teacherView":false,"layout":"one col"}
*/
