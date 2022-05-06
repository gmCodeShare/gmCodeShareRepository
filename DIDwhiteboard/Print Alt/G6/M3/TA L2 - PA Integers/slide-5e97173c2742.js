const { separator1, button1, ggb1, feedback } = components;

components.feedback.updateData({ visible: false });

ggb1.instance.setCoords('A', 0, 0, 0);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.updateData({ init: true });
    button1.updateData({ disabled: true });
  }
}

ggb1.instance.registerObjectUpdateListener('textA', update);
ggb1.instance.registerObjectUpdateListener('textB', update);
function update() {
  if (
    ggb1.instance.getValueString('textA') != '' &&
    ggb1.instance.getValueString('textB') != ''
  ) {
    button1.updateData({ disabled: false });
  }
}
button1.on('click', () => {
  button1.updateData({ disabled: true });

  ggb1.instance.setValue('submitted', true);
});

/*
{"compTotals":{"separator":1,"button":1,"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M3 TA L02 - PA Integers","teacherView":true,"layout":"one col"}
*/
