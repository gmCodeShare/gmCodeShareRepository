const {
  ggb1,
  feedback1,
  text1,
  cc_submit_bc30455a850c_textbox1: submitText1,
  cc_submit_bc30455a850c_input1,
  cc_submit_bc30455a850c_button1: submitButton1,
  separator2,
  cc_sharewithclass_797de2995fef_textbox1: shareText1,
  cc_sharewithclass_797de2995fef_input1: shareInput1,
  cc_sharewithclass_797de2995fef_button1: shareButton1,
  cc_sharewithclass_797de2995fef_studentanswers1,
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
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M5 TA L02 - Introduction to Systems of Linear Equations","teacherView":false,"layout":"two col"}
*/
