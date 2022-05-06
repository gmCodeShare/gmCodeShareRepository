const {
  table1,
  feedback1,
  cc_submit_d54ea331e1fa_textbox1,
  cc_submit_d54ea331e1fa_input1,
  cc_submit_d54ea331e1fa_button1: submitButton1,
  separator4,
  cc_sharewithclass_70943fd16c95_textbox1: shareText1,
  cc_sharewithclass_70943fd16c95_input1: shareInput1,
  cc_sharewithclass_70943fd16c95_button1: shareButton1,
  cc_sharewithclass_70943fd16c95_studentanswers1,
} = components;

onInit();
function onInit() {
  if (!table1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    table1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"table":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M6 TA L01 - Motion and Speed","teacherView":false,"layout":"two col"}
*/
