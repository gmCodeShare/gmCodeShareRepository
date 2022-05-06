const {
  ggb1,
  feedback,
  textDisplay4,
  cc_submit_7d6ab3a21913_textbox1: submitText1,
  cc_submit_7d6ab3a21913_input1: submitInput1,
  cc_submit_7d6ab3a21913_button1: submitButton1,
  separator2,
  cc_sharewithclass_33d72762c62b_textbox1: shareText1,
  cc_sharewithclass_33d72762c62b_input1: shareInput1,
  cc_sharewithclass_33d72762c62b_button1: shareButton1,
  cc_sharewithclass_33d72762c62b_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
});

// autorun(() => {
//   let trigger = ggb1.innerData["progress"];
//   if (ggb1.instance.getValue("trailEnd")) {
//     submitText1.updateData({ visible: false });
//     submitInput1.updateData({ visible: false });
//     submitButton1.updateData({ visible: false });
//     ggb1.instance.setValue("showHint", true);
//   }
// });

ggb1.instance.registerObjectUpdateListener('Dragger', () => {
  if (ggb1.instance.getValue('trailEnd')) {
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true });
    ggb1.instance.setValue('showHint', false);
    ggb1.instance.unregisterObjectUpdateListener('Dragger');
  }
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M1 TE L21 - Approximate Values of Roots and π²","teacherView":false,"layout":"two col"}
*/
