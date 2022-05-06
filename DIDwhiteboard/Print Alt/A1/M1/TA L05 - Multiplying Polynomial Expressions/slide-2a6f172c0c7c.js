const {
  textDisplay1,
  separator1,
  textDisplay2,
  textDisplay3,
  textDisplay4,
  textDisplay5,
  buttonGroup1,
} = components;

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  textDisplay2.updateData({ visible: true });
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: true });
  textDisplay5.updateData({ visible: false });
});

buttonGroup1.on("click:1", () => {
  textDisplay2.updateData({ visible: false });
  textDisplay3.updateData({ visible: true });
  textDisplay4.updateData({ visible: false });
  textDisplay5.updateData({ visible: true });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
  textDisplay2.updateData({ visible: true });
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: true });
  textDisplay5.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":5,"separator":1,"buttongroup":1},"stage":"Launch","lessonInfo":"9 M1 TA L05 - PA Slide Deck Multiplying Polynomial Expressions","teacherView":true,"layout":"T layout"}
*/
