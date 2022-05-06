const { ggb1, buttonGroup1, table1, text2 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  table1.setVisible(false);
});

let booleanArray = [
  'showInitialReflection',
  'showInitialRotation',
  'showInitialTranslation',
  'showRoute1',
  'showRoute2',
  'showRoute3',
  'showRoute4',
  'showRoute5',
  'showRoute6',
];

let routeArray = [
  'showRoute1',
  'showRoute2',
  'showRoute3',
  'showRoute4',
  'showRoute5',
  'showRoute6',
];

ggb1.instance.setErrorDialogsActive(false);

//rotate button
buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  if (ggb1.instance.getValue('count') == 0) {
    ggb1.instance.setValue('showInitialRotation', true);
  } else if (
    ggb1.instance.getValue('count') == 1 &&
    ggb1.instance.getValue('showInitialReflection')
  ) {
    ggb1.instance.setValue('showRoute1', true);
  } else if (
    ggb1.instance.getValue('count') == 1 &&
    ggb1.instance.getValue('showInitialTranslation')
  ) {
    ggb1.instance.setValue('showRoute6', true);
  } else if (
    ggb1.instance.getValue('count') == 2 &&
    ggb1.instance.getValue('showInitialReflection')
  ) {
    if (!ggb1.instance.getValue('route1Used')) {
      ggb1.instance.setValue(
        'textCount',
        ggb1.instance.getValue('textCount') + 1
      );
      table1.addRow(ggb1.instance.getValue('textCount'), {
        isHeader: false,
        math: false,
        editable: false,
      });
      table1.updateCell(ggb1.instance.getValue('textCount'), 0, {
        value: `$${ggb1.instance.getValue('textCount')}$`,
      });
      table1.updateCell(ggb1.instance.getValue('textCount'), 1, {
        value: '$F$ followed by $T$ followed by $R$',
      });
      ggb1.instance.setValue('route1Used', true);
    } else {
      text2.updateData({
        text: 'You have already applied this sequence of basic rigid motions.',
      });
    }
    table1.setVisible(true);
  } else if (
    ggb1.instance.getValue('count') == 2 &&
    ggb1.instance.getValue('showInitialTranslation')
  ) {
    if (!ggb1.instance.getValue('route2Used')) {
      ggb1.instance.setValue(
        'textCount',
        ggb1.instance.getValue('textCount') + 1
      );
      table1.addRow(ggb1.instance.getValue('textCount'), {
        isHeader: false,
        math: false,
        editable: false,
      });
      table1.updateCell(ggb1.instance.getValue('textCount'), 0, {
        value: `$${ggb1.instance.getValue('textCount')}$`,
      });
      table1.updateCell(ggb1.instance.getValue('textCount'), 1, {
        value: '$T$ followed by $F$ followed by $R$',
      });
      ggb1.instance.setValue('route2Used', true);
    } else {
      text2.updateData({
        text: 'You have already applied this sequence of basic rigid motions.',
      });
    }
    table1.setVisible(true);
  }
  ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  runAnimation();
});

//translate button
buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  if (ggb1.instance.getValue('count') == 0) {
    ggb1.instance.setValue('showInitialTranslation', true);
  } else if (
    ggb1.instance.getValue('count') == 1 &&
    ggb1.instance.getValue('showInitialReflection')
  ) {
    ggb1.instance.setValue('showRoute2', true);
  } else if (
    ggb1.instance.getValue('count') == 1 &&
    ggb1.instance.getValue('showInitialRotation')
  ) {
    ggb1.instance.setValue('showRoute4', true);
  } else if (
    ggb1.instance.getValue('count') == 2 &&
    ggb1.instance.getValue('showInitialReflection')
  ) {
    if (!ggb1.instance.getValue('route3Used')) {
      ggb1.instance.setValue(
        'textCount',
        ggb1.instance.getValue('textCount') + 1
      );
      table1.addRow(ggb1.instance.getValue('textCount'), {
        isHeader: false,
        math: false,
        editable: false,
      });
      table1.updateCell(ggb1.instance.getValue('textCount'), 0, {
        value: `$${ggb1.instance.getValue('textCount')}$`,
      });
      table1.updateCell(ggb1.instance.getValue('textCount'), 1, {
        value: '$F$ followed by $R$ followed by $T$',
      });
      ggb1.instance.setValue('route3Used', true);
    } else {
      text2.updateData({
        text: 'You have already applied this sequence of basic rigid motions.',
      });
    }
    table1.setVisible(true);
  } else if (
    ggb1.instance.getValue('count') == 2 &&
    ggb1.instance.getValue('showInitialRotation')
  ) {
    if (!ggb1.instance.getValue('route4Used')) {
      ggb1.instance.setValue(
        'textCount',
        ggb1.instance.getValue('textCount') + 1
      );
      table1.addRow(ggb1.instance.getValue('textCount'), {
        isHeader: false,
        math: false,
        editable: false,
      });
      table1.updateCell(ggb1.instance.getValue('textCount'), 0, {
        value: `$${ggb1.instance.getValue('textCount')}$`,
      });
      table1.updateCell(ggb1.instance.getValue('textCount'), 1, {
        value: '$R$ followed by $F$ followed by $T$',
      });
      ggb1.instance.setValue('route4Used', true);
    } else {
      text2.updateData({
        text: 'You have already applied this sequence of basic rigid motions.',
      });
    }
    table1.setVisible(true);
  }
  ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  runAnimation();
});

