const { ggb1, ggb2, ggb3, ggb4, select1 } = components;

slide.on('firstload', () => {
  ggb3.updateData({ visible: false });
  ggb4.updateData({ visible: false });
  select1.selectOption('1');
});

ggb2and4Labels = [
  'C1',
  'C2',
  'C3',
  'C4',
  'D1',
  'D2',
  'D3',
  'D4',
  'E1',
  'E2',
  'E3',
  'E4',
];
ggb3Labels = [
  'q1AB',
  'q1BC',
  'q1CA',
  'q2AB',
  'q2BC',
  'q2CA',
  'q3AB',
  'q3BC',
  'q3CA',
  'q4AB',
  'q4BC',
  'q4CA',
];

q1Labels = ['C1', 'D1', 'E1'];
q2Labels = ['C2', 'D2', 'E2'];
q3Labels = ['C3', 'D3', 'E3'];
q4Labels = ['C4', 'D4', 'E4'];

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb3.instance.setErrorDialogsActive(false);
ggb4.instance.setErrorDialogsActive(false);

ggb3.instance.registerObjectClickListener('xBox', backToGGB1);
ggb4.instance.registerObjectClickListener('xBox', backToGGB2);

ggb1.instance.registerObjectClickListener('q1ExpandBox', expandQ1GGB1);
ggb1.instance.registerObjectClickListener('q2ExpandBox', expandQ2GGB1);
ggb1.instance.registerObjectClickListener('q3ExpandBox', expandQ3GGB1);
ggb1.instance.registerObjectClickListener('q4ExpandBox', expandQ4GGB1);

ggb2.instance.registerObjectClickListener('q1ExpandBox', expandQ1GGB2);
ggb2.instance.registerObjectClickListener('q2ExpandBox', expandQ2GGB2);
ggb2.instance.registerObjectClickListener('q3ExpandBox', expandQ3GGB2);
ggb2.instance.registerObjectClickListener('q4ExpandBox', expandQ4GGB2);

ggb1.instance.registerClientListener(focusIndicatorsGGB1);
ggb2.instance.registerClientListener(focusIndicatorsGGB2);
ggb3.instance.registerClientListener(focusIndicatorGGB3);
ggb4.instance.registerClientListener(focusIndicatorGGB4);

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    for (let i = 0, L = ggb3Labels.length; i < L; i++) {
      ggb1.instance.setVisible(`C${i + 1}`, true);
      ggb2.instance.setVisible(ggb2and4Labels[i], true);
      ggb3.instance.setLabelVisible(ggb3Labels[i], true);
    }
    ggb4LabelWork();
  } else {
    for (let i = 0, L = ggb3Labels.length; i < L; i++) {
      ggb1.instance.setVisible(`C${i + 1}`, false);
      ggb2.instance.setVisible(ggb2and4Labels[i], false);
      ggb3.instance.setLabelVisible(ggb3Labels[i], false);
      ggb4.instance.setVisible(ggb2and4Labels[i], false);
    }
  }
});

function ggb4LabelWork() {
  for (let i = 0, L = ggb3Labels.length; i < L; i++) {
    ggb4.instance.setVisible(ggb2and4Labels[i], false);
  }
  if (ggb4.instance.getValue('showQ1') && select1.data.selected.includes('0')) {
    for (let i = 0, L = q1Labels.length; i < L; i++) {
      ggb4.instance.setVisible(q1Labels[i], true);
    }
  } else if (
    ggb4.instance.getValue('showQ2') &&
    select1.data.selected.includes('0')
  ) {
    for (let i = 0, L = q2Labels.length; i < L; i++) {
      ggb4.instance.setVisible(q2Labels[i], true);
    }
  } else if (
    ggb4.instance.getValue('showQ3') &&
    select1.data.selected.includes('0')
  ) {
    for (let i = 0, L = q3Labels.length; i < L; i++) {
      ggb4.instance.setVisible(q3Labels[i], true);
    }
  } else if (
    ggb4.instance.getValue('showQ4') &&
    select1.data.selected.includes('0')
  ) {
    for (let i = 0, L = q4Labels.length; i < L; i++) {
      ggb4.instance.setVisible(q4Labels[i], true);
    }
  }
}

