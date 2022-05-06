const { ggb1, feedback1, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setVisible('BIG', false);
    ggb1.instance.setVisible('drawer', false);
    ggb1.instance.setVisible('eq1', false);
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

utils.RTS.on('datachange', 'slide-9e3fd488f98e', (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);

  let allPoints = ggb1.instance.getAllObjectNames('point');
  let filteredPoints = allPoints.filter((point) => !point.includes('IG'));
  for (let i = 0, L = filteredPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(filteredPoints[i]);
    ggb1.instance.setFixed(filteredPoints[i], false, false);
  }

  lastRegister.forEach(({ data, info }) => {
    ggb1.instance.evalCommand(`(${data.myPoint[0]},${data.myPoint[1]})`);
  });

  let newPoints = ggb1.instance.getAllObjectNames('point');
  for (let i = 0, L = newPoints.length; i < L; i++) {
    ggb1.instance.setFixed(newPoints[i], false, false);
  }
});

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

/*
{"compTotals":{"geogebra":1,"textbox":2},"stage":"Learn","lessonInfo":"6 M3 TC L12 - Reflections in the Coordinate Plane","teacherView":true,"layout":"two col"}
*/
