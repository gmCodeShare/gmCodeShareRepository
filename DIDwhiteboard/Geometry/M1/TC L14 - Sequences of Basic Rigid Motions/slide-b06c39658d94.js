const {
  ggb1,
  ggb2,
  text1,
  text2,
  select1,
  select2,
  select3,
  buttonGroup1,
  buttonGroup2,
  table1,
  table2,
} = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    table1.setVisible(false);
    table2.setVisible(false);
    text2.updateData({ visible: false });
    select3.setVisible(false);
    select2.selectOption('0');
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
    buttonGroup1.updateSingleButton({ disabled: true, outline: true }, 4);
    buttonGroup1.updateData({ visible: false });
    buttonGroup2.updateSingleButton({ disabled: true }, 2);
    buttonGroup2.updateSingleButton({ disabled: true }, 3);
    buttonGroup2.updateSingleButton({ disabled: true, outline: true }, 4);
    buttonGroup2.updateData({ visible: false });
    ggb2.updateData({ visible: false });
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
      polyCount2: 0,
      currentFigure2: 1,
      currentPoint2: 1,
      currentRotationCenter2: 1,
      currentReflectionLine2: 1,
      currentVectorPoint12: 1,
      currentVectorPoint22: 1,
      currentVector2: 1,
      currentAnimatingPolygon2: 1,
      polyArray2: [],
      pointsArray2: [],
      reflectionLinesArray2: [],
      rotationPointsArray2: [],
      translationPointsArray2: [],
      translationVectorsArray2: [],
      currentReflectionSegs2: [],
      currentAnimatedPoints2: [],
      textAString2: '',
      resultA2: '',
      textBString2: '',
      resultB2: '',
      textCString2: '',
      resultC2: '',
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

let polyCount2 = getData('polyCount2');
let currentFigure2 = getData('currentFigure2');
let currentPoint2 = getData('currentPoint2');
let currentRotationCenter2 = getData('currentRotationCenter2');
let currentReflectionLine2 = getData('currentReflectionLine2');
let currentVectorPoint12 = getData('currentVectorPoint12');
let currentVectorPoint22 = getData('currentVectorPoint22');
let currentVector2 = getData('currentVector2');
let currentAnimatingPolygon2 = getData('currentAnimatingPolygon2');
let polyArray2 = getData('polyArray2');
let pointsArray2 = getData('pointsArray2');
let reflectionLinesArray2 = getData('reflectionLinesArray2');
let rotationPointsArray2 = getData('rotationPointsArray2');
let translationPointsArray2 = getData('translationPointsArray2');
let translationVectorsArray2 = getData('translationVectorsArray2');
let currentReflectionSegs2 = getData('currentReflectionSegs2');
let currentAnimatedPoints2 = getData('currentAnimatedPoints2');
let textAString2 = getData('textAString2');
let resultA2 = getData('resultA2');
let textBString2 = getData('textBString2');
let resultB2 = getData('resultB2');
let textCString2 = getData('textCString2');
let resultC2 = getData('resultC2');

let beginningTextAString2 = "A'";
let beginningTextBString2 = "B'";
let beginningTextCString2 = "C'";

let followedByString2 = "'";

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

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

ggb2.instance.registerObjectUpdateListener('time', timeWork2);
ggb2.instance.registerObjectUpdateListener('show90Hover', display90Hover2);
ggb2.instance.registerObjectUpdateListener('show180Hover', display180Hover2);
ggb2.instance.registerObjectUpdateListener('show270Hover', display270Hover2);
ggb2.instance.registerObjectUpdateListener(
  'showClockwiseHover',
  displayClockwiseHover2
);
ggb2.instance.registerObjectUpdateListener(
  'showCounterclockwiseHover',
  displayCounterclockwiseHover2
);

ggb2.instance.registerObjectUpdateListener(
  'counterclockwise',
  clockwiseButtons2
);
ggb2.instance.registerObjectUpdateListener('angleMeasure', angleButtons2);

ggb2.instance.registerClientListener(focusIndicator2);

function clockwiseButtons() {
  if (ggb1.instance.getValue('counterclockwise')) {
    ggb1.instance.setFixed('bboxCounterclockwise', false, false);
    ggb1.instance.setFixed('bboxClockwise', true, true);
  } else {
    ggb1.instance.setFixed('bboxCounterclockwise', true, true);
    ggb1.instance.setFixed('bboxClockwise', false, false);
  }
}

