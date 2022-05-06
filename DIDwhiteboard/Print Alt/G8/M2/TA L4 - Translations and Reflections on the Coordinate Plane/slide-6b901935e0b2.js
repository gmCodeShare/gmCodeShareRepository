const { ggb1, feedback1, buttonGroup1, separator1, select1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  select1.setVisible(false);
  select1.selectOption('1');
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  ggb1.instance.setVisible('halo', false);
  ggb1.instance.setFixed('DragPoint', false, false);
  ggb1.instance.evalCommand('SelectObjects()');
  select1.setVisible(true);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setVisible('halo', true);
  ggb1.instance.setFixed('DragPoint', false, true);
});

autorun(() => {
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setGridVisible(true);
    ggb1.instance.setAxesVisible(true, true);
  } else {
    ggb1.instance.setGridVisible(false);
    ggb1.instance.setAxesVisible(false, false);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"buttongroup":1,"separator":1,"select":1},"stage":"Learn","lessonInfo":"8 M2 TA L04 - PA Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
