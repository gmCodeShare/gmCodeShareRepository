const {
  text1,
  text2,
  table1,
  feedback1,
  cc_sharewithclass_d644916526c5_textbox1: shareText1,
  cc_sharewithclass_d644916526c5_input1: shareInput1,
  cc_sharewithclass_d644916526c5_button1: shareButton1,
  cc_sharewithclass_d644916526c5_studentanswers1,
} = components;

shareText1.updateData({ visible: false });
shareButton1.updateData({ visible: false });
shareInput1.updateData({ visible: false });

autorun(() => {
  if (
    table1.data.rows[0][0].value != '' &&
    table1.data.rows[1][0].value != '' &&
    table1.data.rows[2][0].value != '' &&
    table1.data.rows[3][0].value != '' &&
    table1.data.rows[4][0].value != '' &&
    table1.data.rows[5][0].value != ''
  ) {
    shareButton1.updateData({ visible: true });
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"textbox":3,"table":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TA L03 - Exploring Exponents","teacherView":false,"layout":"T layout"}
*/
