const { ggb1, table1, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setValue('barHeight', 8);

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setAnimating('time3', false);
  ggb1.instance.setValue('time3', 0);
  ggb1.instance.setAnimating('time4', false);
  ggb1.instance.setValue('time4', 0);
  ggb1.instance.setAnimating('time5', false);
  ggb1.instance.setValue('time5', 0);
});

autorun(() => {
  let time = ggb1.innerData['time'];
  if (ggb1.innerData['animationDone']) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

/*
{"compTotals":{"geogebra":1,"table":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M6 TA L04 - Print Alt: Creating a Histogram","teacherView":true,"layout":"two col"}
*/
