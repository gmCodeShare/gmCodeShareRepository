const { ggb1, ggb2 } = components;

ggb2.instance.registerObjectUpdateListener('tileNum', updateGGB1);

function updateGGB1() {
  ggb1.instance.setValue('tileNum', ggb2.instance.getValue('tileNum'));
}

ggb1.instance.registerObjectUpdateListener('maxTile', updateGGB2);

function updateGGB2() {
  ggb2.instance.setValue('maxTile', ggb1.instance.getValue('maxTile'));
}
