const {
  cc_submit_693e6045a57a_textbox1,
  cc_submit_693e6045a57a_input1: submitInput1,
  cc_submit_693e6045a57a_button1: submitButton1,
  separator2,
  cc_submit_d48697f0e721_textbox1: submitText2,
  cc_submit_d48697f0e721_input1: submitInput2,
  cc_submit_d48697f0e721_button1: submitButton2,
  separator3,
  cc_sharewithclass_4bd8959226d1_textbox1: shareText1,
  cc_sharewithclass_4bd8959226d1_input1: shareInput1,
  cc_sharewithclass_4bd8959226d1_button1: shareButton1,
  cc_sharewithclass_4bd8959226d1_studentanswers1,
  feedback1,
} = components;

onInit();
function onInit() {
  if (!submitInput1.data.init) {
    submitText2.updateData({ visible: false });
    submitInput2.updateData({ visible: false });
    submitButton2.updateData({ visible: false });
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    submitInput1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

submitButton2.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"submit":2,"separator":2,"sharewithclass":1,"textbox":1},"stage":"Learn","lessonInfo":"7 M2 TB L08 - Subtracting Integers, Part 1","teacherView":false,"layout":"one col"}
*/
