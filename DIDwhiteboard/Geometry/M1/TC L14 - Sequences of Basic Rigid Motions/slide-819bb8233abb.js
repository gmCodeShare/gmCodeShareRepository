const { ggb1, select1, select2, buttonGroup1, text2 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateData({ visible: false });
  text2.updateData({ visible: false });
  ggb1.instance.setValue('state', 2);
  select2.setVisible(false);
});

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener(
  'counterclockwise',
  clockwiseButtons
);
ggb1.instance.registerObjectUpdateListener('angleVal', angleButtons);

ggb1.instance.registerObjectUpdateListener('show90Hover', display90Hover);
ggb1.instance.registerObjectUpdateListener('show180Hover', display180Hover);
ggb1.instance.registerObjectUpdateListener('show270Hover', display270Hover);
ggb1.instance.registerObjectUpdateListener(
  'showClockwiseHover',
  displayClockwiseHover
);
ggb1.instance.registerObjectUpdateListener(
  'showCounterclockwiseHover',
  displayCounterclockwiseHover
);

ggb1.instance.registerClientListener(focusIndicator);

function clockwiseButtons() {
  if (ggb1.instance.getValue('counterclockwise')) {
    ggb1.instance.setFixed('bboxCounterclockwise', false, false);
    ggb1.instance.setFixed('bboxClockwise', true, true);
  } else {
    ggb1.instance.setFixed('bboxCounterclockwise', true, true);
    ggb1.instance.setFixed('bboxClockwise', false, false);
  }
}

function angleButtons() {
  if (ggb1.instance.getValue('angleVal') == 90) {
    ggb1.instance.setFixed('box90', false, false);
    ggb1.instance.setFixed('box180', true, true);
    ggb1.instance.setFixed('box270', true, true);
  } else if (ggb1.instance.getValue('angleVal') == 180) {
    ggb1.instance.setFixed('box90', true, true);
    ggb1.instance.setFixed('box180', false, false);
    ggb1.instance.setFixed('box270', true, true);
  } else if (ggb1.instance.getValue('angleVal') == 270) {
    ggb1.instance.setFixed('box90', true, true);
    ggb1.instance.setFixed('box180', true, true);
    ggb1.instance.setFixed('box270', false, false);
  }
}

function display90Hover() {
  if (ggb1.instance.getValue('show90Hover')) {
    ggb1.instance.setVisible('box90Hover', true);
  } else {
    ggb1.instance.setVisible('box90Hover', false);
  }
}

function display180Hover() {
  if (ggb1.instance.getValue('show180Hover')) {
    ggb1.instance.setVisible('box180Hover', true);
  } else {
    ggb1.instance.setVisible('box180Hover', false);
  }
}

function display270Hover() {
  if (ggb1.instance.getValue('show270Hover')) {
    ggb1.instance.setVisible('box270Hover', true);
  } else {
    ggb1.instance.setVisible('box270Hover', false);
  }
}

function displayClockwiseHover() {
  if (ggb1.instance.getValue('showClockwiseHover')) {
    ggb1.instance.setVisible('boxClockwiseHover', true);
  } else {
    ggb1.instance.setVisible('boxClockwiseHover', false);
  }
}

function displayCounterclockwiseHover() {
  if (ggb1.instance.getValue('showCounterclockwiseHover')) {
    ggb1.instance.setVisible('boxCounterclockwiseHover', true);
  } else {
    ggb1.instance.setVisible('boxCounterclockwiseHover', false);
  }
}

function focusIndicator(a) {
  if (a.type == 'select') {
    if (a.target == 'box90') {
      ggb1.instance.setVisible('box90Hover', true);
    } else {
      ggb1.instance.setVisible('box90Hover', false);
    }
    if (a.target == 'box180') {
      ggb1.instance.setVisible('box180Hover', true);
    } else {
      ggb1.instance.setVisible('box180Hover', false);
    }
    if (a.target == 'box270') {
      ggb1.instance.setVisible('box270Hover', true);
    } else {
      ggb1.instance.setVisible('box270Hover', false);
    }
    if (a.target == 'bboxClockwise') {
      ggb1.instance.setVisible('boxClockwiseHover', true);
    } else {
      ggb1.instance.setVisible('boxClockwiseHover', false);
    }
    if (a.target == 'bboxCounterclockwise') {
      ggb1.instance.setVisible('boxCounterclockwiseHover', true);
    } else {
      ggb1.instance.setVisible('boxCounterclockwiseHover', false);
    }
  }
  if (a.type == 'deselect') {
    ggb1.instance.setVisible('box90Hover', false);
    ggb1.instance.setVisible('box180Hover', false);
    ggb1.instance.setVisible('box270Hover', false);
    ggb1.instance.setVisible('boxClockwiseHover', false);
    ggb1.instance.setVisible('boxCounterclockwiseHover', false);
  }
}

select1.on('change', (selected) => {
  select2.setVisible(true);
  if (select1.data.selected.includes('0')) {
    text2.updateData({
      text: 'Apply a basic rigid motion to support your answer.',
    });
  } else {
    text2.updateData({
      text: 'Apply each of the basic rigid motions to support your answer.',
    });
  }
  text2.updateData({ visible: true });
});

select2.on('change', (selected) => {
  buttonGroup1.updateData({ visible: true });
  if (select2.data.selected.includes('0')) {
    buttonGroup1.updateSingleButton({ text: 'Reflect' }, 1);
    ggb1.instance.setValue('showReflection', true);
  } else {
    ggb1.instance.setValue('showReflection', false);
  }
  if (select2.data.selected.includes('1')) {
    buttonGroup1.updateSingleButton({ text: 'Rotate' }, 1);
    ggb1.instance.setValue('showRotation', true);
  } else {
    ggb1.instance.setValue('showRotation', false);
  }
  if (select2.data.selected.includes('2')) {
    buttonGroup1.updateSingleButton({ text: 'Translate' }, 1);
    ggb1.instance.setValue('showTranslation', true);
  } else {
    ggb1.instance.setValue('showTranslation', false);
  }
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  select2.setDisabled(true);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  select2.setDisabled(false);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
});
