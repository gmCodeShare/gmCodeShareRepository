const {
  textDisplay1,
  separator1,
  textDisplay2,
  image1,
  image2,
  separator2,
  buttonGroup1,
} = components;

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  image2.updateData({ visible: false });
  image1.updateData({ visible: true });
});
buttonGroup1.on("click:1", () => {
  image2.updateData({ visible: true });
  image1.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});
buttonGroup1.on("click:2", () => {
  image2.updateData({ visible: false });
  image1.updateData({ visible: true });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":2,"separator":2,"uploaded-image":2,"buttongroup":1},"stage":"Launch","lessonInfo":"8 M6 TC L11 - Print Alt: Scatter Plots","teacherView":true,"layout":"T layout"}
*/
