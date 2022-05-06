const { ggb1, text1, select1, buttonGroup1, table1 } = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    table1.setVisible(false);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
    buttonGroup1.updateSingleButton({ disabled: true, outline: true }, 4);
    buttonGroup1.updateData({ visible: false });
    saveData({
      polyCount: 0,
      currentFigure: 1,
      currentPoint: 1,
      currentRotationCenter: 1,
      currentReflectionLine: 1,
      currentVectorPoint1: 1,
      currentVectorPoint2: 1,
      currentVector: 1,
      currentAnimatingPolygon: 1,
      polyArray: [],
      pointsArray: [],
      reflectionLinesArray: [],
      rotationPointsArray: [],
      translationPointsArray: [],
      translationVectorsArray: [],
      currentReflectionSegs: [],
      currentAnimatedPoints: [],
      textAString: '',
      resultA: '',
      textBString: '',
      resultB: '',
      textCString: '',
      resultC: '',
    });
    ggb1.updateData({ init: true });
  }
}

let polyCount = getData('polyCount');
let currentFigure = getData('currentFigure');
let currentPoint = getData('currentPoint');
let currentRotationCenter = getData('currentRotationCenter');
let currentReflectionLine = getData('currentReflectionLine');
let currentVectorPoint1 = getData('currentVectorPoint1');
let currentVectorPoint2 = getData('currentVectorPoint2');
let currentVector = getData('currentVector');
let currentAnimatingPolygon = getData('currentAnimatingPolygon');
let polyArray = getData('polyArray');
let pointsArray = getData('pointsArray');
let reflectionLinesArray = getData('reflectionLinesArray');
let rotationPointsArray = getData('rotationPointsArray');
let translationPointsArray = getData('translationPointsArray');
let translationVectorsArray = getData('translationVectorsArray');
let currentReflectionSegs = getData('currentReflectionSegs');
let currentAnimatedPoints = getData('currentAnimatedPoints');
let textAString = getData('textAString');
let resultA = getData('resultA');
let textBString = getData('textBString');
let resultB = getData('resultB');
let textCString = getData('textCString');
let resultC = getData('resultC');

let beginningTextAString = "A'";
let beginningTextBString = "B'";
let beginningTextCString = "C'";

let followedByString = "'";

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('time', timeWork);
ggb1.instance.registerObjectUpdateListener('show90Hover', display90Hover);
ggb1.instance.registerObjectUpdateListener('show180Hover', display180Hover);
ggb1.instance.registerObjectUpdateListener('show270Hover', display270Hover);
ggb1.instance.registerObjectUpdateListener(
  'showClockwiseHover',
  displayClockwiseHover
);
ggb1.instance.registerObjectUpdateListener(
  'showCounterclockwiseHover',
  displayCounterclockwiseHover
);

ggb1.instance.registerObjectUpdateListener(
  'counterclockwise',
  clockwiseButtons
);
ggb1.instance.registerObjectUpdateListener('angleMeasure', angleButtons);

ggb1.instance.registerClientListener(focusIndicator);

function clockwiseButtons() {
  if (ggb1.instance.getValue('counterclockwise')) {
    ggb1.instance.setFixed('bboxCounterclockwise', false, false);
    ggb1.instance.setFixed('bboxClockwise', true, true);
  } else {
    ggb1.instance.setFixed('bboxCounterclockwise', true, true);
    ggb1.instance.setFixed('bboxClockwise', false, false);
  }
}

function angleButtons() {
  if (ggb1.instance.getValue('angleMeasure') == 90) {
    ggb1.instance.setFixed('box90', false, false);
    ggb1.instance.setFixed('box180', true, true);
    ggb1.instance.setFixed('box270', true, true);
  } else if (ggb1.instance.getValue('angleMeasure') == 180) {
    ggb1.instance.setFixed('box90', true, true);
    ggb1.instance.setFixed('box180', false, false);
    ggb1.instance.setFixed('box270', true, true);
  } else if (ggb1.instance.getValue('angleMeasure') == 270) {
    ggb1.instance.setFixed('box90', true, true);
    ggb1.instance.setFixed('box180', true, true);
    ggb1.instance.setFixed('box270', false, false);
  }
}

