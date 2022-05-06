const { textDisplay57, image8, image5, buttonGroup3 } = components;

slide.on('firstload', () => {
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
  image5.updateData({ visible: false });
  image8.updateData({ visible: true });
});
buttonGroup3.on('click:1', () => {
  image5.updateData({ visible: true });
  image8.updateData({ visible: false });
  buttonGroup3.updateSingleButton({ disabled: true }, 1);
  buttonGroup3.updateSingleButton({ disabled: false }, 2);
});
buttonGroup3.on('click:2', () => {
  image5.updateData({ visible: false });
  image8.updateData({ visible: true });
  buttonGroup3.updateSingleButton({ disabled: false }, 1);
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":1,"uploaded-image":2,"buttongroup":1},"stage":"Launch","lessonInfo":"6 M5 TA L01 - Print Alternate Slide Deck for The Area of a Parallelogram","teacherView":true,"layout":"one col"}
*/
