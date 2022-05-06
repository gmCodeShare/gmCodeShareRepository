const {
  ggb1,
  separator2,
  buttongroup1,
  feedback1,
  cc_submit_8e988ebdf4ad_textbox1: text2,
  cc_submit_8e988ebdf4ad_input1: input2,
  cc_submit_8e988ebdf4ad_button1: button2,
  separator1,
  cc_sharewithclass_5291dd4a1f6b_textbox1: text1,
  cc_sharewithclass_5291dd4a1f6b_input1: input1,
  cc_sharewithclass_5291dd4a1f6b_button1: button1,
  cc_sharewithclass_5291dd4a1f6b_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ visible: false });
    text1.updateData({ visible: false });
    input1.updateData({ visible: false });
    button2.updateData({ visible: false });
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    ggb1.instance.setVisible('γ', false);
    buttongroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener('time', getTime);
function getTime() {
  if (ggb1.instance.getValue('time') == 1) {
    ggb1.instance.setVisible('γ', true);
    button2.updateData({ visible: true });
    text2.updateData({ visible: true });
    input2.updateData({ visible: true });
  } else {
    ggb1.instance.setVisible('γ', false);
  }
}

buttongroup1.on('click:1', () => {
  buttongroup1.updateSingleButton({ disabled: true }, 1);
  buttongroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setVisible('γ', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttongroup1.on('click:2', () => {
  buttongroup1.updateSingleButton({ disabled: false }, 1);
  buttongroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setVisible('γ', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', false);
});

button2.on('click', () => {
  button1.updateData({ visible: true });
  text1.updateData({ visible: true });
  input1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"separator":2,"buttongroup":1,"textbox":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M2 TC L13 - Angle Sum of a Triangle","teacherView":false,"layout":"two col"}
*/
