const { text1, buttonGroup1, ggb1, feedback1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

const id1 = `slide-0dca68e29bf5`;

function getSlideNum(slideId) {
  if (
    typeof controls == 'undefined' ||
    !controls.slidesNavigationData?.length
  ) {
    return 'missing slide!';
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

const indexStartingInOne = 1;

buttonGroup1.updateData({ align: 'center' });

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb2.instance.setValue('state', 2);
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
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
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  ggb1.instance.evalCommand('SetValue(blueChipX,RandomBetween(-2,2))');
  ggb2.instance.setVisible('q', true);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  ggb2.instance.setValue('showBlue', false);
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
});

let defPrevGGB1 = {
  innerData: {
    blueCount: 0,
  },
};

let data = getFromSlide(id1, 'ggb1', false) || false; // don't forget to change slide id

let id1HasData = !data
  ? false
  : !Object.keys(data).includes('innerData')
  ? false
  : !Object.keys(data.innerData).length
  ? false
  : true;

if (!id1HasData) {
  data = defPrevGGB1;
}

// let data = getFromSlide(id1, "ggb1");

if (data.innerData) {
  ggb1.instance.setValue('blueCount', data.innerData['blueCount']);
}

ggb1.instance.registerObjectUpdateListener('blueCount', clearOut);

function clearOut() {
  ggb1.instance.evalCommand('Delete(B1:B405)');
  ggb2.instance.evalCommand('Delete(B1:B405)');
  ggb1.instance.evalCommand('Delete(C1:C405)');
  ggb2.instance.evalCommand('Delete(C1:C405)');
  ggb1.instance.evalCommand('Delete(D1:D405)');
  ggb2.instance.evalCommand('Delete(D1:D405)');
  ggb1.instance.evalCommand('Delete(E1:E405)');
  ggb2.instance.evalCommand('Delete(E1:E405)');
  ggb1.instance.setValue('count', 2);
  ggb2.instance.setValue('count', 2);
}

autorun(() => {
  let time = ggb1.innerData['time'];
  if (ggb1.instance.getValue('step') == 10) {
  }
  if (ggb1.instance.getValue('count') == 402) {
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  }
});

ggb1.instance.registerObjectUpdateListener('count', updateRight);

function updateRight() {
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

let numSlide =
  getFromSlide(id1, `cc_sharewithclass_08883e0adaa2_input1.data.text`, '') ||
  '';

if (!numSlide) {
  numSlide = `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}`;
}

text1.updateData({
  text: `You said the theoretical probability of pulling a blue chip from your bucket is $${numSlide}$.\n\nMark the theoretical probability of pulling a blue chip from your bucket by moving the blue line.\n\nPull chips from your bucket until you feel confident that the relative frequency is an accurate estimate of the theoretical probability of pulling a blue chip from the bucket.`,
});

/*
{"compTotals":{"textbox":2,"buttongroup":1,"geogebra":2},"stage":"Learn","lessonInfo":"7 M6 TB L08 - Picking Blue","teacherView":false,"layout":"T layout"}
*/
