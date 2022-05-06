const {
  textDisplay46,
  textDisplay1,
  textDisplay3,
  textDisplay2,
  textDisplay4,
  buttonGroup3,
} = components;

slide.on('firstload', () => {
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: false });
  textDisplay1.updateData({ visible: true });
  textDisplay2.updateData({ visible: true });
});
buttonGroup3.on('click:1', () => {
  textDisplay1.updateData({ visible: false });
  textDisplay2.updateData({ visible: false });
  textDisplay3.updateData({ visible: true });
  textDisplay4.updateData({ visible: true });
  buttonGroup3.updateSingleButton({ disabled: true }, 1);
  buttonGroup3.updateSingleButton({ disabled: false }, 2);
});
buttonGroup3.on('click:2', () => {
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: false });
  textDisplay1.updateData({ visible: true });
  textDisplay2.updateData({ visible: true });
  buttonGroup3.updateSingleButton({ disabled: false }, 1);
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":5,"buttongroup":1},"stage":"Launch","lessonInfo":"6 M4 TB L11 - Modeling Real-Life Situations and Expressions","teacherView":true,"layout":"T layout"}
*/