function focusIndicator(a) {
  if (a.type == 'select') {
    if (a.target == 'box90') {
      ggb1.instance.setVisible('box90Hover', true);
    } else {
      ggb1.instance.setVisible('box90Hover', false);
    }
    if (a.target == 'box180') {
      ggb1.instance.setVisible('box180Hover', true);
    } else {
      ggb1.instance.setVisible('box180Hover', false);
    }
    if (a.target == 'box270') {
      ggb1.instance.setVisible('box270Hover', true);
    } else {
      ggb1.instance.setVisible('box270Hover', false);
    }
    if (a.target == 'bboxClockwise') {
      ggb1.instance.setVisible('boxClockwiseHover', true);
    } else {
      ggb1.instance.setVisible('boxClockwiseHover', false);
    }
    if (a.target == 'bboxCounterclockwise') {
      ggb1.instance.setVisible('boxCounterclockwiseHover', true);
    } else {
      ggb1.instance.setVisible('boxCounterclockwiseHover', false);
    }
  }
  if (a.type == 'deselect') {
    ggb1.instance.setVisible('box90Hover', false);
    ggb1.instance.setVisible('box180Hover', false);
    ggb1.instance.setVisible('box270Hover', false);
    ggb1.instance.setVisible('boxClockwiseHover', false);
    ggb1.instance.setVisible('boxCounterclockwiseHover', false);
  }
}

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    buttonGroup1.updateSingleButton({ text: 'Reflect' }, 1);
    ggb1.instance.setValue('showReflection', true);
  } else {
    ggb1.instance.setValue('showReflection', false);
  }
  if (select1.data.selected.includes('1')) {
    buttonGroup1.updateSingleButton({ text: 'Rotate' }, 1);
    ggb1.instance.setValue('showRotation', true);
  } else {
    ggb1.instance.setValue('showRotation', false);
  }
  if (select1.data.selected.includes('2')) {
    buttonGroup1.updateSingleButton({ text: 'Translate' }, 1);
    ggb1.instance.setValue('showTranslation', true);
  } else {
    ggb1.instance.setValue('showTranslation', false);
  }
  if (
    select1.data.selected.includes('0') ||
    select1.data.selected.includes('1') ||
    select1.data.selected.includes('2')
  ) {
    buttonGroup1.updateData({ visible: true });
  }
});

buttonGroup1.on('click:1', () => {
  polyArray = getData('polyArray');
  pointsArray = getData('pointsArray');
  reflectionLinesArray = getData('reflectionLinesArray');
  currentRotationCenter = getData('currentRotationCenter');
  currentReflectionLine = getData('currentReflectionLine');
  currentVectorPoint1 = getData('currentVectorPoint1');
  currentVectorPoint2 = getData('currentVectorPoint2');
  translationPointsArray = getData('translationPointsArray');
  translationVectorsArray = getData('translationVectorsArray');
  textAString = getData('textAString');
  resultA = getData('resultA');
  textBString = getData('textBString');
  resultB = getData('resultB');
  textCString = getData('textCString');
  resultC = getData('resultC');
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  select1.setDisabled(true);
  table1.addRow(ggb1.instance.getValue('count') + 1, {
    isHeader: false,
    math: false,
    editable: false,
  });
  if (ggb1.instance.getValue('count') == 0) {
    textAString = beginningTextAString;
    textBString = beginningTextBString;
    textCString = beginningTextCString;
  } else {
    resultA = textAString.concat(followedByString);
    resultB = textBString.concat(followedByString);
    resultC = textCString.concat(followedByString);
    textAString = resultA;
    textBString = resultB;
    textCString = resultC;
  }

  saveData({
    textAString: textAString,
    resultA: resultA,
    textBString: textBString,
    resultB: resultB,
    textCString: textCString,
    resultC: resultC,
  });

  if (ggb1.instance.getValue('reflectionJustHappened')) {
    ggb1.instance.setColor(
      reflectionLinesArray[reflectionLinesArray.length - 1],
      128,
      128,
      128
    );
  } else if (ggb1.instance.getValue('rotationJustHappened')) {
    ggb1.instance.setColor(
      rotationPointsArray[rotationPointsArray.length - 1],
      128,
      128,
      128
    );
  } else if (ggb1.instance.getValue('translationJustHappened')) {
    for (let i = translationPointsArray.length - 2, L = i + 2; i < L; i++) {
      ggb1.instance.setColor(translationPointsArray[i], 128, 128, 128);
    }
    ggb1.instance.setColor(
      translationVectorsArray[translationVectorsArray.length - 1],
      128,
      128,
      128
    );
  }

  resetJustHappeneds();
  if (ggb1.instance.getValue('showReflection')) {
    reflect();
    ggb1.instance.setValue('reflectionJustHappened', true);
    table1.updateCell(ggb1.instance.getValue('count') + 1, 1, {
      value: `A reflection across line $${currentReflectionLine}$`,
    });
  } else if (ggb1.instance.getValue('showRotation')) {
    rotate();
    ggb1.instance.setValue('rotationJustHappened', true);
    let direction;
    if (ggb1.instance.getValue('counterclockwise')) {
      direction = 'counterclockwise';
    } else {
      direction = 'clockwise';
    }
    table1.updateCell(ggb1.instance.getValue('count') + 1, 1, {
      value: `A $${ggb1.instance.getValue(
        'angleMeasure'
      )}$$\\degree$${direction} rotation around point $${currentRotationCenter}$`,
    });
  } else if (ggb1.instance.getValue('showTranslation')) {
    translate();
    ggb1.instance.setValue('translationJustHappened', true);
    table1.updateCell(ggb1.instance.getValue('count') + 1, 1, {
      value: `A translation along $\\overrightarrow{${currentVectorPoint1}${currentVectorPoint2}}$`,
    });
  }

  table1.updateCell(ggb1.instance.getValue('count') + 1, 0, {
    value: `$${ggb1.instance.getValue('count') + 1}$`,
  });
  table1.setVisible(true);

  for (let i = 4, L = 7; i < L; i++) {
    ggb1.instance.setColor(pointsArray[pointsArray.length - i], 128, 128, 128);
  }
  for (let i = 7, L = 10; i < L; i++) {
    ggb1.instance.setVisible(pointsArray[pointsArray.length - i], false);
  }

  ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  ggb1.instance.setColor(polyArray[polyArray.length - 2], 128, 128, 128);
  ggb1.instance.setVisible(polyArray[polyArray.length - 3], false);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();

  saveData({
    polyArray: polyArray,
    pointsArray: pointsArray,
    reflectionLinesArray: reflectionLinesArray,
    currentRotationCenter: currentRotationCenter,
    currentReflectionLine: currentReflectionLine,
    currentVectorPoint1: currentVectorPoint1,
    currentVectorPoint2: currentVectorPoint2,
    translationPointsArray: translationPointsArray,
    translationVectorsArray: translationVectorsArray,
  });
});

