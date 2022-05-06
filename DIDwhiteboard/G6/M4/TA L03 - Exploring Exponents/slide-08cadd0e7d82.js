const {
  table1,
  feedback1,
  text1,
  cc_submit_e47d5d3f5635_textbox1: submitText1,
  cc_submit_e47d5d3f5635_input1: submitInput1,
  cc_submit_e47d5d3f5635_button1: submitButton1,
} = components;

submitButton1.updateData({ visible: false });
submitInput1.updateData({ visible: false });
submitText1.updateData({ visible: false });

autorun(() => {
  if (
    table1.data.rows[2][1].value != '' &&
    table1.data.rows[3][1].value != '' &&
    table1.data.rows[4][1].value != ''
  ) {
    submitButton1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitText1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"table":1,"textbox":2,"submit":1},"stage":"Learn","lessonInfo":"6 M4 TA L03 - Exploring Exponents","teacherView":false,"layout":"two col"}
*/
