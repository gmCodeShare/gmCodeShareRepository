const { ggb1, feedback1, text1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  if (ggb1.instance.getValue('correct')) {
    ggb1.instance.evalCommand(`SetValue(showCheckMark, true)`);
    ggb1.instance.evalCommand(`ReadText("The beam is balanced.")`);
  } else if (ggb1.instance.getValue('wrongLeft')) {
    ggb1.instance.setAnimating('CCangle', false);
    ggb1.instance.setValue('CCangle', 0);
    ggb1.instance.setAnimating('CCangle', true);
    ggb1.instance.startAnimation();
    ggb1.instance.evalCommand(`ReadText("The beam tilts to the left.")`);
  } else {
    ggb1.instance.setAnimating('CWangle', false);
    ggb1.instance.setValue('CWangle', 0);
    ggb1.instance.setAnimating('CWangle', true);
    ggb1.instance.startAnimation();
    ggb1.instance.evalCommand(`ReadText("The beam tilts to the right.")`);
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
  ggb1.instance.evalCommand(`ReadText(AAppletStatus)`);
});

autorun(() => {
  let CWangle = ggb1.innerData['CWangle'];
  let CCangle = ggb1.innerData['CCangle'];
  if (ggb1.innerData['showReset']) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1},"stage":"Launch","lessonInfo":"6 M6 TB L08 - The Mean as a Balance Point","teacherView":false,"layout":"two col"}
*/