buttonGroup1.on('click:2', () => {
  polyArray = getData('polyArray');
  pointsArray = getData('pointsArray');
  reflectionLinesArray = getData('reflectionLinesArray');
  rotationPointsArray = getData('rotationPointsArray');
  translationPointsArray = getData('translationPointsArray');
  translationVectorsArray = getData('translationVectorsArray');
  textAString = getData('textAString');
  textBString = getData('textBString');
  textCString = getData('textCString');
  select1.setDisabled(false);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  if (ggb1.instance.getValue('count') == 1) {
    textAString = '';
    textBString = '';
    textCString = '';
    table1.setVisible(false);
  } else if (ggb1.instance.getValue('count') > 1) {
    let stringLength = textAString.length - 1;
    textAString = textAString.substr(0, stringLength);
    textBString = textBString.substr(0, stringLength);
    textCString = textCString.substr(0, stringLength);
  }
  table1.deleteRow(ggb1.instance.getValue('count') + 1);

  if (ggb1.instance.getValue('reflectionJustHappened')) {
    ggb1.instance.deleteObject(
      reflectionLinesArray[reflectionLinesArray.length - 1]
    );
    reflectionLinesArray.pop(
      reflectionLinesArray[reflectionLinesArray.length - 1]
    );
    ggb1.instance.setColor(
      reflectionLinesArray[reflectionLinesArray.length - 1],
      0,
      0,
      0
    );
    ggb1.instance.setVisible(
      reflectionLinesArray[reflectionLinesArray.length - 1],
      true
    );
  } else if (ggb1.instance.getValue('rotationJustHappened')) {
    ggb1.instance.deleteObject(
      rotationPointsArray[rotationPointsArray.length - 1]
    );
    rotationPointsArray.pop(
      rotationPointsArray[rotationPointsArray.length - 1]
    );
    ggb1.instance.setColor(
      rotationPointsArray[rotationPointsArray.length - 1],
      0,
      0,
      0
    );
    ggb1.instance.setVisible(
      rotationPointsArray[rotationPointsArray.length - 1],
      true
    );
  } else if (ggb1.instance.getValue('translationJustHappened')) {
    ggb1.instance.deleteObject(
      translationVectorsArray[translationVectorsArray.length - 1]
    );
    translationVectorsArray.pop(
      translationVectorsArray[translationVectorsArray.length - 1]
    );
    ggb1.instance.setColor(
      translationVectorsArray[translationVectorsArray.length - 1],
      0,
      0,
      0
    );
    ggb1.instance.setVisible(
      translationVectorsArray[translationVectorsArray.length - 1],
      true
    );
    for (let i = translationPointsArray.length - 2, L = i + 2; i < L; i++) {
      ggb1.instance.deleteObject(translationPointsArray[i]);
    }
    for (let i = translationPointsArray.length - 2, L = i + 2; i < L; i++) {
      translationPointsArray.pop(translationPointsArray[i]);
    }
    for (let i = translationPointsArray.length - 2, L = i + 2; i < L; i++) {
      ggb1.instance.setColor(translationPointsArray[i], 0, 0, 0);
      ggb1.instance.setVisible(translationPointsArray[i], true);
    }
  }

  for (let i = pointsArray.length - 3, L = i + 3; i < L; i++) {
    ggb1.instance.deleteObject(pointsArray[i]);
  }
  for (let i = pointsArray.length - 3, L = i + 3; i < L; i++) {
    pointsArray.pop(pointsArray[i]);
  }
  for (let i = pointsArray.length - 3, L = i + 3; i < L; i++) {
    ggb1.instance.setColor(pointsArray[i], 218, 41, 28);
    ggb1.instance.setVisible(pointsArray[i], true);
  }
  ggb1.instance.deleteObject(polyArray[polyArray.length - 1]);
  polyArray.pop(polyArray[polyArray.length - 1]);
  ggb1.instance.setColor(polyArray[polyArray.length - 1], 218, 41, 28);
  ggb1.instance.setVisible(polyArray[polyArray.length - 1], true);
  if (ggb1.instance.getValue('count') > 0) {
    ggb1.instance.setValue('count', ggb1.instance.getValue('count') - 1);
  }
  resetTime();
  saveData({
    pointsArray: pointsArray,
    reflectionLinesArray: reflectionLinesArray,
    rotationPointsArray: rotationPointsArray,
    translationPointsArray: translationPointsArray,
    translationVectorsArray: translationVectorsArray,
    polyArray: polyArray,
    textAString: textAString,
    textBString: textBString,
    textCString: textCString,
  });
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateData({ visible: false });
  select1.setDisabled(false);
  select1.unselectAll();
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  resetTime();
  sendHome();
});

