const {
  ggb1,
  table1,
  select1,
  buttonGroup1,
  cc_submit_fdbc8c6110ea_textbox1: submitText1,
  cc_submit_fdbc8c6110ea_input1: submitInput1,
  cc_submit_fdbc8c6110ea_button1: submitButton1,
} = components;

slide.on('firstload', () => {
  table1.setVisible(false);
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('showInitialReflection', true);
  ggb1.instance.setValue('showRoute1', true);
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

ggb1.instance.registerObjectUpdateListener('time', startTime2);
ggb1.instance.registerObjectUpdateListener('time2', startTime3);
ggb1.instance.registerObjectUpdateListener('time3', startPause);
ggb1.instance.registerObjectUpdateListener('pause', restartAnimation);
ggb1.instance.registerObjectUpdateListener('count', updateRoutes);

function updateRoutes() {
  if (ggb1.instance.getValue('count') == 1) {
    ggb1.instance.setVisible('route1Image', true);
    ggb1.instance.setLabelVisible('route1Image', true);
    ggb1.instance.setValue('showRoute1', false);
    ggb1.instance.setValue('showRoute2', true);
  } else if (ggb1.instance.getValue('count') == 2) {
    ggb1.instance.setVisible('route2Image', true);
    ggb1.instance.setLabelVisible('route2Image', true);
    ggb1.instance.setValue('showRoute2', false);
    ggb1.instance.setValue('showInitialReflection', false);
    ggb1.instance.setValue('showInitialRotation', true);
    ggb1.instance.setValue('showRoute3', true);
  } else if (ggb1.instance.getValue('count') == 3) {
    ggb1.instance.setVisible('route3Image', true);
    ggb1.instance.setLabelVisible('route3Image', true);
    ggb1.instance.setValue('showRoute3', false);
    ggb1.instance.setValue('showRoute4', true);
  } else if (ggb1.instance.getValue('count') == 4) {
    ggb1.instance.setVisible('route4Image', true);
    ggb1.instance.setValue('showRoute4', false);
    ggb1.instance.setValue('showInitialRotation', false);
    ggb1.instance.setValue('showInitialTranslation', true);
    ggb1.instance.setValue('showRoute5', true);
  } else if (ggb1.instance.getValue('count') == 5) {
    ggb1.instance.setVisible('route5Image', true);
    ggb1.instance.setValue('showRoute5', false);
    ggb1.instance.setValue('showRoute6', true);
  } else if (ggb1.instance.getValue('count') == 6) {
    ggb1.instance.setVisible('route6Image', true);
    ggb1.instance.setLabelVisible('route6Image', true);
    ggb1.instance.setValue('showRoute6', false);
    ggb1.instance.setValue('showInitialTranslation', false);
    ggb1.instance.setValue('showInitialReflection', true);
    ggb1.instance.setValue('showRoute1', true);
    ggb1.instance.setValue('count', 0);
  }
}

function startTime2() {
  if (ggb1.instance.getValue('time') == 1) {
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.startAnimation();
  }
}

function startTime3() {
  if (ggb1.instance.getValue('time2') == 1) {
    ggb1.instance.setAnimating('time3', false);
    ggb1.instance.setValue('time3', 0);
    ggb1.instance.setAnimating('time3', true);
    ggb1.instance.startAnimation();
  }
}

function startPause() {
  if (ggb1.instance.getValue('time3') == 1) {
    ggb1.instance.setAnimating('pause', false);
    ggb1.instance.setValue('pause', 0);
    ggb1.instance.setAnimating('pause', true);
    ggb1.instance.startAnimation();
  }
}

function restartAnimation() {
  if (ggb1.instance.getValue('pause') == 1) {
    updateTable();
    ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('time3', false);
    ggb1.instance.setValue('time3', 0);
    ggb1.instance.setAnimating('pause', false);
    ggb1.instance.setValue('pause', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
}

function updateTable() {
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
      value: '$F$ followed by $R$ followed by $T$',
    });
    table1.updateCell(ggb1.instance.getValue('textCount'), 2, {
      value: '$P$',
    });
    ggb1.instance.setValue('route1Used', true);
  } else if (!ggb1.instance.getValue('route2Used')) {
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
    table1.updateCell(ggb1.instance.getValue('textCount'), 2, {
      value: '$Q$',
    });
    ggb1.instance.setValue('route2Used', true);
  } else if (!ggb1.instance.getValue('route3Used')) {
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
    table1.updateCell(ggb1.instance.getValue('textCount'), 2, {
      value: '$R$',
    });
    ggb1.instance.setValue('route3Used', true);
  } else if (!ggb1.instance.getValue('route4Used')) {
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
    table1.updateCell(ggb1.instance.getValue('textCount'), 2, {
      value: '$R$',
    });
    ggb1.instance.setValue('route4Used', true);
  } else if (!ggb1.instance.getValue('route5Used')) {
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
    table1.updateCell(ggb1.instance.getValue('textCount'), 2, {
      value: '$Q$',
    });
    ggb1.instance.setValue('route5Used', true);
  } else if (!ggb1.instance.getValue('route6Used')) {
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
    table1.updateCell(ggb1.instance.getValue('textCount'), 2, {
      value: '$S$',
    });
    ggb1.instance.setValue('route6Used', true);
  }
  table1.setVisible(true);
}

select1.on('change', (selected) => {
  submitText1.updateData({ visible: true });
  submitInput1.updateData({ visible: true });
  submitButton1.updateData({ visible: true });
  if (
    ggb1.instance.getValue('time') == 0 &&
    ggb1.instance.getValue('count') == 0
  ) {
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
});
