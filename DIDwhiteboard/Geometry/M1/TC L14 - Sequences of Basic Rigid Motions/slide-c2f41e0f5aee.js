const {
  ggb1,
  buttonGroup1,
  cc_sharewithclass_a315bbf934a7_textbox1: shareText1,
  cc_sharewithclass_a315bbf934a7_input1: shareInput1,
  cc_sharewithclass_a315bbf934a7_button1: shareButton1,
} = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  if (ggb1.instance.getValue('count') == 0) {
    ggb1.instance.setValue('showInitialReflection', true);
  }
  ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  runAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  if (ggb1.instance.getValue('count') == 0) {
    ggb1.instance.setValue('showInitialRotation', true);
  } else if (ggb1.instance.getValue('count') == 1) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
  ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  runAnimation();
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.setValue('count', 0);
  ggb1.instance.setValue('showInitialReflection', false);
  ggb1.instance.setValue('showInitialRotation', false);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
});

function runAnimation() {
  if (ggb1.instance.getValue('count') == 1) {
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  } else if (ggb1.instance.getValue('count') == 2) {
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 1);
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.startAnimation();
  }
}
