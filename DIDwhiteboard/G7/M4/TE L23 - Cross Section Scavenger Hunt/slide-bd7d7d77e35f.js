const {
  textDisplay120,
  image107,
  separator27,
  textDisplay122,
  textDisplay1,
  textDisplay3,
  textDisplay2,
  textDisplay4,
  buttonGroup3,
} = components;

slide.on('firstload', () => {
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: false });
  textDisplay1.updateData({ visible: true });
  textDisplay2.updateData({ visible: true });
});
buttonGroup3.on('click:1', () => {
  textDisplay1.updateData({ visible: false });
  textDisplay2.updateData({ visible: false });
  textDisplay3.updateData({ visible: true });
  textDisplay4.updateData({ visible: true });
  buttonGroup3.updateSingleButton({ disabled: true }, 1);
  buttonGroup3.updateSingleButton({ disabled: false }, 2);
});
buttonGroup3.on('click:2', () => {
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: false });
  textDisplay1.updateData({ visible: true });
  textDisplay2.updateData({ visible: true });
  buttonGroup3.updateSingleButton({ disabled: false }, 1);
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":6,"bynder-image":1,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"7 M4 TE L23 - Cross Section Scavenger Hunt","teacherView":true,"layout":"T layout"}
*/
