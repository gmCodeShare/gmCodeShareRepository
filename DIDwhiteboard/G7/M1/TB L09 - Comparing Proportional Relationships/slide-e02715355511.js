const {
  textDisplay85,
  textDisplay86,
  image1,
  image2,
  buttonGroup3,
} = components;

slide.on('firstload', () => {
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
  image2.updateData({ visible: false });
  image1.updateData({ visible: true });
});

buttonGroup3.on('click:1', () => {
  image2.updateData({ visible: true });
  image1.updateData({ visible: false });
  buttonGroup3.updateSingleButton({ disabled: true }, 1);
  buttonGroup3.updateSingleButton({ disabled: false }, 2);
});

buttonGroup3.on('click:2', () => {
  image2.updateData({ visible: false });
  image1.updateData({ visible: true });
  buttonGroup3.updateSingleButton({ disabled: false }, 1);
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":2,"bynder-image":2,"buttongroup":1},"stage":"Launch","lessonInfo":"7 M1 TB L09 - Comparing Proportional Relationships​","teacherView":true,"layout":"T layout"}
*/
