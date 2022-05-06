/*Aggregate note for later: we will need to add a count on each of the first 4 slides in order to
record student's first choice. I recommend sending this choice on first "Try It" button click, and
only sending to RTS on first click.*/

const { ggb1, buttonGroup1, select1, text2, select2 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  text2.updateData({ visible: false });
  select2.setVisible(false);
});

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
