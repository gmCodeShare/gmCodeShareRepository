const {
  textDisplay16,
  textDisplay71,
  image2,
  image3,
  textDisplay8,
  textDisplay82,
  image4,
  image5,
  textDisplay4,
  textDisplay39,
  image6,
  image7,
  textDisplay9,
  textDisplay142,
  image8,
  image9,
  textDisplay6,
  buttonGroup1,
} = components;

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  image2.updateData({ visible: true });
  image3.updateData({ visible: false });
  image4.updateData({ visible: true });
  image5.updateData({ visible: false });
  image6.updateData({ visible: true });
  image7.updateData({ visible: false });
  image8.updateData({ visible: true });
  image9.updateData({ visible: false });
});

buttonGroup1.on("click:1", () => {
  image2.updateData({ visible: false });
  image3.updateData({ visible: true });
  image4.updateData({ visible: false });
  image5.updateData({ visible: true });
  image6.updateData({ visible: false });
  image7.updateData({ visible: true });
  image8.updateData({ visible: false });
  image9.updateData({ visible: true });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
  image2.updateData({ visible: true });
  image3.updateData({ visible: false });
  image4.updateData({ visible: true });
  image5.updateData({ visible: false });
  image6.updateData({ visible: true });
  image7.updateData({ visible: false });
  image8.updateData({ visible: true });
  image9.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":9,"uploaded-image":4,"bynder-image":4,"buttongroup":1},"stage":"Launch","lessonInfo":"9 M3 TB L07 - Exploring Key Features of a Function and Its Graph","teacherView":true,"layout":"T layout"}
*/
