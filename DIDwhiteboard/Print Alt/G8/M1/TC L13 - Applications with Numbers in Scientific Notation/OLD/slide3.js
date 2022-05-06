const {
  ggb1,
  button1,
  cc_sharewithclass_e1282d485d2d_textbox1: shareText1,
  cc_sharewithclass_e1282d485d2d_input1: shareInput1,
  cc_sharewithclass_e1282d485d2d_button1: shareButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

button1.on('click', () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.startAnimation();
});

autorun(() => {
  const enabledTimes = [0, ggb1.innerData['maxTime']];
  button1.updateData(
    {
      disabled: !enabledTimes.includes(ggb1.innerData['time']),
    },
    1
  );
});