function focusIndicatorsGGB1(a) {
  if (a.type == 'select') {
    if (a.target == 'q1ExpandBox') {
      ggb1.instance.setVisible('q1FocusIndicator', true);
    } else {
      ggb1.instance.setVisible('q1FocusIndicator', false);
    }
    if (a.target == 'q2ExpandBox') {
      ggb1.instance.setVisible('q2FocusIndicator', true);
    } else {
      ggb1.instance.setVisible('q2FocusIndicator', false);
    }
    if (a.target == 'q3ExpandBox') {
      ggb1.instance.setVisible('q3FocusIndicator', true);
    } else {
      ggb1.instance.setVisible('q3FocusIndicator', false);
    }
    if (a.target == 'q4ExpandBox') {
      ggb1.instance.setVisible('q4FocusIndicator', true);
    } else {
      ggb1.instance.setVisible('q4FocusIndicator', false);
    }
  }
  if (a.type == 'deselect') {
    ggb1.instance.setVisible('q1FocusIndicator', false);
    ggb1.instance.setVisible('q2FocusIndicator', false);
    ggb1.instance.setVisible('q3FocusIndicator', false);
    ggb1.instance.setVisible('q4FocusIndicator', false);
  }
}

function focusIndicatorsGGB2(a) {
  if (a.type == 'select') {
    if (a.target == 'q1ExpandBox') {
      ggb2.instance.setVisible('q1FocusIndicator', true);
    } else {
      ggb2.instance.setVisible('q1FocusIndicator', false);
    }
    if (a.target == 'q2ExpandBox') {
      ggb2.instance.setVisible('q2FocusIndicator', true);
    } else {
      ggb2.instance.setVisible('q2FocusIndicator', false);
    }
    if (a.target == 'q3ExpandBox') {
      ggb2.instance.setVisible('q3FocusIndicator', true);
    } else {
      ggb2.instance.setVisible('q3FocusIndicator', false);
    }
    if (a.target == 'q4ExpandBox') {
      ggb2.instance.setVisible('q4FocusIndicator', true);
    } else {
      ggb2.instance.setVisible('q4FocusIndicator', false);
    }
  }
  if (a.type == 'deselect') {
    ggb2.instance.setVisible('q1FocusIndicator', false);
    ggb2.instance.setVisible('q2FocusIndicator', false);
    ggb2.instance.setVisible('q3FocusIndicator', false);
    ggb2.instance.setVisible('q4FocusIndicator', false);
  }
}

function focusIndicatorGGB3(a) {
  if (a.type == 'select') {
    if (a.target == 'xBox') {
      ggb3.instance.setVisible('focusIndicator', true);
    } else {
      ggb3.instance.setVisible('focusIndicator', false);
    }
  }
  if (a.type == 'deselect') {
    turnOffExpandIndicators();
  }
}

function focusIndicatorGGB4(a) {
  if (a.type == 'select') {
    if (a.target == 'xBox') {
      ggb4.instance.setVisible('focusIndicator', true);
    } else {
      ggb4.instance.setVisible('focusIndicator', false);
    }
  }
  if (a.type == 'deselect') {
    turnOffExpandIndicators2();
  }
}

function backToGGB1() {
  turnOffExpandIndicators();
  ggb3.updateData({ visible: false });
  ggb1.updateData({ visible: true });
}

function backToGGB2() {
  turnOffExpandIndicators2();
  ggb4.updateData({ visible: false });
  ggb2.updateData({ visible: true });
}

function expandQ1GGB1() {
  turnOffExpandIndicators();
  ggb1.updateData({ visible: false });
  ggb3.updateData({ visible: true });
  ggb3.instance.setValue('showQ1', true);
  ggb3.instance.setValue('showQ2', false);
  ggb3.instance.setValue('showQ3', false);
  ggb3.instance.setValue('showQ4', false);
}

function expandQ2GGB1() {
  turnOffExpandIndicators();
  ggb1.updateData({ visible: false });
  ggb3.updateData({ visible: true });
  ggb3.instance.setValue('showQ1', false);
  ggb3.instance.setValue('showQ2', true);
  ggb3.instance.setValue('showQ3', false);
  ggb3.instance.setValue('showQ4', false);
}

function expandQ3GGB1() {
  turnOffExpandIndicators();
  ggb1.updateData({ visible: false });
  ggb3.updateData({ visible: true });
  ggb3.instance.setValue('showQ1', false);
  ggb3.instance.setValue('showQ2', false);
  ggb3.instance.setValue('showQ3', true);
  ggb3.instance.setValue('showQ4', false);
}

function expandQ4GGB1() {
  turnOffExpandIndicators();
  ggb1.updateData({ visible: false });
  ggb3.updateData({ visible: true });
  ggb3.instance.setValue('showQ1', false);
  ggb3.instance.setValue('showQ2', false);
  ggb3.instance.setValue('showQ3', false);
  ggb3.instance.setValue('showQ4', true);
}

function expandQ1GGB2() {
  turnOffExpandIndicators2();
  ggb2.updateData({ visible: false });
  ggb4.updateData({ visible: true });
  ggb4.instance.setValue('showQ1', true);
  ggb4.instance.setValue('showQ2', false);
  ggb4.instance.setValue('showQ3', false);
  ggb4.instance.setValue('showQ4', false);
  ggb4LabelWork();
}

