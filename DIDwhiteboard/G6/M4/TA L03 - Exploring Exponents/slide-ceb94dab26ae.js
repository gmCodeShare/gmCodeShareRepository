const {
  text1,
  check1,
  check2,
  check3,
  cc_sharewithclass_4c7ee945b40f_textbox1: shareText1,
  cc_sharewithclass_4c7ee945b40f_input1: shareInput1,
  cc_sharewithclass_4c7ee945b40f_button1: shareButton1,
  cc_sharewithclass_4c7ee945b40f_studentanswers1,
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
    check3.updateData({ checked: false });
  }
});

autorun(() => {
  if (check1.data.checked) {
    check2.updateData({ checked: false });
    check3.updateData({ checked: false });
  }
});
autorun(() => {
  if (check3.data.checked) {
    check2.updateData({ checked: false });
    check1.updateData({ checked: false });
  }
});

autorun(() => {
  if (check1.data.checked || check2.data.checked || check3.data.checked) {
    shareText1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"textbox":2,"checkbox":3,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TA L03 - Exploring Exponents","teacherView":false,"layout":"one col"}
*/
