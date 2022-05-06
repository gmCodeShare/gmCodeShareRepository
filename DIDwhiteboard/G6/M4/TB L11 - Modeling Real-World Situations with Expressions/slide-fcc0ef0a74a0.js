const {
  text1,
  cc_submit_5ec26cfc9e73_textbox1: submitText1,
  cc_submit_5ec26cfc9e73_input1: submitInput1,
  cc_submit_5ec26cfc9e73_button1: submitButton1,
  separator2,
  cc_submit_5a140a0a935d_textbox1: submitText2,
  cc_submit_5a140a0a935d_input1: submitInput2,
  cc_submit_5a140a0a935d_button1: submitButton2,
  feedback1,
} = components;

onInit();
function onInit() {
  if (!text1.data.init) {
    submitText2.updateData({ visible: false });
    submitInput2.updateData({ visible: false });
    submitButton2.updateData({ visible: false });
    text1.updateData({ init: true });
  }
}

submitButton1.on(`click`, () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":2,"submit":2,"separator":1},"stage":"Learn","lessonInfo":"6 M4 TB L11 - Modeling Real-Life Situations and Expressions","teacherView":false,"layout":"one col"}
*/
