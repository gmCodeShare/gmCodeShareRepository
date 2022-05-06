const { ggb1, ggb2, select1, select2, buttonGroup1 } = components;

slide.on('firstload', () => {
  ggb2.updateData({ visible: false });
  select1.selectOption('0');
  select2.selectOption('2');
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setValue('time', 1);
  ggb1.instance.setValue('Htime', 1);
  ggb1.instance.setValue('Htime2', 1);
});

segListA = [
  'a1',
  'a2',
  'a3',
  'a4',
  'a5',
  'aIm1',
  'aIm2',
  'aIm3',
  'aIm4',
  'aIm5',
  'b1',
  'b2',
  'b3',
  'b4',
  'b5',
  'bIm1',
  'bIm2',
  'bIm3',
  'bIm4',
  'bIm5',
  'c1',
  'c2',
  'c3',
  'c4',
  'c5',
  'cIm1',
  'cIm2',
  'cIm3',
  'cIm4',
  'cIm5',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'hIm1',
  'hIm2',
  'hIm3',
  'hIm4',
  'hIm5',
];

segListB = [
  'd1',
  'd2',
  'd3',
  'd4',
  'd5',
  'dIm1',
  'dIm2',
  'dIm3',
  'dIm4',
  'dIm5',
  'e1',
  'e2',
  'e3',
  'e4',
  'e5',
  'eIm1',
  'eIm2',
  'eIm3',
  'eIm4',
  'eIm5',
  'f1',
  'f2',
  'f3',
  'f4',
  'f5',
  'fIm1',
  'fIm2',
  'fIm3',
  'fIm4',
  'fIm5',
  'g1',
  'g2',
  'g3',
  'g4',
  'g5',
  'gIm1',
  'gIm2',
  'gIm3',
  'gIm4',
  'gIm5',
];

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('time', updateTimes);
ggb1.instance.registerObjectUpdateListener('Htime', updateGGB2Htime);
ggb1.instance.registerObjectUpdateListener('Htime2', updateGGB2Htime2);

ggb2.instance.registerObjectClickListener('XBox', backToGGB1);
ggb1.instance.registerObjectClickListener('q1ExpandBox', expandQ1);
ggb1.instance.registerObjectClickListener('q2ExpandBox', expandQ2);
ggb1.instance.registerObjectClickListener('q3ExpandBox', expandQ3);
ggb1.instance.registerObjectClickListener('q4ExpandBox', expandQ4);

ggb1.instance.registerClientListener(focusIndicatorsGGB1);
ggb2.instance.registerClientListener(focusIndicatorGGB2);

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

function focusIndicatorGGB2(a) {
  if (a.type == 'select') {
    if (a.target == 'XBox') {
      ggb2.instance.setVisible('focusIndicator', true);
    } else {
      ggb2.instance.setVisible('focusIndicator', false);
    }
  }
  if (a.type == 'deselect') {
    turnOffExpandIndicators();
  }
}

function backToGGB1() {
  turnOffExpandIndicators();
  ggb2.updateData({ visible: false });
  ggb1.updateData({ visible: true });
}

function expandQ1() {
  turnOffExpandIndicators();
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
  ggb2.instance.setValue('showQ1', true);
  ggb2.instance.setValue('showQ2', false);
  ggb2.instance.setValue('showQ3', false);
  ggb2.instance.setValue('showQ4', false);
  ggb2.instance.evalCommand('CenterView(Q1Centroid)');
}

function expandQ2() {
  turnOffExpandIndicators();
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
  ggb2.instance.setValue('showQ1', false);
  ggb2.instance.setValue('showQ2', true);
  ggb2.instance.setValue('showQ3', false);
  ggb2.instance.setValue('showQ4', false);
  ggb2.instance.evalCommand('CenterView(Q2Centroid)');
}

function expandQ3() {
  turnOffExpandIndicators();
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
  ggb2.instance.setValue('showQ1', false);
  ggb2.instance.setValue('showQ2', false);
  ggb2.instance.setValue('showQ3', true);
  ggb2.instance.setValue('showQ4', false);
  ggb2.instance.evalCommand('CenterView(Q3Centroid)');
}

function expandQ4() {
  turnOffExpandIndicators();
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
  ggb2.instance.setValue('showQ1', false);
  ggb2.instance.setValue('showQ2', false);
  ggb2.instance.setValue('showQ3', false);
  ggb2.instance.setValue('showQ4', true);
  ggb2.instance.evalCommand('CenterView(Q4Centroid)');
}

function updateTimes() {
  ggb2.instance.setValue('time', ggb1.instance.getValue('time'));
}

function updateGGB2Htime() {
  ggb2.instance.setValue('Htime', ggb1.instance.getValue('Htime'));
}

function updateGGB2Htime2() {
  ggb2.instance.setValue('Htime2', ggb1.instance.getValue('Htime2'));
}

function turnOffExpandIndicators() {
  ggb1.instance.setVisible('q1FocusIndicator', false);
  ggb1.instance.setVisible('q2FocusIndicator', false);
  ggb1.instance.setVisible('q3FocusIndicator', false);
  ggb1.instance.setVisible('q4FocusIndicator', false);
  ggb2.instance.setVisible('focusIndicator', false);
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue('time', 1);
  ggb1.instance.setValue('Htime', 1);
  ggb1.instance.setValue('Htime2', 1);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setValue('Htime', 0);
  ggb1.instance.setValue('Htime2', 0);
});

select1.on('change', (selected) => {
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setValue('showSetA', false);
    ggb2.instance.setValue('showSetA', false);
    if (select2.data.selected.includes('0')) {
      for (i = 0, L = segListB.length; i < L; i++) {
        ggb1.instance.setLabelVisible(segListB[i], true);
        ggb2.instance.setLabelVisible(segListB[i], true);
      }
    }
  } else {
    ggb1.instance.setValue('showSetA', true);
    ggb2.instance.setValue('showSetA', true);
    if (select2.data.selected.includes('0')) {
      for (i = 0, L = segListA.length; i < L; i++) {
        ggb1.instance.setLabelVisible(segListA[i], true);
        ggb2.instance.setLabelVisible(segListA[i], true);
      }
    }
  }
});

select2.on('change', (selected) => {
  if (select2.data.selected.includes('0')) {
    if (ggb1.instance.getValue('showSetA')) {
      for (i = 0, L = segListA.length; i < L; i++) {
        ggb1.instance.setLabelVisible(segListA[i], true);
        ggb2.instance.setLabelVisible(segListA[i], true);
      }
    } else {
      for (i = 0, L = segListB.length; i < L; i++) {
        ggb1.instance.setLabelVisible(segListB[i], true);
        ggb2.instance.setLabelVisible(segListB[i], true);
      }
    }
  } else {
    for (i = 0, L = segListA.length; i < L; i++) {
      ggb1.instance.setLabelVisible(segListA[i], false);
      ggb2.instance.setLabelVisible(segListA[i], false);
    }
    for (i = 0, L = segListB.length; i < L; i++) {
      ggb1.instance.setLabelVisible(segListB[i], false);
      ggb2.instance.setLabelVisible(segListB[i], false);
    }
  }
  if (select2.data.selected.includes('1')) {
    ggb1.instance.setValue('showAngles', true);
    ggb2.instance.setValue('showAngles', true);
  } else {
    ggb1.instance.setValue('showAngles', false);
    ggb2.instance.setValue('showAngles', false);
  }
});
