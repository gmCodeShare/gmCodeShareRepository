const {
  text1,
  cc_submit_b7895ce0e59a_textbox1,
  cc_submit_b7895ce0e59a_input1,
  cc_submit_b7895ce0e59a_button1: submitButton1,
  separator2,
  cc_sharewithclass_631396ddada1_textbox1: shareText1,
  cc_sharewithclass_631396ddada1_input1: shareInput1,
  cc_sharewithclass_631396ddada1_button1: shareButton1,
  cc_sharewithclass_631396ddada1_studentanswers1,
  feedback1,
} = components;

onInit();
function onInit() {
  if (!text1.data.init) {
    shareButton1.updateData({ visible: false });
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    text1.updateData({ init: true });
  }
}

submitButton1.on('click', show);

function show() {
  shareButton1.updateData({ visible: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
}

/*
{"compTotals":{"textbox":2,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M4 TC L12 - Solutions to Linear Equations in Two Variables","teacherView":false,"layout":"one col"}
*/
