const { button2, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

button2.on('click', () => {
  ggb1.instance.reset();
});
