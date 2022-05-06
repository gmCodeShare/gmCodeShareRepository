const {
  text1,
  text2,
  check1,
  check2,
  cc_sharewithclass_086f56083b24_textbox1: shareText1,
  cc_sharewithclass_086f56083b24_input1: shareInput1,
  cc_sharewithclass_086f56083b24_button1: shareButton1,
  cc_sharewithclass_086f56083b24_studentanswers1,
  feedback1,
} = components;

slide.on('firstload', () => {
  // set initial states
  shareText1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
});

autorun(() => {
  if (check2.data.checked) {
    check1.updateData({ checked: false });
  }
});

autorun(() => {
  if (check1.data.checked) {
    check2.updateData({ checked: false });
  }
});

autorun(() => {
  if (check1.data.checked || check2.data.checked) {
    shareText1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"textbox":3,"checkbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TA L03 - Exploring Exponents","teacherView":false,"layout":"one col"}
*/
