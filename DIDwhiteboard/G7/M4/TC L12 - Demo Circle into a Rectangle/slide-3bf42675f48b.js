const { ggb1, buttonGroup1 } = components;

components.feedback1.updateData({ visible: false });
ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(3, { disabled: true }, buttonGroup1);
});

ggb1.instance.registerObjectUpdateListener("clickCount", update);

function update() {
  if (ggb1.instance.getValue("clickCount") > 0) {
    updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(3, { disabled: false }, buttonGroup1);
  }
  if (ggb1.instance.getValue("clickCount") == 0) {
    updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(3, { disabled: true }, buttonGroup1);
  }
  if (
    ggb1.instance.getValue("clickCount") > 1 &&
    ggb1.instance.getValue("time") == 0
  ) {
    updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  }
  if (ggb1.instance.getValue("clickCount") >= 6) {
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  }
}

ggb1.instance.registerObjectUpdateListener("time", update2);

function update2() {
  if (
    ggb1.instance.getValue("time") > 0 &&
    ggb1.instance.getValue("time") < 1
  ) {
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  }
  if (
    ggb1.instance.getValue("time") == 1 &&
    ggb1.instance.getValue("clickCount") < 6
  ) {
    updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  }
}

const indexStartingInOne = 1;

function updateSingleButtonGroup(indexStartingInOne, data, buttonGroup1) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroup1.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data }; // Merge the single button data with the respective button using the index
    } else {
      newButtonGroupData[i] = bgButtons[i]; // Every other button remain the same
    }
  }
  buttonGroup1.updateData({ buttons: newButtonGroupData }); // Run updateData over buttons prop
}

buttonGroup1.on("click:1", () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  ggb1.instance.setValue(
    "clickCount",
    ggb1.instance.getValue("clickCount") + 1
  );
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  ggb1.instance.setValue("flag", false);
  ggb1.instance.evalCommand(
    `ReadText("The circle unwinds to form a segment on the number line that is the length of the circles circumference. The segment starts at 0 and ends slightly to the right of 3.")`
  );
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.setValue(
    "clickCount",
    ggb1.instance.getValue("clickCount") + 1
  );
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  switch (ggb1.instance.getValue("clickCount")) {
    case 2:
      ggb1.instance.evalCommand(
        `ReadText("The number line zooms in to show intervals of 0.2. The segment starts at 0 and ends over halfway between 3 and 3.2. ")`
      );
      break;
    case 3:
      ggb1.instance.evalCommand(
        `ReadText("The number line zooms in to show intervals of 0.02. The segment starts at 0 and ends slightly to the right of 3.14. ")`
      );
      break;
    case 4:
      ggb1.instance.evalCommand(
        `ReadText("The number line zooms in to show intervals of 0.002. The segment starts at 0 and ends slightly to the left of 3.142. ")`
      );
      break;
    case 5:
      ggb1.instance.evalCommand(
        `ReadText("The number line zooms in to show intervals of 0.0002. The segment starts at 0 and ends very slightly to the left of 3.1416.")`
      );
      break;
    case 6:
      ggb1.instance.evalCommand(
        `ReadText("The number line zooms in to show intervals of 0.00002. The segment starts at 0 and ends just over halfway between 3.14158 and 3.1416. ")`
      );
      break;
  }
});

buttonGroup1.on("click:3", () => {
  updateSingleButtonGroup(3, { disabled: true }, buttonGroup1);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("clickCount", 0);
  ggb1.instance.evalCommand(`ReadText(AAppletStatus)`);
});
