const {
  ggb1,
  feedback,
  Textbox1,
  separator1,
  buttonGroup1,
  Separator1,
  button4,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(3, { disabled: true }, buttonGroup1);
    //Object.assign(buttonGroup1.data.buttons[0], {disabled: true});

    button4.updateData({ disabled: true, visible: false });
    ggb1.updateData({ initialState: ggb1.instance.getBase64() });
    const prev64 =
      getFromSlide('slide-ffd45cce7710', 'ggb1.data.string64', '') || '';
    if (prev64) {
      ggb1.instance.setBase64(prev64, configApp);
    } else {
      configApp();
    }
    // create/update a dummy variable to keep track of whether the screen has initialized
    //ggb1.updateData({"init": true});
  }
}

function configApp() {
  ggb1.instance.stopAnimation();
  ggb1.updateInnerData({ time1: 1, time2: 1 });
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(3, { disabled: false }, buttonGroup1);
  let allPoints = ggb1.instance.getAllObjectNames('point');
  for (let i = 1; i < allPoints.length; i++) {
    ggb1.instance.setFixed(allPoints[i], false, false);
  }
}

ggb1.instance.registerStoreUndoListener(() => {
  ggb1.updateData({ string64: ggb1.instance.getBase64() });
});

buttonGroup1.on('click:1', () => {
  // keep it
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  ggb1.updateData({ string64: ggb1.instance.getBase64() });
});

buttonGroup1.on('click:2', () => {
  // adjust it
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  button4.updateData({ visible: true });
  ggb1.updateInnerData({ time1: 0, time2: 0 });
  ggb1.updateData({ init: true });
  let allPoints = ggb1.instance.getAllObjectNames('point');
  for (let i = 1; i < allPoints.length; i++) {
    ggb1.instance.setFixed(allPoints[i], false, true);
  }
});

buttonGroup1.on('click:3', () => {
  // start over
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  button4.updateData({ visible: true });
  ggb1.instance.setBase64(ggb1.data.initialState);
  ggb1.updateData({ init: true });
});

autorun(() => {
  if (ggb1.innerData['sprinklers'] > 2) {
    button4.updateData({ disabled: false });
  } else {
    button4.updateData({ disabled: true });
  }
});

button4.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(play)');
  ggb1.instance.evalCommand('SelectObjects()');
  button4.updateData({ disabled: true });
});

// run watering animation
autorun(() => {
  if (ggb1.innerData['time1'] == 1 && ggb1.data.init) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('time1', false);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (ggb1.innerData['time2'] == 1) {
    button4.updateData({ disabled: false });
  }
});

function updateSingleButtonGroup(
  indexStartingInOne,
  data,
  buttonGroupComponent
) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroupComponent.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data }; // Merge the single button data with the respective button using the index
    } else {
      newButtonGroupData[i] = bgButtons[i]; // Every other button remain the same
    }
  }
  buttonGroupComponent.updateData({ buttons: newButtonGroupData }); // Run updateData over buttons prop
}

//updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);

/*
{"compTotals":{"geogebra":1,"textbox":2,"separator":2,"buttongroup":1,"button":1},"stage":"Launch","lessonInfo":"7 M4 TC L15 - Print Alternate Slide Deck for Watering a Lawn","teacherView":true,"layout":"T layout"}
*/
