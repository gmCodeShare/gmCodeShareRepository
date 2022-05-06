const { ggb1, feedback1, text1, buttonGroup1, separator4, text2 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue('showCarShadow', false);
ggb1.instance.setValue('myPercent', 1);
ggb1.instance.setValue('maxLaps', 5);
ggb1.instance.setValue('speed', 0.5);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
    buttonGroup1.updateSingleButton({ disabled: true }, 4);
    text2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let time = ggb1.innerData['time'];
  text2.updateData({
    text: `Laps: $${time}$\n\nVroom! Go to the next screen when you are ready.`,
  });
  if (time == ggb1.instance.getValue('maxLaps')) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: false }, 4);
  }
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  text2.updateData({ visible: true });
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.stopAnimation();
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:4', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"buttongroup":1,"separator":1},"stage":"Learn","lessonInfo":"7 M5 TA L02 - Racing for Percents","teacherView":false,"layout":"two col"}
*/
