const { button1, ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setVisible('eq1', false);
    ggb1.instance.setVisible('F', false);
    ggb1.instance.setVisible('text8', false);
    ggb1.instance.setVisible('kIG', false);
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setValue('show', true);
});

// Retrieving information
utils.RTS.on('datachange', 'slide-c1585b337528', (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  // the FLASH
  let allFlashPoints = ggb1.instance
    .getAllObjectNames('segment')
    .filter((segment) => !segment.includes('IG'));
  for (let i = 0, L = allFlashPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(allFlashPoints[i]);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    ggb1.instance.evalCommand(
      `Segment((${data.my2Point[0]},${data.my2Point[1]})+(0,6ypixel),(${data.my2Point[0]},${data.my2Point[1]})+(0,-6ypixel))`
    );
  });

  let newObjects = ggb1.instance.getAllObjectNames();
  for (let i = 0, L = newObjects.length; i < L; i++) {
    ggb1.instance.setFixed(newObjects[i], false, false);
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
{"compTotals":{"button":1,"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M3 TB L07 - Absolute Value","teacherView":true,"layout":"one col"}
*/
