const {
  textDisplay1,
  ggb1,
  feedback,
  cc_submit_525c24854a29_textbox1: submitText1,
  cc_submit_525c24854a29_input1: submitInput1,
  cc_submit_525c24854a29_button1: submitButton1,
  separator1,
  text1,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  text1.updateData({ visible: false });
  button1.updateData({ visible: false });
  ggb1.instance.setValue('showCu', true);
  ggb1.instance.setVisible('viewFrame', false);
});

submitButton1.on('click', () => {
  text1.updateData({ visible: true });
  button1.updateData({ visible: true });
});

button1.on('click', () => {
  text1.updateData({
    text: text1.data.text.includes('cubed')
      ? `$2=\\sqrt\[3\]{8}$
  
  "$2$ is the cube root of $8$."`
      : `$2^3=8$
  
  "$2$ cubed is $8$."`,
  });
});

/*
{"compTotals":{"textbox":3,"geogebra":1,"submit":1,"separator":1,"button":1},"stage":"Learn","lessonInfo":"8 M1 TE L21 - Approximate Values of Roots and π²","teacherView":false,"layout":"two col"}
*/
