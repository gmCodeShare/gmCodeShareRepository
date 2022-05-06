const {
  text1,
  ggb1,
  separator2,
  button1,
  feedback1,
  textDisplay4,
  ggb2,
  cc_submit_be9e38873d51_input1: submitInput1,
  cc_submit_be9e38873d51_textbox1: submitText1,
  cc_submit_be9e38873d51_button1: submitButton1,
  cc_sharewithclass_1ff8e22ed745_input1: shareInput1,
  cc_sharewithclass_1ff8e22ed745_button1: shareButton1,
  cc_sharewithclass_1ff8e22ed745_textbox1: shareText1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  submitButton1.updateData({ visible: false });
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  ggb1.instance.setValue('lockBool', false);
  ggb2.instance.setValue('a', 4);
  ggb2.instance.setValue('b', 5);
});

autorun(() => {
  if (ggb1.instance.getValue('lockBool') == true) {
    ggb1.instance.setValue('lockBool', false);
    //button1.updateData({ disabled: false });
  }
  let sliderA = ggb2.innerData['a'];
  ggb1.instance.setValue('a', sliderA);
  let sliderB = ggb2.innerData['b'];
  ggb1.instance.setValue('b', sliderB);
});

//show angle measures
button1.on('click', () => {
  ggb1.instance.setValue('lockBool', true);
  ggb2.instance.setValue('enableButton', false);
  button1.updateData({ disabled: true });
  submitButton1.updateData({ visible: true });
  submitText1.updateData({ visible: true });
  submitInput1.updateData({ visible: true });
});
submitButton1.on('click', () => {
  submitButton1.updateData({ disabled: true });
  shareButton1.updateData({ visible: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
});

ggb2.instance.registerObjectUpdateListener('enableButton', buttonWork);

function buttonWork() {
  if (ggb2.instance.getValue('enableButton')) {
    button1.updateData({ disabled: false });
  }
}

/*
{"compTotals":{"textbox":3,"geogebra":2,"separator":1,"button":1,"submit":1,"sharewithclass":1},"stage":"Land","lessonInfo":"8 M2 TD L17 - Proving the Pythagorean Theorem","teacherView":false,"layout":"T layout"}
*/
