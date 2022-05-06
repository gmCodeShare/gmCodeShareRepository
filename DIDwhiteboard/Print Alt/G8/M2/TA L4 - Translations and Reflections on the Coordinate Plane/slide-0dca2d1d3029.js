const { ggb1, separator2, buttonGroup1, feedback1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('timeMove', true);
  ggb1.instance.setAnimating('timePause', false);
  ggb1.instance.setValue('timeMove', 0);
  ggb1.instance.setValue('timePause', 0);
  ggb1.instance.startAnimation();
});

autorun(() => {
  if (ggb1.innerData['timeMove'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('timeMove', false);
    ggb1.instance.setAnimating('timePause', true);
    ggb1.instance.setValue('timePause', 0);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (ggb1.innerData['timePause'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('timeMove', true);
    ggb1.instance.setAnimating('timePause', false);
    ggb1.instance.setValue('timeMove', 0);
    ggb1.instance.startAnimation();
  }
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('timeMove', true);
  ggb1.instance.setAnimating('timePause', false);
  ggb1.instance.setValue('timeMove', 0);
  ggb1.instance.setValue('timePause', 0);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1},"stage":"Launch","lessonInfo":"8 M2 TA L04 - PA Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"one col"}
*/
