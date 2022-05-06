const { ggb1, feedback, separator3, button1 } = components;

components.feedback.updateData({ visible: false });

button1.on('click', () => {
  ggb1.instance.setValue('AB', true);
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"separator":1,"button":1},"stage":"Learn","lessonInfo":"6 M3 TD L15 - PA Distance in the Coordinate Plane","teacherView":true,"layout":"one col"}
*/
