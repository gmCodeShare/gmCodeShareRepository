const { text1, ggb1, separator1, button1, ggb2, separator2, button2 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('tapeNumbers', update);

slide.on('firstload', () => {
  button2.updateData({ disabled: true });
});

function update() {
  ggb2.instance.setValue('tapeNumbers', ggb1.instance.getValue('tapeNumbers'));
}

button1.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
  button2.updateData({ disabled: false });
  ggb2.instance.setValue('tapeNumbers', ggb1.instance.getValue('tapeNumbers'));
  ggb2.instance.setValue('tile', ggb1.instance.getValue('tile'));
  if (ggb1.instance.getValue('tile') == 3) {
    button1.updateData({ disabled: true });
  } else {
    button1.updateData({ disabled: false });
  }
});

button2.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  ggb2.instance.setValue('tapeNumbers', ggb1.instance.getValue('tapeNumbers'));
  ggb2.instance.setValue('tile', ggb1.instance.getValue('tile'));
  button1.updateData({ disabled: false });
  button2.updateData({ disabled: true });
});

/*
{"compTotals":{"textbox":1,"geogebra":2,"separator":2,"button":2},"stage":"Learn","lessonInfo":"6 M1 TA L04 - Exploring Ratios by Making Batches","teacherView":false,"layout":"T layout"}
*/
