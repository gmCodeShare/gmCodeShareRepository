const {
  image1,
  feedback1,
  text1,
  text2,
  input1,
  unitText1,
  text3,
  input2,
  unitText2,
  button1,
  separator1,
  cc_sharewithclass_23cf8bff9b2e_textbox1: shareText1,
  cc_sharewithclass_23cf8bff9b2e_input1: shareInput1,
  cc_sharewithclass_23cf8bff9b2e_button1: shareButton1,
  cc_sharewithclass_23cf8bff9b2e_studentanswers1: shareAnswers1,
} = components;

button1.updateData({ align: 'right' });

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  shareAnswers1.updateData({ visible: false });
  input1.updateData({ storedString: '' });
  input2.updateData({ storedString: '' });
});

let snapshot = getFromSlide('slide-4de50a577000', 'ggb1.data.imageA', '') || '';
if (snapshot) {
  image1.updateData({ src: `data:image/png;base64,${snapshot}` });
}

autorun(() => {
  let currentText1 = input1.data.text;
  let currentText2 = input2.data.text;
  if (
    currentText1 != input1.data.storedString ||
    currentText2 != input2.data.storedString
  ) {
    input1.updateData({ storedString: input1.data.text });
    input2.updateData({ storedString: input2.data.text });
    button1.updateData({ disabled: false, text: 'Submit' });
  }
  if (currentText1 == '' || currentText2 == '') {
    button1.updateData({ disabled: true });
  }
});

button1.on('click', () => {
  button1.updateData({ disabled: true, text: 'Submitted' });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareAnswers1.updateData({ visible: true });
});

/*
{"compTotals":{"bynder-image":1,"textbox":6,"input":2,"button":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M5 TC L12 - Solving Historical Problems with Systems of Equations​","teacherView":false,"layout":"two col"}
*/
