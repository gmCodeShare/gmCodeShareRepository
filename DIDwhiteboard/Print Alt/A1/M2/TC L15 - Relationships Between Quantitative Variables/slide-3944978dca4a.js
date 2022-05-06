const { ggb1, ggb2, ggb3, separator1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb3.instance.setErrorDialogsActive(false);
ggb1.instance.setVisible("title", true);
ggb2.instance.setVisible("title", true);
ggb3.instance.setVisible("title", true);

slide.on("firstload", () => {
  ggb2.updateData({ visible: false });
  ggb3.updateData({ visible: false });
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
});

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
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(3, { disabled: false }, buttonGroup1);
  ggb1.updateData({ visible: true });
  ggb2.updateData({ visible: false });
  ggb3.updateData({ visible: false });
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(3, { disabled: false }, buttonGroup1);
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
  ggb3.updateData({ visible: false });
});

buttonGroup1.on("click:3", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(3, { disabled: true }, buttonGroup1);
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: false });
  ggb3.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":3,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M2 TC L15 - Print Alternate Slide Deck for Relationships Between Quantitative Variables","teacherView":true,"layout":"one col"}
*/
