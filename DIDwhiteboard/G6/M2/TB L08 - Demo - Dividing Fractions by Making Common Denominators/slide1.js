const { ggb1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

ggb1.instance.registerObjectUpdateListener('enableButton', buttonWork);

function buttonWork() {
  if (ggb1.instance.getValue('enableButton')) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  } else {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue('answerBool', true);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('answerBool', false);
});
