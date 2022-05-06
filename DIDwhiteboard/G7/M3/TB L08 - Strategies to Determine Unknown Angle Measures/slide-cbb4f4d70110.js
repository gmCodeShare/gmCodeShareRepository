const {
  ggb1,
  feedback,
  cc_submit_6dec7d7b823f_textbox1: text1,
  cc_submit_6dec7d7b823f_input1: input1,
  cc_submit_6dec7d7b823f_button1: button1,
  cc_sharewithclass_c78bcc179dc6_textbox1: text2,
  cc_sharewithclass_c78bcc179dc6_input1: input2,
  cc_sharewithclass_c78bcc179dc6_button1: button2,
  cc_sharewithclass_c78bcc179dc6_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button2.updateData({ align: 'right' });
    button1.updateData({ align: 'right' });
    button2.updateData({ visible: false });
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  button2.updateData({ visible: true });
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TB L08 - Strategies to Determine Unknown Angle Measures","teacherView":false,"layout":"two col"}
*/
