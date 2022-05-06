const { text1, ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

utils.RTS.on("datachange", "slide-4e211223633e", (register) => {
  if (!register || !register.length) {
    return;
  }

  // the FLASH
  let allPoints = ggb1.instance
    .getAllObjectNames("point")
    .filter((point) => !point.includes("IG"));
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(allPoints[i]);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { pointA, pointB, pointC, pointD } = data;
    newPointA = ggb1.instance.evalCommandGetLabels("(" + pointA + ")");
    newPointB = ggb1.instance.evalCommandGetLabels("(" + pointB + ")");
    newPointC = ggb1.instance.evalCommandGetLabels("(" + pointC + ")");
    newPointD = ggb1.instance.evalCommandGetLabels("(" + pointD + ")");
  });

  let newPoints = ggb1.instance.getAllObjectNames("point");
  let allValues = [];
  for (let i = 0, L = newPoints.length; i < L; i++) {
    ggb1.instance.setFixed(newPoints[i], false, false);
    styleIt(newPoints[i]);
    allValues.push(ggb1.instance.getXcoord(newPoints[i]));
    allValues.push(ggb1.instance.getYcoord(newPoints[i]));
  }

  let ggbMin = Math.min(...allValues);
  let ggbMax = Math.max(...allValues);

  if (ggbMin < -10) {
    ggb1.instance.setValue("min", ggbMin - 1);
  } else {
    ggb1.instance.setValue("min", -11);
  }

  if (ggbMax > 10) {
    ggb1.instance.setValue("max", ggbMax + 1);
  } else {
    ggb1.instance.setValue("max", 11);
  }

  ggb1.instance.setValue("showPoints", true);
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

function styleIt(a) {
  if (ggb1.instance.getObjectType(a) == "point") {
    if (
      ggb1.instance.getYcoord(a) ==
      ggb1.instance.getValue(
        "slide14AnswerLine(" + ggb1.instance.getXcoord(a) + ")"
      )
    ) {
      ggb1.instance.setColor(a, 0, 127, 175);
      ggb1.instance.setPointSize(a, 5);
      //ggb1.instance.evalCommand("Translate(picCheck,Vector((0,0)," + a + "))");
      //ggb1.instance.setVisible(a, false);
    } else {
      ggb1.instance.setColor(a, 218, 41, 28);
      ggb1.instance.setPointSize(a, 6);
      ggb1.instance.setPointStyle(a, 1);
    }
  }
}

/*
{"compTotals":{"textbox":2,"geogebra":1},"stage":"Learn","lessonInfo":"8 M4 TC L12 - Solutions to Linear Equations in Two Variables","teacherView":true,"layout":"one col"}
*/
