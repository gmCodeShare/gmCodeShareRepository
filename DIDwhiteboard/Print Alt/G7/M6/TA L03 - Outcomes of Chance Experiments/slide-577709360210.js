const { ggb1, separator1, button2 } = components;

ggb1.instance.setErrorDialogsActive(false);

button2.on('click', () => {
  ggb1.instance.reset();
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1},"stage":"Launch","lessonInfo":"7 M6 TA L03 - Print Alt: Outcomes of Chance Experiments","teacherView":true,"layout":"one col"}
*/
