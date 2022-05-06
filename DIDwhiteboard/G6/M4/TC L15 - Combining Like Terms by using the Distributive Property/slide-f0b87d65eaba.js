const {
  ggb1,
  feedback1,
  text1,
  cc_submit_a7a9b0441fcb_textbox1: submitText1,
  cc_submit_a7a9b0441fcb_input1: submitInput1,
  cc_submit_a7a9b0441fcb_button1: submitButton1,
  Separator3,
  cc_sharewithclass_c5275cc661b7_textbox1: shareText1,
  cc_sharewithclass_c5275cc661b7_input1: shareInput1,
  cc_sharewithclass_c5275cc661b7_button1: shareButton1,
  cc_sharewithclass_c5275cc661b7_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  // set initial states
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });

  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

submitButton1.on('click', () => {
  shareText1.updateData({
    visible: true,
  });
  shareInput1.updateData({
    visible: true,
  });
  shareButton1.updateData({
    visible: true,
  });
});

autorun(() => {
  let A = ggb1.innerData['A'];
  if (ggb1.innerData['show']) {
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TC L15 - Combining Like Terms by using the Distributive Property","teacherView":false,"layout":"two col"}
*/
