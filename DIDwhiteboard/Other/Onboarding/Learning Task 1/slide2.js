const {
  ggb1,
  select1,
  buttonGroup1,
  cc_sharewithclass_56104d8f91e1_textbox1: shareText1,
  cc_sharewithclass_56104d8f91e1_input1: shareInput1,
  cc_sharewithclass_56104d8f91e1_button1: shareButton1,
} = components;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  select1.selectOption('1');
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
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

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setVisible('translationVector', true);
  } else {
    ggb1.instance.setVisible('translationVector', false);
  }
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  ggb1.instance.setAnimating('pause', false);
  ggb1.instance.setValue('pause', 0);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  ggb1.instance.setValue('showDragObjects', false);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('pause', false);
  ggb1.instance.setValue('pause', 0);
  ggb1.instance.setValue('showDragObjects', true);
});
