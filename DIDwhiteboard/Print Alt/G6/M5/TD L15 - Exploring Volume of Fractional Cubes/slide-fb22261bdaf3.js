const { ggb1, Separator1, buttonGroup1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue('cubeSize', 1);
  ggb1.instance.setValue('time2', ggb1.instance.getValue('cubeSize'));
  ggb1.instance.setValue('time3', ggb1.instance.getValue('cubeSize'));
  ggb1.instance.setAnimating('time1', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time1', false);
  ggb1.instance.setValue('time1', 0);
  ggb1.instance.setValue('cubeSize', 1);
  ggb1.instance.setValue('time2', ggb1.instance.getValue('cubeSize'));
  ggb1.instance.setValue('time3', ggb1.instance.getValue('cubeSize'));
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M5 TD L15 - Print Alternate Slide Deck for Exploring Volume","teacherView":true,"layout":"one col"}
*/
