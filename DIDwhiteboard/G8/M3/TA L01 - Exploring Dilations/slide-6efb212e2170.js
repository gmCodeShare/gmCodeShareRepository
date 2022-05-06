const {
  textDisplay16,
  textDisplay71,
  image1,
  separator2,
  textDisplay2,
  textDisplay3,
  textDisplay82,
  image2,
  separator23,
  textDisplay4,
  textDisplay5,
  textDisplay39,
  image3,
  separator5,
  separator1,
  textDisplay6,
  textDisplay7,
  separator3,
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
});

buttonGroup1.on('click:1', () => {
  textDisplay2.updateData({ visible: false });
  textDisplay3.updateData({ visible: true });
  textDisplay4.updateData({ visible: false });
  textDisplay5.updateData({ visible: true });
  textDisplay6.updateData({ visible: false });
  textDisplay7.updateData({ visible: true });
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
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":10,"bynder-image":3,"separator":5,"buttongroup":1},"stage":"Launch","lessonInfo":"8 M3 TA L01 - Exploring Dilations","teacherView":true,"layout":"T layout"}
*/
