const {
  ggb1,
  feedback1,
  cc_submit_4d22ac2c3128_textbox1: submitText1,
  cc_submit_4d22ac2c3128_input1: submitInput1,
  cc_submit_4d22ac2c3128_button1: submitButton1,
  separator1,
  cc_sharewithclass_c097d0bf14c6_textbox1: shareText1,
  cc_sharewithclass_c097d0bf14c6_input1: shareInput1,
  cc_sharewithclass_c097d0bf14c6_button1: shareButton1,
  cc_sharewithclass_c097d0bf14c6_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M2 TD L14 - Patterns in Multiplying Decimals","teacherView":false,"layout":"two col"}
*/
