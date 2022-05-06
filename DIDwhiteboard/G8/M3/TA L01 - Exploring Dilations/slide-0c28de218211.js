const {
  ggb1,
  feedback1,
  cc_submit_4b66ecc2989a_textbox1: submitText1,
  cc_submit_4b66ecc2989a_input1: submitInput1,
  cc_submit_4b66ecc2989a_button1: submitButton1,
  separator2,
  cc_sharewithclass_eaca06315e76_textbox1: shareText1,
  cc_sharewithclass_eaca06315e76_input1: shareInput1,
  cc_sharewithclass_eaca06315e76_button1: shareButton1,
  cc_sharewithclass_eaca06315e76_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false, align: 'right' });
  submitButton1.updateData({ align: 'right' });
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M3 TA L01 - Exploring Dilations","teacherView":false,"layout":"two col"}
*/
