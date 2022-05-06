const {
  text1,
  text2,
  cc_submit_990417b9f9c5_textbox1: submitText1,
  cc_submit_990417b9f9c5_input1: submitInput1,
  cc_submit_990417b9f9c5_button1: submitButton1,
  separator3,
  cc_submit_c1ad2b4f4b7b_textbox1: submitText2,
  cc_submit_c1ad2b4f4b7b_input1: submitInput2,
  cc_submit_c1ad2b4f4b7b_button1: submitButton2,
  feedback1,
  text3,
  select1,
  button1,
} = components;

onInit();
function onInit() {
  if (!text1.data.init) {
    submitText2.updateData({ visible: false });
    submitInput2.updateData({ visible: false });
    submitButton2.updateData({ visible: false });
    text3.updateData({ visible: false });
    select1.setVisible(false);
    button1.updateData({ visible: false, align: 'right' });
    text1.updateData({ init: true });
  }
}

submitButton1.on(`click`, () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

submitButton2.on(`click`, () => {
  text3.updateData({ visible: true });
  select1.setVisible(true);
  button1.updateData({ visible: true });
});

select1.on('change', ({ selected }) => {
  button1.updateData({
    text: 'Submit',
    disabled: false,
  });
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"textbox":4,"submit":2,"separator":1,"select":1,"button":1},"stage":"Learn","lessonInfo":"6 M4 TB L11 - Modeling Real-Life Situations and Expressions","teacherView":false,"layout":"T layout"}
*/
