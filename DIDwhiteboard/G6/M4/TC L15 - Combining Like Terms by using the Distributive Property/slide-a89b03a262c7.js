const {
  ggb1,
  feedback1,
  cc_submit_6b1b186b62e3_textbox1,
  cc_submit_6b1b186b62e3_input1,
  cc_submit_6b1b186b62e3_button1: submitButton1,
  cc_submit_e3d08b0187a5_textbox1: submitText2,
  cc_submit_e3d08b0187a5_input1: submitInput2,
  cc_submit_e3d08b0187a5_button1: submitButton2,
  text1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    submitText2.updateData({ visible: false });
    submitInput2.updateData({ visible: false });
    submitButton2.updateData({ visible: false });
    text1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

submitButton2.on('click', () => {
  text1.updateData({ visible: true });
  ggb1.instance.setValue('showProtractor', true);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":2},"stage":"Learn","lessonInfo":"6 M4 TC L15 - Combining Like Terms by using the Distributive Property","teacherView":false,"layout":"two col"}
*/
