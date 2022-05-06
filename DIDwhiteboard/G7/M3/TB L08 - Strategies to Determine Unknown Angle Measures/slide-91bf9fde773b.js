const {
  text1,
  text4,
  text2,
  text3,
  cc_submit_042f67f21a9c_textbox1: text5,
  cc_submit_042f67f21a9c_input1: input5,
  cc_submit_042f67f21a9c_button1: button5,
  separator4,
  cc_sharewithclass_1db1fd9a3468_textbox1: text6,
  cc_sharewithclass_1db1fd9a3468_input1: input6,
  cc_sharewithclass_1db1fd9a3468_button1: button6,
  cc_sharewithclass_1db1fd9a3468_studentanswers1,
} = components;

text3.updateData({ align: 'center' });
text4.updateData({ align: 'center' });
button6.updateData({ visible: false });
input6.updateData({ visible: false });
text6.updateData({ visible: false });

button5.on('click', () => {
  button6.updateData({ visible: true });
  input6.updateData({ visible: true });
  text6.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":4,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TB L08 - Strategies to Determine Unknown Angle Measures","teacherView":false,"layout":"two col"}
*/
