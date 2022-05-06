const {
  textDisplay16,
  textDisplay71,
  image1,
  textDisplay2,
  textDisplay3,
  textDisplay39,
  image3,
  textDisplay4,
  textDisplay5,
  buttonGroup1,
} = components;

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  textDisplay2.updateData({ visible: true });
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: true });
  textDisplay5.updateData({ visible: false });
});

buttonGroup1.on("click:1", () => {
  textDisplay2.updateData({ visible: false });
  textDisplay3.updateData({ visible: true });
  textDisplay4.updateData({ visible: false });
  textDisplay5.updateData({ visible: true });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
  textDisplay2.updateData({ visible: true });
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: true });
  textDisplay5.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":7,"bynder-image":2,"buttongroup":1},"stage":"Launch","lessonInfo":"9 M3 TD L18 - Print Alternate Slide Deck for Exploring Transformations of the Graphs of Functions","teacherView":true,"layout":"T layout"}
*/
