const { text1, buttonGroup1, ggb1, feedback1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
    ggb1.updateData({ init: true });
  }
}

const indexStartingInOne = 1;

buttonGroup1.updateData({ align: 'center' });

function updateSingleButtonGroup(indexStartingInOne, data, buttonGroup1) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroup1.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data }; // Merge the single button data with the respective button using the index
    } else {
      newButtonGroupData[i] = bgButtons[i]; // Every other button remain the same
    }
  }
  buttonGroup1.updateData({ buttons: newButtonGroupData }); // Run updateData over buttons prop
}

buttonGroup1.on('click:1', () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  ggb1.instance.evalCommand('SetValue(blueChipX,RandomBetween(-2,2))');
  ggb2.instance.setVisible('q', true);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  if (ggb1.instance.getValue('count') == 2) {
    ggb1.instance.evalCommand('RunClickScript(button1)');
  }
});

buttonGroup1.on('click:2', () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('break', false);
  ggb1.instance.setValue('break', 0);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.stopAnimation();
  snap();
});

autorun(() => {
  let time = ggb1.innerData['time'];
  if (ggb1.instance.getValue('step') == 10) {
    snap();
  }
  if (ggb1.instance.getValue('count') == 402) {
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
    snap();
  }
});

ggb1.instance.registerObjectUpdateListener('count', updateRight);

function updateRight() {
  snap();
  ggb2.instance.setValue('count', ggb1.instance.getValue('count'));
  if (ggb1.instance.getValue('count') == 50) {
    ggb2.instance.setValue('xMax', 102);
  }
  if (ggb1.instance.getValue('count') == 100) {
    ggb2.instance.setValue('xMax', 152);
  }
  if (ggb1.instance.getValue('count') == 150) {
    ggb2.instance.setValue('xMax', 202);
  }
  if (ggb1.instance.getValue('count') == 200) {
    ggb2.instance.setValue('xMax', 252);
  }
  if (ggb1.instance.getValue('count') == 250) {
    ggb2.instance.setValue('xMax', 302);
  }
  if (ggb1.instance.getValue('count') == 300) {
    ggb2.instance.setValue('xMax', 352);
  }
  if (ggb1.instance.getValue('count') == 350) {
    ggb2.instance.setValue('xMax', 402);
  }
}

ggb2.instance.registerStoreUndoListener(snap);

function snap() {
  ggb2.updateData({ image: ggb2.instance.getPNGBase64(1, false, 300) });
}

snap();

/*
{"compTotals":{"textbox":2,"buttongroup":1,"geogebra":2},"stage":"Learn","lessonInfo":"7 M6 TB L08 - Print Alt: Picking Blue","teacherView":true,"layout":"T layout"}
*/
