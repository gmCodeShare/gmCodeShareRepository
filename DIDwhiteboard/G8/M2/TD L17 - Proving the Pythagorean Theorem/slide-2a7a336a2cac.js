const { ggb3, feedback1, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb3.instance.setErrorDialogsActive(false);

autorun(() => {
  let sliderA = ggb3.innerData['a'];
  ggb1.instance.setValue('a', sliderA);
  let sliderB = ggb3.innerData['b'];
  ggb1.instance.setValue('b', sliderB);
});

/*
{"compTotals":{"geogebra":2,"textbox":1},"stage":"Land","lessonInfo":"8 M2 TD L17 - Proving the Pythagorean Theorem","teacherView":true,"layout":"two col"}
*/
