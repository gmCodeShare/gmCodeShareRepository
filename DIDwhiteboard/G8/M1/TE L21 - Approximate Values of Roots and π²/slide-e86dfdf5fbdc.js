const { ggb1, separator3, text1, buttonGroup1, feedback, textDisplay6 } =
  components;

const safeRound = 13;
ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setValue('showSq', true);
  ggb1.instance.setValue('showControls', true);
  ggb1.instance.setValue('showLegend', true);
  ggb1.instance.setValue('showDragger', true);
  // buttonGroup1.updateData({ visible: false });
  // button2.updateData({ outline: true });
  ggb1.instance.setValue('time2', 1);
});

autorun(() => {
  const trigger = ggb1.innerData['Dragger'];
  const low = round(ggb1.instance.getValue('lowEnd'), safeRound);
  const high = round(ggb1.instance.getValue('highEnd'), safeRound);
  text1.updateData({ text: `$${low} < \\pi < ${high}$` }); // slide specific
  if (trigger[0] != buttonGroup1.data.last) {
    buttonGroup1.updateSingleButton({ text: 'Submit', disabled: false }, 1);
    buttonGroup1.updateData({ last: trigger[0] });
  }
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ text: 'Submitted', disabled: true }, 1);
});

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

/*
{"compTotals":{"geogebra":1,"separator":1,"textbox":3,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M1 TE L21 - Approximate Values of Roots and π²","teacherView":false,"layout":"two col"}
*/
