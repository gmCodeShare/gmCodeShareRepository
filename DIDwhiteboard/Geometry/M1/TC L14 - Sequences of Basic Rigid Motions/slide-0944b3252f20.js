const { ggb1, buttonGroup1, fib1, table1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  fib1.setVisible(false);
  table1.setVisible(false);
});

ggb1.instance.setErrorDialogsActive(false);

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  if (ggb1.instance.getValue('count') == 0) {
    ggb1.instance.setValue('showInitialReflection', true);
  } else if (ggb1.instance.getValue('count') == 1) {
    fib1.setVisible(true);
    table1.addRow(2, {
      isHeader: false,
      math: true,
      editable: false,
    });
    table1.updateCell(2, 0, { value: `$2$` });
    table1.updateCell(2, 1, { value: `$A''$` });
  }
  table1.setVisible(true);
  ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  runAnimation();
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  if (ggb1.instance.getValue('count') == 0) {
    ggb1.instance.setValue('showInitialTranslation', true);
  } else if (ggb1.instance.getValue('count') == 1) {
    table1.addRow(2, {
      isHeader: false,
      math: true,
      editable: false,
    });
    table1.updateCell(2, 0, { value: `$2$` });
    table1.updateCell(2, 1, { value: `$A''$` });
  }
  table1.setVisible(true);
  ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  runAnimation();
});

buttonGroup1.on('click:4', () => {
  table1.setVisible(false);
  table1.deleteRow(2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  ggb1.instance.setValue('count', 0);
  ggb1.instance.setValue('showInitialReflection', false);
  ggb1.instance.setValue('showInitialTranslation', false);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
});

function runAnimation() {
  if (ggb1.instance.getValue('count') == 1) {
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  } else if (ggb1.instance.getValue('count') == 2) {
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 1);
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.startAnimation();
  }
}
