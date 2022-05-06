const {
  ggb1,
  feedback1,
  text3,
  cc_submit_329e39ca1a45_textbox1: text1,
  cc_submit_329e39ca1a45_input1: input1,
  cc_submit_329e39ca1a45_button1: button1,
  text2,
  input2,
  text4,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    button1.updateData({ align: 'right' });
    button2.updateData({ align: 'right' });
    text4.updateData({ align: 'right' });
    text4.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
  text4.updateData({ visible: true });
});

button2.on('click', () => {
  button2.updateData({ disabled: true, text: 'Submitted' });
});

autorun(() => {
  button2.updateData({ disabled: input2.data.text == '', text: 'Submit' });
});

/*
{"compTotals":{"geogebra":1,"textbox":4,"submit":1,"input":1,"button":1},"stage":"Learn","lessonInfo":"7 M1 TB L09 - Comparing Proportional Relationships​","teacherView":false,"layout":"two col"}
*/
