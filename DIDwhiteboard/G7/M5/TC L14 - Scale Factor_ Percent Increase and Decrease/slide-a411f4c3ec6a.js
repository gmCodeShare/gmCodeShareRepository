const { ggb1, feedback1, text1, input1, button1, text2 } = components;

ggb1.instance.setErrorDialogsActive(false);

let desiredMult = 0.8;
ggb1.instance.setValue('platformPrintBBool', false);
ggb1.instance.setValue('platformPrintCBool', false);
ggb1.instance.setValue('platformModeBool', false);
ggb1.instance.setValue('outlineMult', desiredMult);
ggb1.instance.setValue('origDimensionsBool', true);
ggb1.instance.setValue('outlineBool', false);

button1.updateData({ align: 'right' });

if (input1.data.storedString == undefined) {
  input1.updateData({ storedString: '' });
}

if (!button1.data.hasBeenClicked) {
  button1.updateData({ hasBeenClicked: false });
}

autorun(() => {
  let currentText = input1.data.text;
  if (currentText != input1.data.storedString) {
    input1.updateData({ storedString: '' });
    button1.updateData({ disabled: false });
    ggb1.updateData({ disabled: true });
    text2.updateData({ visable: false });
  }
  if (currentText == '') {
    button1.updateData({ disabled: true });
    ggb1.updateData({ disabled: true });
    text2.updateData({ visible: false });
  }
});

button1.on('click', () => {
  button1.updateData({ hasBeenClicked: true });
  input1.updateData({ storedString: input1.data.text });
  button1.updateData({ disabled: true });
  ggb1.updateData({ disabled: false });
  text2.updateData({ text: 'Try it!' });
  text2.updateData({ visible: true });
});

autorun(() => {
  let time = ggb1.innerData['time'];
  let width = ggb1.innerData['scaleWidth'];
  let height = ggb1.innerData['scaleHeight'];
  ggb1.instance.setValue('imageOrigOutlineBool', false);
  ggb1.instance.setValue('outlineGreenBool', false);
  ggb1.instance.setValue('outlineRedBool', false);
  text2.updateData({ text: '' });
  if (button1.data.hasBeenClicked) {
    ggb1.instance.setValue('outlineBool', true);
  }
  if (time > 0) {
    ggb1.instance.setValue('imageOrigOutlineBool', true);
  }
  if (time == 1 && ggb1.instance.getValue('multiplier') == desiredMult) {
    ggb1.instance.setValue('outlineBool', false);
    ggb1.instance.setValue('outlineGreenBool', true);
    text2.updateData({ text: 'Great!' });
  } else if (time == 1 && ggb1.instance.getValue('multiplier') != desiredMult) {
    ggb1.instance.setValue('outlineBool', false);
    ggb1.instance.setValue('outlineRedBool', true);
    text2.updateData({ text: 'Keep trying!' });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"input":1,"button":1},"stage":"Learn","lessonInfo":"7 M5 TC L14 - Scale Factor—Percent Increase and Decrease","teacherView":false,"layout":"two col"}
*/
