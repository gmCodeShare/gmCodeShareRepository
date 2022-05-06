const { buttonGroup1, ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
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
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0.1);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0.1);
});

/*ggb1.instance.registerObjectUpdateListener("time", update);

function update(){
  if(ggb1.instance.getValue("time") == 1){
    text1.updateData({visible: true});
    input1.updateData({visible: true});  
    button2.updateData({visible: true});  
  }
 }*/

/*
{"compTotals":{"buttongroup":1,"geogebra":1,"textbox":1},"stage":"Launch","lessonInfo":"9 M4 TD L23 - Print Alternate Slide Deck for  Creating Equations of Quadratic Functions to Model Contexts","teacherView":true,"layout":"one col"}
*/
