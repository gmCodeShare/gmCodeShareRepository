const { ggb1, buttonGroup1 } = components;

components.feedback1.updateData({ visible: false });
ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(3, { disabled: true }, buttonGroup1);
});

ggb1.instance.registerObjectUpdateListener("time1", update);
ggb1.instance.registerObjectUpdateListener("time2", update);

function update() {
  if (ggb1.instance.getValue("time1") == 0) {
    updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(3, { disabled: true }, buttonGroup1);
  }
  if (ggb1.instance.getValue("time1") > 0) {
    updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(3, { disabled: false }, buttonGroup1);
  }
  if (
    ggb1.instance.getValue("time1") == 1 &&
    !ggb1.instance.getValue("time2") > 0
  ) {
    updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  } else {
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
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
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setAnimating("time1", false);
  ggb1.instance.setValue("time1", 0);
  ggb1.instance.setAnimating("time1", true);
  ggb1.instance.startAnimation();
  ggb1.instance.setValue("step1Pressed", true);
  ggb1.instance.evalCommand("ReadText(step1ButtonText)");
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb1.instance.setAnimating("time1", false);
  ggb1.instance.setValue("time1", 1);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setAnimating("time2", true);
  ggb1.instance.startAnimation();
  ggb1.instance.setValue("step1Pressed", false);
  ggb1.instance.setValue("step2Pressed", true);
  ggb1.instance.evalCommand("ReadText(step2ButtonText)");
});

buttonGroup1.on("click:3", () => {
  updateSingleButtonGroup(3, { disabled: true }, buttonGroup1);
  ggb1.instance.setAnimating("time1", false);
  ggb1.instance.setValue("time1", 0);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("step2Pressed", false);
  ggb1.instance.evalCommand("ReadText(status)");
});
