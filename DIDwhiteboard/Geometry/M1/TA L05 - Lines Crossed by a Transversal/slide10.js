const { ggb1, buttonGroup1, select1, text2, select2 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  text2.updateData({ visible: false });
  select2.setVisible(false);
});

ggb1.instance.setErrorDialogsActive(false);

select1.on('change', (selected) => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  if (select1.data.selected.includes('0')) {
    text2.updateData({ visible: true });
    select2.setVisible(true);
  } else {
    text2.updateData({ visible: false });
    select2.setVisible(false);
  }
});

buttonGroup1.on('click:1', () => {
  select1.setDisabled(true);
  select2.setDisabled(true);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  select1.setDisabled(false);
  select2.setDisabled(false);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});
