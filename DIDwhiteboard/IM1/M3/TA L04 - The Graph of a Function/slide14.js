const { ggb1, ggb2, text1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

slide.on("firstload", () => {
  ggb1.instance.showToolBar(false);
  text1.updateData({ visible: false });
  ggb1.instance.setVisible("f_5", false);
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
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

utils.RTS.on("datachange", "slide-3b6db967be76", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  // the FLASH
  let allFlashPoints = ggb1.instance.getAllObjectNames("penstroke");
  for (let i = 0, L = allFlashPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(allFlashPoints[i]);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const sketches = data.myDoodles;
    for (let i = 0; i < sketches.length; i++) {
      let name = ggb1.instance.evalCommandGetLabels(sketches[i]);
      ggb1.instance.setFixed(name, false, false);
      ggb1.instance.setColor(name, 130, 63, 152);
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

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  text1.updateData({ visible: true });
  ggb1.instance.setVisible("f_5", true);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  text1.updateData({ visible: false });
  ggb1.instance.setVisible("f_5", false);
});
