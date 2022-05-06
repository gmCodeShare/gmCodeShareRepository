const { ggb1, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

let bluePoints = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I', 'J', 'K', 'L', 'M'];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('time', timeWork);
ggb1.instance.registerObjectUpdateListener('time2', time2Work);
ggb1.instance.registerObjectUpdateListener('count', displayLabels);

function timeWork() {
  if (ggb1.instance.getValue('time') == 1) {
    if (ggb1.instance.getValue('initialSix')) {
      ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
    }
    if (ggb1.instance.getValue('count') == 6) {
      ggb1.instance.setValue('time', 0);
      ggb1.instance.setAnimating('time2', false);
      ggb1.instance.setValue('time2', 0);
      ggb1.instance.setAnimating('time2', true);
      ggb1.instance.startAnimation();
    }
    if (ggb1.instance.getValue('count') > 6) {
      ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
    }
    if (ggb1.instance.getValue('resetCount')) {
      ggb1.instance.setValue('count', 0);
    }
    if (ggb1.instance.getValue('count') != 6) {
      restartAnimation();
    }
  }
}

function time2Work() {
  if (ggb1.instance.getValue('time2') == 1) {
    restartAnimation();
    ggb1.instance.setValue('count', 7);
  }
}

function displayLabels() {
  for (let i = 0, L = bluePoints.length; i < L; i++) {
    if (ggb1.instance.getValue('count') == i + 1) {
      ggb1.instance.setLabelVisible(bluePoints[i], true);
    }
  }
  if (ggb1.instance.getValue('count') == 0) {
    for (let i = 0, L = bluePoints.length; i < L; i++) {
      ggb1.instance.setLabelVisible(bluePoints[i], false);
    }
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
  }
  if (ggb1.instance.getValue('count') == 14) {
    ggb1.instance.setValue('enablePauseButton', true);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: false }, 3);
  }
}

function restartAnimation() {
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  if (ggb1.instance.getValue('enablePauseButton')) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: false }, 3);
  }
  if (ggb1.instance.getValue('count') == 0) {
    ggb1.instance.setValue('count', 1);
  }
  restartAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setValue('count', 0);
});
