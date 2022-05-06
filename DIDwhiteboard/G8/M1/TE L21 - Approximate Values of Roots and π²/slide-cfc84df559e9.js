const { ggb1, separator2, buttonGroup1, feedback, textDisplay5 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setValue('showTri', true);
  ggb1.instance.setValue('showLaunch', true);
  ggb1.instance.setValue('step', Math.log10(2));
  const lightGray = [160, 160, 160];
  ggb1.instance.setColor('h', ...lightGray);
  ggb1.instance.setColor('i', ...lightGray);
  ggb1.instance.setColor('angleA', ...lightGray);
  ggb1.instance.setColor('text9', ...lightGray);
  ggb1.instance.setColor('text10', ...lightGray);
  // ggb1.instance.setColor("j", 0, 127, 175);
  // ggb1.instance.setLineStyle("j", 0);
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time2', true);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setValue('launchHyp', ggb1.instance.getXcoord('Single') / 2);
  ggb1.instance.startAnimation();
  // buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

autorun(() => {
  const trigger = ggb1.innerData['Single'];
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time2', 0);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

autorun(() => {
  const time = ggb1.innerData['time2'];
  const enableTimes = [0, 1];
  buttonGroup1.updateSingleButton({ disabled: !enableTimes.includes(time) }, 1);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":2},"stage":"Launch","lessonInfo":"8 M1 TE L21 - Approximate Values of Roots and π²","teacherView":false,"layout":"two col"}
*/
