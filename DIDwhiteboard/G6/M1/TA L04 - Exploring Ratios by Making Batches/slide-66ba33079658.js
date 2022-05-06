const { text1, text2, text3, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  text3.updateData({ visible: false });
  text2.updateData({ visible: true });
});

buttonGroup1.on('click:1', () => {
  text3.updateData({ visible: true });
  text2.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  text3.updateData({ visible: false });
  text2.updateData({ visible: true });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":3,"buttongroup":1},"stage":"Launch","lessonInfo":"6 M1 TA L04 - Exploring Ratios by Making Batches","teacherView":true,"layout":"one col"}
*/
