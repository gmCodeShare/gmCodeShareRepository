const { ggb1, text1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setValue('showTri', true);
  ggb1.instance.setPointCapture(1, 0);
  ggb1.instance.setPointStyle('SelfAggPoint', 10);
  ggb1.instance.setFixed('selfSeg', false, false);
  // ggb1.instance.setValue('showLaunch', true);
  // ggb1.instance.setValue('step', Math.log10(2));
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
  ggb1.instance.setAnimating('timeSelfSeg', true);
  ggb1.instance.setValue('timeSelfSeg', 0);
  ggb1.instance.setValue('launchHyp', ggb1.instance.getXcoord('Single') / 2);
  ggb1.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setFixed('SelfAggPoint', true, false);
  // buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

// autorun(() => {
//   const trigger = ggb1.innerData['Single'];
//   ggb1.instance.stopAnimation();
//   // ggb1.instance.setValue('timeSelfSeg', 0);
//   // buttonGroup1.updateSingleButton({ disabled: false }, 1);
// });
