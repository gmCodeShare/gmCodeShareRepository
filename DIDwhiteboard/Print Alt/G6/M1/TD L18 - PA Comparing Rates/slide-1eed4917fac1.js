const { ggb1, separator2, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue('state', 2);
ggb1.instance.setValue('song1Beats', 100);
ggb1.instance.setValue('song2Beats', 80);

if (!ggb1.data.init) {
  ggb1.updateData({ init: true });
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time1', false);
  ggb1.instance.setValue('time1', 0);
  ggb1.instance.setAnimating('time1', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time1', false);
  ggb1.instance.setValue('time1', 0);
});

autorun(() => {
  let time = ggb1.innerData['time1'];
  if (ggb1.innerData['time1'] > 2) {
  }
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M1 TD L18 - PA Comparing Rates","teacherView":true,"layout":"one col"}
*/
