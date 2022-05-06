const { ggb1, feedback1, ggb2, text3 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb2.instance.registerObjectUpdateListener('ratio', updateRight);

function updateRight() {
  ggb1.instance.setValue('ratio', ggb2.instance.getValue('ratio'));
  let ratio = ggb2.instance.getValue('ratio');
  text3.updateData({ text: `#### $t=${ratio}n$` });
}

/*
{"compTotals":{"geogebra":2,"textbox":2},"stage":"Learn","lessonInfo":"6 M4 TE L23 - Print Alt Slide Deck Graphs of Ratio Relationships","teacherView":true,"layout":"two col"}
*/
