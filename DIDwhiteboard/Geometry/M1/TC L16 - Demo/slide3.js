const { ggb1, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

let pointList = ['A', 'B', 'C'];

ggb1.instance.setErrorDialogsActive(false);

buttonGroup1.on('click:1', () => {
  for (let i = 0, L = pointList.length; i < L; i++) {
    ggb1.instance.setFixed(pointList[i], false, false);
    ggb1.instance.setPointSize(pointList[i], 1);
  }
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  for (let i = 0, L = pointList.length; i < L; i++) {
    ggb1.instance.setFixed(pointList[i], false, true);
    ggb1.instance.setPointSize(pointList[i], 6);
  }
});
