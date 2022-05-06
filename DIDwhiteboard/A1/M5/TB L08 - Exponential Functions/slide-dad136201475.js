const {
  table1,
  feedback,
  cc_submit_92d827505d19_textbox1: submitText1,
  cc_submit_92d827505d19_input1: submitInput1,
  cc_submit_92d827505d19_button1: submitButton1,
  separator6,
  cc_sharewithclass_c99e47bbaadb_textbox1: shareText1,
  cc_sharewithclass_c99e47bbaadb_input1: shareInput1,
  cc_sharewithclass_c99e47bbaadb_button1: shareButton1,
  cc_sharewithclass_c99e47bbaadb_studentanswers1,
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
