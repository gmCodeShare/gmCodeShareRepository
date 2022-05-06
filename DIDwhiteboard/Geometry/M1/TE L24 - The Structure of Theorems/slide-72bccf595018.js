const {
  ggb1,
  select1,
  cc_submit_804197899eb6_textbox1: submitText1,
  cc_submit_804197899eb6_input1: submitInput1,
  cc_submit_804197899eb6_button1: submitButton1,
  cc_submit_0ca7e6c04043_textbox1: submitText2,
  cc_submit_0ca7e6c04043_input1: submitInput2,
  cc_submit_0ca7e6c04043_button1: submitButton2,
} = components;

slide.on('firstload', () => {
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setVisible('C', false);
    ggb1.instance.evalCommand('SetValue(C,HomePoint)');
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true });
    submitText2.updateData({ visible: false });
    submitInput2.updateData({ visible: false });
    submitButton2.updateData({ visible: false });
  }
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setVisible('C', true);
    submitText1.updateData({ visible: false });
    submitInput1.updateData({ visible: false });
    submitButton1.updateData({ visible: false });
    submitText2.updateData({ visible: true });
    submitInput2.updateData({ visible: true });
    submitButton2.updateData({ visible: true });
  }
});
