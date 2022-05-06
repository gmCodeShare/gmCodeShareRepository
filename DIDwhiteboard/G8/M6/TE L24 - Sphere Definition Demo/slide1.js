const { ggb1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

button1.on('click', () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});
