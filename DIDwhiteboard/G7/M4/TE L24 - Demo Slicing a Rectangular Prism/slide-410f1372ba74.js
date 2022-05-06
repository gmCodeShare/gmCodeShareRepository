const {ggb1, ggb2, buttonGroup1} = components;

components.feedback1.updateData({visible: false});
ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
});

// ggb2.instance.registerObjectUpdateListener("time", update);

// function update(){
//   ggb1.instance.setValue("time", ggb2.instance.getValue("time"));
// }

const indexStartingInOne = 1;

function updateSingleButtonGroup(indexStartingInOne, data, buttonGroup1) {
   const newButtonGroupData = [];
   const bgButtons = buttonGroup1.data.buttons;
   const index = indexStartingInOne - 1;
   for (let i = 0; i < bgButtons.length; i++) {
      if (i === index) {
         newButtonGroupData[i] = { ...bgButtons[i], ...data  } // Merge the single button data with the respective button using the index
      } else {
         newButtonGroupData[i] = bgButtons[i]; // Every other button remain the same
      }
   }
   buttonGroup1.updateData({ buttons: newButtonGroupData }); // Run updateData over buttons prop
}

buttonGroup1.on('click:1', () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  ggb1.instance.setValue("showPlaneBool", true);
});

buttonGroup1.on('click:2', () => {
  updateSingleButtonGroup(1, { disabled: false}, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true}, buttonGroup1);
  ggb1.instance.setValue("showPlaneBool", false);
});