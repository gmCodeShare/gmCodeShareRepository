const { ggb1, checkbox1, feedback1, text1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('BIG', update);

slide.on('firstload', () => {
  // set initial states
  button1.updateData({ disabled: true });
  checkbox1.updateData({ visible: false });
});

function update() {
  button1.updateData({ disabled: false });
}

button1.on('click', () => {
  button1.updateData({ disabled: true });
  utils.RTS.sendData('slide-9e3fd488f98e', { myPoint: ggb1.innerData['BIG'] });
});

/*
{"compTotals":{"geogebra":1,"checkbox":1,"textbox":2,"button":1},"stage":"Learn","lessonInfo":"6 M3 TC L12 - Reflections in the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
