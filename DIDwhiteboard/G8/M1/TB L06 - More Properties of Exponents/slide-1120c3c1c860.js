const {
  ggb1,
  feedback,
  cc_submit_d18e0d03cff1_textbox1: submitText1,
  cc_submit_d18e0d03cff1_input1: submitInput1,
  cc_submit_d18e0d03cff1_button1: submitButton1,
  cc_sharewithclass_caf731591151_textbox1: shareText1,
  cc_sharewithclass_caf731591151_input1: shareInput1,
  cc_sharewithclass_caf731591151_button1: shareButton1,
  cc_sharewithclass_caf731591151_studentanswers1,
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
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M1 TB L06 - More Properties of Exponents","teacherView":false,"layout":"two col"}
*/
