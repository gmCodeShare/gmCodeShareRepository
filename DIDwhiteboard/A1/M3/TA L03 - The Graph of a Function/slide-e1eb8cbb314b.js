const { ggb1, separator1, buttonGroup1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setVisible("f", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

utils.RTS.on("datachange", "slide-3a98e4d3e8f3", (register) => {
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
  ggb1.instance.setVisible("f", true);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setVisible("f", false);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M3 TA L03 - The Graph of a Function","teacherView":true,"layout":"one col"}
*/
