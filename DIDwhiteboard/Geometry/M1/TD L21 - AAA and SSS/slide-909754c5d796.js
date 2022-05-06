const { ggb1, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

tranPoints = ['TransA', 'TransB', 'TransC'];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('time', TranPointsLabelWork);
ggb1.instance.registerObjectUpdateListener('time2', RotBLabelWork);

function TranPointsLabelWork() {
  if (ggb1.instance.getValue('time') == 1) {
    for (let i = 0, L = tranPoints.length; i < L; i++) {
      ggb1.instance.setLabelVisible(tranPoints[i], true);
    }
  }
}

function RotBLabelWork() {
  if (ggb1.instance.getValue('time2') == 1) {
    ggb1.instance.setLabelVisible('RotB', true);
  } else {
    ggb1.instance.setLabelVisible('RotB', false);
  }
  if (ggb1.instance.getValue('time2') > 0) {
    for (let i = 0, L = tranPoints.length; i < L; i++) {
      ggb1.instance.setLabelVisible(tranPoints[i], false);
      ggb1.instance.setColor(tranPoints[i], 128, 128, 128);
    }
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 1);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setAnimating('time2', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
  for (let i = 0, L = tranPoints.length; i < L; i++) {
    ggb1.instance.setColor(tranPoints[i], 0, 0, 0);
  }
});
