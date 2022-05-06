const {
  table3,
  feedback,
  cc_submit_50da1d26e41c_textbox1: submitText1,
  cc_submit_50da1d26e41c_input1: submitInput1,
  cc_submit_50da1d26e41c_button1: submitButton1,
  separator5,
  cc_sharewithclass_58546e8dab0e_textbox1: shareText1,
  cc_sharewithclass_58546e8dab0e_input1: shareInput1,
  cc_sharewithclass_58546e8dab0e_button1: shareButton1,
  cc_sharewithclass_58546e8dab0e_studentanswers1,
} = components;

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"table":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TB L08 - Exponential Functions","teacherView":false,"layout":"two col"}
*/
