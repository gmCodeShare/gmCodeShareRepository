const { ggb1, ggb2, buttonGroup1 } = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

const indexStartingInOne = 1;

buttonGroup1.updateData({ align: 'center' });

function updateSingleButtonGroup(indexStartingInOne, data, buttonGroup1) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroup1.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data };
    } else {
      newButtonGroupData[i] = bgButtons[i];
    }
  }
  buttonGroup1.updateData({ buttons: newButtonGroupData });
}

buttonGroup1.on('click:1', () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  ggb1.instance.evalCommand('RunClickScript(pull)');
});

buttonGroup1.on('click:2', () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb1.instance.evalCommand('RunClickScript(reset)');
  ggb1.instance.setValue('count', 2);
  ggb2.instance.setValue('count', 2);
  ggb2.instance.setVisible('q', false);
  for (var i = 1; i < 101; i++) {
    ggb2.instance.deleteObject('A' + i);
    ggb2.instance.deleteObject('B' + i);
    ggb2.instance.deleteObject('C' + i);
    ggb2.instance.deleteObject('D' + i);
    ggb2.instance.deleteObject('E' + i);
  }
});

ggb1.instance.registerObjectUpdateListener('show', buttonWork);

function buttonWork() {
  if (ggb1.instance.getValue('show') && ggb1.instance.getValue('count') < 102) {
    updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  } else {
    updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  }
}

ggb1.instance.registerObjectUpdateListener('count', updateRight);

function updateRight() {
  if (ggb1.instance.getValue('count') == 7) {
    updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  }
  if (ggb1.instance.getValue('count') == 102) {
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  }
  if (ggb1.instance.getValue('count') == 50) {
    ggb2.instance.setValue('xmax', 104);
  }
}
