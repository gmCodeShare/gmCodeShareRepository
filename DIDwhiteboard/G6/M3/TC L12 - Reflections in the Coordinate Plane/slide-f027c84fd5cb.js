const {
  ggb1,
  separator1,
  button2,
  feedback1,
  text1,
  button3,
  separator2,
  text2,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ align: 'right' });
    button1.updateData({ visible: false });
    text2.updateData({ visible: false });
    button3.updateData({ align: 'right' });
    ggb1.updateData({ init: true });
  }
}

button3.on('click', () => {
  button1.updateData({ visible: true });
  text2.updateData({ visible: true });
  button3.updateData({ text: 'Submitted', disabled: true });
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
  ggb1.instance.registerUpdateListener(update);
});

function update(a) {
  button1.updateData({ text: 'Submit', disabled: false });
  ggb1.instance.unregisterUpdateListener(update);
}

button2.on('click', () => {
  // ggb1.instance.reset();
  clear(ggb1);
});

ggb1.instance.registerStoreUndoListener(() => {
  ggb1.updateData({ save64: ggb1.instance.getBase64() });
});

function clear(ggbComp) {
  let allSketches = ggbComp.instance.getAllObjectNames('penstroke');
  for (let i = 0, L = allSketches.length; i < L; i++) {
    ggbComp.instance.deleteObject(allSketches[i]);
  }
}

/*
{"compTotals":{"geogebra":1,"separator":2,"button":3,"textbox":3},"stage":"Launch","lessonInfo":"6 M3 TC L12 - Reflections in the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
