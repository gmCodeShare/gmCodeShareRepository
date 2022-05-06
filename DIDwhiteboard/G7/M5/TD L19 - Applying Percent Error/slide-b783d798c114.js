const {
  ggb1,
  text3,
  cc_submit_180710030e93_textbox1: text1,
  cc_submit_180710030e93_input1: input1,
  cc_submit_180710030e93_button1: button1,
  separator3,
  cc_sharewithclass_9228a42d2d8d_textbox1: text2,
  cc_sharewithclass_9228a42d2d8d_input1: input2,
  cc_sharewithclass_9228a42d2d8d_button1: button2,
  cc_sharewithclass_9228a42d2d8d_studentanswers1,
} = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
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
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M5 TD L19 - Applying Percent Error (digital)","teacherView":false,"layout":"two col"}
*/
