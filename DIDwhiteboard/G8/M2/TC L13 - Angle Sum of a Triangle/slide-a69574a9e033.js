const {
  ggb1,
  separator1,
  buttongroup1,
  feedback1,
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
    ggb1.instance.setVisible('γ', false);
    input1.updateData({ visible: false });
    buttongroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}
ggb1.instance.registerObjectUpdateListener('time', update);

function update() {
  if (ggb1.instance.getValue('time') == 1) {
    button1.updateData({ visible: true });
    text1.updateData({ visible: true });
    input1.updateData({ visible: true });
    ggb1.instance.setVisible('γ', true);
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

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M2 TC L13 - Angle Sum of a Triangle","teacherView":false,"layout":"two col"}
*/
