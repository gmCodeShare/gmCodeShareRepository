const {
  textDisplay16,
  textDisplay71,
  image1,
  textDisplay2,
  textDisplay3,
  textDisplay82,
  image2,
  textDisplay4,
  textDisplay5,
  textDisplay39,
  image3,
  textDisplay8,
  textDisplay9,
  textDisplay142,
  separator3,
  image4,
  textDisplay6,
  textDisplay7,
  buttonGroup1,
} = components;

slide.on("firstload", () => {
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

buttonGroup1.on("click:1", () => {
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

buttonGroup1.on("click:2", () => {
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
{"compTotals":{"textbox":13,"bynder-image":4,"separator":1,"buttongroup":1},"stage":"Launch","lessonInfo":"8 M2 TC L13 - Print Alt: Angle Sum of a Triangle","teacherView":true,"layout":"T layout"}
*/
