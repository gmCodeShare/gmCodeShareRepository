const { ggb1, feedback1, text1, ggb2, Separator1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb2.instance.registerObjectUpdateListener('planeShift', updateGGB1);
ggb2.instance.registerObjectUpdateListener('angleXSlider', updateGGB1);
ggb2.instance.registerObjectUpdateListener('angleYSlider', updateGGB1);
ggb2.instance.registerObjectUpdateListener('angleZSlider', updateGGB1);

onInit();
function onInit() {
  if (!ggb2.data.init) {
    ggb2.instance.setValue('planeShift', 0);
    ggb2.instance.setValue('angleXSlider', 0);
    ggb2.instance.setValue('angleYSlider', 0);
    ggb2.instance.setValue('planeShift', 0);
    ggb2.instance.setValue('height', 5);

    ggb1.instance.setValue('showPrismPyramidBool', false);
    ggb2.instance.setValue('showPrismPyramidBool', false);

    button1.updateData({ disabled: true, text: 'Submit' });
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
  button1.updateData({ disabled: false, text: 'Submit' });
}

button1.on('click', () => {
  button1.updateData({ disabled: true, text: 'Submitted' });
});

/*
{"compTotals":{"geogebra":2,"textbox":2,"separator":1,"button":1},"stage":"Learn","lessonInfo":"7 M4 TE L23 - Cross Section Scavenger Hunt","teacherView":false,"layout":"two col"}
*/
