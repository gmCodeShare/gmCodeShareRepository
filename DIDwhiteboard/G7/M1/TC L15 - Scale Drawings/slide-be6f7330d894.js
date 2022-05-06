const {
  select1,
  button1,
  feedback1,
  text1,
  image9,
  Separator1,
  cc_sharewithclass_26f4fd502bd3_textbox1: shareText1,
  cc_sharewithclass_26f4fd502bd3_input1: shareInput1,
  cc_sharewithclass_26f4fd502bd3_button1: shareButton1,
  cc_sharewithclass_26f4fd502bd3_studentanswers1: shareAnswers1,
} = components;

shareButton1.updateData({ align: 'right' });

shareText1.updateData({ visible: false });
shareInput1.updateData({ visible: false });
shareButton1.updateData({ visible: false });
shareAnswers1.updateData({ visible: false });

button1.on('click', () => {
  button1.updateData({ disabled: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareAnswers1.updateData({ visible: true });
});

select1.on('change', (selected) => {
  button1.updateData({ disabled: false });
});

/*
{"compTotals":{"select":1,"button":1,"textbox":2,"uploaded-image":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M1 TC L15 - Scale Drawings","teacherView":false,"layout":"two col"}
*/
