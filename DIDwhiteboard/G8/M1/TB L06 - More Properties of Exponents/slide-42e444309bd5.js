const { textDisplay21, textDisplay2, textDisplay3, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  textDisplay2.updateData({ visible: true });
  textDisplay3.updateData({ visible: false });
});

buttonGroup1.on('click:1', () => {
  textDisplay2.updateData({ visible: false });
  textDisplay3.updateData({ visible: true });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  textDisplay2.updateData({ visible: true });
  textDisplay3.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":3,"buttongroup":1},"stage":"Launch","lessonInfo":"8 M1 TB L06 - More Properties of Exponents","teacherView":true,"layout":"one col"}
*/
