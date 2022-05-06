const {
  text1,
  ggb1,
  feedback1,
  text2,
  separator1,
  table1,
  separator2,
  cc_sharewithclass_826d22634aa1_textbox1: shareText1,
  cc_sharewithclass_826d22634aa1_input1: shareInput1,
  cc_sharewithclass_826d22634aa1_button1: shareButton1,
  cc_sharewithclass_826d22634aa1_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

autorun(() => {
  if (
    table1.getCell(0, 0).value !== '' &&
    table1.getCell(0, 1).value !== '' &&
    table1.getCell(0, 2).value !== ''
  ) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"textbox":3,"geogebra":1,"separator":2,"table":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TA L04 - Exploring Ratios by Making Batches","teacherView":false,"layout":"two col"}
*/
