const { ggb1, fib1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

const prev64 = getFromSlide("slide-1cba24759350", "ggb2.data.save64", "") || "";

if (prev64) {
  ggb1.instance.setBase64(prev64, configApp);
}

function configApp() {
  let allPenstrokes = ggb1.instance.getAllObjectNames("penstroke");
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let allLines = ggb1.instance.getAllObjectNames("line");
  for (let i = 0; i < allPoints.length; i++) {
    ggb1.instance.setFixed(allPoints[i], false, false);
  }
  for (let i = 0; i < allLines.length; i++) {
    ggb1.instance.setFixed(allLines[i], false, false);
  }
  for (let i = 0; i < allPenstrokes.length; i++) {
    ggb1.instance.setFixed(allPenstrokes[i], false, false);
  }
}

ggb1.instance.showToolBar(false);

slide.on("firstload", () => {
  button1.updateData({
    align: "right",
    disabled: "true",
  });
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});

utils.RTS.on("datachange", "slide-fd85e50c42c6", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("pointList={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { distance, remaining } = data;
    ggb1.instance.evalCommand(
      "SetValue(pointList,Append(pointList,(" +
        distance +
        "," +
        remaining +
        ")))"
    );
  });
  ggb1.instance.setVisible("pointList", true);
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