buttonGroup1.on('click:4', () => {
  polyArray = getData('polyArray');
  pointsArray = getData('pointsArray');
  reflectionLinesArray = getData('reflectionLinesArray');
  rotationPointsArray = getData('rotationPointsArray');
  translationPointsArray = getData('translationPointsArray');
  translationVectorsArray = getData('translationVectorsArray');
  currentReflectionSegs = getData('currentReflectionSegs');
  currentAnimatedPoints = getData('currentAnimatedPoints');
  textAString = getData('textAString');
  textBString = getData('textBString');
  textCString = getData('textCString');
  buttonGroup1.updateData({ visible: false });
  select1.setDisabled(false);
  select1.unselectAll();
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  for (let i = 1, L = ggb1.instance.getValue('count') + 1; i < L; i++) {
    table1.deleteRow(i);
  }
  ggb1.instance.setValue('count', 0);
  resetTime();
  sendHome();
  for (let i = 0, L = pointsArray.length; i < L; i++) {
    ggb1.instance.deleteObject(pointsArray[i]);
  }
  for (let i = 0, L = polyArray.length; i < L; i++) {
    ggb1.instance.deleteObject(polyArray[i]);
  }
  for (let i = 0, L = translationPointsArray.length; i < L; i++) {
    ggb1.instance.deleteObject(translationPointsArray[i]);
  }
  for (let i = 0, L = translationVectorsArray.length; i < L; i++) {
    ggb1.instance.deleteObject(translationVectorsArray[i]);
  }
  for (let i = 0, L = rotationPointsArray.length; i < L; i++) {
    ggb1.instance.deleteObject(rotationPointsArray[i]);
  }
  for (let i = 0, L = reflectionLinesArray.length; i < L; i++) {
    ggb1.instance.deleteObject(reflectionLinesArray[i]);
  }
  for (let i = 0, L = currentReflectionSegs.length; i < L; i++) {
    ggb1.instance.deleteObject(currentReflectionSegs[i]);
    ggb1.instance.deleteObject(currentAnimatedPoints[i]);
  }
  pointsArray = [];
  reflectionLinesArray = [];
  rotationPointsArray = [];
  translationPointsArray = [];
  translationVectorsArray = [];
  polyArray = [];
  currentReflectionSegs = [];
  currentAnimatedPoints = [];
  textAString = '';
  textBString = '';
  textCString = '';
  table1.setVisible(false);
  saveData({
    pointsArray: pointsArray,
    reflectionLinesArray: reflectionLinesArray,
    rotationPointsArray: rotationPointsArray,
    translationPointsArray: translationPointsArray,
    translationVectorsArray: translationVectorsArray,
    polyArray: polyArray,
    currentReflectionSegs: currentReflectionSegs,
    currentAnimatedPoints: currentAnimatedPoints,
    textAString: textAString,
    textBString: textBString,
    textCString: textCString,
  });
});

