const { text1, text2, separator1, buttonGroup1, ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('count', update);
ggb1.instance.registerObjectUpdateListener('tenTime', update);
ggb1.instance.registerObjectUpdateListener('time', setBack);

let indexStartingInOne = 1;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.updateData({ visible: false });
    ggb1.instance.setValue('speed', 1);
    buttonGroup1.updateData({ align: 'center' });
    updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

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
  if (ggb1.innerData['time'] == 0) {
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
  if (ggb1.innerData['time'] == 1) {
    updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  }
  if (ggb1.innerData['time'] < 1) {
    ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  }
});

buttonGroup1.on('click:2', () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setValue('count', 0);
  ggb1.instance.stopAnimation();
});

function update() {
  let num = Math.round(ggb1.instance.getValue('count') * 1) / 1;
  let num2 = Math.round(ggb1.instance.getValue('tenTime') * 10) / 10;
  text2.updateData({ text: `Number of Beats: $${num}$\n\nTime: $${num2}$` });
}

function setBack() {
  if (ggb1.innerData['time'] == 0) {
    updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  }
  if (ggb1.innerData['time'] == 1) {
    updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
    utils.RTS.sendData('slide-d1edeb748f96', {
      myVal: ggb1.innerData['countPerMinute'],
    });
  }
}

/*
{"compTotals":{"textbox":3,"separator":1,"buttongroup":1,"geogebra":1},"stage":"Learn","lessonInfo":"6 M1 TD L18 - Comparing Rates","teacherView":false,"layout":"one col"}
*/
