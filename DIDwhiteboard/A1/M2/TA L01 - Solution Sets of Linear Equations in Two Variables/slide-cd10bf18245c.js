const {
  textDisplay5,
  separator6,
  textDisplay1,
  textDisplay2,
  textDisplay3,
  textDisplay4,
  separator5,
  buttonGroup1,
} = components;

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  textDisplay5.updateData({ visible: true });
  textDisplay1.updateData({ visible: true });
  textDisplay3.updateData({ visible: true });
  textDisplay2.updateData({ visible: false });
  textDisplay4.updateData({ visible: false });
});
buttonGroup1.on("click:1", () => {
  textDisplay5.updateData({ visible: true });
  textDisplay1.updateData({ visible: false });
  textDisplay3.updateData({ visible: false });
  textDisplay2.updateData({ visible: true });
  textDisplay4.updateData({ visible: true });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});
buttonGroup1.on("click:2", () => {
  textDisplay5.updateData({ visible: true });
  textDisplay1.updateData({ visible: true });
  textDisplay3.updateData({ visible: true });
  textDisplay2.updateData({ visible: false });
  textDisplay4.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":5,"separator":2,"buttongroup":1},"stage":"Launch","lessonInfo":"9 M2 TA L01 - Solution Sets of Linear Equations in Two Variables","teacherView":true,"layout":"T layout"}
*/
