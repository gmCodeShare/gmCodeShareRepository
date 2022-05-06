const { ggb1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb2.instance.registerObjectUpdateListener('blockNum', updateGGBs);
ggb2.instance.registerObjectUpdateListener('baseLength', updateGGBs);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible('Drag', false);
    ggb2.instance.setValue('baseLength', ggb1.instance.getValue('baseLength'));
    ggb2.instance.setValue('blockNum', ggb1.instance.getValue('tileNum'));
    ggb2.instance.setValue('cap', ggb1.instance.getValue('maxTile'));

    ggb1.updateData({ init: true });
  }
}

function updateGGBs() {
  ggb1.instance.setValue('tileNum', ggb2.instance.getValue('blockNum'));
  ggb1.instance.setCoords('Drag', ggb2.instance.getValue('baseLength'), ggb2.instance.getValue('baseLength'));
}
