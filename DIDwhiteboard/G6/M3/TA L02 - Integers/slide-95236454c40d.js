const {
  ggb1,
  feedback1,
  cc_submit_d9c6921e056a_textbox1,
  cc_submit_d9c6921e056a_input1,
  cc_submit_d9c6921e056a_button1: submitButton2,
  cc_sharewithclass_6f2993d38626_textbox1: shareText1,
  cc_sharewithclass_6f2993d38626_input1: shareInput1,
  cc_sharewithclass_6f2993d38626_button1: shareButton1,
  cc_sharewithclass_6f2993d38626_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

submitButton2.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M3 TA L02 - Integers","teacherView":false,"layout":"two col"}
*/
