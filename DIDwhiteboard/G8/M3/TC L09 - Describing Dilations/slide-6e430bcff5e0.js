const { ggb1, separator4, button1, feedback1, textDisplay3 } = components;

slide.on('firstload', () => {
  //watchToolbar(0);
  ggb1.instance.setOnTheFlyPointCreationActive(false);
  ggb1.instance.setMode(1);
  button1.updateData({ disabled: true });
});

ggb1.instance.setErrorDialogsActive(false);

const selectables = ['A', "A'", 'B', "B'", 'C', "C'", 'D', "D'"];

watchToolbar(ggb1.instance.getMode());

function watchToolbar(num) {
  ggb1.instance.evalCommand('SelectObjects()');
  const selModes = [2];
  for (let i = 0, L = selectables.length; i < L; i++) {
    ggb1.instance.setFixed(selectables[i], true, selModes.includes(num));
  }
  const OModes = [0];
  ggb1.instance.setFixed('O', false, OModes.includes(num));
}

ggb1.instance.registerClientListener((a) => {
  switch (a.type) {
    case 'setMode':
      watchToolbar(parseInt(a.argument));
      break;
  }
});

ggb1.instance.registerAddListener((a) => {
  if (ggb1.instance.getObjectType(a) != 'point') {
    return;
  }
  const [x, y] = [ggb1.instance.getXcoord(a), ggb1.instance.getYcoord(a)];
  ggb1.instance.setCoords('O', x, y);
  ggb1.instance.setValue('showO', true);
  ggb1.instance.deleteObject(a);
});

button1.on('click', () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

ggb1.instance.registerObjectUpdateListener('O', () => {
  button1.updateData({ disabled: false });
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
});

autorun(() => {
  const enableTimes = [1];
  button1.updateData({
    disabled: !enableTimes.includes(ggb1.innerData['time']),
  });
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":2},"stage":"Learn","lessonInfo":"8 M3 TC L09 - Describing Dilations","teacherView":false,"layout":"two col"}
*/