//reflect button
buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  if (ggb1.instance.getValue('count') == 0) {
    ggb1.instance.setValue('showInitialReflection', true);
  } else if (
    ggb1.instance.getValue('count') == 1 &&
    ggb1.instance.getValue('showInitialRotation')
  ) {
    ggb1.instance.setValue('showRoute3', true);
  } else if (
    ggb1.instance.getValue('count') == 1 &&
    ggb1.instance.getValue('showInitialTranslation')
  ) {
    ggb1.instance.setValue('showRoute5', true);
  } else if (
    ggb1.instance.getValue('count') == 2 &&
    ggb1.instance.getValue('showInitialRotation')
  ) {
    if (!ggb1.instance.getValue('route5Used')) {
      ggb1.instance.setValue(
        'textCount',
        ggb1.instance.getValue('textCount') + 1
      );
      table1.addRow(ggb1.instance.getValue('textCount'), {
        isHeader: false,
        math: false,
        editable: false,
      });
      table1.updateCell(ggb1.instance.getValue('textCount'), 0, {
        value: `$${ggb1.instance.getValue('textCount')}$`,
      });
      table1.updateCell(ggb1.instance.getValue('textCount'), 1, {
        value: '$R$ followed by $T$ followed by $F$',
      });
      ggb1.instance.setValue('route5Used', true);
    } else {
      text2.updateData({
        text: 'You have already applied this sequence of basic rigid motions.',
      });
    }
    table1.setVisible(true);
  } else if (
    ggb1.instance.getValue('count') == 2 &&
    ggb1.instance.getValue('showInitialTranslation')
  ) {
    if (!ggb1.instance.getValue('route6Used')) {
      ggb1.instance.setValue(
        'textCount',
        ggb1.instance.getValue('textCount') + 1
      );
      table1.addRow(ggb1.instance.getValue('textCount'), {
        isHeader: false,
        math: false,
        editable: false,
      });
      table1.updateCell(ggb1.instance.getValue('textCount'), 0, {
        value: `$${ggb1.instance.getValue('textCount')}$`,
      });
      table1.updateCell(ggb1.instance.getValue('textCount'), 1, {
        value: '$T$ followed by $R$ followed by $F$',
      });
      ggb1.instance.setValue('route6Used', true);
    } else {
      text2.updateData({
        text: 'You have already applied this sequence of basic rigid motions.',
      });
    }
    table1.setVisible(true);
  }
  ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  runAnimation();
});

buttonGroup1.on('click:4', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  ggb1.instance.setValue('count', 0);
  for (let i = 0, J = routeArray.length; i < J; i++) {
    if (ggb1.instance.getValue(routeArray[i])) {
      ggb1.instance.setVisible(`route${i + 1}Image`, true);
    }
  }
  for (let i = 0, J = booleanArray.length; i < J; i++) {
    ggb1.instance.setValue(booleanArray[i], false);
    if (ggb1.instance.getValue('showInitialRotation')) {
      ggb1.instance.setVisible('initialRotationGhostImage', true);
    } else if (ggb1.instance.getValue('showInitialTranslation')) {
      ggb1.instance.setVisible('initialTranslationGhostImage', true);
    }
  }
  ggb1.instance.setValue('count', 0);
  ggb1.instance.setValue('showInitialRotation', false);
  ggb1.instance.setValue('showInitialTranslation', false);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setAnimating('time3', false);
  ggb1.instance.setValue('time3', 0);
  text2.updateData({ text: '' });
});

function runAnimation() {
  if (ggb1.instance.getValue('count') == 1) {
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  } else if (ggb1.instance.getValue('count') == 2) {
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 1);
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.startAnimation();
  } else if (ggb1.instance.getValue('count') == 3) {
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 1);
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 1);
    ggb1.instance.setAnimating('time3', false);
    ggb1.instance.setValue('time3', 0);
    ggb1.instance.setAnimating('time3', true);
    ggb1.instance.startAnimation();
  }
}