function reflect() {
  polyCount = getData('polyCount');
  currentFigure = getData('currentFigure');
  currentPoint = getData('currentPoint');
  currentReflectionLine = getData('currentReflectionLine');
  currentAnimatingPolygon = getData('currentAnimatingPolygon');
  polyArray = getData('polyArray');
  pointsArray = getData('pointsArray');
  reflectionLinesArray = getData('reflectionLinesArray');
  currentReflectionSegs = getData('currentReflectionSegs');
  currentAnimatedPoints = getData('currentAnimatedPoints');

  currentReflectionLine = ggb1.instance.evalCommandGetLabels(
    `Line((${ggb1.instance.getValue('refPointXVal')},${ggb1.instance.getValue(
      'refPointYVal'
    )}),(${ggb1.instance.getValue('refPoint2XVal')},${ggb1.instance.getValue(
      'refPoint2YVal'
    )}))`
  );
  reflectionLinesArray.push(currentReflectionLine);

  if (ggb1.instance.getValue('count') == 0) {
    currentFigure = ggb1.instance.evalCommandGetLabels(
      `Reflect(figure,${currentReflectionLine})`
    );

    ggb1.instance.setVisible(currentFigure, false);
    ggb1.instance.setColor(currentFigure, 218, 41, 28);
    ggb1.instance.setLayer(currentFigure, 0);
    polyArray.push(currentFigure);

    for (let i = 0; i < 3; i++) {
      currentPoint = ggb1.instance.evalCommandGetLabels(
        `Reflect(FigurePoint${i + 1},${currentReflectionLine})`
      );
      ggb1.instance.setVisible(currentPoint, false);
      pointsArray.push(currentPoint);

      currentReflectionSegs[i] = ggb1.instance.evalCommandGetLabels(
        `Segment(FigurePoint${i + 1},${pointsArray[i]})`
      );
      ggb1.instance.setVisible(currentReflectionSegs[i], false);

      currentAnimatedPoints[i] = ggb1.instance.evalCommandGetLabels(
        `Point(${currentReflectionSegs[i]},anim8(time))`
      );
      ggb1.instance.setVisible(currentAnimatedPoints[i], false);
    }
    pointLabelWork();
    currentAnimatingPolygon = ggb1.instance.evalCommandGetLabels(
      `shape${polyCount}=Polygon({${currentAnimatedPoints[0]},${currentAnimatedPoints[1]},${currentAnimatedPoints[2]}})`
    );
    polyCount = polyCount + 1;
    ggb1.instance.setFixed(currentAnimatingPolygon, false, false);
    ggb1.instance.setColor(currentAnimatingPolygon, 218, 41, 28);
  } else {
    for (let i = 0, L = currentReflectionSegs.length; i < L; i++) {
      ggb1.instance.deleteObject(currentReflectionSegs[i]);
      ggb1.instance.deleteObject(currentAnimatedPoints[i]);
    }

    currentReflectionSegs = [];
    currentAnimatedPoints = [];

    //if we switch back to not having a ghost image, delete next line and uncomment the line after it
    ggb1.instance.setColor(currentFigure, 128, 128, 128);
    //ggb1.instance.setVisible(currentFigure, false);

    currentFigure = ggb1.instance.evalCommandGetLabels(
      `Reflect(${polyArray[polyArray.length - 1]},${currentReflectionLine})`
    );

    ggb1.instance.setVisible(currentFigure, false);
    ggb1.instance.setColor(currentFigure, 218, 41, 28);
    ggb1.instance.setLayer(currentFigure, 0);
    polyArray.push(currentFigure);

    for (let i = pointsArray.length - 3, L = i + 3; i < L; i++) {
      currentPoint = ggb1.instance.evalCommandGetLabels(
        `Reflect(${pointsArray[i]},${currentReflectionLine})`
      );
      ggb1.instance.setVisible(currentPoint, false);
      pointsArray.push(currentPoint);
    }
    pointLabelWork();
    for (let j = 0; j < 3; j++) {
      currentReflectionSegs[j] = ggb1.instance.evalCommandGetLabels(
        `Segment(${pointsArray[pointsArray.length - 6 + j]},${
          pointsArray[pointsArray.length - 3 + j]
        })`
      );
      ggb1.instance.setVisible(currentReflectionSegs[j], false);

      currentAnimatedPoints[j] = ggb1.instance.evalCommandGetLabels(
        `Point(${currentReflectionSegs[j]},anim8(time))`
      );
      ggb1.instance.setVisible(currentAnimatedPoints[j], false);
    }
    currentAnimatingPolygon = ggb1.instance.evalCommandGetLabels(
      `shape${polyCount}=Polygon({${currentAnimatedPoints[0]},${currentAnimatedPoints[1]},${currentAnimatedPoints[2]}})`
    );
    polyCount = polyCount + 1;
    ggb1.instance.setFixed(currentAnimatingPolygon, false, false);
    ggb1.instance.setColor(currentAnimatingPolygon, 218, 41, 28);
  }
  ggb1.instance.setColor(currentReflectionLine, 0, 0, 0);
  ggb1.instance.setLayer(currentReflectionLine, 0);
  ggb1.instance.setFixed(currentReflectionLine, false, false);
  ggb1.instance.setCaption(currentReflectionLine, '$%n$');
  ggb1.instance.setLabelVisible(currentReflectionLine, true);
  ggb1.instance.setLabelStyle(currentReflectionLine, 3);

  saveData({
    polyCount: polyCount,
    currentAnimatingPolygon: currentAnimatingPolygon,
    currentPoint: currentPoint,
    pointsArray: pointsArray,
    reflectionLinesArray: reflectionLinesArray,
    currentFigure: currentFigure,
    polyArray: polyArray,
    currentReflectionSegs: currentReflectionSegs,
    currentAnimatedPoints: currentAnimatedPoints,
  });
}

