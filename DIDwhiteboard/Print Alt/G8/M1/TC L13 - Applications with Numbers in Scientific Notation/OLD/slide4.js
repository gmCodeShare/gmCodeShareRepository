const { ggb1, text1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

button1.on('click', () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', true);
  if (button1.data.clicked) {
    ggb1.instance.setValue(
      'currentBreaths',
      ggb1.instance.getValue('nextBreaths')
    );
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setValue(
      'nextBreaths',
      ggb1.instance.getValue('nextBreaths') + 1
    );
  } else {
    button1.updateData({ clicked: true });
  }
  text1.updateData({
    text: `Breath count: $${ggb1.instance.getValue('nextBreaths')}$`,
  });
  ggb1.instance.startAnimation();
});

autorun(() => {
  const enabledTimes = [0, 1];
  button1.updateData(
    {
      disabled: !enabledTimes.includes(ggb1.innerData['time']),
    },
    1
  );
});
