const { ggb1, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

let pointList = ['RotA', 'RotB', 'RotC'];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('time3', startTime4);

function startTime4() {
  if (ggb1.instance.getValue('time3') == 1) {
    ggb1.instance.setAnimating('time4', false);
    ggb1.instance.setValue('time4', 0);
    ggb1.instance.setAnimating('time4', true);
    ggb1.instance.startAnimation();
  }
}

function reset() {
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time3', false);
  ggb1.instance.setAnimating('time4', false);
  ggb1.instance.setValue('time3', 0);
  ggb1.instance.setValue('time4', 0);
}

buttonGroup1.on('click:1', () => {
  reset();
  for (let i = 0, L = pointList.length; i < L; i++) {
    ggb1.instance.setFixed(pointList[i], false, false);
    ggb1.instance.setPointSize(pointList[i], 1);
  }
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time3', false);
  ggb1.instance.setValue('time3', 0);
  ggb1.instance.setAnimating('time3', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  reset();
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  for (let i = 0, L = pointList.length; i < L; i++) {
    ggb1.instance.setFixed(pointList[i], false, true);
    ggb1.instance.setPointSize(pointList[i], 6);
  }
});