function rotate() {
  currentFigure = getData('currentFigure');
  currentPoint = getData('currentPoint');
  currentAnimatingPolygon = getData('currentAnimatingPolygon');
  polyArray = getData('polyArray');
  pointsArray = getData('pointsArray');
  currentRotationCenter = getData('currentRotationCenter');
  rotationPointsArray = getData('rotationPointsArray');

  currentRotationCenter = ggb1.instance.evalCommandGetLabels(
    `(${ggb1.instance.getValue('centerXVal')},${ggb1.instance.getValue(
      'centerYVal'
    )})`
  );
  rotationPointsArray.push(currentRotationCenter);

  if (ggb1.instance.getValue('count') == 0) {
    currentFigure = ggb1.instance.evalCommandGetLabels(
      `Rotate(figure,${ggb1.instance.getValue(
        'angleVal'
      )}deg,${currentRotationCenter})`
    );
    ggb1.instance.setVisible(currentFigure, false);
    ggb1.instance.setColor(currentFigure, 218, 41, 28);
    ggb1.instance.setLayer(currentFigure, 0);
    polyArray.push(currentFigure);

    for (let i = 0; i < 3; i++) {
      currentPoint = ggb1.instance.evalCommandGetLabels(
        `Rotate(FigurePoint${i + 1},${ggb1.instance.getValue(
          'angleVal'
        )}deg,${currentRotationCenter})`
      );
      ggb1.instance.setVisible(currentPoint, false);
      pointsArray.push(currentPoint);
    }
    pointLabelWork();

    currentAnimatingPolygon = ggb1.instance.evalCommandGetLabels(
      `Rotate(figure,angle*anim8(time),aCenterOfRotation)`
    );
    ggb1.instance.setFixed(currentAnimatingPolygon, false, false);
    ggb1.instance.setColor(currentAnimatingPolygon, 218, 41, 28);
  } else {
    //if we switch back to not having a ghost image, delete next line and uncomment the line after it
    ggb1.instance.setColor(currentFigure, 128, 128, 128);
    //ggb1.instance.setVisible(currentFigure, false);
    currentFigure = ggb1.instance.evalCommandGetLabels(
      `Rotate(${polyArray[polyArray.length - 1]},${ggb1.instance.getValue(
        'angleVal'
      )}deg,${currentRotationCenter})`
    );
    ggb1.instance.setVisible(currentFigure, false);
    ggb1.instance.setColor(currentFigure, 218, 41, 28);
    ggb1.instance.setLayer(currentFigure, 0);
    polyArray.push(currentFigure);

    for (let i = pointsArray.length - 3, L = i + 3; i < L; i++) {
      currentPoint = ggb1.instance.evalCommandGetLabels(
        `Rotate(${pointsArray[i]},${ggb1.instance.getValue(
          'angleVal'
        )}deg,${currentRotationCenter})`
      );
      ggb1.instance.setVisible(currentPoint, false);
      pointsArray.push(currentPoint);
    }
    pointLabelWork();

    currentAnimatingPolygon = ggb1.instance.evalCommandGetLabels(
      `Rotate(${
        polyArray[polyArray.length - 2]
      },angle*anim8(time),aCenterOfRotation)`
    );
    ggb1.instance.setFixed(currentAnimatingPolygon, false, false);
    ggb1.instance.setColor(currentAnimatingPolygon, 218, 41, 28);
  }
  ggb1.instance.setColor(currentRotationCenter, 0, 0, 0);
  ggb1.instance.setLayer(currentRotationCenter, 0);
  ggb1.instance.setFixed(currentRotationCenter, false, false);
  ggb1.instance.setCaption(currentRotationCenter, '$%n$');
  ggb1.instance.setLabelVisible(currentRotationCenter, true);
  ggb1.instance.setLabelStyle(currentRotationCenter, 3);

  saveData({
    currentAnimatingPolygon: currentAnimatingPolygon,
    currentPoint: currentPoint,
    pointsArray: pointsArray,
    currentRotationCenter: currentRotationCenter,
    rotationPointsArray: rotationPointsArray,
    currentFigure: currentFigure,
    polyArray: polyArray,
  });
}

