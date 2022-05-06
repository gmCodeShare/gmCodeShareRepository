const { ggb1, Separator1, buttonGroup1 } = components;

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
  if (ggb1.instance.getValue('correct')) {
    ggb1.instance.evalCommand(`SetValue(showCheckMark, true)`);
  } else if (ggb1.instance.getValue('wrongLeft')) {
    ggb1.instance.setAnimating('CCangle', false);
    ggb1.instance.setValue('CCangle', 0);
    ggb1.instance.setAnimating('CCangle', true);
    ggb1.instance.startAnimation();
  } else {
    ggb1.instance.setAnimating('CWangle', false);
    ggb1.instance.setValue('CWangle', 0);
    ggb1.instance.setAnimating('CWangle', true);
    ggb1.instance.startAnimation();
  }
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('CCangle', false);
  ggb1.instance.setAnimating('CWangle', false);
  ggb1.instance.setValue('CCangle', 0);
  ggb1.instance.setValue('CWangle', 0);
  ggb1.instance.evalCommand(`SetValue(showCheckMark, false)`);
});

autorun(() => {
  let CWangle = ggb1.innerData['CWangle'];
  let CCangle = ggb1.innerData['CCangle'];
  if (ggb1.innerData['showReset']) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M6 TB L08 - Print Alt: The Mean as a Balance Point","teacherView":true,"layout":"one col"}
*/
