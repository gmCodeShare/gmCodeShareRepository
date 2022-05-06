const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  cc_sharewithclass_a5e043a96365_textbox1: shareText1,
  cc_sharewithclass_a5e043a96365_input1: shareInput1,
  cc_sharewithclass_a5e043a96365_button1: shareButton1,
  cc_sharewithclass_a5e043a96365_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false, align: 'right' });
});

autorun(() => {
  let square = ggb1.innerData['squareWidth'];
  let num1 =
    Math.round(ggb1.instance.getValue('areaInnerQuads') * 10000) / 10000;
  let num2 =
    Math.round(ggb1.instance.getValue('areaOuterQuads') * 10000) / 10000;
  text1.updateData({
    text: `Zoom in as far as you can. \n\nArea of blue polygon: $${num1}$ square units \n\n Area of green polygon: $${num2}$ square units`,
  });
  if (Math.round(ggb1.instance.getValue('a') * 10) / 10 == 0.1) {
    buttonGroup1.updateData({
      buttons: [
        { disabled: true, text: 'See smaller squares' },
        { disabled: false, text: 'See larger squares' },
      ],
    });
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
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
    buttonGroup1.updateData({
      buttons: [
        { disabled: false, text: 'See smaller squares' },
        { disabled: true, text: 'See larger squares' },
      ],
    });
  }
  if (Math.round(ggb1.instance.getValue('a') * 10) / 10 >= 0.1) {
    buttonGroup1.updateData({
      buttons: [
        { disabled: false, text: 'See smaller squares' },
        { disabled: false, text: 'See larger squares' },
      ],
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M4 TC L11 - The Inside of a Circle","teacherView":false,"layout":"two col"}
*/
