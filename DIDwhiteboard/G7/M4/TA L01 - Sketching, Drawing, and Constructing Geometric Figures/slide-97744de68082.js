const {
  textDisplay22,
  textDisplay24,
  image28,
  textDisplay2,
  textDisplay3,
  textDisplay25,
  image29,
  textDisplay4,
  textDisplay5,
  textDisplay29,
  image30,
  textDisplay6,
  textDisplay7,
  textDisplay32,
  image31,
  textDisplay8,
  textDisplay9,
  buttonGroup1,
} = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  textDisplay2.updateData({ visible: true });
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: true });
  textDisplay5.updateData({ visible: false });
  textDisplay6.updateData({ visible: true });
  textDisplay7.updateData({ visible: false });
  textDisplay8.updateData({ visible: true });
  textDisplay9.updateData({ visible: false });
});

buttonGroup1.on('click:1', () => {
  textDisplay2.updateData({ visible: false });
  textDisplay3.updateData({ visible: true });
  textDisplay4.updateData({ visible: false });
  textDisplay5.updateData({ visible: true });
  textDisplay6.updateData({ visible: false });
  textDisplay7.updateData({ visible: true });
  textDisplay8.updateData({ visible: false });
  textDisplay9.updateData({ visible: true });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  textDisplay2.updateData({ visible: true });
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: true });
  textDisplay5.updateData({ visible: false });
  textDisplay6.updateData({ visible: true });
  textDisplay7.updateData({ visible: false });
  textDisplay8.updateData({ visible: true });
  textDisplay9.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":13,"bynder-image":4,"buttongroup":1},"stage":"Launch","lessonInfo":"7 M4 TA L01 - Sketching, Drawing, and Constructing Geometric Figures","teacherView":true,"layout":"T layout"}
*/
