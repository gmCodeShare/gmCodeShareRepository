const {
  ggb1,
  feedback,
  text1,
  input1,
  text2,
  button1,
  separator1,
  cc_sharewithclass_34de8c3820d9_textbox1: shareText1,
  cc_sharewithclass_34de8c3820d9_input1: shareInput1,
  cc_sharewithclass_34de8c3820d9_button1: shareButton1,
  cc_sharewithclass_34de8c3820d9_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false, align: 'right' });
  button1.updateData({ align: 'right' });
  ggb1.instance.setValue('showTri', true);
  ggb1.instance.setVisible('viewFrame', false);
});

button1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  button1.updateData({ text: 'Submitted', disabled: true });
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"input":1,"button":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M1 TE L21 - Approximate Values of Roots and π²","teacherView":false,"layout":"two col"}
*/
