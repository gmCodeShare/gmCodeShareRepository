const { ggb1, text2, buttonGroup1 } = components;

ggb1.instance.setValue("state", 1);
ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setValue("showSquares", true);

slide.on("firstload", () => {
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
});

autorun(() => {
  let point = ggb1.innerData["LeftDragPoint"];
  let pointB = ggb1.innerData["RightDragPoint"];
  if (
    !ggb1.instance.getValue("show") &&
    ggb1.instance.getValue("sumOfSquares") < 7.8
  ) {
    text2.updateData({ text: `Yes! That is the smallest sum!` });
  }
  if (
    !ggb1.instance.getValue("show") &&
    ggb1.instance.getValue("sumOfSquares") > 7.8
  ) {
    text2.updateData({ text: `That is not the smallest sum. Try again.` });
  }
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
  ggb1.instance.setValue("show", false);
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb1.instance.setValue("show", true);
  text2.updateData({ text: `` });
});
