const {
  textDisplay16,
  textDisplay71,
  separator2,
  image1,
  textDisplay2,
  textDisplay3,
  textDisplay82,
  image2,
  textDisplay4,
  textDisplay5,
  textDisplay39,
  image3,
  textDisplay6,
  textDisplay7,
  textDisplay142,
  image4,
  textDisplay8,
  textDisplay9,
  textDisplay441,
  image6,
  textDisplay10,
  textDisplay11,
  textDisplay140,
  image5,
  textDisplay12,
  textDisplay13,
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
  textDisplay10.updateData({ visible: true });
  textDisplay11.updateData({ visible: false });
  textDisplay12.updateData({ visible: true });
  textDisplay13.updateData({ visible: false });
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
  textDisplay10.updateData({ visible: false });
  textDisplay11.updateData({ visible: true });
  textDisplay12.updateData({ visible: false });
  textDisplay13.updateData({ visible: true });
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
  textDisplay10.updateData({ visible: true });
  textDisplay11.updateData({ visible: false });
  textDisplay12.updateData({ visible: true });
  textDisplay13.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":19,"separator":1,"bynder-image":6,"buttongroup":1},"stage":"Launch","lessonInfo":"8 M1 TD L18 - The Pythagorean Theorem","teacherView":true,"layout":"T layout"}
*/
