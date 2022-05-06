const { ggb1, text1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

let time = ggb2.instance.getValue("time");

ggb2.instance.registerObjectUpdateListener("time", update);

function update() {
  ggb1.instance.setValue("time", ggb2.instance.getValue("time"));
  let num = ggb1.instance.getValue("time");
}

/*
{"compTotals":{"geogebra":2,"textbox":1},"stage":"Learn","lessonInfo":"8 M6 TE L22 - Print Alt: Volume of Cylinders","teacherView":true,"layout":"two col"}
*/
