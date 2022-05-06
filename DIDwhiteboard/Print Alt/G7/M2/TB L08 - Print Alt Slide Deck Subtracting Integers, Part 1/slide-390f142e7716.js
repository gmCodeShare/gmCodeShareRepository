const {
  textDisplay103,
  textDisplay104,
  image91,
  separator22,
  textDisplay1,
  textDisplay5,
  image92,
  separator23,
  textDisplay2,
  textDisplay6,
  textDisplay109,
  image93,
  separator24,
  textDisplay3,
  textDisplay7,
  image94,
  separator25,
  textDisplay4,
  textDisplay8,
  buttonGroup3,
} = components;

slide.on('firstload', () => {
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
  textDisplay1.updateData({ visible: false });
  textDisplay2.updateData({ visible: false });
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: false });
  textDisplay5.updateData({ visible: true });
  textDisplay6.updateData({ visible: true });
  textDisplay7.updateData({ visible: true });
  textDisplay8.updateData({ visible: true });
});
buttonGroup3.on('click:1', () => {
  textDisplay5.updateData({ visible: false });
  textDisplay6.updateData({ visible: false });
  textDisplay7.updateData({ visible: false });
  textDisplay8.updateData({ visible: false });
  textDisplay1.updateData({ visible: true });
  textDisplay2.updateData({ visible: true });
  textDisplay3.updateData({ visible: true });
  textDisplay4.updateData({ visible: true });
  buttonGroup3.updateSingleButton({ disabled: true }, 1);
  buttonGroup3.updateSingleButton({ disabled: false }, 2);
});
buttonGroup3.on('click:2', () => {
  textDisplay1.updateData({ visible: false });
  textDisplay2.updateData({ visible: false });
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: false });
  textDisplay5.updateData({ visible: true });
  textDisplay6.updateData({ visible: true });
  textDisplay7.updateData({ visible: true });
  textDisplay8.updateData({ visible: true });
  buttonGroup3.updateSingleButton({ disabled: false }, 1);
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":11,"bynder-image":4,"separator":4,"buttongroup":1},"stage":"Launch","lessonInfo":"7 M2 TB L08 - Print Alt Slide Deck Subtracting Integers, Part 1","teacherView":true,"layout":"T layout"}
*/
