const {
  image1,
  text1,
  select1,
  cc_sharewithclass_7c138351aaa1_textbox1: shareText1,
  cc_sharewithclass_7c138351aaa1_input1: shareInput1,
  cc_sharewithclass_7c138351aaa1_button1: shareButton1,
  cc_sharewithclass_7c138351aaa1_studentanswers1,
} = components;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

select1.on('change', (selected) => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"uploaded-image":1,"textbox":1,"select":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M6 TC L11 - Scatter Plots","teacherView":false,"layout":"two col"}
*/
