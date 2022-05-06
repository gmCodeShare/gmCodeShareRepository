const {
  text1,
  cc_submit_6b43abd45a0a_textbox1: submitText1,
  cc_submit_6b43abd45a0a_input1: submitInput1,
  cc_submit_6b43abd45a0a_button1: submitButton1,
  separator2,
  cc_sharewithclass_326dc01deb14_textbox1: shareText1,
  cc_sharewithclass_326dc01deb14_input1: shareInput1,
  cc_sharewithclass_326dc01deb14_button1: shareButton1,
  cc_sharewithclass_326dc01deb14_studentanswers1,
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
{"compTotals":{"textbox":2,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M2 TE L17 - Partial Quotients","teacherView":false,"layout":"one col"}
*/
