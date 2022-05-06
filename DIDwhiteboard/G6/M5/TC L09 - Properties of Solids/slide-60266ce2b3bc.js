const {
  ggb1,
  image2,
  feedback1,
  text1,
  button1,
  separator1,
  cc_sharewithclass_f41f8e082a0f_textbox1: text2,
  cc_sharewithclass_f41f8e082a0f_input1: input2,
  cc_sharewithclass_f41f8e082a0f_button1: button2,
  cc_sharewithclass_f41f8e082a0f_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ align: 'right' });
    button2.updateData({ visible: false });
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  ggb1.instance.registerClientListener(update);
  button2.updateData({ visible: true });
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button1.updateData({ text: 'Submitted', disabled: true });
});

function update(a) {
  // console.log(a);
  button1.updateData({ text: 'Submit', disabled: false });
  ggb1.instance.unregisterClientListener(update);
}

/*
{"compTotals":{"geogebra":1,"uploaded-image":1,"textbox":2,"button":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M5 TC L09 - Properties of Solids","teacherView":false,"layout":"two col"}
*/
