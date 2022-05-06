const { Textbox4, ggb1, feedback, ggb2, separator1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  // ggb1.instance.setValue("state", 1);
  ggb1.instance.setValue("state", 2);
});

inherit1(); // comment this line if we don't like stuff being brought forward
function inherit1() {
  const data1 = getFromSlide("slide-8aa464ffd805", "ggb1.innerData");
  // make sure stuff is defined
  if (!data1 || (!data1["tHori"] && data1["tHori"] != 0)) {
    return;
  }
  // only bring it forward if it was actually visible on the previous screen
  // could also check correctness: the correctness bools are called correct1, 2, and 3
  if (data1["showInput"]) {
    ggb1.instance.setValue("tHoriDummy1", data1["tHori"]);
    ggb1.instance.setValue("tVertDummy1", data1["tVert"]);
    ggb1.instance.setValue("tScalDummy1", data1["tScal"]);
    ggb1.instance.setValue("showDummy1", true);
  }
}

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
