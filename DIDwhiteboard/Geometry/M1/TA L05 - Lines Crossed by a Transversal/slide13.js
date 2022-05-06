const { ggb1, select1, buttonGroup1, button1, fib1 } = components;

slide.on('firstload', () => {
  button1.updateData({
    align: 'right',
    disabled: 'true',
  });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('time', startTime2);
ggb1.instance.registerObjectUpdateListener('time2', startTime3);
ggb1.instance.registerObjectUpdateListener('time3', startTime4);
ggb1.instance.registerObjectUpdateListener('time4', checkEndTime4);

function startTime2() {
  if (ggb1.instance.getValue('time') == 1) {
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.startAnimation();
  }
}

function startTime3() {
  if (
    ggb1.instance.getValue('time2') == 1 &&
    ggb1.instance.getValue('showCorresponding')
  ) {
    ggb1.instance.setAnimating('time3', false);
    ggb1.instance.setValue('time3', 0);
    ggb1.instance.setAnimating('time3', true);
    ggb1.instance.startAnimation();
  }
  if (
    ggb1.instance.getValue('time2') == 1 &&
    !ggb1.instance.getValue('showCorresponding')
  ) {
    restartTime();
  }
}

function startTime4() {
  if (
    ggb1.instance.getValue('time3') == 1 &&
    ggb1.instance.getValue('showCorresponding')
  ) {
    ggb1.instance.setAnimating('time4', false);
    ggb1.instance.setValue('time4', 0);
    ggb1.instance.setAnimating('time4', true);
    ggb1.instance.startAnimation();
  }
}

function checkEndTime4() {
  if (ggb1.instance.getValue('time4') == 1) {
    restartTime();
  }
}

function restartTime() {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setAnimating('time3', false);
  ggb1.instance.setValue('time3', 0);
  ggb1.instance.setAnimating('time4', false);
  ggb1.instance.setValue('time4', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
}

select1.on('change', (selected) => {
  restartTime();
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setValue('showCorresponding', true);
  } else {
    ggb1.instance.setValue('showCorresponding', false);
  }
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setValue('showSameSideInterior', true);
  } else {
    ggb1.instance.setValue('showSameSideInterior', false);
  }
  if (select1.data.selected.includes('2')) {
    ggb1.instance.setValue('showSameSideExterior', true);
  } else {
    ggb1.instance.setValue('showSameSideExterior', false);
  }
  if (select1.data.selected.includes('3')) {
    ggb1.instance.setValue('showAlternateInterior', true);
  } else {
    ggb1.instance.setValue('showAlternateInterior', false);
  }
  if (select1.data.selected.includes('4')) {
    ggb1.instance.setValue('showAlternateExterior', true);
  } else {
    ggb1.instance.setValue('showAlternateExterior', false);
  }
});

fib1.on('change', ({ values }) => {
  button1.updateData({
    text: 'Submit',
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.stopAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});
