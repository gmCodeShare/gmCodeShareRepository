const { ggb1, text1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

buttonGroup1.on('click:1', () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', true);
  if (buttonGroup1.data.clicked) {
    ggb1.instance.setValue('currentBreaths', ggb1.instance.getValue('nextBreaths'));
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setValue('nextBreaths', ggb1.instance.getValue('nextBreaths') + 1);
  } else {
    buttonGroup1.updateData({ clicked: true });
  }
  text1.updateData({
    text: `Breath count: $${ggb1.instance.getValue('nextBreaths')}$`,
  });
  ggb1.instance.startAnimation();
});

autorun(() => {
  const enabledTimes = [0, 1];
  buttonGroup1.updateSingleButton(
    {
      disabled: !enabledTimes.includes(ggb1.innerData['time']),
    },
    1
  );
});
