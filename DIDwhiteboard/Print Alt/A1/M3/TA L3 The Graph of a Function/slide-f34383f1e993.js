const { ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setMode(false);

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

const sketches3 =
  getFromSlide(`slide-a7b672b5dd25`, `ggb1.innerData.doodles2`, []) || [];
// console.log(sketches3);
for (let i = 0; i < sketches3.length; i++) {
  let name3 = ggb1.instance.evalCommandGetLabels(sketches3[i]);
  ggb1.instance.setFixed(name3, false, false);
  ggb1.instance.setColor(name3, 242, 106, 54);
  ggb1.instance.setLineThickness(name3, 6);
  //console.log(name);
}

/*
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M3 TA L03 - Print Alt Slide Deck for The Graph of a Function","teacherView":true,"layout":"one col"}
*/
