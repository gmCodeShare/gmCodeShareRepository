const { ggb1, feedback1, buttonGroup1 } = components;

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setVisible("studentImage", false);
  ggb1.instance.setVisible("StudentAIG", false);
  ggb1.instance.setVisible("StudentBIG", false);
  ggb1.instance.setVisible("StudentCIG", false);
  ggb1.instance.setVisible("StudentDIG", false);
});

ggb1.instance.setErrorDialogsActive(false);

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  ggb1.instance.setValue("revealButtonClicked", true);
  ggb1.instance.evalCommand(`ReadText(revealButtonText)`);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setValue("revealButtonClicked", false);
  ggb1.instance.evalCommand(`ReadText(AAppletStatus)`);
});

utils.RTS.on("datachange", "slide-c629aced8c39", (register) => {
  if (!register || !register.length) {
    return;
  }
  let allPoints = ggb1.instance
    .getAllObjectNames("point")
    .filter((point) => !point.includes("IG"));
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(allPoints[i]);
  }
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { x1, y1, x2, y2, x3, y3, x4, y4 } = data;
    newPointA = ggb1.instance.evalCommandGetLabels("(" + x1 + "," + y1 + ")");
    newPointB = ggb1.instance.evalCommandGetLabels("(" + x2 + "," + y2 + ")");
    newPointC = ggb1.instance.evalCommandGetLabels("(" + x3 + "," + y3 + ")");
    newPointD = ggb1.instance.evalCommandGetLabels("(" + x4 + "," + y4 + ")");
    newPoly = ggb1.instance.evalCommandGetLabels(
      "Polygon({" +
        newPointA +
        "," +
        newPointB +
        "," +
        newPointC +
        "," +
        newPointD +
        "})"
    );
    ggb1.instance.setFixed(newPoly, false, false);
    ggb1.instance.setLayer(newPoly, 0);
    ggb1.instance.setColor(newPoly, 148, 148, 148);
    ggb1.instance.setColor(newPointA, 148, 148, 148);
    ggb1.instance.setFixed(newPointA, false, false);
    ggb1.instance.setColor(newPointB, 148, 148, 148);
    ggb1.instance.setFixed(newPointB, false, false);
    ggb1.instance.setColor(newPointC, 148, 148, 148);
    ggb1.instance.setFixed(newPointC, false, false);
    ggb1.instance.setColor(newPointD, 148, 148, 148);
    ggb1.instance.setFixed(newPointD, false, false);
    ggb1.instance.setPointSize(newPointA, 4);
    ggb1.instance.setPointSize(newPointB, 4);
    ggb1.instance.setPointSize(newPointC, 4);
    ggb1.instance.setPointSize(newPointD, 4);
    ggb1.instance.setLayer(newPointA, 0);
    ggb1.instance.setLayer(newPointB, 0);
    ggb1.instance.setLayer(newPointC, 0);
    ggb1.instance.setLayer(newPointD, 0);
  });
});

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":true,"layout":"two col"}
*/
