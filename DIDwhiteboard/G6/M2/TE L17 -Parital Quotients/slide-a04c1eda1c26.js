const {
  cc_submit_37b8f3baf592_textbox1: submitText1,
  cc_submit_37b8f3baf592_input1: submitInput1,
  cc_submit_37b8f3baf592_button1: submitButton1,
  separator3,
  cc_sharewithclass_99a6af1594b4_textbox1: shareText1,
  cc_sharewithclass_99a6af1594b4_input1: shareInput1,
  cc_sharewithclass_99a6af1594b4_button1: shareButton1,
  cc_sharewithclass_99a6af1594b4_studentanswers1,
  feedback1,
} = components;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"submit":1,"separator":1,"sharewithclass":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M2 TE L17 - Partial Quotients","teacherView":false,"layout":"one col"}
*/
