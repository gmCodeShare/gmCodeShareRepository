const { ggb1, text1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

button1.on('click', animate);

function animate() {
  button1.updateData({ disabled: true });
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"button":1},"stage":"Learn","lessonInfo":"7 M6 TB L08 - Print Alt: Picking Blue","teacherView":true,"layout":"two col"}
*/
