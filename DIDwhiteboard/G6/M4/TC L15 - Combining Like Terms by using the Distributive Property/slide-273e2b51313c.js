const {
  ggb1,
  feedback1,
  cc_submit_e5cd438e66f2_textbox1: submitText1,
  cc_submit_e5cd438e66f2_input1: submitInput1,
  cc_submit_e5cd438e66f2_button1: submitButton1,
  Separator1,
  cc_submit_071e30cd6934_textbox1: submitText2,
  cc_submit_071e30cd6934_input1: submitInput2,
  cc_submit_071e30cd6934_button1: submitButton2,
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
{"compTotals":{"geogebra":1,"textbox":1,"submit":2,"separator":1},"stage":"Learn","lessonInfo":"6 M4 TC L15 - Combining Like Terms by using the Distributive Property","teacherView":false,"layout":"two col"}
*/
