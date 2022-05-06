const {
  ggb1,
  feedback,
  cc_sharewithclass_f46003465b97_textbox1,
  cc_sharewithclass_f46003465b97_input1,
  cc_sharewithclass_f46003465b97_button1,
  cc_sharewithclass_f46003465b97_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setValue('showTri', true);
  const lightGray = [160, 160, 160];
  ggb1.instance.setColor('h', ...lightGray);
  ggb1.instance.setColor('i', ...lightGray);
  ggb1.instance.setColor('angleA', ...lightGray);
  ggb1.instance.setColor('text9', ...lightGray);
  ggb1.instance.setColor('text10', ...lightGray);
  ggb1.instance.setColor('j', 0, 127, 175);
  ggb1.instance.setLineStyle('j', 0);
});

(() => {
  const prevGGB =
    getFromSlide('slide-cfc84df559e9', 'ggb1.innerData', false) || false;
  if (!prevGGB) {
    return;
  }
  ggb1.instance.setValue('zoom', prevGGB['zoom']);
  ggb1.instance.setValue('launchHyp', prevGGB['launchHyp']);
  ggb1.instance.setValue('time2', 1);
  ggb1.instance.evalCommand('SetConditionToShowObject(l, true)');
})();

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M1 TE L21 - Approximate Values of Roots and π²","teacherView":false,"layout":"two col"}
*/
