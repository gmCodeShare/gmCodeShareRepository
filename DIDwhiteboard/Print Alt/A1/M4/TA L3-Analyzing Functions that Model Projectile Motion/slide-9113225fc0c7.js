const { ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  setTableColor();
});

ggb1.instance.registerObjectUpdateListener("Point1", setTableColor);
ggb1.instance.registerObjectUpdateListener("Point2", setTableColor);

function setTableColor() {
  for (i = 0, L = ggb1.instance.getValue("pointListLength"); i <= L; i++) {
    ggb1.instance.setColor("xText" + (i + 1), 0, 0, 0);
    ggb1.instance.setColor("yText" + (i + 1), 0, 0, 0);
  }

  ggb1.instance.setColor(
    "xText" + ggb1.instance.getValue("point1Index"),
    218,
    41,
    28
  );
  ggb1.instance.setColor(
    "yText" + ggb1.instance.getValue("point1Index"),
    218,
    41,
    28
  );
  ggb1.instance.setColor(
    "xText" + ggb1.instance.getValue("point2Index"),
    218,
    41,
    28
  );
  ggb1.instance.setColor(
    "yText" + ggb1.instance.getValue("point2Index"),
    218,
    41,
    28
  );
}

/*
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M4 TA L03 - Print Alternate Side Deck for Analyzing Functions that Model Projectile Motion","teacherView":true,"layout":"one col"}
*/
