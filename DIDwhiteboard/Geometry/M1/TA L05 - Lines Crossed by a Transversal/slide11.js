const { ggb1, buttonGroup1, buttonGroup2, fib1, fib2, text2 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
  text2.updateData({ visible: false });
  fib2.setVisible(false);
  buttonGroup2.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('time', revealComponents);

function revealComponents() {
  if (ggb1.instance.getValue('time') == 1) {
    text2.updateData({ visible: true });
    fib2.setVisible(true);
    buttonGroup2.updateData({ visible: true });
  }
}

function resetCaptions() {
  ggb1.instance.setCaption('displayedAngle1', '$1$');
  ggb1.instance.setCaption('displayedAngle2', '$2$');
}

buttonGroup1.on('click:1', () => {
  let num = fib1.data.values[0].text;
  let num2 = fib1.data.values[1].text;
  if (parseInt(num) == parseFloat(num) && parseInt(num2) == parseFloat(num2)) {
    ggb1.instance.setValue('angle1Val', fib1.data.values[0].text);
    ggb1.instance.setValue('angle2Val', fib1.data.values[1].text);
    ggb1.instance.setCaption('displayedAngle1', '$%v$');
    ggb1.instance.setCaption('displayedAngle2', '$%v$');
    ggb1.instance.evalCommand('RunClickScript(button1)');
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
});

buttonGroup2.on('click:1', () => {
  let num3 = fib2.data.values[0].text;
  let num4 = fib2.data.values[1].text;
  if (
    parseInt(num3) == parseFloat(num3) &&
    parseInt(num4) == parseFloat(num4)
  ) {
    ggb1.instance.setValue('angle1Val', fib2.data.values[0].text);
    ggb1.instance.setValue('angle2Val', fib2.data.values[1].text);
    ggb1.instance.setCaption('displayedAngle1', '$%v$');
    ggb1.instance.setCaption('displayedAngle2', '$%v$');
    ggb1.instance.evalCommand('RunClickScript(button1)');
    buttonGroup2.updateSingleButton({ disabled: true }, 1);
  }
});

fib1.on('change', ({ values }) => {
  resetCaptions();
  buttonGroup1.updateSingleButton(
    { disabled: !values.every(({ text }) => !!text) },
    1
  );
  ggb1.instance.evalCommand('RunClickScript(button2)');
});

fib2.on('change', ({ values }) => {
  resetCaptions();
  buttonGroup2.updateSingleButton(
    { disabled: !values.every(({ text }) => !!text) },
    1
  );
  ggb1.instance.evalCommand('RunClickScript(button2)');
});