function clockwiseButtons2() {
  if (ggb2.instance.getValue('counterclockwise')) {
    ggb2.instance.setFixed('bboxCounterclockwise', false, false);
    ggb2.instance.setFixed('bboxClockwise', true, true);
  } else {
    ggb2.instance.setFixed('bboxCounterclockwise', true, true);
    ggb2.instance.setFixed('bboxClockwise', false, false);
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

function angleButtons2() {
  if (ggb2.instance.getValue('angleMeasure') == 90) {
    ggb2.instance.setFixed('box90', false, false);
    ggb2.instance.setFixed('box180', true, true);
    ggb2.instance.setFixed('box270', true, true);
  } else if (ggb1.instance.getValue('angleMeasure') == 180) {
    ggb2.instance.setFixed('box90', true, true);
    ggb2.instance.setFixed('box180', false, false);
    ggb2.instance.setFixed('box270', true, true);
  } else if (ggb1.instance.getValue('angleMeasure') == 270) {
    ggb2.instance.setFixed('box90', true, true);
    ggb2.instance.setFixed('box180', true, true);
    ggb2.instance.setFixed('box270', false, false);
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

function focusIndicator2(a) {
  if (a.type == 'select') {
    if (a.target == 'box90') {
      ggb2.instance.setVisible('box90Hover', true);
    } else {
      ggb2.instance.setVisible('box90Hover', false);
    }
    if (a.target == 'box180') {
      ggb2.instance.setVisible('box180Hover', true);
    } else {
      ggb2.instance.setVisible('box180Hover', false);
    }
    if (a.target == 'box270') {
      ggb2.instance.setVisible('box270Hover', true);
    } else {
      ggb2.instance.setVisible('box270Hover', false);
    }
    if (a.target == 'bboxClockwise') {
      ggb2.instance.setVisible('boxClockwiseHover', true);
    } else {
      ggb2.instance.setVisible('boxClockwiseHover', false);
    }
    if (a.target == 'bboxCounterclockwise') {
      ggb2.instance.setVisible('boxCounterclockwiseHover', true);
    } else {
      ggb2.instance.setVisible('boxCounterclockwiseHover', false);
    }
  }
  if (a.type == 'deselect') {
    ggb2.instance.setVisible('box90Hover', false);
    ggb2.instance.setVisible('box180Hover', false);
    ggb2.instance.setVisible('box270Hover', false);
    ggb2.instance.setVisible('boxClockwiseHover', false);
    ggb2.instance.setVisible('boxCounterclockwiseHover', false);
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

select2.on('change', (selected) => {
  //need tables and buttons
  if (select2.data.selected.includes('0')) {
    ggb1.updateData({ visible: true });
    ggb2.updateData({ visible: false });
    select1.setVisible(true);
    select3.setVisible(false);
    table1.setVisible(true);
    table2.setVisible(false);
    text2.updateData({ visible: true });
    buttonGroup1.updateData({ visible: true });
    buttonGroup2.updateData({ visible: false });
    if (ggb1.instance.getValue('count') > 0) {
      table1.setVisible(true);
      text2.updateData({ visible: true });
    } else {
      table1.setVisible(false);
      text2.updateData({ visible: false });
    }
    if (
      select1.data.selected.includes('0') ||
      select1.data.selected.includes('1') ||
      select1.data.selected.includes('2')
    ) {
      buttonGroup1.updateData({ visible: true });
    } else {
      buttonGroup1.updateData({ visible: false });
    }
  }
  if (select2.data.selected.includes('1')) {
    ggb1.updateData({ visible: false });
    ggb2.updateData({ visible: true });
    select1.setVisible(false);
    select3.setVisible(true);
    table1.setVisible(false);
    table2.setVisible(true);
    text2.updateData({ visible: true });
    buttonGroup1.updateData({ visible: false });
    buttonGroup2.updateData({ visible: true });
    if (ggb2.instance.getValue('count') > 0) {
      table2.setVisible(true);
      text2.updateData({ visible: true });
    } else {
      table2.setVisible(false);
      text2.updateData({ visible: false });
    }
    if (
      select3.data.selected.includes('0') ||
      select3.data.selected.includes('1') ||
      select3.data.selected.includes('2')
    ) {
      buttonGroup2.updateData({ visible: true });
    } else {
      buttonGroup2.updateData({ visible: false });
    }
  }
});

select3.on('change', (selected) => {
  if (select3.data.selected.includes('0')) {
    buttonGroup2.updateSingleButton({ text: 'Reflect' }, 1);
    ggb2.instance.setValue('showReflection', true);
  } else {
    ggb2.instance.setValue('showReflection', false);
  }
  if (select3.data.selected.includes('1')) {
    buttonGroup2.updateSingleButton({ text: 'Rotate' }, 1);
    ggb2.instance.setValue('showRotation', true);
  } else {
    ggb2.instance.setValue('showRotation', false);
  }
  if (select3.data.selected.includes('2')) {
    buttonGroup2.updateSingleButton({ text: 'Translate' }, 1);
    ggb2.instance.setValue('showTranslation', true);
  } else {
    ggb2.instance.setValue('showTranslation', false);
  }
  if (
    select3.data.selected.includes('0') ||
    select3.data.selected.includes('1') ||
    select3.data.selected.includes('2')
  ) {
    buttonGroup2.updateData({ visible: true });
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
    editable: true,
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
  } else if (ggb1.instance.getValue('showRotation')) {
    rotate();
    ggb1.instance.setValue('rotationJustHappened', true);
  } else if (ggb1.instance.getValue('showTranslation')) {
    translate();
    ggb1.instance.setValue('translationJustHappened', true);
  }

  table1.updateCell(ggb1.instance.getValue('count') + 1, 0, {
    value: `$${ggb1.instance.getValue('count') + 1}$`,
    math: true,
    editable: false,
  });
  table1.setVisible(true);
  text2.updateData({ visible: true });

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

buttonGroup2.on('click:1', () => {
  polyArray2 = getData('polyArray2');
  pointsArray2 = getData('pointsArray2');
  reflectionLinesArray2 = getData('reflectionLinesArray2');
  currentRotationCenter2 = getData('currentRotationCenter2');
  currentReflectionLine2 = getData('currentReflectionLine2');
  currentVectorPoint12 = getData('currentVectorPoint12');
  currentVectorPoint22 = getData('currentVectorPoint22');
  translationPointsArray2 = getData('translationPointsArray2');
  translationVectorsArray2 = getData('translationVectorsArray2');
  textAString2 = getData('textAString2');
  resultA2 = getData('resultA2');
  textBString2 = getData('textBString2');
  resultB2 = getData('resultB2');
  textCString2 = getData('textCString2');
  resultC2 = getData('resultC2');
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
  buttonGroup2.updateSingleButton({ disabled: false }, 4);
  select3.setDisabled(true);
  table2.addRow(ggb2.instance.getValue('count') + 1, {
    isHeader: false,
    math: false,
    editable: true,
  });
  if (ggb2.instance.getValue('count') == 0) {
    textAString2 = beginningTextAString2;
    textBString2 = beginningTextBString2;
    textCString2 = beginningTextCString2;
  } else {
    resultA2 = textAString2.concat(followedByString2);
    resultB2 = textBString2.concat(followedByString2);
    resultC2 = textCString2.concat(followedByString2);
    textAString2 = resultA2;
    textBString2 = resultB2;
    textCString2 = resultC2;
  }

  saveData({
    textAString2: textAString2,
    resultA2: resultA2,
    textBString2: textBString2,
    resultB2: resultB2,
    textCString2: textCString2,
    resultC2: resultC2,
  });

  if (ggb2.instance.getValue('reflectionJustHappened')) {
    ggb2.instance.setColor(
      reflectionLinesArray2[reflectionLinesArray2.length - 1],
      128,
      128,
      128
    );
  } else if (ggb2.instance.getValue('rotationJustHappened')) {
    ggb2.instance.setColor(
      rotationPointsArray2[rotationPointsArray2.length - 1],
      128,
      128,
      128
    );
  } else if (ggb2.instance.getValue('translationJustHappened')) {
    for (let i = translationPointsArray2.length - 2, L = i + 2; i < L; i++) {
      ggb2.instance.setColor(translationPointsArray2[i], 128, 128, 128);
    }
    ggb2.instance.setColor(
      translationVectorsArray2[translationVectorsArray2.length - 1],
      128,
      128,
      128
    );
  }

  resetJustHappeneds2();
  if (ggb2.instance.getValue('showReflection')) {
    reflect2();
    ggb2.instance.setValue('reflectionJustHappened', true);
  } else if (ggb2.instance.getValue('showRotation')) {
    rotate2();
    ggb2.instance.setValue('rotationJustHappened', true);
  } else if (ggb2.instance.getValue('showTranslation')) {
    translate2();
    ggb2.instance.setValue('translationJustHappened', true);
  }

  table2.updateCell(ggb2.instance.getValue('count') + 1, 0, {
    value: `$${ggb2.instance.getValue('count') + 1}$`,
    math: true,
    editable: false,
  });
  table2.setVisible(true);
  text2.updateData({ visible: true });

  for (let i = 4, L = 7; i < L; i++) {
    ggb2.instance.setColor(
      pointsArray2[pointsArray2.length - i],
      128,
      128,
      128
    );
  }
  for (let i = 7, L = 10; i < L; i++) {
    ggb2.instance.setVisible(pointsArray2[pointsArray2.length - i], false);
  }

  ggb2.instance.setValue('count', ggb2.instance.getValue('count') + 1);
  ggb2.instance.setColor(polyArray2[polyArray2.length - 2], 128, 128, 128);
  ggb2.instance.setVisible(polyArray2[polyArray2.length - 3], false);
  ggb2.instance.setAnimating('time', false);
  ggb2.instance.setValue('time', 0);
  ggb2.instance.setAnimating('time', true);
  ggb2.instance.startAnimation();

  saveData({
    polyArray2: polyArray2,
    pointsArray2: pointsArray2,
    reflectionLinesArray2: reflectionLinesArray2,
    currentRotationCenter2: currentRotationCenter2,
    currentReflectionLine2: currentReflectionLine2,
    currentVectorPoint12: currentVectorPoint12,
    currentVectorPoint22: currentVectorPoint22,
    translationPointsArray2: translationPointsArray2,
    translationVectorsArray2: translationVectorsArray2,
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
    text2.updateData({ visible: false });
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

buttonGroup2.on('click:2', () => {
  polyArray2 = getData('polyArray2');
  pointsArray2 = getData('pointsArray2');
  reflectionLinesArray2 = getData('reflectionLinesArray2');
  rotationPointsArray2 = getData('rotationPointsArray2');
  translationPointsArray2 = getData('translationPointsArray2');
  translationVectorsArray2 = getData('translationVectorsArray2');
  textAString2 = getData('textAString2');
  textBString2 = getData('textBString2');
  textCString2 = getData('textCString2');
  select3.setDisabled(false);
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
  if (ggb2.instance.getValue('count') == 1) {
    textAString2 = '';
    textBString2 = '';
    textCString2 = '';
    table2.setVisible(false);
    text2.updateData({ visible: false });
  } else if (ggb2.instance.getValue('count') > 1) {
    let stringLength2 = textAString2.length - 1;
    textAString2 = textAString2.substr(0, stringLength2);
    textBString2 = textBString2.substr(0, stringLength2);
    textCString2 = textCString2.substr(0, stringLength2);
  }
  table2.deleteRow(ggb2.instance.getValue('count') + 1);

  if (ggb2.instance.getValue('reflectionJustHappened')) {
    ggb2.instance.deleteObject(
      reflectionLinesArray2[reflectionLinesArray2.length - 1]
    );
    reflectionLinesArray2.pop(
      reflectionLinesArray2[reflectionLinesArray2.length - 1]
    );
    ggb2.instance.setColor(
      reflectionLinesArray2[reflectionLinesArray2.length - 1],
      0,
      0,
      0
    );
    ggb2.instance.setVisible(
      reflectionLinesArray2[reflectionLinesArray2.length - 1],
      true
    );
  } else if (ggb2.instance.getValue('rotationJustHappened')) {
    ggb2.instance.deleteObject(
      rotationPointsArray2[rotationPointsArray2.length - 1]
    );
    rotationPointsArray2.pop(
      rotationPointsArray2[rotationPointsArray2.length - 1]
    );
    ggb2.instance.setColor(
      rotationPointsArray2[rotationPointsArray2.length - 1],
      0,
      0,
      0
    );
    ggb2.instance.setVisible(
      rotationPointsArray2[rotationPointsArray2.length - 1],
      true
    );
  } else if (ggb2.instance.getValue('translationJustHappened')) {
    ggb2.instance.deleteObject(
      translationVectorsArray2[translationVectorsArray2.length - 1]
    );
    translationVectorsArray2.pop(
      translationVectorsArray2[translationVectorsArray2.length - 1]
    );
    ggb2.instance.setColor(
      translationVectorsArray2[translationVectorsArray2.length - 1],
      0,
      0,
      0
    );
    ggb2.instance.setVisible(
      translationVectorsArray2[translationVectorsArray2.length - 1],
      true
    );
    for (let i = translationPointsArray2.length - 2, L = i + 2; i < L; i++) {
      ggb2.instance.deleteObject(translationPointsArray2[i]);
    }
    for (let i = translationPointsArray2.length - 2, L = i + 2; i < L; i++) {
      translationPointsArray2.pop(translationPointsArray2[i]);
    }
    for (let i = translationPointsArray2.length - 2, L = i + 2; i < L; i++) {
      ggb2.instance.setColor(translationPointsArray2[i], 0, 0, 0);
      ggb2.instance.setVisible(translationPointsArray2[i], true);
    }
  }

  for (let i = pointsArray2.length - 3, L = i + 3; i < L; i++) {
    ggb2.instance.deleteObject(pointsArray2[i]);
  }
  for (let i = pointsArray2.length - 3, L = i + 3; i < L; i++) {
    pointsArray2.pop(pointsArray2[i]);
  }
  for (let i = pointsArray2.length - 3, L = i + 3; i < L; i++) {
    ggb2.instance.setColor(pointsArray2[i], 218, 41, 28);
    ggb2.instance.setVisible(pointsArray2[i], true);
  }
  ggb2.instance.deleteObject(polyArray2[polyArray2.length - 1]);
  polyArray2.pop(polyArray2[polyArray2.length - 1]);
  ggb2.instance.setColor(polyArray2[polyArray2.length - 1], 218, 41, 28);
  ggb2.instance.setVisible(polyArray2[polyArray2.length - 1], true);
  if (ggb2.instance.getValue('count') > 0) {
    ggb2.instance.setValue('count', ggb2.instance.getValue('count') - 1);
  }
  resetTime2();
  saveData({
    pointsArray2: pointsArray2,
    reflectionLinesArray2: reflectionLinesArray2,
    rotationPointsArray2: rotationPointsArray2,
    translationPointsArray2: translationPointsArray2,
    translationVectorsArray2: translationVectorsArray2,
    polyArray2: polyArray2,
    textAString2: textAString2,
    textBString2: textBString2,
    textCString2: textCString2,
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

buttonGroup2.on('click:3', () => {
  buttonGroup2.updateData({ visible: false });
  select3.setDisabled(false);
  select3.unselectAll();
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
  resetTime2();
  sendHome2();
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
  text2.updateData({ visible: false });
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

buttonGroup2.on('click:4', () => {
  polyArray2 = getData('polyArray2');
  pointsArray2 = getData('pointsArray2');
  reflectionLinesArray2 = getData('reflectionLinesArray2');
  rotationPointsArray2 = getData('rotationPointsArray2');
  translationPointsArray2 = getData('translationPointsArray2');
  translationVectorsArray2 = getData('translationVectorsArray2');
  currentReflectionSegs2 = getData('currentReflectionSegs2');
  currentAnimatedPoints2 = getData('currentAnimatedPoints2');
  textAString2 = getData('textAString2');
  textBString2 = getData('textBString2');
  textCString2 = getData('textCString2');
  buttonGroup2.updateData({ visible: false });
  select3.setDisabled(false);
  select3.unselectAll();
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
  buttonGroup2.updateSingleButton({ disabled: true }, 4);
  for (let i = 1, L = ggb2.instance.getValue('count') + 1; i < L; i++) {
    table2.deleteRow(i);
  }
  ggb2.instance.setValue('count', 0);
  resetTime2();
  sendHome2();
  for (let i = 0, L = pointsArray2.length; i < L; i++) {
    ggb2.instance.deleteObject(pointsArray2[i]);
  }
  for (let i = 0, L = polyArray2.length; i < L; i++) {
    ggb2.instance.deleteObject(polyArray2[i]);
  }
  for (let i = 0, L = translationPointsArray2.length; i < L; i++) {
    ggb2.instance.deleteObject(translationPointsArray2[i]);
  }
  for (let i = 0, L = translationVectorsArray2.length; i < L; i++) {
    ggb2.instance.deleteObject(translationVectorsArray2[i]);
  }
  for (let i = 0, L = rotationPointsArray2.length; i < L; i++) {
    ggb2.instance.deleteObject(rotationPointsArray2[i]);
  }
  for (let i = 0, L = reflectionLinesArray2.length; i < L; i++) {
    ggb2.instance.deleteObject(reflectionLinesArray2[i]);
  }
  for (let i = 0, L = currentReflectionSegs2.length; i < L; i++) {
    ggb2.instance.deleteObject(currentReflectionSegs2[i]);
    ggb2.instance.deleteObject(currentAnimatedPoints2[i]);
  }
  pointsArray2 = [];
  reflectionLinesArray2 = [];
  rotationPointsArray2 = [];
  translationPointsArray2 = [];
  translationVectorsArray2 = [];
  polyArray2 = [];
  currentReflectionSegs2 = [];
  currentAnimatedPoints2 = [];
  textAString2 = '';
  textBString2 = '';
  textCString2 = '';
  table2.setVisible(false);
  text2.updateData({ visible: false });
  saveData({
    pointsArray2: pointsArray2,
    reflectionLinesArray2: reflectionLinesArray2,
    rotationPointsArray2: rotationPointsArray2,
    translationPointsArray2: translationPointsArray2,
    translationVectorsArray2: translationVectorsArray2,
    polyArray2: polyArray2,
    currentReflectionSegs2: currentReflectionSegs2,
    currentAnimatedPoints2: currentAnimatedPoints2,
    textAString2: textAString2,
    textBString2: textBString2,
    textCString2: textCString2,
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

function reflect2() {
  polyCount2 = getData('polyCount2');
  currentFigure2 = getData('currentFigure2');
  currentPoint2 = getData('currentPoint2');
  currentReflectionLine2 = getData('currentReflectionLine2');
  currentAnimatingPolygon2 = getData('currentAnimatingPolygon2');
  polyArray2 = getData('polyArray2');
  pointsArray2 = getData('pointsArray2');
  reflectionLinesArray2 = getData('reflectionLinesArray2');
  currentReflectionSegs2 = getData('currentReflectionSegs2');
  currentAnimatedPoints2 = getData('currentAnimatedPoints2');

  currentReflectionLine2 = ggb2.instance.evalCommandGetLabels(
    `Line((${ggb2.instance.getValue('refPointXVal')},${ggb2.instance.getValue(
      'refPointYVal'
    )}),(${ggb2.instance.getValue('refPoint2XVal')},${ggb2.instance.getValue(
      'refPoint2YVal'
    )}))`
  );
  reflectionLinesArray2.push(currentReflectionLine2);

  if (ggb2.instance.getValue('count') == 0) {
    currentFigure2 = ggb2.instance.evalCommandGetLabels(
      `Reflect(figure,${currentReflectionLine2})`
    );

    ggb2.instance.setVisible(currentFigure2, false);
    ggb2.instance.setColor(currentFigure2, 218, 41, 28);
    ggb2.instance.setLayer(currentFigure2, 0);
    polyArray2.push(currentFigure2);

    for (let i = 0; i < 3; i++) {
      currentPoint2 = ggb2.instance.evalCommandGetLabels(
        `Reflect(FigurePoint${i + 1},${currentReflectionLine2})`
      );
      ggb2.instance.setVisible(currentPoint2, false);
      pointsArray2.push(currentPoint2);

      currentReflectionSegs2[i] = ggb2.instance.evalCommandGetLabels(
        `Segment(FigurePoint${i + 1},${pointsArray2[i]})`
      );
      ggb2.instance.setVisible(currentReflectionSegs2[i], false);

      currentAnimatedPoints2[i] = ggb2.instance.evalCommandGetLabels(
        `Point(${currentReflectionSegs2[i]},anim8(time))`
      );
      ggb2.instance.setVisible(currentAnimatedPoints2[i], false);
    }
    pointLabelWork2();
    currentAnimatingPolygon2 = ggb2.instance.evalCommandGetLabels(
      `shape${polyCount2}=Polygon({${currentAnimatedPoints2[0]},${currentAnimatedPoints2[1]},${currentAnimatedPoints2[2]}})`
    );
    polyCount2 = polyCount2 + 1;
    ggb2.instance.setFixed(currentAnimatingPolygon2, false, false);
    ggb2.instance.setColor(currentAnimatingPolygon2, 218, 41, 28);
  } else {
    for (let i = 0, L = currentReflectionSegs2.length; i < L; i++) {
      ggb2.instance.deleteObject(currentReflectionSegs2[i]);
      ggb2.instance.deleteObject(currentAnimatedPoints2[i]);
    }

    currentReflectionSegs2 = [];
    currentAnimatedPoints2 = [];

    //if we switch back to not having a ghost image, delete next line and uncomment the line after it
    ggb2.instance.setColor(currentFigure2, 128, 128, 128);
    //ggb2.instance.setVisible(currentFigure2, false);

    currentFigure2 = ggb2.instance.evalCommandGetLabels(
      `Reflect(${polyArray2[polyArray2.length - 1]},${currentReflectionLine2})`
    );

    ggb2.instance.setVisible(currentFigure2, false);
    ggb2.instance.setColor(currentFigure2, 218, 41, 28);
    ggb2.instance.setLayer(currentFigure2, 0);
    polyArray2.push(currentFigure2);

    for (let i = pointsArray2.length - 3, L = i + 3; i < L; i++) {
      currentPoint2 = ggb2.instance.evalCommandGetLabels(
        `Reflect(${pointsArray2[i]},${currentReflectionLine2})`
      );
      ggb2.instance.setVisible(currentPoint2, false);
      pointsArray2.push(currentPoint2);
    }
    pointLabelWork2();
    for (let j = 0; j < 3; j++) {
      currentReflectionSegs2[j] = ggb2.instance.evalCommandGetLabels(
        `Segment(${pointsArray2[pointsArray2.length - 6 + j]},${
          pointsArray2[pointsArray2.length - 3 + j]
        })`
      );
      ggb2.instance.setVisible(currentReflectionSegs2[j], false);

      currentAnimatedPoints2[j] = ggb2.instance.evalCommandGetLabels(
        `Point(${currentReflectionSegs2[j]},anim8(time))`
      );
      ggb2.instance.setVisible(currentAnimatedPoints2[j], false);
    }
    currentAnimatingPolygon2 = ggb2.instance.evalCommandGetLabels(
      `shape${polyCount2}=Polygon({${currentAnimatedPoints2[0]},${currentAnimatedPoints2[1]},${currentAnimatedPoints2[2]}})`
    );
    polyCount2 = polyCount2 + 1;
    ggb2.instance.setFixed(currentAnimatingPolygon2, false, false);
    ggb2.instance.setColor(currentAnimatingPolygon2, 218, 41, 28);
  }
  ggb2.instance.setColor(currentReflectionLine2, 0, 0, 0);
  ggb2.instance.setLayer(currentReflectionLine2, 0);
  ggb2.instance.setFixed(currentReflectionLine2, false, false);
  ggb2.instance.setCaption(currentReflectionLine2, '$%n$');
  ggb2.instance.setLabelVisible(currentReflectionLine2, true);
  ggb2.instance.setLabelStyle(currentReflectionLine2, 3);

  saveData({
    polyCount2: polyCount2,
    currentAnimatingPolygon2: currentAnimatingPolygon2,
    currentPoint2: currentPoint2,
    pointsArray2: pointsArray2,
    reflectionLinesArray2: reflectionLinesArray2,
    currentFigure2: currentFigure2,
    polyArray2: polyArray2,
    currentReflectionSegs2: currentReflectionSegs2,
    currentAnimatedPoints2: currentAnimatedPoints2,
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

function rotate2() {
  currentFigure2 = getData('currentFigure2');
  currentPoint2 = getData('currentPoint2');
  currentAnimatingPolygon2 = getData('currentAnimatingPolygon2');
  polyArray2 = getData('polyArray2');
  pointsArray2 = getData('pointsArray2');
  currentRotationCenter2 = getData('currentRotationCenter2');
  rotationPointsArray2 = getData('rotationPointsArray2');

  currentRotationCenter2 = ggb2.instance.evalCommandGetLabels(
    `(${ggb2.instance.getValue('centerXVal')},${ggb2.instance.getValue(
      'centerYVal'
    )})`
  );
  rotationPointsArray2.push(currentRotationCenter2);

  if (ggb2.instance.getValue('count') == 0) {
    currentFigure2 = ggb2.instance.evalCommandGetLabels(
      `Rotate(figure,${ggb2.instance.getValue(
        'angleVal'
      )}deg,${currentRotationCenter2})`
    );
    ggb2.instance.setVisible(currentFigure2, false);
    ggb2.instance.setColor(currentFigure2, 218, 41, 28);
    ggb2.instance.setLayer(currentFigure2, 0);
    polyArray2.push(currentFigure2);

    for (let i = 0; i < 3; i++) {
      currentPoint2 = ggb2.instance.evalCommandGetLabels(
        `Rotate(FigurePoint${i + 1},${ggb2.instance.getValue(
          'angleVal'
        )}deg,${currentRotationCenter2})`
      );
      ggb2.instance.setVisible(currentPoint2, false);
      pointsArray2.push(currentPoint2);
    }
    pointLabelWork2();

    currentAnimatingPolygon2 = ggb2.instance.evalCommandGetLabels(
      `Rotate(figure,angle*anim8(time),aCenterOfRotation)`
    );
    ggb2.instance.setFixed(currentAnimatingPolygon2, false, false);
    ggb2.instance.setColor(currentAnimatingPolygon2, 218, 41, 28);
  } else {
    //if we switch back to not having a ghost image, delete next line and uncomment the line after it
    ggb2.instance.setColor(currentFigure2, 128, 128, 128);
    //ggb2.instance.setVisible(currentFigure2, false);
    currentFigure2 = ggb2.instance.evalCommandGetLabels(
      `Rotate(${polyArray2[polyArray2.length - 1]},${ggb2.instance.getValue(
        'angleVal'
      )}deg,${currentRotationCenter2})`
    );
    ggb2.instance.setVisible(currentFigure2, false);
    ggb2.instance.setColor(currentFigure2, 218, 41, 28);
    ggb2.instance.setLayer(currentFigure2, 0);
    polyArray2.push(currentFigure2);

    for (let i = pointsArray2.length - 3, L = i + 3; i < L; i++) {
      currentPoint2 = ggb2.instance.evalCommandGetLabels(
        `Rotate(${pointsArray2[i]},${ggb2.instance.getValue(
          'angleVal'
        )}deg,${currentRotationCenter2})`
      );
      ggb2.instance.setVisible(currentPoint2, false);
      pointsArray2.push(currentPoint2);
    }
    pointLabelWork2();

    currentAnimatingPolygon2 = ggb2.instance.evalCommandGetLabels(
      `Rotate(${
        polyArray2[polyArray2.length - 2]
      },angle*anim8(time),aCenterOfRotation)`
    );
    ggb2.instance.setFixed(currentAnimatingPolygon2, false, false);
    ggb2.instance.setColor(currentAnimatingPolygon2, 218, 41, 28);
  }
  ggb2.instance.setColor(currentRotationCenter2, 0, 0, 0);
  ggb2.instance.setLayer(currentRotationCenter2, 0);
  ggb2.instance.setFixed(currentRotationCenter2, false, false);
  ggb2.instance.setCaption(currentRotationCenter2, '$%n$');
  ggb2.instance.setLabelVisible(currentRotationCenter2, true);
  ggb2.instance.setLabelStyle(currentRotationCenter2, 3);

  saveData({
    currentAnimatingPolygon2: currentAnimatingPolygon2,
    currentPoint2: currentPoint2,
    pointsArray2: pointsArray2,
    currentRotationCenter2: currentRotationCenter2,
    rotationPointsArray2: rotationPointsArray2,
    currentFigure2: currentFigure2,
    polyArray2: polyArray2,
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

function translate2() {
  currentFigure2 = getData('currentFigure2');
  currentPoint2 = getData('currentPoint2');
  currentAnimatingPolygon2 = getData('currentAnimatingPolygon2');
  polyArray2 = getData('polyArray2');
  pointsArray2 = getData('pointsArray2');
  translationPointsArray2 = getData('translationPointsArray2');
  translationVectorsArray2 = getData('translationVectorsArray2');
  currentVectorPoint12 = getData('currentVectorPoint12');
  currentVectorPoint22 = getData('currentVectorPoint22');
  currentVector2 = getData('currentVector2');

  currentVectorPoint12 = ggb2.instance.evalCommandGetLabels(
    `(${ggb2.instance.getValue('vecPointXVal')},${ggb2.instance.getValue(
      'vecPointYVal'
    )})`
  );
  translationPointsArray2.push(currentVectorPoint12);
  currentVectorPoint22 = ggb2.instance.evalCommandGetLabels(
    `(${ggb2.instance.getValue('vecPoint2XVal')},${ggb2.instance.getValue(
      'vecPoint2YVal'
    )})`
  );
  translationPointsArray2.push(currentVectorPoint22);
  currentVector2 = ggb2.instance.evalCommandGetLabels(
    `Vector(${currentVectorPoint12},${currentVectorPoint22})`
  );
  translationVectorsArray2.push(currentVector2);

  if (ggb2.instance.getValue('count') == 0) {
    currentFigure2 = ggb2.instance.evalCommandGetLabels(
      `Translate(figure,${currentVector2})`
    );
    ggb2.instance.setVisible(currentFigure2, false);
    ggb2.instance.setColor(currentFigure2, 218, 41, 28);
    ggb2.instance.setLayer(currentFigure2, 0);
    polyArray2.push(currentFigure2);

    for (let i = 0; i < 3; i++) {
      currentPoint2 = ggb2.instance.evalCommandGetLabels(
        `Translate(FigurePoint${i + 1},${currentVector2})`
      );
      ggb2.instance.setVisible(currentPoint2, false);
      pointsArray2.push(currentPoint2);
    }
    pointLabelWork2();

    currentAnimatingPolygon2 = ggb2.instance.evalCommandGetLabels(
      `Translate(figure,adjustableVector*anim8(time))`
    );
    ggb2.instance.setFixed(currentAnimatingPolygon2, false, false);
    ggb2.instance.setColor(currentAnimatingPolygon2, 218, 41, 28);
  } else {
    //if we switch back to not having a ghost image, delete next line and uncomment the line after it
    ggb2.instance.setColor(currentFigure2, 128, 128, 128);
    //ggb2.instance.setVisible(currentFigure2, false);
    currentFigure2 = ggb2.instance.evalCommandGetLabels(
      `Translate(${polyArray2[polyArray2.length - 1]},${currentVector2})`
    );
    ggb2.instance.setVisible(currentFigure2, false);
    ggb2.instance.setColor(currentFigure2, 218, 41, 28);
    ggb2.instance.setLayer(currentFigure2, 0);
    polyArray2.push(currentFigure2);

    for (let i = pointsArray2.length - 3, L = i + 3; i < L; i++) {
      currentPoint2 = ggb2.instance.evalCommandGetLabels(
        `Translate(${pointsArray2[i]},${currentVector2})`
      );
      ggb2.instance.setVisible(currentPoint2, false);
      pointsArray2.push(currentPoint2);
    }
    pointLabelWork2();

    currentAnimatingPolygon2 = ggb2.instance.evalCommandGetLabels(
      `Translate(${
        polyArray2[polyArray2.length - 2]
      },adjustableVector*anim8(time))`
    );
    ggb2.instance.setFixed(currentAnimatingPolygon2, false, false);
    ggb2.instance.setColor(currentAnimatingPolygon2, 218, 41, 28);
  }

  ggb2.instance.setColor(currentVectorPoint12, 0, 0, 0);
  ggb2.instance.setLayer(currentVectorPoint12, 0);
  ggb2.instance.setFixed(currentVectorPoint12, false, false);
  ggb2.instance.setCaption(currentVectorPoint12, '$%n$');
  ggb2.instance.setLabelVisible(currentVectorPoint12, true);
  ggb2.instance.setLabelStyle(currentVectorPoint12, 3);

  ggb2.instance.setColor(currentVectorPoint22, 0, 0, 0);
  ggb2.instance.setLayer(currentVectorPoint22, 0);
  ggb2.instance.setFixed(currentVectorPoint22, false, false);
  ggb2.instance.setCaption(currentVectorPoint22, '$%n$');
  ggb2.instance.setLabelVisible(currentVectorPoint22, true);
  ggb2.instance.setLabelStyle(currentVectorPoint22, 3);

  ggb2.instance.setColor(currentVector2, 0, 0, 0);
  ggb2.instance.setLayer(currentVector2, 0);
  ggb2.instance.setFixed(currentVector2, false, false);

  saveData({
    currentAnimatingPolygon2: currentAnimatingPolygon2,
    currentPoint2: currentPoint2,
    pointsArray2: pointsArray2,
    translationPointsArray2: translationPointsArray2,
    translationVectorsArray2: translationVectorsArray2,
    currentVectorPoint12: currentVectorPoint12,
    currentVectorPoint22: currentVectorPoint22,
    currentVector2: currentVector2,
    currentFigure2: currentFigure2,
    polyArray2: polyArray2,
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

function pointLabelWork2() {
  ggb2.instance.setCaption(
    pointsArray2[pointsArray2.length - 3],
    `$${textAString2}$`
  );
  ggb2.instance.setCaption(
    pointsArray2[pointsArray2.length - 2],
    `$${textBString2}$`
  );
  ggb2.instance.setCaption(
    pointsArray2[pointsArray2.length - 1],
    `$${textCString2}$`
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

function timeWork2() {
  currentFigure2 = getData('currentFigure2');
  currentAnimatingPolygon2 = getData('currentAnimatingPolygon2');
  if (ggb2.instance.getValue('time') == 1) {
    ggb2.instance.setVisible(currentAnimatingPolygon2, false);
    ggb2.instance.setVisible(currentFigure2, true);

    for (let i = 1, L = 4; i < L; i++) {
      ggb2.instance.setColor(
        pointsArray2[pointsArray2.length - i],
        218,
        41,
        28
      );
      ggb2.instance.setVisible(pointsArray2[pointsArray2.length - i], true);
      ggb2.instance.setLayer(pointsArray2[pointsArray2.length - i], 0);
    }
    buttonGroup2.updateSingleButton({ disabled: false }, 2);
    buttonGroup2.updateSingleButton({ disabled: false }, 3);
  } else {
    buttonGroup2.updateSingleButton({ disabled: true }, 2);
    buttonGroup2.updateSingleButton({ disabled: true }, 3);
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

function display90Hover2() {
  if (ggb2.instance.getValue('show90Hover')) {
    ggb2.instance.setVisible('box90Hover', true);
  } else {
    ggb2.instance.setVisible('box90Hover', false);
  }
}

function display180Hover2() {
  if (ggb2.instance.getValue('show180Hover')) {
    ggb2.instance.setVisible('box180Hover', true);
  } else {
    ggb2.instance.setVisible('box180Hover', false);
  }
}

function display270Hover2() {
  if (ggb2.instance.getValue('show270Hover')) {
    ggb2.instance.setVisible('box270Hover', true);
  } else {
    ggb2.instance.setVisible('box270Hover', false);
  }
}

function displayClockwiseHover2() {
  if (ggb2.instance.getValue('showClockwiseHover')) {
    ggb2.instance.setVisible('boxClockwiseHover', true);
  } else {
    ggb2.instance.setVisible('boxClockwiseHover', false);
  }
}

function displayCounterclockwiseHover2() {
  if (ggb2.instance.getValue('showCounterclockwiseHover')) {
    ggb2.instance.setVisible('boxCounterclockwiseHover', true);
  } else {
    ggb2.instance.setVisible('boxCounterclockwiseHover', false);
  }
}

function resetTime2() {
  ggb2.instance.stopAnimation();
  ggb2.instance.setAnimating('time', false);
  ggb2.instance.setValue('time', 0);
}

function resetJustHappeneds2() {
  ggb2.instance.setValue('reflectionJustHappened', false);
  ggb2.instance.setValue('rotationJustHappened', false);
  ggb2.instance.setValue('translationJustHappened', false);
}

function sendHome2() {
  ggb2.instance.evalCommand(`SetValue(aCenterOfRotation,HomePointCenter)`);
  ggb2.instance.evalCommand(`SetValue(RefPoint,HomePointRef1)`);
  ggb2.instance.evalCommand(`SetValue(RefPoint2,HomePointRef2)`);
  ggb2.instance.evalCommand(`SetValue(VecPoint,HomePointVec1)`);
  ggb2.instance.evalCommand(`SetValue(VecPoint2,HomePointVec2)`);
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
