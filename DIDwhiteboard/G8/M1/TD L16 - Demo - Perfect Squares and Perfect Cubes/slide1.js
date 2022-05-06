const { ggb1, ggb2 } = components;

ggb2.instance.registerObjectUpdateListener('baseLength', updateGGB1);

function updateGGB1() {
  ggb1.instance.setValue('baseLength', ggb2.instance.getValue('baseLength'));
}

ggb2.instance.registerObjectUpdateListener('blockNum', updateGGB1Again);

function updateGGB1Again() {
  ggb1.instance.setValue('blockNum', ggb2.instance.getValue('blockNum'));
}

ggb1.instance.registerObjectUpdateListener('cap', updateGGB2);

function updateGGB2() {
  ggb2.instance.setValue('cap', ggb1.instance.getValue('cap'));
}
