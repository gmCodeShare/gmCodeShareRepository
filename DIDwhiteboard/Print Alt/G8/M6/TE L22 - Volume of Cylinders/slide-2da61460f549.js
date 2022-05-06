const { ggb2, feedback1, ggb1, Separator2, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener("n", () => {
  updateRight();
  update();
});

function updateRight() {
  ggb2.instance.setValue("n", ggb1.instance.getValue("n"));
}

function update() {
  let n = ggb1.instance.getValue("n");
  //console.log(n);
  text1.updateData({ text: `Number of Sides of the Base: $${n}$` });
}

/*
{"compTotals":{"geogebra":2,"textbox":2,"separator":1},"stage":"Launch","lessonInfo":"8 M6 TE L22 - Print Alt: Volume of Cylinders","teacherView":true,"layout":"T layout"}
*/
