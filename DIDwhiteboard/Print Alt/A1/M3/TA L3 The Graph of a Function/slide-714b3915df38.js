const { ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.showToolBar(false);

  ggb1.instance.setVisible("f_5", false);
});
ggb1.instance.setVisible("Point1", false);
ggb1.instance.setVisible("Point2", false);
ggb1.instance.setVisible("Point3", false);
ggb1.instance.setVisible("Point4", false);
ggb1.instance.setVisible("Point5", false);
ggb1.instance.setVisible("Point6", false);
ggb1.instance.setVisible("Point7", false);
ggb1.instance.setVisible("Point8", false);
ggb1.instance.setVisible("Point9", false);
ggb1.instance.setVisible("Point10", false);
ggb1.instance.setVisible("Point11", false);
ggb1.instance.setVisible("Point12", false);
ggb1.instance.setVisible("Point13", false);
ggb1.instance.setVisible("Point14", false);
ggb1.instance.setVisible("Point15", false);
ggb1.instance.setVisible("Point16", false);
ggb1.instance.setVisible("Point17", false);
ggb1.instance.setVisible("Point18", false);
ggb1.instance.setVisible("Point19", false);
ggb1.instance.setVisible("Point20", false);
ggb1.instance.setVisible("Point21", false);
const sketches2 =
  getFromSlide(`slide-3b6db967be76`, `ggb1.innerData.doodles2`, []) || [];
// console.log(sketches2);
for (let i = 0; i < sketches2.length; i++) {
  let name2 = ggb1.instance.evalCommandGetLabels(sketches2[i]);
  ggb1.instance.setFixed(name2, false, false);
  ggb1.instance.setColor(name2, 242, 106, 54);
  ggb1.instance.setLineThickness(name2, 6);
  //console.log(name);
}

/*
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M3 TA L03 - Print Alt Slide Deck for The Graph of a Function","teacherView":true,"layout":"one col"}
*/
