const { ggb1, text1, cc_submit_443afc7ce871_textbox1: submitText1, cc_submit_443afc7ce871_input1: submitInput1, cc_submit_443afc7ce871_button1: submitButton1, cc_submit_b048ddbf4d7d_textbox1: submitText2, cc_submit_b048ddbf4d7d_input1: submitInput2, cc_submit_b048ddbf4d7d_button1: submitButton2 } = components;

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
