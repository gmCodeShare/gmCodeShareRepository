const { textDisplay80, textDisplay3, textDisplay1, buttonGroup3 } = components;

slide.on('firstload', () => {
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
  textDisplay3.updateData({ visible: false });
  textDisplay1.updateData({ visible: true });
});
buttonGroup3.on('click:1', () => {
  textDisplay1.updateData({ visible: false });

  textDisplay3.updateData({ visible: true });

  buttonGroup3.updateSingleButton({ disabled: true }, 1);
  buttonGroup3.updateSingleButton({ disabled: false }, 2);
});
buttonGroup3.on('click:2', () => {
  textDisplay3.updateData({ visible: false });

  textDisplay1.updateData({ visible: true });

  buttonGroup3.updateSingleButton({ disabled: false }, 1);
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":3,"buttongroup":1},"stage":"Launch","lessonInfo":"7 M4 TC L15 - Print Alternate Slide Deck for Watering a Lawn","teacherView":true,"layout":"one col"}
*/
