const {
  ggb1,
  separator2,
  text1,
  buttonGroup1,
  feedback,
  textDisplay6,
  fib1,
  text2,
  separator1,
  text3,
  buttonGroup2,
  separator3,
  button2,
} = components;

const safeRound = 13;
ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setValue('showCu', true);
  ggb1.instance.setValue('showControls', true);
  ggb1.instance.setValue('showLegend', true);
  ggb1.instance.setValue('showDragger', true);
  buttonGroup2.updateData({ visible: false });
  button2.updateData({ outline: true });
});

fib1.on('change', ({ values }) => {
  let input = values[0].text;
  const result = utils.math.evaluateLatex(input);
  text2.updateData({ visible: !result.error });
  if (result.error) {
    return;
  }
  const cubedNum = result.value ** 3; // slide specific
  // const roundedNum = cubedNum.toFixed(6);
  const roundedNum = round(cubedNum, safeRound); // slide specific
  text2.updateData({ text: `$= ${roundedNum}$` });
});

autorun(() => {
  const trigger = ggb1.innerData['Dragger'];
  const low = round(ggb1.instance.getValue('lowEnd'), safeRound);
  const high = round(ggb1.instance.getValue('highEnd'), safeRound);
  text1.updateData({ text: `$${low} < \\sqrt[3]{18} < ${high}$` }); // slide specific
});

buttonGroup1.on('click:1', () => {
  const low = round(ggb1.instance.getValue('lowEnd'), safeRound);
  const high = round(ggb1.instance.getValue('highEnd'), safeRound);
  const checkText = `$
\\begin{aligned}
${low}^{3} &= ${round(low ** 3, safeRound)} \\\\
${high}^{3} &= ${round(high ** 3, safeRound)}
\\end{aligned}
$

Is this the interval you want?`; // slide specific
  text3.updateData({ text: checkText });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup2.updateData({ visible: true });
  buttonGroup2.updateSingleButton({ text: 'Lock it in', disabled: false }, 1);
  // buttonGroup2.updateSingleButton({ text: "Go back" }, 2);
  ggb1.instance.setValue('showDragger', false);
});

buttonGroup2.on('click:1', () => {
  // first time through
  if (buttonGroup2.data.buttons[0].text == 'Lock it in') {
    ggb1.instance.stopAnimation();
    ggb1.instance.setValue('zoom', 0);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.startAnimation();
    buttonGroup2.updateData({ visible: false });
    text3.updateData({ text: '' });
  } else {
    ggb1.instance.setCoords(
      'Target',
      ggb1.instance.getXcoord('Dragger') - 0.5,
      ggb1.instance.getYcoord('Target')
    );
    buttonGroup2.updateData({ visible: false });
    text3.updateData({ text: '' });
    if (ggb1.instance.getValue('step') == 3) {
      // text3.updateData({ text: "Your results were submitted!" });
      buttonGroup2.updateData({ visible: true });
      buttonGroup2.updateSingleButton({ text: 'Submitted', disabled: true }, 1);
      // buttonGroup2.updateSingleButton({ disabled: true }, 2);
      text3.updateData({ text: 'What will you do next?' });
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
      ggb1.instance.setCoords(
        'Dragger',
        0.5,
        ggb1.instance.getYcoord('Dragger')
      );
      ggb1.instance.setValue('step', ggb1.instance.getValue('step') + 1);
    }, 100);
  }
});

buttonGroup2.on('click:2', () => {
  buttonGroup2.updateData({ visible: false });
  text3.updateData({ text: '' });
  ggb1.instance.setValue('showDragger', true);
  ggb1.instance.setValue('time2', 0);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

button2.on('click', () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setValue('time2', 0);
  text3.updateData({ text: '' });
  buttonGroup2.updateData({ visible: false });
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
    buttonGroup2.updateData({ visible: true });
    text3.updateData({ text: 'What will you do next?' });
    buttonGroup2.updateSingleButton(
      {
        text: ggb1.instance.getValue('step') > 2 ? 'Submit' : 'Keep going',
        disabled: false,
      },
      1
    );
    // buttonGroup2.updateSingleButton({ text: "Try again" }, 2);
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
{"compTotals":{"geogebra":1,"separator":3,"textbox":5,"buttongroup":2,"fillblank":1,"button":1},"stage":"Learn","lessonInfo":"8 M1 TE L21 - Approximate Values of Roots and π²","teacherView":false,"layout":"two col"}
*/
