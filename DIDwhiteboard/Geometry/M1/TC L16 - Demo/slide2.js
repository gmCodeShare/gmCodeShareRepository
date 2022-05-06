const { ggb1, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

let pointList = ['TranA', 'TranB', 'TranC'];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('rayTime', startTime2);

function startTime2() {
  if (ggb1.instance.getValue('rayTime') == 1) {
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.startAnimation();
  }
}

function reset() {
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('rayTime', false);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('rayTime', 0);
  ggb1.instance.setValue('time2', 0);
}

buttonGroup1.on('click:1', () => {
  reset();
  for (let i = 0, L = pointList.length; i < L; i++) {
    ggb1.instance.setFixed(pointList[i], false, false);
    ggb1.instance.setPointSize(pointList[i], 1);
  }
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('rayTime', false);
  ggb1.instance.setValue('rayTime', 0);
  ggb1.instance.setAnimating('rayTime', true);
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
