const {
  ggb1,
  feedback1,
  cc_submit_f0f5cb851922_textbox1: text1,
  cc_submit_f0f5cb851922_input1: input1,
  cc_submit_f0f5cb851922_button1: button1,
  separator1,
  cc_sharewithclass_567bdeaf2e3b_textbox1: text2,
  cc_sharewithclass_567bdeaf2e3b_input1: input2,
  cc_sharewithclass_567bdeaf2e3b_button1: button2,
  cc_sharewithclass_567bdeaf2e3b_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button2.updateData({ visible: false });
    input2.updateData({ visible: false });
    text2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  button2.updateData({ visible: true });
  input2.updateData({ visible: true });
  text2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M2 TC L13 - Angle Sum of a Triangle","teacherView":false,"layout":"two col"}
*/
