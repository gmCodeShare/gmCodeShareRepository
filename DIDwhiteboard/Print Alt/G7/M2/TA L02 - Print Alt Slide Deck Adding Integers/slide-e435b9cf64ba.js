const {
  textDisplay88,
  textDisplay89,
  separator16,
  textDisplay92,
  separator17,
  textDisplay95,
  separator20,
  textDisplay99,
  textDisplay1,
  textDisplay4,
  image1,
  textDisplay2,
  textDisplay5,
  image2,
  textDisplay3,
  textDisplay6,
  image3,
  textDisplay96,
  buttonGroup3,
} = components;

slide.on('firstload', () => {
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
  textDisplay1.updateData({ visible: false });
  textDisplay2.updateData({ visible: false });
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: true });
  textDisplay5.updateData({ visible: true });
  textDisplay6.updateData({ visible: true });
  image1.updateData({ visible: false });
  image2.updateData({ visible: false });
  image3.updateData({ visible: false });
  image1.updateData({ visibilityBehavior: 'hide' });
  image2.updateData({ visibilityBehavior: 'hide' });
  image3.updateData({ visibilityBehavior: 'hide' });
});
buttonGroup3.on('click:1', () => {
  textDisplay4.updateData({ visible: false });
  textDisplay5.updateData({ visible: false });
  textDisplay6.updateData({ visible: false });
  textDisplay1.updateData({ visible: true });
  textDisplay2.updateData({ visible: true });
  textDisplay3.updateData({ visible: true });
  image1.updateData({ visible: true });
  image2.updateData({ visible: true });
  image3.updateData({ visible: true });
  buttonGroup3.updateSingleButton({ disabled: true }, 1);
  buttonGroup3.updateSingleButton({ disabled: false }, 2);
});
buttonGroup3.on('click:2', () => {
  textDisplay1.updateData({ visible: false });
  textDisplay2.updateData({ visible: false });
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: true });
  textDisplay5.updateData({ visible: true });
  textDisplay6.updateData({ visible: true });
  image1.updateData({ visible: false });
  image2.updateData({ visible: false });
  image3.updateData({ visible: false });
  image1.updateData({ visibilityBehavior: 'hide' });
  image2.updateData({ visibilityBehavior: 'hide' });
  image3.updateData({ visibilityBehavior: 'hide' });
  buttonGroup3.updateSingleButton({ disabled: false }, 1);
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":12,"separator":3,"bynder-image":3,"buttongroup":1},"stage":"Launch","lessonInfo":"7 M2 TA L02 - Print Alt Slide Deck Adding Integers","teacherView":true,"layout":"T layout"}
*/
