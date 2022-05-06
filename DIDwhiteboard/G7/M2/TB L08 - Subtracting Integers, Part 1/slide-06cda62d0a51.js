const {
  cc_submit_c72a711560cb_textbox1,
  cc_submit_c72a711560cb_input1: submitInput1,
  cc_submit_c72a711560cb_button1: submitButton1,
  separator1,
  cc_sharewithclass_730221628244_textbox1: shareText1,
  cc_sharewithclass_730221628244_input1: shareInput1,
  cc_sharewithclass_730221628244_button1: shareButton1,
  cc_sharewithclass_730221628244_studentanswers1,
  feedback1,
} = components;

onInit();
function onInit() {
  if (!submitInput1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    submitInput1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"submit":1,"separator":1,"sharewithclass":1,"textbox":1},"stage":"Learn","lessonInfo":"7 M2 TB L08 - Subtracting Integers, Part 1","teacherView":false,"layout":"one col"}
*/
