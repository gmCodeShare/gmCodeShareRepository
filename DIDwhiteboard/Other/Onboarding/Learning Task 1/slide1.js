const {
  ggb1,
  buttonGroup1,
  cc_submit_2d9cb1779e76_button1: submitButton1,
  cc_sharewithclass_2c9f9dc0a372_textbox1: shareText1,
  cc_sharewithclass_2c9f9dc0a372_input1: shareInput1,
  cc_sharewithclass_2c9f9dc0a372_button1: shareButton1,
} = components;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('time', startPause);
ggb1.instance.registerObjectUpdateListener('pause', restartTime);

function startPause() {
  if (ggb1.instance.getValue('time') == 1) {
    ggb1.instance.setAnimating('pause', false);
    ggb1.instance.setValue('pause', 0);
    ggb1.instance.setAnimating('pause', true);
    ggb1.instance.startAnimation();
  }
}

function restartTime() {
  if (ggb1.instance.getValue('pause') == 1) {
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
}

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('pause', false);
  ggb1.instance.setValue('pause', 0);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
});
