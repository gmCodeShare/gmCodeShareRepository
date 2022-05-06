const { ggb1, feedback1, text1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

button1.on('click', () => {
  ggb1.instance.setValue('AB', true);
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1},"stage":"Learn","lessonInfo":"6 M3 TD L15 - Distance in the Coordinate Plane","teacherView":true,"layout":"two col"}
*/