function translate() {
  currentFigure = getData('currentFigure');
  currentPoint = getData('currentPoint');
  currentAnimatingPolygon = getData('currentAnimatingPolygon');
  polyArray = getData('polyArray');
  pointsArray = getData('pointsArray');
  translationPointsArray = getData('translationPointsArray');
  translationVectorsArray = getData('translationVectorsArray');
  currentVectorPoint1 = getData('currentVectorPoint1');
  currentVectorPoint2 = getData('currentVectorPoint2');
  currentVector = getData('currentVector');

  currentVectorPoint1 = ggb1.instance.evalCommandGetLabels(
    `(${ggb1.instance.getValue('vecPointXVal')},${ggb1.instance.getValue(
      'vecPointYVal'
    )})`
  );
  translationPointsArray.push(currentVectorPoint1);
  currentVectorPoint2 = ggb1.instance.evalCommandGetLabels(
    `(${ggb1.instance.getValue('vecPoint2XVal')},${ggb1.instance.getValue(
      'vecPoint2YVal'
    )})`
  );
  translationPointsArray.push(currentVectorPoint2);
  currentVector = ggb1.instance.evalCommandGetLabels(
    `Vector(${currentVectorPoint1},${currentVectorPoint2})`
  );
  translationVectorsArray.push(currentVector);

  if (ggb1.instance.getValue('count') == 0) {
    currentFigure = ggb1.instance.evalCommandGetLabels(
      `Translate(figure,${currentVector})`
    );
    ggb1.instance.setVisible(currentFigure, false);
    ggb1.instance.setColor(currentFigure, 218, 41, 28);
    ggb1.instance.setLayer(currentFigure, 0);
    polyArray.push(currentFigure);

    for (let i = 0; i < 3; i++) {
      currentPoint = ggb1.instance.evalCommandGetLabels(
        `Translate(FigurePoint${i + 1},${currentVector})`
      );
      ggb1.instance.setVisible(currentPoint, false);
      pointsArray.push(currentPoint);
    }
    pointLabelWork();

    currentAnimatingPolygon = ggb1.instance.evalCommandGetLabels(
      `Translate(figure,adjustableVector*anim8(time))`
    );
    ggb1.instance.setFixed(currentAnimatingPolygon, false, false);
    ggb1.instance.setColor(currentAnimatingPolygon, 218, 41, 28);
  } else {
    //if we switch back to not having a ghost image, delete next line and uncomment the line after it
    ggb1.instance.setColor(currentFigure, 128, 128, 128);
    //ggb1.instance.setVisible(currentFigure, false);
    currentFigure = ggb1.instance.evalCommandGetLabels(
      `Translate(${polyArray[polyArray.length - 1]},${currentVector})`
    );
    ggb1.instance.setVisible(currentFigure, false);
    ggb1.instance.setColor(currentFigure, 218, 41, 28);
    ggb1.instance.setLayer(currentFigure, 0);
    polyArray.push(currentFigure);

    for (let i = pointsArray.length - 3, L = i + 3; i < L; i++) {
      currentPoint = ggb1.instance.evalCommandGetLabels(
        `Translate(${pointsArray[i]},${currentVector})`
      );
      ggb1.instance.setVisible(currentPoint, false);
      pointsArray.push(currentPoint);
    }
    pointLabelWork();

    currentAnimatingPolygon = ggb1.instance.evalCommandGetLabels(
      `Translate(${
        polyArray[polyArray.length - 2]
      },adjustableVector*anim8(time))`
    );
    ggb1.instance.setFixed(currentAnimatingPolygon, false, false);
    ggb1.instance.setColor(currentAnimatingPolygon, 218, 41, 28);
  }

  ggb1.instance.setColor(currentVectorPoint1, 0, 0, 0);
  ggb1.instance.setLayer(currentVectorPoint1, 0);
  ggb1.instance.setFixed(currentVectorPoint1, false, false);
  ggb1.instance.setCaption(currentVectorPoint1, '$%n$');
  ggb1.instance.setLabelVisible(currentVectorPoint1, true);
  ggb1.instance.setLabelStyle(currentVectorPoint1, 3);

  ggb1.instance.setColor(currentVectorPoint2, 0, 0, 0);
  ggb1.instance.setLayer(currentVectorPoint2, 0);
  ggb1.instance.setFixed(currentVectorPoint2, false, false);
  ggb1.instance.setCaption(currentVectorPoint2, '$%n$');
  ggb1.instance.setLabelVisible(currentVectorPoint2, true);
  ggb1.instance.setLabelStyle(currentVectorPoint2, 3);

  ggb1.instance.setColor(currentVector, 0, 0, 0);
  ggb1.instance.setLayer(currentVector, 0);
  ggb1.instance.setFixed(currentVector, false, false);

  saveData({
    currentAnimatingPolygon: currentAnimatingPolygon,
    currentPoint: currentPoint,
    pointsArray: pointsArray,
    translationPointsArray: translationPointsArray,
    translationVectorsArray: translationVectorsArray,
    currentVectorPoint1: currentVectorPoint1,
    currentVectorPoint2: currentVectorPoint2,
    currentVector: currentVector,
    currentFigure: currentFigure,
    polyArray: polyArray,
  });
}

