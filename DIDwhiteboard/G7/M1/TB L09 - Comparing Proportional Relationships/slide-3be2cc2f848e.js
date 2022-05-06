const { text1, ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

text1.updateData({ align: 'center', visible: false });

slide.on('firstload', () => {
  ggb1.instance.setVisible('eq1', false);
  ggb1.instance.setPointSize('B', 4);
  ggb1.instance.setLayer('B', 2);
  ggb1.instance.setFixed('B', false, false);
  ggb1.instance.setLayer('g_1', 2);
  ggb1.instance.setAxisLabels(1, `$\\mathit{x}$`, `$\\mathit{y}$`);
});

utils.RTS.on('datachange', 'slide-43a56066f9b3', (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first

  let allPoints = ggb1.instance.getAllObjectNames('point');
  let classPoints = allPoints.filter(
    (point) => ggb1.instance.getCaption(point) == 'classmate'
  );
  for (let i = 0, L = classPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(classPoints[i]);
  }

  // think of this forEach as "for each student's input, do the following"
  lastRegister.forEach(({ data, info }) => {
    const { pandaPoint } = data;
    const { isSelf } = info;
    if (!isSelf) {
      let newPoint = ggb1.instance.evalCommandGetLabels('(0,0)');
      ggb1.instance.setCoords(newPoint, pandaPoint[0], pandaPoint[1]);
      ggb1.instance.setFixed(newPoint, false, false);
      ggb1.instance.setColor(newPoint, 160, 160, 160);
      ggb1.instance.setLayer(newPoint, 1);
      ggb1.instance.setPointSize(newPoint, 4);
      ggb1.instance.setCaption(newPoint, 'classmate');
      let newRay = ggb1.instance.evalCommandGetLabels(
        `Ray((0,0), ${newPoint})`
      );
      ggb1.instance.setFixed(newRay, false, false);
      ggb1.instance.setColor(newRay, 160, 160, 160);
      ggb1.instance.setLayer(newRay, 1);
    } else {
      // ggb1.instance.setCoords("B", pandaPoint[0], pandaPoint[1]);
      ggb1.instance.setValue('xValues', pandaPoint[0]);
      ggb1.instance.setValue('yValues', pandaPoint[1]);
    }
  });
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

/*
{"compTotals":{"textbox":2,"geogebra":1},"stage":"Learn","lessonInfo":"7 M1 TB L09 - Comparing Proportional Relationships​","teacherView":true,"layout":"one col"}
*/
