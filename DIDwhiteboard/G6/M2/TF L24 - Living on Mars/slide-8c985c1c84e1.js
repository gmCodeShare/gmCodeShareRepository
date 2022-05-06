const {
  image1,
  feedback1,
  cc_submit_46fca0e20766_textbox1: submitText1,
  cc_submit_46fca0e20766_input1: submitInput1,
  cc_submit_46fca0e20766_button1: submitButton1,
  separator3,
  cc_sharewithclass_37aaeb2dc615_textbox1: shareText1,
  cc_sharewithclass_37aaeb2dc615_input1: shareInput1,
  cc_sharewithclass_37aaeb2dc615_button1: shareButton1,
  cc_sharewithclass_37aaeb2dc615_studentanswers1,
} = components;

slide.on('firstload', () => {
  // set initial states
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
{"compTotals":{"uploaded-image":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M2 TF L24 - Living on Mars","teacherView":false,"layout":"two col"}
*/
