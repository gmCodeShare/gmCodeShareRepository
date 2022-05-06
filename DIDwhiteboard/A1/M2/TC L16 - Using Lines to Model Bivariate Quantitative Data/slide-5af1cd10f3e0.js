const {
  ggb1,
  feedback1,
  cc_sharewithclass_60a014ef20fc_textbox1,
  cc_sharewithclass_60a014ef20fc_input1,
  cc_sharewithclass_60a014ef20fc_button1,
  cc_sharewithclass_60a014ef20fc_studentanswers1,
} = components;

ggb1.instance.setValue("state", 2);
ggb1.instance.deleteObject("text2");
ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setValue("fake", true);

utils.RTS.on("datachange", "slide-1c80a58b9dc4", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);
  const prefs = lastRegister[0];
  ggb1.instance.setValue("fake", !!prefs.data?.showProvided);
});

utils.RTS.on("datachange", "slide-71075d08f8a6", (register) => {
  if (!register || !register.length) {
    return;
  }

  let allPoints = ggb1.instance
    .getAllObjectNames("point")
    .filter((point) => !point.includes("I"));
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(allPoints[i]);
  }

  let allSegments = ggb1.instance.getAllObjectNames("segment");
  for (let i = 0, L = allSegments.length; i < L; i++) {
    ggb1.instance.deleteObject(allSegments[i]);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { pointA, pointB } = data;
    newPointA = ggb1.instance.evalCommandGetLabels("(" + pointA + ")");
    newPointB = ggb1.instance.evalCommandGetLabels("(" + pointB + ")");
    ggb1.instance.setVisible(newPointA, false);
    ggb1.instance.setVisible(newPointB, false);
    ggb1.instance.evalCommand("Segment(" + newPointA + ", " + newPointB + ")");
  });

  let newSegs = ggb1.instance.getAllObjectNames("segment");
  for (let i = 0, L = newSegs.length; i < L; i++) {
    ggb1.instance.setFixed(newSegs[i], false, false);
  }
});

utils.RTS.on("datachange", "slide-28a7788bcedd", (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("data={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { num, num2, num3, num4, num5, num6 } = data;
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num + "," + num2 + ")))"
    );
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num3 + "," + num4 + ")))"
    );
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num5 + "," + num6 + ")))"
    );
    /*ggb1.instance.setVisible('data', true);
    ggb1.instance.setValue('fake', false);*/

    if (ggb1.instance.getValue("maxX") > 2700) {
      ggb1.instance.setValue("xMax", ggb1.instance.getValue("maxX") + 500);
    } else {
      ggb1.instance.setValue("xMax", 2700);
    }
    if (ggb1.instance.getValue("maxY") > 430) {
      ggb1.instance.setValue("yMax", ggb1.instance.getValue("maxY") + 500);
    } else {
      ggb1.instance.setValue("yMax", 430);
    }
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
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TC L16 - Using Lines to Model Bivariate Quantitative Data","teacherView":false,"layout":"two col"}
*/
