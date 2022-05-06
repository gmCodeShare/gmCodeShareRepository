const { ggb1, feedback1 } = components;

// slide.on("firstload", () => {
//   ggb1.instance.showToolBar(false);
// });

ggb1.instance.setErrorDialogsActive(false);

utils.RTS.on('datachange', 'slide-a263603219d2', (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first

  const allAgg = ggb1.instance
    .getAllObjectNames()
    .filter((obj) => ggb1.instance.getCaption(obj) === 'agg');
  for (let i = 0, L = allAgg.length; i < L; i++) {
    ggb1.instance.deleteObject(allAgg[i]);
  }
  ggb1.updateData({ aggIncoming: true });
  // think of this forEach as "for each student's input, do the following"
  lastRegister.forEach(({ data, info }) => {
    // orig: [ggb1.instance.getXcoord("O"), ggb1.instance.getYcoord("O")],
    const { orig } = data;
    let newPoint = ggb1.instance.evalCommandGetLabels(
      `(${orig[0]}, ${orig[1]})`
    );
    ggb1.instance.setFixed(newPoint, false, false);
    ggb1.instance.setColor(newPoint, 0, 0, 0);
    ggb1.instance.setCaption(newPoint, 'agg');
  });
  ggb1.updateData({ aggIncoming: false });
});

// use this function as is
function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared
      return !deviceHasPreviousAnswer;
    });
}

slide.on('firstload', () => {
  //watchToolbar(0);
  ggb1.instance.setOnTheFlyPointCreationActive(false);
  // ggb1.instance.setMode(1);
});

const selectables = ['A', "A'", 'B', "B'", 'C', "C'"];

watchToolbar(ggb1.instance.getMode());

function watchToolbar(num) {
  ggb1.instance.evalCommand('SelectObjects()');
  const selModes = [2];
  for (let i = 0, L = selectables.length; i < L; i++) {
    ggb1.instance.setFixed(selectables[i], true, selModes.includes(num));
  }
  const OModes = [0];
  ggb1.instance.setFixed('O', false, OModes.includes(num));
}

ggb1.instance.registerClientListener((a) => {
  switch (a.type) {
    case 'setMode':
      watchToolbar(parseInt(a.argument));
      break;
  }
});

ggb1.instance.registerAddListener((a) => {
  if (ggb1.instance.getObjectType(a) != 'point' || ggb1.data.aggIncoming) {
    return;
  }
  const [x, y] = [ggb1.instance.getXcoord(a), ggb1.instance.getYcoord(a)];
  ggb1.instance.setCoords('O', x, y);
  ggb1.instance.setValue('showO', true);
  ggb1.instance.deleteObject(a);
});

/*
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Launch","lessonInfo":"8 M3 TC L09 - Describing Dilations","teacherView":true,"layout":"one col"}
*/
