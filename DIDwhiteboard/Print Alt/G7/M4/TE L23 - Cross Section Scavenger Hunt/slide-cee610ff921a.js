const { buttonGroup1, ggb1, feedback1, text1, Separator1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb2.instance.registerObjectUpdateListener('planeShift', updateGGB1);
ggb2.instance.registerObjectUpdateListener('angleXSlider', updateGGB1);
ggb2.instance.registerObjectUpdateListener('angleYSlider', updateGGB1);
ggb2.instance.registerObjectUpdateListener('angleZSlider', updateGGB1);
ggb2.instance.registerObjectUpdateListener('numOfSides', updateGGB1);
ggb2.instance.registerObjectUpdateListener('height', updateGGB1);
ggb2.instance.registerObjectUpdateListener('radius', updateGGB1);

onInit();
function onInit() {
  if (!ggb2.data.init) {
    ggb2.instance.setValue('planeShift', 0);
    ggb2.instance.setValue('angleXSlider', 0);
    ggb2.instance.setValue('angleYSlider', 0);
    ggb2.instance.setValue('planeShift', 0);
    ggb2.instance.setValue('height', 5);

    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
  // create/update a dummy variable to keep track of whether the screen has initialized
  ggb2.updateData({ init: true });
}

function updateGGB1() {
  ggb1.instance.setValue('planeShift', ggb2.instance.getValue('planeShift'));
  ggb1.instance.setValue(
    'angleXSlider',
    ggb2.instance.getValue('angleXSlider')
  );
  ggb1.instance.setValue(
    'angleYSlider',
    ggb2.instance.getValue('angleYSlider')
  );
  ggb1.instance.setValue(
    'angleZSlider',
    ggb2.instance.getValue('angleZSlider')
  );
  ggb1.instance.setValue('numOfSides', ggb2.instance.getValue('numOfSides'));
  ggb1.instance.setValue('height', ggb2.instance.getValue('height'));
  ggb1.instance.setValue('radius', ggb2.instance.getValue('radius'));
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue('showPrismPyramidBool', true);
  ggb2.instance.setValue('showPrismPyramidBool', true);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('showPrismPyramidBool', false);
  ggb2.instance.setValue('showPrismPyramidBool', false);
});

/*
{"compTotals":{"buttongroup":1,"geogebra":2,"textbox":2,"separator":1},"stage":"Learn","lessonInfo":"7 M4 TE L23 - Print Alt: Cross Section Scavenger Hunt","teacherView":true,"layout":"two col"}
*/
