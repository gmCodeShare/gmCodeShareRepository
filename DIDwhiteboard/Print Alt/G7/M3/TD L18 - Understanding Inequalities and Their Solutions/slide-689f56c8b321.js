const { textDisplay117, textDisplay1, textDisplay2, buttonGroup3 } = components;

slide.on('firstload', () => {
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
  textDisplay2.updateData({ visible: false });
  textDisplay1.updateData({ visible: true });
});
buttonGroup3.on('click:1', () => {
  textDisplay2.updateData({ visible: true });
  textDisplay1.updateData({ visible: false });
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
{"compTotals":{"textbox":3,"buttongroup":1},"stage":"Launch","lessonInfo":"7 M3 TD L18 - PA Understanding Inequalities and Their Solutions","teacherView":true,"layout":"one col"}
*/
