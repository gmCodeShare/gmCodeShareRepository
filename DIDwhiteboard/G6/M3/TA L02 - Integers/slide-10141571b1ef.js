const { ggb1, feedback1, text1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ disabled: true });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let point = ggb1.innerData['A'];
  if (ggb1.innerData['enableButton'] && ggb1.innerData['count'] == 0) {
    button1.updateData({ disabled: false });
  }
});

button1.on('click', () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setValue('count', 1);
  ggb1.instance.setVisible('eq1', false);
  ggb1.instance.setVisible('F', false);
  ggb1.instance.evalCommand('SelectObjects( )');
});

button1.on('click', () => {
  utils.RTS.sendData('slide-10141571b1ef', { my2Point: ggb1.innerData['F'] });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1},"stage":"Learn","lessonInfo":"6 M3 TA L02 - Integers","teacherView":false,"layout":"two col"}
*/
