const {
  text1,
  select1,
  text2,
  cc_submit_3944ac0deda0_textbox1: submitText1,
  cc_submit_3944ac0deda0_input1: submitInput1,
  cc_submit_3944ac0deda0_button1: submitButton1,
  separator1,
  cc_submit_6bc092fd2459_textbox1: submitText2,
  cc_submit_6bc092fd2459_input1: submitInput2,
  cc_submit_6bc092fd2459_button1: submitButton2,
  text3,
} = components;

// const animal = 'bear';

slide.on('firstload', () => {
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
  text3.updateData({ visible: false });

  submitInput2.updateData({ text: '$' });
});

select1.on('change', (selected) => {
  submitText1.updateData({ visible: true });
  submitInput1.updateData({ visible: true });
  submitButton1.updateData({ visible: true });
});

submitButton1.on('click', () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

autorun(() => {
  if (submitInput1.data.text !== '') {
    submitButton1.updateData({ disabled: false, text: 'Submit' });
  } else {
    submitButton1.updateData({ disabled: true });
  }
});
submitButton1.on('click', () => {
  submitButton1.updateData({ disabled: true, text: 'Submitted' });
});

autorun(() => {
  if (submitInput2.data.text !== '') {
    submitButton2.updateData({ disabled: false, text: 'Submit' });
  } else {
    submitButton2.updateData({ disabled: true });
  }
});

submitButton2.on('click', () => {
  submitButton2.updateData({ disabled: true, text: 'Submitted' });
  let num = submitInput2.data.text;
  let noMoney = num.replace('\\$', '');
  let result = utils.math.evaluateLatex(noMoney);
  if (result.value > 300) {
    text3.updateData({ visible: true, text: "That's a little to high." });
  } else {
    text3.updateData({ visible: false });
  }
});

/*
{"compTotals":{"textbox":3,"select":1,"submit":2,"separator":1},"stage":"Launch","lessonInfo":"6 M1 TB L07 - Graphs of Ratio Relationships","teacherView":false,"layout":"T layout"}
*/
