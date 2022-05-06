const { ggb1 } = components;

slide.on("firstload", () => {
  ggb1.instance.setValue("time", 1);
  ggb1.instance.deleteObject("NewGreen");
  ggb1.instance.deleteObject("NewPurple");
  ggb1.instance.deleteObject("GreenHalo");
});

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener("count", labelStuff);

function labelStuff() {
  if (ggb1.instance.getValue("count") == 1) {
    ggb1.instance.setLabelVisible("eq1", false);
  } else {
    ggb1.instance.setLabelVisible("eq1", true);
  }
}

utils.RTS.on("datachange", "slide-1a0fd993032e", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("pointList={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const {
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      row1Total,
      row2Total,
      row3Total,
      a,
      b,
      c,
      d,
      e,
      f,
      total,
      total2,
      total3,
    } = data;
    if (total == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + a + "," + b + ")))"
      );
    }
    if (total2 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + c + "," + d + ")))"
      );
    }
    if (total3 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + e + "," + f + ")))"
      );
    }
    ggb1.instance.setVisible("pointList", true);
  });
});

// Retrieving information
utils.RTS.on("datachange", "slide-8e74cc3defa1", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("pointList2={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const {
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      row1Total,
      row2Total,
      row3Total,
      g,
      h,
      i,
      j,
      k,
      l,
      total4,
      total5,
      total6,
    } = data;
    if (total4 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + g + "," + h + ")))"
      );
    }
    if (total5 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + i + "," + j + ")))"
      );
    }
    if (total6 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + k + "," + l + ")))"
      );
    }
    ggb1.instance.setVisible("pointList2", true);
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
