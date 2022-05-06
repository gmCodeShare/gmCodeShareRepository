const {
  text1,
  ggb1,
  Separator1,
  button1,
  feedback,
  ggb2,
  Separator2,
  buttonGroup1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  button1.updateData({ disabled: true });
  initialPoints();
});

ggb2.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

function initialPoints() {
  let begin = ggb1.instance.getValue("start");
  for (let i = 0; i < begin; i++) {
    let newPoint = ggb1.instance.evalCommandGetLabels("(0,0)");
    ggb1.instance.setFixed(newPoint, false, false);
    ggb1.instance.setCaption(newPoint, "made");
    ggb1.instance.setCoords(
      newPoint,
      Math.random() * 44 - 22,
      Math.random() * 44 - 22
    );
    ggb1.instance.setColor(newPoint, 193, 159, 204);
  }
}

button1.on("click", () => {
  organize();
  button1.updateData({ disabled: true });
});

function organize() {
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let pointList = allPoints.filter(function (point) {
    return ggb1.instance.getCaption(point) == "made";
  });
  for (var i = 0, L = pointList.length; i < L; i++) {
    ggb1.instance.setCoords(
      pointList[i],
      (i % 44) - 22,
      Math.floor(i / 44) - 22
    );
  }
}

function more() {
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let pointList = allPoints.filter(function (point) {
    return ggb1.instance.getCaption(point) == "made";
  });
  for (let i = 0, L = pointList.length; i < L; i++) {
    ggb1.instance.setColor(pointList[i], 193, 159, 204);
  }

  ggb1.instance.setValue("gen", ggb1.instance.getValue("gen") + 1);
  let diff = ggb1.instance.getValue("points") - ggb1.instance.getValue("prev");
  ggb1.instance.evalCommand("SetActiveView(1)");
  for (let i = 0; i < diff; i++) {
    let newPoint = ggb1.instance.evalCommandGetLabels("(0,0)");
    ggb1.instance.setFixed(newPoint, false, false);
    ggb1.instance.setCaption(newPoint, "made");
    ggb1.instance.setCoords(
      newPoint,
      Math.random() * 44 - 22,
      Math.random() * 44 - 22
    );
    ggb1.instance.setColor(newPoint, 130, 63, 152);
  }
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  more();
  ggb2.instance.evalCommand("RunClickScript(inc)");
  if (ggb2.instance.getValue("gen") > 9) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    button1.updateData({ disabled: false });
  }
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  button1.updateData({ disabled: true });
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let madePoints = allPoints.filter(
    (point) => ggb1.instance.getCaption(point) == "made"
  );
  for (let i = 0, L = madePoints.length; i < L; i++) {
    ggb1.instance.deleteObject(madePoints[i]);
  }
  ggb1.instance.setValue("gen", 0);
  ggb2.instance.setValue("gen", 0);
  initialPoints();
});

/*
{"compTotals":{"textbox":2,"geogebra":2,"separator":2,"button":1,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M5 TC L16 - Exponential Growth","teacherView":false,"layout":"T layout"}
*/
