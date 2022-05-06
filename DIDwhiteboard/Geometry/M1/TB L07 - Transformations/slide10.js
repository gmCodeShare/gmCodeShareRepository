const { ggb1, select1, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  select1.selectOption('0');
  ggb1.instance.setValue('showReflection', true);
  ggb1.instance.setValue('state', 1);
  ggb1.instance.setAnimating('beginPause', false);
  ggb1.instance.setValue('beginPause', 0);
  ggb1.instance.setAnimating('beginPause', true);
  ggb1.instance.startAnimation();
});

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('beginPause', startTime);
ggb1.instance.registerObjectUpdateListener('time', startPause);
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
