const { text1, image1, table1, buttonGroup1, feedback1, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  table1.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  table1.updateData({ visible: true });
  image1.updateData({ visible: false });
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  table1.updateData({ visible: false });
  image1.updateData({ visible: true });
});

autorun(() => {
  let Number1 = table1.getCell(0, 4).value;
  ggb1.instance.setValue('number1', Number1);
  let Number2 = table1.getCell(1, 4).value;
  ggb1.instance.setValue('number2', Number2);
  let Number3 = table1.getCell(2, 4).value;
  ggb1.instance.setValue('number3', Number3);
});

/*
{"compTotals":{"textbox":2,"uploaded-image":1,"table":1,"buttongroup":1,"geogebra":1},"stage":"Learn","lessonInfo":"6 M2 TE L17 - Partial Quotients","teacherView":false,"layout":"T layout"}
*/
