const { ggb1, separator1, button2, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue('AB', false);

button2.on('click', () => {
  ggb1.instance.reset();
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M5 TC L09 - Print Alternate Slide Deck for Properties of Solids","teacherView":true,"layout":"one col"}
*/
