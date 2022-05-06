const { ggb1, feedback1, text1, button1, separator4, text2, button2 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('textA', update);
ggb1.instance.registerObjectUpdateListener('textB', update);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ align: 'right' });
    ggb1.instance.setCoords('A', 0, 0, 0);
    text2.updateData({ visible: false });
    button2.updateData({ visible: false, align: 'right' });
    ggb1.updateData({ init: true });
    button1.updateData({ disabled: true });
  }
}

function update() {
  if (
    ggb1.instance.getValueString('textA') != '' &&
    ggb1.instance.getValueString('textB') != ''
  ) {
    button1.updateData({ disabled: false });
  }
}

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
  text2.updateData({ visible: true });
  button2.updateData({ visible: true });
  ggb1.instance.setValue('submitted', true);
});

button2.on('click', () => {
  button2.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"button":2,"separator":1},"stage":"Learn","lessonInfo":"6 M3 TA L02 - Integers","teacherView":false,"layout":"two col"}
*/
