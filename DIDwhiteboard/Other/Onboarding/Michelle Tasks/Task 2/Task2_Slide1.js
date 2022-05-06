const {
  ggb1,
  cc_submit_ef8a5195757d_button1: submitButton1,
  cc_submit_9ac20ce14084_textbox1: submitText1,
  cc_submit_9ac20ce14084_input1: submitInput1,
  cc_submit_9ac20ce14084_button1: submitButton2,
} = components;

slide.on("firstload", () => {
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
});

submitButton1.on("click", () => {
  submitText1.updateData({ visible: true });
  submitInput1.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});
