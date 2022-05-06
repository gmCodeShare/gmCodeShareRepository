const {
  ggb1,
  feedback1,
  cc_submit_d9c6921e056a_textbox1,
  cc_submit_d9c6921e056a_input1,
  cc_submit_d9c6921e056a_button1: submitButton2,
  separator1,
  cc_submit_b3b20554e17b_textbox1: submitText1,
  cc_submit_b3b20554e17b_input1: submitInput1,
  cc_submit_b3b20554e17b_button1: submitButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    submitText1.updateData({ visible: false });
    submitInput1.updateData({ visible: false });
    submitButton1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

submitButton2.on('click', () => {
  submitText1.updateData({ visible: true });
  submitInput1.updateData({ visible: true });
  submitButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":2,"separator":1},"stage":"Learn","lessonInfo":"6 M3 TA L02 - Integers","teacherView":false,"layout":"two col"}
*/
