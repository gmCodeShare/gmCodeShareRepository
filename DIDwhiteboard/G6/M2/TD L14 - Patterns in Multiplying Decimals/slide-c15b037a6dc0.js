const {
  text1,
  cat1,
  cc_sharewithclass_534f459fdcd6_textbox1: shareText1,
  cc_sharewithclass_534f459fdcd6_input1: shareInput1,
  cc_sharewithclass_534f459fdcd6_button1: shareButton1,
  cc_sharewithclass_534f459fdcd6_studentanswers1,
  feedback1,
} = components;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

cat1.on('change', ({ assigned }) => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":2,"categorization":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M2 TD L14 - Patterns in Multiplying Decimals","teacherView":false,"layout":"one col"}
*/
