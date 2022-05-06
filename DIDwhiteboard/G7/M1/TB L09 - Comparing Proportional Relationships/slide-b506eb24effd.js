const { text1, ggb1, image1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

text1.updateData({ align: 'center', visible: false });
image1.updateData({ visible: false });

slide.on('firstload', () => {
  ggb1.instance.setVisible('eq1', false);
  ggb1.instance.setVisible('eq2', false);
  ggb1.instance.setVisible('A', false);
  ggb1.instance.setVisible('B', false);
  ggb1.instance.setLayer('i', 1);
  ggb1.instance.setFixed('i', false, false);
});

utils.RTS.on('datachange', 'slide-e209cf1e7a95', (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first

  let allSegs = ggb1.instance.getAllObjectNames('ray');
  let classSegs = allSegs.filter(
    (seg) => ggb1.instance.getCaption(seg) == 'classmate'
  );
  for (let i = 0, L = classSegs.length; i < L; i++) {
    ggb1.instance.deleteObject(classSegs[i]);
  }

  // think of this forEach as "for each student's input, do the following"
  lastRegister.forEach(({ data, info }) => {
    const { thePoints } = data;
    const { isSelf } = info;
    if (!isSelf) {
      let newA = ggb1.instance.evalCommandGetLabels(
        `(${thePoints[0][0]}, ${thePoints[0][1]})`
      );
      let newB = ggb1.instance.evalCommandGetLabels(
        `(${thePoints[1][0]}, ${thePoints[1][1]})`
      );
      let newSeg = ggb1.instance.evalCommandGetLabels(
        `Ray((${newB}), (${newA}))`
      );
      ggb1.instance.setFixed(newSeg, false, false);
      ggb1.instance.setColor(newSeg, 160, 160, 160);
      ggb1.instance.setLayer(newSeg, 0);
      ggb1.instance.setVisible(newA, false);
      ggb1.instance.setVisible(newB, false);
      ggb1.instance.setCaption(newSeg, 'classmate');
      ggb1.instance.setCaption(newA, 'classmate');
      ggb1.instance.setCaption(newB, 'classmate');
    } else {
      ggb1.instance.setCoords('A', thePoints[0][0], thePoints[0][1]);
      ggb1.instance.setCoords('B', thePoints[1][0], thePoints[1][1]);
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
{"compTotals":{"textbox":2,"geogebra":1,"uploaded-image":1},"stage":"Launch","lessonInfo":"7 M1 TB L09 - Comparing Proportional Relationships​","teacherView":false,"layout":"one col"}
*/