function pointLabelWork() {
  ggb1.instance.setCaption(
    pointsArray[pointsArray.length - 3],
    `$${textAString}$`
  );
  ggb1.instance.setCaption(
    pointsArray[pointsArray.length - 2],
    `$${textBString}$`
  );
  ggb1.instance.setCaption(
    pointsArray[pointsArray.length - 1],
    `$${textCString}$`
  );
}

function timeWork() {
  currentFigure = getData('currentFigure');
  currentAnimatingPolygon = getData('currentAnimatingPolygon');
  if (ggb1.instance.getValue('time') == 1) {
    ggb1.instance.setVisible(currentAnimatingPolygon, false);
    ggb1.instance.setVisible(currentFigure, true);

    for (let i = 1, L = 4; i < L; i++) {
      ggb1.instance.setColor(pointsArray[pointsArray.length - i], 218, 41, 28);
      ggb1.instance.setVisible(pointsArray[pointsArray.length - i], true);
      ggb1.instance.setLayer(pointsArray[pointsArray.length - i], 0);
    }
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: false }, 3);
  } else {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
  }
}

function display90Hover() {
  if (ggb1.instance.getValue('show90Hover')) {
    ggb1.instance.setVisible('box90Hover', true);
  } else {
    ggb1.instance.setVisible('box90Hover', false);
  }
}

function display180Hover() {
  if (ggb1.instance.getValue('show180Hover')) {
    ggb1.instance.setVisible('box180Hover', true);
  } else {
    ggb1.instance.setVisible('box180Hover', false);
  }
}

function display270Hover() {
  if (ggb1.instance.getValue('show270Hover')) {
    ggb1.instance.setVisible('box270Hover', true);
  } else {
    ggb1.instance.setVisible('box270Hover', false);
  }
}

function displayClockwiseHover() {
  if (ggb1.instance.getValue('showClockwiseHover')) {
    ggb1.instance.setVisible('boxClockwiseHover', true);
  } else {
    ggb1.instance.setVisible('boxClockwiseHover', false);
  }
}

function displayCounterclockwiseHover() {
  if (ggb1.instance.getValue('showCounterclockwiseHover')) {
    ggb1.instance.setVisible('boxCounterclockwiseHover', true);
  } else {
    ggb1.instance.setVisible('boxCounterclockwiseHover', false);
  }
}

function resetTime() {
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
}

function resetJustHappeneds() {
  ggb1.instance.setValue('reflectionJustHappened', false);
  ggb1.instance.setValue('rotationJustHappened', false);
  ggb1.instance.setValue('translationJustHappened', false);
}

function sendHome() {
  ggb1.instance.evalCommand(`SetValue(aCenterOfRotation,HomePointCenter)`);
  ggb1.instance.evalCommand(`SetValue(RefPoint,HomePointRef1)`);
  ggb1.instance.evalCommand(`SetValue(RefPoint2,HomePointRef2)`);
  ggb1.instance.evalCommand(`SetValue(VecPoint,HomePointVec1)`);
  ggb1.instance.evalCommand(`SetValue(VecPoint2,HomePointVec2)`);
}

function saveData(dataObj = {}, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataObj !== 'object') {
    console.error(
      'saveData error: Parameters should be an object and a string!'
    );
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataName !== 'string') {
    console.error('getData error: Parameters should both be strings!');
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}
