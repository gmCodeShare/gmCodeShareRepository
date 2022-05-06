const { button1, ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    button1.updateData({ visible: false });
    ggb1.instance.setVisible('eq1', false);
    ggb1.instance.setVisible('F', false);
    ggb1.instance.setVisible('text8', false);
    ggb1.instance.setVisible('k', false);
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setValue('show', true);
});

utils.RTS.on('datachange', 'slide-50a590bf3ae1', (register) => {
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

  const lastRegister = discardOldResponses(register);
  lastRegister.forEach(({ data, info }) => {
    ggb1.instance.evalCommand(
      `Segment((${data.myPoint[0]},${data.myPoint[1]})+(0,6ypixel),(${data.myPoint[0]},${data.myPoint[1]})+(0,-6ypixel))`
    );
  });
  let allPoints = ggb1.instance.getAllObjectNames('segment');
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb1.instance.setFixed(allPoints[i], false, false);
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
{"compTotals":{"button":1,"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M3 TA L02 - Integers","teacherView":true,"layout":"one col"}
*/