function expandQ2GGB2() {
  turnOffExpandIndicators2();
  ggb2.updateData({ visible: false });
  ggb4.updateData({ visible: true });
  ggb4.instance.setValue('showQ1', false);
  ggb4.instance.setValue('showQ2', true);
  ggb4.instance.setValue('showQ3', false);
  ggb4.instance.setValue('showQ4', false);
  ggb4LabelWork();
}

function expandQ3GGB2() {
  turnOffExpandIndicators2();
  ggb2.updateData({ visible: false });
  ggb4.updateData({ visible: true });
  ggb4.instance.setValue('showQ1', false);
  ggb4.instance.setValue('showQ2', false);
  ggb4.instance.setValue('showQ3', true);
  ggb4.instance.setValue('showQ4', false);
  ggb4LabelWork();
}

function expandQ4GGB2() {
  turnOffExpandIndicators2();
  ggb2.updateData({ visible: false });
  ggb4.updateData({ visible: true });
  ggb4.instance.setValue('showQ1', false);
  ggb4.instance.setValue('showQ2', false);
  ggb4.instance.setValue('showQ3', false);
  ggb4.instance.setValue('showQ4', true);
  ggb4LabelWork();
}

function turnOffExpandIndicators() {
  ggb1.instance.setVisible('q1FocusIndicator', false);
  ggb1.instance.setVisible('q2FocusIndicator', false);
  ggb1.instance.setVisible('q3FocusIndicator', false);
  ggb1.instance.setVisible('q4FocusIndicator', false);
  ggb3.instance.setVisible('focusIndicator', false);
}

function turnOffExpandIndicators2() {
  ggb2.instance.setVisible('q1FocusIndicator', false);
  ggb2.instance.setVisible('q2FocusIndicator', false);
  ggb2.instance.setVisible('q3FocusIndicator', false);
  ggb2.instance.setVisible('q4FocusIndicator', false);
  ggb4.instance.setVisible('focusIndicator', false);
}

utils.RTS.on('datachange', 'slide-eb18fa7ca80f', (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first

  ggb1.instance.setValue('count', 0);

  // think of this forEach as "for each student's input, do the following"
  lastRegister.forEach(({ data, info }) => {
    const { AXVal, AYVal, BXVal, BYVal, CXVal, CYVal } = data;

    let index = (ggb1.instance.getValue('count') % 4) + 1;

    ggb1.instance.setValue('q' + index + 'AXVal', AXVal);
    ggb1.instance.setValue('q' + index + 'AYVal', AYVal);
    ggb1.instance.setValue('q' + index + 'BXVal', BXVal);
    ggb1.instance.setValue('q' + index + 'BYVal', BYVal);
    ggb1.instance.setValue('q' + index + 'CXVal', CXVal);
    ggb1.instance.setValue('q' + index + 'CYVal', CYVal);

    ggb3.instance.setValue('q' + index + 'AXVal', AXVal);
    ggb3.instance.setValue('q' + index + 'AYVal', AYVal);
    ggb3.instance.setValue('q' + index + 'BXVal', BXVal);
    ggb3.instance.setValue('q' + index + 'BYVal', BYVal);
    ggb3.instance.setValue('q' + index + 'CXVal', CXVal);
    ggb3.instance.setValue('q' + index + 'CYVal', CYVal);

    ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  });
});

utils.RTS.on('datachange', 'slide-0800759671fc', (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first

  ggb2.instance.setValue('count', 0);

  // think of this forEach as "for each student's input, do the following"
  lastRegister.forEach(({ data, info }) => {
    const { AXVal, AYVal, BXVal, BYVal, CXVal, CYVal } = data;

    let index2 = (ggb2.instance.getValue('count') % 4) + 1;

    ggb2.instance.setValue('q' + index2 + 'AXVal', AXVal);
    ggb2.instance.setValue('q' + index2 + 'AYVal', AYVal);
    ggb2.instance.setValue('q' + index2 + 'BXVal', BXVal);
    ggb2.instance.setValue('q' + index2 + 'BYVal', BYVal);
    ggb2.instance.setValue('q' + index2 + 'CXVal', CXVal);
    ggb2.instance.setValue('q' + index2 + 'CYVal', CYVal);

    ggb4.instance.setValue('q' + index2 + 'AXVal', AXVal);
    ggb4.instance.setValue('q' + index2 + 'AYVal', AYVal);
    ggb4.instance.setValue('q' + index2 + 'BXVal', BXVal);
    ggb4.instance.setValue('q' + index2 + 'BYVal', BYVal);
    ggb4.instance.setValue('q' + index2 + 'CXVal', CXVal);
    ggb4.instance.setValue('q' + index2 + 'CYVal', CYVal);

    ggb2.instance.setValue('count', ggb2.instance.getValue('count') + 1);
  });
});

// use this function as is
function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared
      return !deviceHasPreviousAnswer;
    });
}
