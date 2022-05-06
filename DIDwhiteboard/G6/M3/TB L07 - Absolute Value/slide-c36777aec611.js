const { ggb1, feedback1, text1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    button1.updateData({ disabled: true });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let point = ggb1.innerData['AIG'];
  if (ggb1.innerData['enableButton'] && ggb1.innerData['count'] == 0) {
    button1.updateData({ disabled: false });
  }
});

button1.on('click', () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setValue('count', 1);
  ggb1.instance.setVisible('eq1', false);
  ggb1.instance.setVisible('F', false);
  utils.RTS.sendData('slide-c36777aec611', { myPoint: ggb1.innerData['F'] });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1},"stage":"Learn","lessonInfo":"6 M3 TB L07 - Absolute Value","teacherView":false,"layout":"two col"}
*/
