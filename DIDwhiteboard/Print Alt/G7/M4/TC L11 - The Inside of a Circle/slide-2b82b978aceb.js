const { ggb1, feedback1, textDisplay1, buttonGroup1, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);

autorun(() => {
  let square = ggb1.innerData['squareWidth'];
  let num1 =
    Math.round(ggb1.instance.getValue('areaInnerQuads') * 10000) / 10000;
  let num2 =
    Math.round(ggb1.instance.getValue('areaOuterQuads') * 10000) / 10000;
  text1.updateData({
    text: `#### Area of blue polygon: $${num1}$ square units \n\n #### Area of green polygon: $${num2}$ square units`,
  });
  if (Math.round(ggb1.instance.getValue('a') * 10) / 10 == 0.1) {
    buttonGroup1.updateData({
      buttons: [
        { disabled: true, text: 'See smaller squares' },
        { disabled: false, text: 'See larger squares' },
      ],
    });
  }
  if (Math.round(ggb1.instance.getValue('a') * 10) / 10 == 1) {
    buttonGroup1.updateData({
      buttons: [
        { disabled: false, text: 'See smaller squares' },
        { disabled: true, text: 'See larger squares' },
      ],
    });
  }
});

buttonGroup1.updateData({
  buttons: [
    { disabled: false, text: 'See smaller squares' },
    { disabled: true, text: 'See larger squares' },
  ],
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue('a', ggb1.instance.getValue('a') - 0.1);
  if (Math.round(ggb1.instance.getValue('a') * 10) / 10 == 0.1) {
    //updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
    buttonGroup1.updateData({
      buttons: [
        { disabled: true, text: 'See smaller squares' },
        { disabled: false, text: 'See larger squares' },
      ],
    });
  }
  if (Math.round(ggb1.instance.getValue('a') * 10) / 10 <= 1) {
    buttonGroup1.updateData({
      buttons: [
        { disabled: false, text: 'See smaller squares' },
        { disabled: false, text: 'See larger squares' },
      ],
    });
  }
});

buttonGroup1.on('click:2', () => {
  if (ggb1.instance.getValue('a') < 1) {
    ggb1.instance.setValue('a', ggb1.instance.getValue('a') + 0.1);
  }
  if (Math.round(ggb1.instance.getValue('a') * 10) / 10 == 1) {
    //updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
    buttonGroup1.updateData({
      buttons: [
        { disabled: false, text: 'See smaller squares' },
        { disabled: true, text: 'See larger squares' },
      ],
    });
  }
  if (Math.round(ggb1.instance.getValue('a') * 10) / 10 >= 0.1) {
    //updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
    buttonGroup1.updateData({
      buttons: [
        { disabled: false, text: 'See smaller squares' },
        { disabled: false, text: 'See larger squares' },
      ],
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"buttongroup":1},"stage":"Learn","lessonInfo":"7 M4 TC L11 - Print Alternate Slide Deck for The Inside of a Circle","teacherView":true,"layout":"two col"}
*/
