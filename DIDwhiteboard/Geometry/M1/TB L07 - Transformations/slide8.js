const { ggb1, buttonGroup1, select1, button1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  select1.selectOption('2');
  ggb1.instance.setValue('showSetA', true);
  ggb1.instance.setValue('showQ1', true);
  ggb1.instance.evalCommand('CenterView(Q1Centroid)');
  ggb1.instance.setVisible('picX', false);
  ggb1.instance.setVisible('XBox', false);
  ggb1.instance.setValue('time', 1);
});

segList = [
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
];

ggb1.instance.setErrorDialogsActive(false);

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue('time', 1);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setValue('randCount', 0);
});

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    for (i = 0, L = segList.length; i < L; i++) {
      ggb1.instance.setLabelVisible(segList[i], true);
    }
  } else {
    for (i = 0, L = segList.length; i < L; i++) {
      ggb1.instance.setLabelVisible(segList[i], false);
    }
  }
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setValue('showAngles', true);
  } else {
    ggb1.instance.setValue('showAngles', false);
  }
});

button1.on('click', () => {
  if (ggb1.instance.getValue('randCount') < 7) {
    ggb1.instance.setValue(
      'randCount',
      ggb1.instance.getValue('randCount') + 1
    );
  } else {
    ggb1.instance.setValue('randCount', 1);
  }
});
