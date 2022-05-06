const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerStoreUndoListener(() => {
  ggb1.updateData({ save64: ggb1.instance.getBase64() });
});
