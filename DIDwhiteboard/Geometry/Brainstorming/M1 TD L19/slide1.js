const {
  ggb1,
  buttonGroup1,
  select1,
  cc_sharewithclass_fc6154ab25e2_textbox1: shareText1,
  cc_sharewithclass_fc6154ab25e2_input1: shareInput1,
  cc_sharewithclass_fc6154ab25e2_button1: shareButton1,
} = components;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

pointsArray = ['A', 'B', 'C'];
haloArray = ['AHalo', 'BHalo', 'CHalo'];

ggb1.instance.setErrorDialogsActive(false);

select1.on('change', (selected) => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  for (var i = 0, J = haloArray.length; i < J; i++) {
    ggb1.instance.setVisible(haloArray[i], false);
    ggb1.instance.setFixed(pointsArray[i], false, false);
  }
  ggb1.instance.evalCommand('SelectObjects()');
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  for (var i = 0, J = haloArray.length; i < J; i++) {
    ggb1.instance.setVisible(haloArray[i], true);
    ggb1.instance.setFixed(pointsArray[i], false, true);
  }
});
