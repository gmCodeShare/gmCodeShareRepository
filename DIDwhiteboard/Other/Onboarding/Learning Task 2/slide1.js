const {
  ggb1,
  cc_submit_b67dce70ab52_button1: submitButton1,
  cc_submit_9c7de0f560a6_textbox1: submitText2,
  cc_submit_9c7de0f560a6_input1: submitInput2,
  cc_submit_9c7de0f560a6_button1: submitButton2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
});

submitButton1.on('click', () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});
