const { ggb1, feedback1, textDisplay3, fib1, separator1, button1 } = components;

ggb1.instance.showToolBar(false);
ggb1.instance.setErrorDialogsActive(false);

const prevInner =
  getFromSlide('slide-6e430bcff5e0', 'ggb1.innerData', false) || false;
if (prevInner) {
  const [x, y] = prevInner['O'];
  ggb1.instance.setCoords('O', x, y);
  ggb1.instance.evalCommand('SetConditionToShowObject(O, true)');
  ggb1.instance.setFixed('O', false, false);
}

slide.on('firstload', () => {
  button1.updateData({
    align: 'right',
    disabled: 'true',
  });
});

fib1.on('change', ({ values }) => {
  button1.updateData({
    text: 'Submit',
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"fillblank":1,"separator":1,"button":1},"stage":"Learn","lessonInfo":"8 M3 TC L09 - Describing Dilations","teacherView":false,"layout":"two col"}
*/
