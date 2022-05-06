const { image1, table1, ggb1, feedback } = components;

autorun(() => {
  let Number1 = table1.getCell(0, 4).value;
  ggb1.instance.setValue('number1', Number1);
  let Number2 = table1.getCell(1, 4).value;
  ggb1.instance.setValue('number2', Number2);
  let Number3 = table1.getCell(2, 4).value;
  ggb1.instance.setValue('number3', Number3);
});

/*
{"compTotals":{"uploaded-image":1,"table":1,"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M2 TE L17 - PA Partial Quotients","teacherView":false,"layout":"T layout"}
*/
