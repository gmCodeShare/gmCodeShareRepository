const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('Dragger', () => {
  if (ggb1.instance.getValue('trailEnd')) {
    ggb1.instance.setValue('showHint', false);
    ggb1.instance.unregisterObjectUpdateListener('Dragger');
  }
});
