const { ggb1, buttonGroup1, table1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    buttonGroup1.updateData({
      buttons: [
        { disabled: false, text: 'Width: 2' },
        { disabled: true, text: 'Width: 10' },
      ],
    });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue('show2', true);
  ggb1.instance.setValue('show10', false);
  buttonGroup1.updateData({
    buttons: [
      { disabled: true, text: 'Width: 2' },
      { disabled: false, text: 'Width: 10' },
    ],
  });
  table1.updateData({
    rows: [
      [
        { value: '90 \\text{ to}< 92', math: true },
        { value: '0', math: true },
      ],
      [
        { value: '92 \\text{ to}< 94', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '94 \\text{ to}< 96', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '96 \\text{ to}< 98', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '98 \\text{ to}< 100', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '100 \\text{ to}< 102', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '102 \\text{ to}< 104', math: true },
        { value: '2', math: true },
      ],
      [
        { value: '104 \\text{ to}< 106', math: true },
        { value: '3', math: true },
      ],
      [
        { value: '106 \\text{ to}< 108', math: true },
        { value: '2', math: true },
      ],
      [
        { value: '108 \\text{ to}< 110', math: true },
        { value: '2', math: true },
      ],
      [
        { value: '110 \\text{ to}< 112', math: true },
        { value: '2', math: true },
      ],
      [
        { value: '112 \\text{ to}< 114', math: true },
        { value: '2', math: true },
      ],
      [
        { value: '114 \\text{ to}< 116', math: true },
        { value: '2', math: true },
      ],
      [
        { value: '116 \\text{ to}< 118', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '118 \\text{ to}< 120', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '120 \\text{ to}< 122', math: true },
        { value: '3', math: true },
      ],
      [
        { value: '122 \\text{ to}< 124', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '124 \\text{ to}< 126', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '126 \\text{ to}< 128', math: true },
        { value: '0', math: true },
      ],
      [
        { value: '128 \\text{ to}< 130', math: true },
        { value: '0', math: true },
      ],
      [
        { value: '130 \\text{ to}< 132', math: true },
        { value: '2', math: true },
      ],
      [
        { value: '132 \\text{ to}< 134', math: true },
        { value: '0', math: true },
      ],
      [
        { value: '134 \\text{ to}< 136', math: true },
        { value: '0', math: true },
      ],
      [
        { value: '136 \\text{ to}< 138', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '138 \\text{ to}< 140', math: true },
        { value: '0', math: true },
      ],
    ],
  });
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('show2', false);
  ggb1.instance.setValue('show10', true);
  buttonGroup1.updateData({
    buttons: [
      { disabled: false, text: 'Width: 2' },
      { disabled: true, text: 'Width: 10' },
    ],
  });
  table1.updateData({
    rows: [
      [
        { value: '90 \\text{ to}< 100', math: true },
        { value: '4', math: true },
      ],
      [
        { value: '100 \\text{ to}< 110', math: true },
        { value: '10', math: true },
      ],
      [
        { value: '110 \\text{ to}< 120', math: true },
        { value: '8', math: true },
      ],
      [
        { value: '120 \\text{ to}< 130', math: true },
        { value: '5', math: true },
      ],
      [
        { value: '130 \\text{ to}< 140', math: true },
        { value: '3', math: true },
      ],
    ],
  });
});

/*
{"compTotals":{"geogebra":1,"buttongroup":1,"table":1},"stage":"Learn","lessonInfo":"6 M6 TA L04 - Print Alt: Creating a Histogram","teacherView":true,"layout":"two col"}
*/
