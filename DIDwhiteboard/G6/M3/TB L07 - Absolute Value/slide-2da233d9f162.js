const {
  ggb1,
  feedback1,
  cc_submit_0906657f9ada_textbox1,
  cc_submit_0906657f9ada_input1,
  cc_submit_0906657f9ada_button1: submitButton1,
  separator2,
  cc_submit_3cccb5b4b3a9_textbox1: submitText2,
  cc_submit_3cccb5b4b3a9_input1: submitInput2,
  cc_submit_3cccb5b4b3a9_button1: submitButton2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('state', 5);
    submitText2.updateData({ visible: false });
    submitInput2.updateData({ visible: false });
    submitButton2.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
  ggb1.instance.setValue('show', true);
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":2,"separator":1},"stage":"Learn","lessonInfo":"6 M3 TB L07 - Absolute Value","teacherView":false,"layout":"two col"}
*/
