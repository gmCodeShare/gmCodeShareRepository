const {
  ggb1,
  select1,
  select2,
  buttonGroup1,
  cc_sharewithclass_bf3d2981f6e4_textbox1: shareText1,
  cc_sharewithclass_bf3d2981f6e4_input1: shareInput1,
  cc_sharewithclass_bf3d2981f6e4_button1: shareButton1,
} = components;

figurePointArray = ['A', 'B', 'C'];

imagePointArray = [
  'RefA',
  'RefB',
  'RefC',
  'RotA',
  'RotB',
  'RotC',
  'TranA',
  'TranB',
  'TranC',
];

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  select1.selectOption('0');
  select2.selectOption('0');
  ggb1.instance.setValue('showReflection', true);
  ggb1.instance.setValue('state', 2);
  ggb1.instance.setValue('time', 1);
  for (i = 0, L = figurePointArray.length; i < L; i++) {
    ggb1.instance.setLabelVisible(figurePointArray[i], true);
  }
  for (i = 0, L = imagePointArray.length; i < L; i++) {
    ggb1.instance.setLabelVisible(imagePointArray[i], true);
  }
});

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('pause', checkIfDone);

function startTime() {
  if (ggb1.instance.getValue('beginPause') == 1) {
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
}

function startPause() {
  if (ggb1.instance.getValue('time') == 1) {
    ggb1.instance.setAnimating('pause', false);
    ggb1.instance.setValue('pause', 0);
    ggb1.instance.setAnimating('pause', true);
    ggb1.instance.startAnimation();
  }
}

function checkIfDone() {
  if (ggb1.instance.getValue('pause') == 1) {
    restartAnimation();
  }
}

function restartAnimation() {
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('beginPause', false);
  ggb1.instance.setValue('beginPause', 0);
  ggb1.instance.setAnimating('beginPause', true);
  ggb1.instance.startAnimation();
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.registerObjectUpdateListener('beginPause', startTime);
  ggb1.instance.registerObjectUpdateListener('time', startPause);
  restartAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('beginPause', false);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setAnimating('pause', false);
});

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setValue('showReflection', true);
    ggb1.instance.setValue('showRotation', false);
    ggb1.instance.setValue('showTranslation', false);
  }
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setValue('showReflection', false);
    ggb1.instance.setValue('showRotation', true);
    ggb1.instance.setValue('showTranslation', false);
  }
  if (select1.data.selected.includes('2')) {
    ggb1.instance.setValue('showReflection', false);
    ggb1.instance.setValue('showRotation', false);
    ggb1.instance.setValue('showTranslation', true);
  }
});

select2.on('change', (selected) => {
  if (select2.data.selected.includes('0')) {
    for (i = 0, L = imagePointArray.length; i < L; i++) {
      ggb1.instance.setLabelVisible(imagePointArray[i], true);
    }
    ggb1.instance.setValue('showPrimeNotation', false);
  }
  if (select2.data.selected.includes('1')) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    for (i = 0, L = imagePointArray.length; i < L; i++) {
      ggb1.instance.setLabelVisible(imagePointArray[i], false);
    }
    ggb1.instance.setValue('showPrimeNotation', true);
  }
});
