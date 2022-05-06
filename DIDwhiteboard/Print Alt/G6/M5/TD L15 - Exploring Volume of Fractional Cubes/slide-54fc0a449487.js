const {
  ggb1,
  Separator1,
  buttonGroup1,
  feedback1,
  text1,
  table1,
  buttonGroup2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

const column1 = [
  '1',
  '$\\frac{1}{2}$',
  '\\frac{1}{3}',
  '\\frac{1}{4}',
  '\\frac{1}{5}',
  '\\frac{1}{6}',
];

const column2 = [
  '1',
  '$\\frac{1}{8}$',
  '\\frac{1}{9}',
  '\\frac{1}{64}',
  '\\frac{1}{125}',
  '\\frac{1}{216}',
];

buttonGroup2.on('click:1', () => {
  for (let i = 1; i < table1.data.rows.length; i++) {
    table1.updateCell(i, 1, {
      value: column1[i],
      math: true,
      editable: false,
    });
  }
  for (let i = 1; i < table1.data.rows.length; i++) {
    table1.updateCell(i, 2, {
      value: column1[i],
      math: true,
      editable: false,
    });
  }
  for (let i = 1; i < table1.data.rows.length; i++) {
    table1.updateCell(i, 3, {
      value: column2[i],
      math: true,
      editable: false,
    });
  }
});

buttonGroup2.on('click:2', () => {
  ggb1.instance.setValue('cubeSize', 1);
  ggb1.instance.setValue('time1', 0);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setValue('time3', 0);
  for (let i = 1; i < table1.data.rows.length; i++) {
    table1.updateCell(i, 1, {
      value: '',
      math: true,
      editable: false,
    });
  }
  for (let i = 1; i < table1.data.rows.length; i++) {
    table1.updateCell(i, 2, {
      value: '',
      math: true,
      editable: false,
    });
  }
  for (let i = 1; i < table1.data.rows.length; i++) {
    table1.updateCell(i, 3, {
      value: '',
      math: true,
      editable: false,
    });
  }
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  buttonGroup1.updateSingleButton({ disabled: false }, 5);
  ggb1.instance.setValue('time3', 0.5);
  ggb1.instance.setValue('cubeSize', 0.5);
  ggb1.instance.evalCommand('RunClickScript(button1)');
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  buttonGroup1.updateSingleButton({ disabled: false }, 5);
  ggb1.instance.setValue('time3', 1 / 3);
  ggb1.instance.setValue('cubeSize', 1 / 3);
  ggb1.instance.evalCommand('RunClickScript(button1)');
});
buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  buttonGroup1.updateSingleButton({ disabled: false }, 5);
  ggb1.instance.setValue('time3', 0.25);
  ggb1.instance.setValue('cubeSize', 0.25);
  ggb1.instance.evalCommand('RunClickScript(button1)');
});

buttonGroup1.on('click:4', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: false }, 5);
  ggb1.instance.setValue('time3', 0.2);
  ggb1.instance.setValue('cubeSize', 0.2);
  ggb1.instance.evalCommand('RunClickScript(button1)');
});

buttonGroup1.on('click:5', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
  ggb1.instance.setValue('time3', 1 / 6);
  ggb1.instance.setValue('cubeSize', 1 / 6);
  console.log(ggb1.instance.getValue('cubeSize'));
  ggb1.instance.evalCommand('RunClickScript(button1)');
});

ggb1.instance.registerObjectUpdateListener('time1', update);
ggb1.instance.registerObjectUpdateListener('time2', update);
ggb1.instance.registerObjectUpdateListener('time3', update);

