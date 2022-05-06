const {
  ggb1,
  select1,
  select2,
  text2,
  text3,
  fib1,
  fib2,
  cc_submit_76a8372b1fa3_textbox1: submitText1,
  cc_submit_76a8372b1fa3_input1: submitInput1,
  cc_submit_76a8372b1fa3_button1: submitButton1,
} = components;

slide.on('firstload', () => {
  select2.setVisible(false);
  text2.updateData({ visible: false });
  text3.updateData({ visible: false });
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
  fib1.setVisible(false);
  fib2.setVisible(false);
});

ggb1.instance.setErrorDialogsActive(false);

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    select2.setVisible(true);
    text2.updateData({ visible: true });
  } else {
    select2.setVisible(false);
    select2.unselectAll();
    text2.updateData({ visible: false });
    text3.updateData({ visible: false });
    fib1.setVisible(false);
    fib2.setVisible(false);
  }
  if (select1.data.selected.includes('1')) {
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true });
  } else {
    submitText1.updateData({ visible: false });
    submitInput1.updateData({ visible: false });
    submitButton1.updateData({ visible: false });
  }
});

select2.on('change', (selected) => {
  if (select2.data.selected.includes('0')) {
    fib1.setVisible(false);
    fib2.setVisible(true);
    text3.updateData({ visible: true });
  }
  if (select2.data.selected.includes('1')) {
    fib1.setVisible(true);
    fib2.setVisible(false);
    text3.updateData({ visible: true });
  }
});
