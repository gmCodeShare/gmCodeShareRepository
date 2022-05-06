const {
  text1,
  feedback1,
  cc_submit_e72856df636b_textbox1: submitText1,
  cc_submit_e72856df636b_input1: submitInput1,
  cc_submit_e72856df636b_button1: submitButton1,
  separator2,
  cc_submit_d432261553a7_textbox1: submitText2,
  cc_submit_d432261553a7_input1: submitInput2,
  cc_submit_d432261553a7_button1: submitButton2,
  separator3,
  cc_submit_057b2dc1b016_textbox1: submitText3,
  cc_submit_057b2dc1b016_input1: submitInput3,
  cc_submit_057b2dc1b016_button1: submitButton3,
} = components;

slide.on('firstload', () => {
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
  submitText3.updateData({ visible: false });
  submitInput3.updateData({ visible: false });
  submitButton3.updateData({ visible: false });
});

submitButton1.on('click', () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

submitButton2.on('click', () => {
  submitText3.updateData({ visible: true });
  submitInput3.updateData({ visible: true });
  submitButton3.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":2,"submit":3,"separator":2},"stage":"Learn","lessonInfo":"8 M4 TB L11 - Planning a Trip","teacherView":false,"layout":"two col"}
*/
