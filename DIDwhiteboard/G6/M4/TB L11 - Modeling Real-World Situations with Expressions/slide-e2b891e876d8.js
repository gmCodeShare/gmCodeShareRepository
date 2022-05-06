const {
  ggb1,
  feedback1,
  cc_submit_f86ea2c4ff91_textbox1: submitText1,
  cc_submit_f86ea2c4ff91_input1: submitInput1,
  cc_submit_f86ea2c4ff91_button1: submitButton1,
  cc_submit_33e3df6acfe7_textbox1: submitText2,
  cc_submit_33e3df6acfe7_input1: submitInput2,
  cc_submit_33e3df6acfe7_button1: submitButton2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    submitText2.updateData({ visible: false });
    submitInput2.updateData({ visible: false });
    submitButton2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":2},"stage":"Learn","lessonInfo":"6 M4 TB L11 - Modeling Real-Life Situations and Expressions","teacherView":false,"layout":"two col"}
*/
