const { ggb1, buttonGroup1, select1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setValue('state', 9);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

ggb1.instance.registerObjectUpdateListener('time', buttonWork);

function buttonWork() {
  if (ggb1.instance.getValue('time') == 1) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  } else {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setValue('show', true);
  if (ggb1.instance.getValue('correct')) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  } else {
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('show', false);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.stopAnimation();
});

select1.on('change', (selected) => {
  ggb1.instance.setValue('show', false);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.stopAnimation();
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setValue('less', true);
  } else {
    ggb1.instance.setValue('less', false);
  }
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setValue('greater', true);
  } else {
    ggb1.instance.setValue('greater', false);
  }
  if (select1.data.selected.includes('2')) {
    ggb1.instance.setValue('equal', true);
  } else {
    ggb1.instance.setValue('equal', false);
  }
});
