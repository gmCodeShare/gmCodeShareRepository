const { Textbox4, ggb1, feedback, ggb2, separator1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("state", 1);
});

ggb2.instance.registerUpdateListener(() => {
  ggb1.instance.setValue("showInput", false);
  button1.updateData({ disabled: false });
});

button1.on("click", () => {
  ggb1.instance.setValue("tHori", ggb2.instance.getValue("tHori"));
  ggb1.instance.setValue("tVert", ggb2.instance.getValue("tVert"));
  ggb1.instance.setValue("tScal", ggb2.instance.getValue("tScal"));
  ggb1.instance.setValue("showInput", true);
  button1.updateData({ disabled: true });
});

/**
 * things to set in the platform:
showInput on button click
showDummy1 & 2 on subsequent slides
state on each slide
tHori, tVert, tScal (+Dummy1 & 2)
 */

/*
{"compTotals":{"textbox":2,"geogebra":2,"separator":1,"button":1},"stage":"Learn","lessonInfo":"9 M3 TD L18 - Exploring Transformations of the Graphs of Functions","teacherView":false,"layout":"T layout"}
*/
