const { ggb1, separator1, button2, ggb2, separator2, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

button2.on('click', () => {
  clear(ggb1);
});

ggb1.instance.registerStoreUndoListener(() => {
  ggb1.updateData({ save64: ggb1.instance.getBase64() });
});

ggb2.instance.setErrorDialogsActive(false);

button1.on('click', () => {
  clear(ggb2);
});

ggb2.instance.registerStoreUndoListener(() => {
  ggb2.updateData({ save64: ggb2.instance.getBase64() });
});

function clear(ggbComp) {
  let allSketches = ggbComp.instance.getAllObjectNames('penstroke');
  for (let i = 0, L = allSketches.length; i < L; i++) {
    ggbComp.instance.deleteObject(allSketches[i]);
  }
}

/*
{"compTotals":{"geogebra":2,"separator":2,"button":2},"stage":"Launch","lessonInfo":"6 M3 TC L12 - PA Reflections in the Coordinate Plane","teacherView":true,"layout":"two col"}
*/
