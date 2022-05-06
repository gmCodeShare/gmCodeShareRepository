const { ggb1, feedback1, text1, buttonGroup1, separator5 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
    buttonGroup1.updateSingleButton({ disabled: true }, 4);
    ggb1.instance.setValue('showCarShadow', true);
    ggb1.instance.setValue('myPercent', 0.8);
    ggb1.instance.setValue('maxLaps', 5);
    ggb1.instance.setValue('speed', 0.5);
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let time = ggb1.innerData['time'];
  text1.updateData({
    text: `#### Original car laps: $${time}$\n\n#### Adjusted car laps: $?$ 
`,
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
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.stopAnimation();
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
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
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1,"separator":1},"stage":"Learn","lessonInfo":"7 M5 TA L02 - Print Alternate Slide Deck for Racing for Percents","teacherView":true,"layout":"two col"}
*/
