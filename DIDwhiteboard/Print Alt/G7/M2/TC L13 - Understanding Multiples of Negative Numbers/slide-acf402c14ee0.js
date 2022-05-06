const { textDisplay1, ggb1, separator12, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('showSliders', true);
    ggb1.instance.setValue('state5', true);
    ggb1.instance.showToolBar(false);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(opposite)');
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('numOfGroups', 0);
  ggb1.instance.setValue('sizeOfGroup', 0);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('sliderTime', 0);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"textbox":1,"geogebra":1,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"7 M2 TC L13 - Print Alt: Understanding Multiples of Negative Numbers","teacherView":false,"layout":"one col"}
*/
