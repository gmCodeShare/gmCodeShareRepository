const {
  ggb1,
  select1,
  cc_submit_76ac6e6dfe59_textbox1: submitText1,
  cc_submit_76ac6e6dfe59_input1: submitInput1,
  cc_submit_76ac6e6dfe59_button1: submitButton1,
  cc_submit_e3b794ceab0c_textbox1: submitText2,
  cc_submit_e3b794ceab0c_input1: submitInput2,
  cc_submit_e3b794ceab0c_button1: submitButton2,
} = components;

slide.on('firstload', () => {
  select1.selectOption('0');
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setValue('showSSS', true);
    ggb1.instance.setValue('showAAA', false);
  } else {
    ggb1.instance.setValue('showSSS', false);
    ggb1.instance.setValue('showAAA', true);
  }
  ggb1.instance.setValue('showDragPoints', true);
});

submitButton1.on('click', () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});
