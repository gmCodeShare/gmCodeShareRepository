const { ggb1, feedback1, text1, text2, table1, button1 } = components;

if (!ggb1.data.init) {
  // set the initial states of everything (note: generally, if some function down below sets or updates something, a command to undo that thing should go in here)
  text2.updateData({ visible: false });
  ggb1.instance.setValue('showInnerQuads', true);
  ggb1.instance.setValue('showOuterQuads', false);
  ggb1.instance.setValue('widthOfSquaresSlider', 3);
  //ggb1.instance.setValue("trip", 2);
  // create/update a dummy variable to keep track of whether the screen has initialized
  ggb1.updateData({ init: true });
}

ggb1.instance.setErrorDialogsActive(false);
button1.updateData({ align: 'right' });

//let ggb1.innerData["clickCount"] = 0;

button1.on('click', change);

function change() {
  ggb1.instance.setValue(
    'clickCount',
    ggb1.instance.getValue('clickCount') + 1
  );
  button1.updateData({ disabled: true });
  if (ggb1.instance.getValue('clickCount') == 1) {
    ggb1.instance.setValue('showInnerQuads', false);
    ggb1.instance.setValue('showOuterQuads', true);
    table1.updateCell(0, 2, {
      value: ggb1.instance.getValue('areaOuterQuads'),
      math: true,
    });
  }
  if (ggb1.instance.getValue('clickCount') == 2) {
    ggb1.instance.setVisible('haloC', false);
    ggb1.instance.setVisible('C', false);
    table1.updateCell(0, 3, { editable: true, math: true });
    text2.updateData({ visible: true });
    button1.updateData({ text: 'Submit' });
  }
  if (ggb1.instance.getValue('clickCount') == 3) {
    text2.updateData({ visible: false });
    ggb1.instance.setVisible('haloC', true);
    ggb1.instance.setVisible('C', true);
    table1.updateCell(0, 3, { editable: false });
    button1.updateData({ text: 'Set It' });
    ggb1.instance.setValue('showOuterQuads', false);
    ggb1.instance.setValue('showInnerQuads', true);
    ggb1.instance.setValue('widthOfSquaresSlider', 4);
    ggb1.instance.setVisible('pic8x8Grid', false);
    ggb1.instance.setVisible('pic16x16Grid', true);
    ggb1.instance.setValue('axisIncrement', 0.5);
    table1.updateCell(1, 1, {
      value: ggb1.instance.getValue('areaInnerQuads'),
      math: true,
    });
  }
  if (ggb1.instance.getValue('clickCount') == 4) {
    ggb1.instance.setValue('showInnerQuads', false);
    ggb1.instance.setValue('showOuterQuads', true);
    table1.updateCell(1, 2, {
      value: ggb1.instance.getValue('areaOuterQuads'),
      math: true,
    });
  }
  if (ggb1.instance.getValue('clickCount') == 5) {
    text2.updateData({ visible: true });
    ggb1.instance.setVisible('haloC', false);
    ggb1.instance.setVisible('C', false);
    table1.updateCell(1, 3, { editable: true, math: true });
    button1.updateData({ text: 'Submit' });
  }
  if (ggb1.instance.getValue('clickCount') == 6) {
    text2.updateData({ visible: false });
    ggb1.instance.setVisible('haloC', true);
    ggb1.instance.setVisible('C', true);
    table1.updateCell(1, 3, { editable: false });
    button1.updateData({ text: 'Set It' });
    ggb1.instance.setValue('showOuterQuads', false);
    ggb1.instance.setValue('showInnerQuads', true);
    ggb1.instance.setValue('widthOfSquaresSlider', 5);
    ggb1.instance.setVisible('pic16x16Grid', false);
    ggb1.instance.setVisible('pic32x32Grid', true);
    table1.updateCell(2, 1, {
      value: ggb1.instance.getValue('areaInnerQuads'),
      math: true,
    });
  }
  if (ggb1.instance.getValue('clickCount') == 7) {
    ggb1.instance.setValue('showInnerQuads', false);
    ggb1.instance.setValue('showOuterQuads', true);
    table1.updateCell(2, 2, {
      value: ggb1.instance.getValue('areaOuterQuads'),
      math: true,
    });
  }
  if (ggb1.instance.getValue('clickCount') == 8) {
    text2.updateData({ visible: true });
    ggb1.instance.setVisible('haloC', false);
    ggb1.instance.setVisible('C', false);
    table1.updateCell(2, 3, { editable: true, math: true });
    button1.updateData({ text: 'Submit' });
  }
  if (ggb1.instance.getValue('clickCount') == 9) {
    table1.updateCell(2, 3, { editable: false });
  }
}

autorun(() => {
  let pointC = ggb1.innerData['C'];
  if (ggb1.instance.getValue('clickCount') == 0) {
    table1.updateCell(0, 1, {
      value: ggb1.instance.getValue('areaInnerQuads'),
    });
    button1.updateData({ disabled: false });
  }
  if (ggb1.instance.getValue('clickCount') == 1) {
    table1.updateCell(0, 2, {
      value: ggb1.instance.getValue('areaOuterQuads'),
    });
    button1.updateData({ disabled: false });
  }
  if (ggb1.instance.getValue('clickCount') == 3) {
    table1.updateCell(1, 1, {
      value: ggb1.instance.getValue('areaInnerQuads'),
    });
    button1.updateData({ disabled: false });
  }
  if (ggb1.instance.getValue('clickCount') == 4) {
    table1.updateCell(1, 2, {
      value: ggb1.instance.getValue('areaOuterQuads'),
    });
    button1.updateData({ disabled: false });
  }
  if (ggb1.instance.getValue('clickCount') == 6) {
    table1.updateCell(2, 1, {
      value: ggb1.instance.getValue('areaInnerQuads'),
    });
    button1.updateData({ disabled: false });
  }
  if (ggb1.instance.getValue('clickCount') == 7) {
    table1.updateCell(2, 2, {
      value: ggb1.instance.getValue('areaOuterQuads'),
    });
    button1.updateData({ disabled: false });
  }
  if (ggb1.instance.getValue('clickCount') == 7) {
    button1.updateData({ disabled: false });
  }
});

autorun(() => {
  let cell03 = table1.getCell(0, 3).value;
  let cell13 = table1.getCell(1, 3).value;
  let cell23 = table1.getCell(2, 3).value;
  button1.updateData({ disabled: false });
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"table":1,"button":1},"stage":"Learn","lessonInfo":"7 M4 TC L11 - Print Alternate Slide Deck for The Inside of a Circle","teacherView":true,"layout":"two col"}
*/
