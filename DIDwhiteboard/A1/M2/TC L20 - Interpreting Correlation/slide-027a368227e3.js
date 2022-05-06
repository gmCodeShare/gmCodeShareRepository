const {
  cc_submit_81765b6b48f3_textbox1: submitText1,
  cc_submit_81765b6b48f3_input1,
  cc_submit_81765b6b48f3_button1: submitButton1,
  separator6,
  cc_sharewithclass_f1d9e0207391_textbox1: shareText1,
  cc_sharewithclass_f1d9e0207391_input1: shareInput1,
  cc_sharewithclass_f1d9e0207391_button1: shareButton1,
  cc_sharewithclass_f1d9e0207391_studentanswers1,
  feedback,
} = components;

onInit();
function onInit() {
  if (!shareText1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    shareText1.updateData({ init: true });
  }
}

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"submit":1,"separator":1,"sharewithclass":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M2 TC L20 - Interpreting Correlation","teacherView":false,"layout":"one col"}
*/
