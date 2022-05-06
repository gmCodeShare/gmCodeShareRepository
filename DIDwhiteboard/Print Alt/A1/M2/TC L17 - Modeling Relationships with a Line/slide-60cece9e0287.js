const { ggb1, feedback1, button1, separator1, text2 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
});

button1.on("click", () => {
  button1.updateData({ disabled: true });
  text2.updateData({ visible: true });
  ggb1.instance.setValue("showText", true);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1,"separator":1},"stage":"Learn","lessonInfo":"9 M2 TC L17 - Print Alt: Modeling Relationships with a Line","teacherView":true,"layout":"two col"}
*/
