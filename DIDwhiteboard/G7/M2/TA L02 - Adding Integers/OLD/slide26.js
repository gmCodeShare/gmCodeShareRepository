const {
  ggb1,
  cc_sharewithclass_fad934eb75d5_button1: button1,
  buttonGroup1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  button1.updateData({ align: 'right' });
  ggb1.instance.setValue('addend1', -7);
  ggb1.instance.setValue('addendSum', -3);
  ggb1.instance.setValue('previousAddend1', -7);
  ggb1.instance.setValue('previousAddendSum', 4);
});

ggb1.instance.registerObjectUpdateListener('showPrevious', buttonWork);

function buttonWork() {
  if (ggb1.instance.getValue('showPrevious')) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  } else {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
}

buttonGroup1.on('click:1', () => {
  let clickCount = ggb1.instance.getValue('clickCount');
  ggb1.instance.setValue('clickCount', clickCount + 1);
});

buttonGroup1.on('click:2', () => {
  let clickCount = ggb1.instance.getValue('clickCount');
  ggb1.instance.setValue('clickCount', clickCount + 1);
});
