const {
  cc_submit_3d205f62814e_textbox1,
  cc_submit_3d205f62814e_input1,
  cc_submit_3d205f62814e_button1: submitButton1,
  separator1,
  cc_sharewithclass_5fbd124f1a68_textbox1: shareText1,
  cc_sharewithclass_5fbd124f1a68_input1: shareInput1,
  cc_sharewithclass_5fbd124f1a68_button1: shareButton1,
  cc_sharewithclass_5fbd124f1a68_studentanswers1,
  feedback1,
} = components;

slide.on('firstload', () => {
  // set initial states
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
{"compTotals":{"submit":1,"separator":1,"sharewithclass":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M2 TF L24 - Living on Mars","teacherView":false,"layout":"one col"}
*/
