const { textDisplay80, textDisplay1, textDisplay2, separator26, buttonGroup3 } =
  components;

slide.on('firstload', () => {
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
  textDisplay2.updateData({ visible: false });
  textDisplay1.updateData({ visible: true });
});
buttonGroup3.on('click:1', () => {
  textDisplay1.updateData({ visible: false });
  textDisplay2.updateData({ visible: true });
  buttonGroup3.updateSingleButton({ disabled: true }, 1);
  buttonGroup3.updateSingleButton({ disabled: false }, 2);
});
buttonGroup3.on('click:2', () => {
  textDisplay2.updateData({ visible: false });
  textDisplay1.updateData({ visible: true });
  buttonGroup3.updateSingleButton({ disabled: false }, 1);
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":3,"separator":1,"buttongroup":1},"stage":"Launch","lessonInfo":"7 M4 TB L08 - Print Alternate Slide Deck for Two Sides and One Angle","teacherView":true,"layout":"one col"}
*/
