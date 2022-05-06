const { ggb1, table1 } = components;

ggb1.instance.setErrorDialogsActive(false);

if (!ggb1.data.init) {
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  ggb1.updateData({ init: true });
}

/*
{"compTotals":{"geogebra":1,"table":1},"stage":"Launch","lessonInfo":"6 M6 TA L04 - Print Alt: Creating a Histogram","teacherView":true,"layout":"two col"}
*/
