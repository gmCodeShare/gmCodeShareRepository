const {
  ggb1,
  feedback1,
  text1,
  cc_submit_967a83720717_textbox1: submitText1,
  cc_submit_967a83720717_input1: submitInput1,
  cc_submit_967a83720717_button1: submitButton1,
  separator1,
  cc_submit_50dcad35dcce_textbox1: submitText2,
  cc_submit_50dcad35dcce_input1: submitInput2,
  cc_submit_50dcad35dcce_button1: submitButton2,
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

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":2,"separator":1},"stage":"Launch","lessonInfo":"6 M2 TE L17 - Partial Quotients","teacherView":false,"layout":"two col"}
*/
