const {
  text1,
  ggb1,
  separator2,
  button1,
  feedback,
  textDisplay4,
  ggb2,
  cc_sharewithclass_1ff8e22ed745_textbox1: text2,
  cc_sharewithclass_1ff8e22ed745_input1: input1,
  cc_sharewithclass_1ff8e22ed745_button1: button2,
  cc_sharewithclass_1ff8e22ed745_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button2.updateData({ visible: false });
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  ggb2.instance.setValue('a', 2);
  ggb2.instance.setValue('b', 2);
});

autorun(() => {
  let currentCoordsA = ggb2.innerData['A'];
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
  button2.updateData({ visible: true });
  text2.updateData({ visible: true });
  input1.updateData({ visible: true });
});

ggb2.instance.registerObjectUpdateListener('enableButton', buttonWork);

function buttonWork() {
  if (ggb2.instance.getValue('enableButton')) {
    button1.updateData({ disabled: false });
  }
}

/*
{"compTotals":{"textbox":3,"geogebra":2,"separator":1,"button":1,"sharewithclass":1},"stage":"Land","lessonInfo":"8 M2 TD L17 - Proving the Pythagorean Theorem","teacherView":false,"layout":"T layout"}
*/
