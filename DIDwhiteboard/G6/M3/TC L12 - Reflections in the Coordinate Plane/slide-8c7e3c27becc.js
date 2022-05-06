const { ggb1, feedback1, text1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('BIG', update);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    button1.updateData({ disabled: true });
    ggb1.instance.setCoords('AIG', -6, 7);
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

function update() {
  button1.updateData({ disabled: false });
}

button1.on('click', () => {
  button1.updateData({ disabled: true });
  utils.RTS.sendData('slide-8c7e3c27becc', { myPoint: ggb1.innerData['BIG'] });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1},"stage":"Learn","lessonInfo":"6 M3 TC L12 - Reflections in the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
