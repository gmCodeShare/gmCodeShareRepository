const { ggb1, separator1, button2, text1, ggb2, separator2, input1, button1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb2.instance.registerObjectUpdateListener('bluePaintToAdd', update);
ggb2.instance.registerObjectUpdateListener('redPaintToAdd', update);
ggb2.instance.registerObjectUpdateListener('blueTotal', update);
ggb2.instance.registerObjectUpdateListener('time', update);

slide.on('firstload', () => {
  button2.updateData({ disabled: true });
  button1.updateData({ disabled: true, align: 'right' });
});

function update() {
  ggb1.instance.setValue(
    'bluePaintToAdd',
    ggb2.instance.getValue('bluePaintToAdd')
  );
  ggb1.instance.setValue(
    'redPaintToAdd',
    ggb2.instance.getValue('redPaintToAdd')
  );
  ggb1.instance.setValue('blueTotal', ggb2.instance.getValue('blueTotal'));
  ggb1.instance.setValue('time', ggb2.instance.getValue('time'));
  ggb1.instance.setAnimating('time', false);
  if (
    ggb2.instance.getValue('bluePaintToAdd') > 0 ||
    ggb2.instance.getValue('redPaintToAdd') > 0
  ) {
    button2.updateData({ disabled: false });
  } else {
    button2.updateData({ disabled: true });
  }
}

button2.on('click', () => {
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  button2.updateData({ disabled: true });
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"geogebra":2,"separator":2,"button":2,"textbox":1,"input":1},"stage":"Learn","lessonInfo":"6 M1 TA L04 - Exploring Ratios by Making Batches","teacherView":false,"layout":"two col"}
*/
