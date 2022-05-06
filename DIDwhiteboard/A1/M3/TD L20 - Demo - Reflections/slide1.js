const { ggb1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.setValue('refX', true);
  ggb1.instance.setValue('refY', false);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.setValue('refX', false);
  ggb1.instance.setValue('refY', true);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.setValue('refX', false);
  ggb1.instance.setValue('refY', false);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
});
