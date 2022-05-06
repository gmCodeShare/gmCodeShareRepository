const { ggb1, separator2, text1, buttonGroup1 } = components;

const safeRound = 13;
ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setValue('showSq', true);
  ggb1.instance.setValue('showControls', true);
  ggb1.instance.setValue('showLegend', true);
  ggb1.instance.setValue('showDragger', true);
  buttonGroup1.updateSingleButton({ outline: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
});

autorun(() => {
  const trigger = ggb1.innerData['Dragger'];
  const low = round(ggb1.instance.getValue('lowEnd'), safeRound);
  const high = round(ggb1.instance.getValue('highEnd'), safeRound);
  text1.updateData({ text: `$${low} < \\pi < ${high}$` }); // slide specific
});

buttonGroup1.on('click:1', () => {
  const low = round(ggb1.instance.getValue('lowEnd'), safeRound);
  const high = round(ggb1.instance.getValue('highEnd'), safeRound);
  const checkText = `You said $\\pi$ is between $${low}$ and $${high}$.

Is this the interval you want?`; // slide specific
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  buttonGroup1.updateSingleButton({ text: 'Continue', disabled: false }, 3);
  ggb1.instance.setValue('showDragger', false);
  //adding stuff here
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('zoom', 0);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time2', true);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
});

buttonGroup1.on('click:3', () => {
  ggb1.instance.setCoords(
    'Target',
    ggb1.instance.getXcoord('Dragger') - 0.5,
    ggb1.instance.getYcoord('Target')
  );
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  if (ggb1.instance.getValue('step') == 3) {
    buttonGroup1.updateSingleButton({ disabled: false }, 3);
    buttonGroup1.updateSingleButton({ disabled: false }, 4);
    buttonGroup1.updateSingleButton({ text: 'Continue', disabled: true }, 3);
    return;
  }
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.startAnimation();
  setTimeout(() => {
    const places = ['ones', 'tenths', 'hundredths', 'thousandths'];
    const nextPlace = places[ggb1.instance.getValue('step')];
    ggb1.instance.setValue(nextPlace, ggb1.instance.getXcoord('Target'));
    ggb1.instance.setCoords('Dragger', 0.5, ggb1.instance.getYcoord('Dragger'));
    ggb1.instance.setValue('step', ggb1.instance.getValue('step') + 1);
  }, 100);
});

buttonGroup1.on('click:4', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  ggb1.instance.setValue('showDragger', true);
  ggb1.instance.setValue('time2', 0);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setValue('time2', 0);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  ggb1.instance.setValue('ones', 0);
  ggb1.instance.setValue('tenths', 0);
  ggb1.instance.setValue('hundredths', 0);
  ggb1.instance.setValue('thousandths', 0);
  ggb1.instance.setValue('step', 0);
  ggb1.instance.setValue('showDragger', true);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.setCoords('Dragger', 0.5, ggb1.instance.getYcoord('Dragger'));
});

autorun(() => {
  let time = ggb1.innerData['time2'];
  if (time == 1) {
    buttonGroup1.updateSingleButton({ disabled: false }, 4);
    if (ggb1.instance.getValue('step') >= 3) {
      buttonGroup1.updateSingleButton(
        {
          disabled: true,
        },
        3
      );
    } else {
      buttonGroup1.updateSingleButton(
        {
          text:
            ggb1.instance.getValue('step') > 2 &&
            ggb1.instance.getValue('step') < 4
              ? 'Continue'
              : 'Continue',
          disabled: false,
        },
        3
      );
    }
  }
});

autorun(() => {
  let time = ggb1.innerData['time'];
  if (time == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setValue('showDragger', true);
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

/*
{"compTotals":{"geogebra":1,"separator":1,"textbox":1,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M1 TE L21 - Print Alt: Approximate Values of Roots and π²","teacherView":true,"layout":"one col"}
*/