function update() {
  // console.log(ggb1.instance.getValue("time1"))
  // console.log(ggb1.instance.getValue("time2"))
  // console.log(ggb1.instance.getValue("time3"))
  if (
    ggb1.instance.getValue('time3') < 1 &&
    ggb1.instance.getValue('time3') >= ggb1.instance.getValue('cubeSize')
  ) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
    buttonGroup1.updateSingleButton({ disabled: true }, 4);
    buttonGroup1.updateSingleButton({ disabled: true }, 5);
  } else if (ggb1.instance.getValue('time3') == 1) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: false }, 3);
    buttonGroup1.updateSingleButton({ disabled: false }, 4);
    buttonGroup1.updateSingleButton({ disabled: false }, 5);
  }
  if (
    ggb1.instance.getValue('cubeSize') == 0.5 &&
    ggb1.instance.getValue('time1') == 1
  ) {
    table1.updateCell(1, 1, {
      value: '$\\frac{1}{2}$',
      math: true,
      editable: false,
    });
  }
  if (
    ggb1.instance.getValue('cubeSize') == 0.5 &&
    ggb1.instance.getValue('time2') == 1
  ) {
    table1.updateCell(1, 2, {
      value: '$\\frac{1}{2}$',
      math: true,
      editable: false,
    });
  }
  if (
    ggb1.instance.getValue('cubeSize') == 0.5 &&
    ggb1.instance.getValue('time3') == 1
  ) {
    table1.updateCell(1, 3, {
      value: '$\\frac{1}{8}$',
      math: true,
      editable: false,
    });
  }
  if (
    ggb1.instance.getValue('cubeSize') == 1 / 3 &&
    ggb1.instance.getValue('time1') == 1
  ) {
    table1.updateCell(2, 1, {
      value: '$\\frac{1}{3}$',
      math: true,
      editable: false,
    });
  }
  if (
    ggb1.instance.getValue('cubeSize') == 1 / 3 &&
    ggb1.instance.getValue('time2') == 1
  ) {
    table1.updateCell(2, 2, {
      value: '$\\frac{1}{3}$',
      math: true,
      editable: false,
    });
  }
  if (
    ggb1.instance.getValue('cubeSize') == 1 / 3 &&
    ggb1.instance.getValue('time3') == 1
  ) {
    table1.updateCell(2, 3, {
      value: '$\\frac{1}{9}$',
      math: true,
      editable: false,
    });
  }
  if (
    ggb1.instance.getValue('cubeSize') == 0.25 &&
    ggb1.instance.getValue('time1') == 1
  ) {
    table1.updateCell(3, 1, {
      value: '$\\frac{1}{4}$',
      math: true,
      editable: false,
    });
  }
  if (
    ggb1.instance.getValue('cubeSize') == 0.25 &&
    ggb1.instance.getValue('time2') == 1
  ) {
    table1.updateCell(3, 2, {
      value: '$\\frac{1}{4}$',
      math: true,
      editable: false,
    });
  }
  if (
    ggb1.instance.getValue('cubeSize') == 0.25 &&
    ggb1.instance.getValue('time3') == 1
  ) {
    table1.updateCell(3, 3, {
      value: '$\\frac{1}{64}$',
      math: true,
      editable: false,
    });
  }
  if (
    ggb1.instance.getValue('cubeSize') == 1 / 5 &&
    ggb1.instance.getValue('time1') == 1
  ) {
    table1.updateCell(4, 1, {
      value: '$\\frac{1}{5}$',
      math: true,
      editable: false,
    });
  }
  if (
    ggb1.instance.getValue('cubeSize') == 1 / 5 &&
    ggb1.instance.getValue('time2') == 1
  ) {
    table1.updateCell(4, 2, {
      value: '$\\frac{1}{5}$',
      math: true,
      editable: false,
    });
  }

  if (
    ggb1.instance.getValue('cubeSize') == 1 / 5 &&
    ggb1.instance.getValue('time3') == 1
  ) {
    table1.updateCell(4, 3, {
      value: '$\\frac{1}{125}$',
      math: true,
      editable: false,
    });
  }
  if (
    ggb1.instance.getValue('cubeSize') == 1 / 6 &&
    ggb1.instance.getValue('time1') == 1
  ) {
    table1.updateCell(5, 1, {
      value: '$\\frac{1}{6}$',
      math: true,
      editable: false,
    });
  }
  console.log(ggb1.instance.getValue('cubeSize'));
  console.log(ggb1.instance.getValue('time1'));
  if (
    ggb1.instance.getValue('cubeSize') == 1 / 6 &&
    ggb1.instance.getValue('time2') == 1
  ) {
    table1.updateCell(5, 2, {
      value: '$\\frac{1}{6}$',
      math: true,
      editable: false,
    });
  }
  if (
    ggb1.instance.getValue('cubeSize') == 1 / 6 &&
    ggb1.instance.getValue('time3') == 1
  ) {
    table1.updateCell(5, 3, {
      value: '$\\frac{1}{216}$',
      math: true,
      editable: false,
    });
  }
}

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":2,"textbox":2,"table":1},"stage":"Learn","lessonInfo":"6 M5 TD L15 - Print Alternate Slide Deck for Exploring Volume","teacherView":true,"layout":"two col"}
*/
