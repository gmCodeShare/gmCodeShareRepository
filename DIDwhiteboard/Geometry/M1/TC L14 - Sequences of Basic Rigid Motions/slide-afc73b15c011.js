const { ggb1, text1, select1, buttonGroup1 } = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    select1.selectOption('0');
    select1.setDisabled(true);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
    buttonGroup1.updateSingleButton({ disabled: true, outline: true }, 4);
    buttonGroup1.updateData({ visible: false });
    saveData({
      polyCount: 0,
      currentFigure: 1,
      currentPoint: 1,
      currentAnimatingPolygon: 1,
      polyArray: [],
      pointsArray: [],
      currentReflectionSegs: [],
      currentAnimatedPoints: [],
    });
    ggb1.updateData({ init: true });
  }
}

let polyCount = getData('polyCount');
let currentFigure = getData('currentFigure');
let currentPoint = getData('currentPoint');
let currentAnimatingPolygon = getData('currentAnimatingPolygon');
let polyArray = getData('polyArray');
let pointsArray = getData('pointsArray');
let currentReflectionSegs = getData('currentReflectionSegs');
let currentAnimatedPoints = getData('currentAnimatedPoints');

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
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  select1.setDisabled(true);
  if (ggb1.instance.getValue('showReflection')) {
    reflect();
  } else if (ggb1.instance.getValue('showRotation')) {
    rotate();
  } else if (ggb1.instance.getValue('showTranslation')) {
    translate();
  }
  ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  ggb1.instance.setColor(polyArray[polyArray.length - 2], 128, 128, 128);
  ggb1.instance.setVisible(polyArray[polyArray.length - 3], false);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  polyArray = getData('polyArray');
  pointsArray = getData('pointsArray');
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  for (let i = pointsArray.length - 6, L = i + 6; i < L; i++) {
    ggb1.instance.deleteObject(pointsArray[i]);
    pointsArray.pop(polyArray[i]);
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
    polyArray: polyArray,
  });
});

buttonGroup1.on('click:3', () => {
  buttons3and4Script();
});

buttonGroup1.on('click:4', () => {
  buttons3and4Script();
});

function buttons3and4Script() {
  polyArray = getData('polyArray');
  pointsArray = getData('pointsArray');
  currentReflectionSegs = getData('currentReflectionSegs');
  currentAnimatedPoints = getData('currentAnimatedPoints');
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  ggb1.instance.setValue('count', 0);
  resetTime();
  sendHome();
  for (let i = 0, L = pointsArray.length; i < L; i++) {
    ggb1.instance.deleteObject(pointsArray[i]);
  }
  for (let i = 0, L = polyArray.length; i < L; i++) {
    ggb1.instance.deleteObject(polyArray[i]);
  }
  for (let i = 0, L = currentReflectionSegs.length; i < L; i++) {
    ggb1.instance.deleteObject(currentReflectionSegs[i]);
    ggb1.instance.deleteObject(currentAnimatedPoints[i]);
  }
  pointsArray = [];
  polyArray = [];
  currentReflectionSegs = [];
  currentAnimatedPoints = [];
  saveData({
    pointsArray: pointsArray,
    polyArray: polyArray,
    currentReflectionSegs: currentReflectionSegs,
    currentAnimatedPoints: currentAnimatedPoints,
  });
}

function reflect() {
  polyCount = getData('polyCount');
  currentFigure = getData('currentFigure');
  currentPoint = getData('currentPoint');
  currentAnimatingPolygon = getData('currentAnimatingPolygon');
  polyArray = getData('polyArray');
  pointsArray = getData('pointsArray');
  currentReflectionSegs = getData('currentReflectionSegs');
  currentAnimatedPoints = getData('currentAnimatedPoints');
  if (ggb1.instance.getValue('count') == 0) {
    currentFigure = ggb1.instance.evalCommandGetLabels(
      `Reflect(figure,Line((${ggb1.instance.getValue(
        'refPointXVal'
      )},${ggb1.instance.getValue('refPointYVal')}),(${ggb1.instance.getValue(
        'refPoint2XVal'
      )},${ggb1.instance.getValue('refPoint2YVal')})))`
    );
    ggb1.instance.setVisible(currentFigure, false);
    ggb1.instance.setColor(currentFigure, 218, 41, 28);
    ggb1.instance.setLayer(currentFigure, 0);
    polyArray.push(currentFigure);

    for (let i = 0; i < 6; i++) {
      currentPoint = ggb1.instance.evalCommandGetLabels(
        `Reflect(FigurePoint${i + 1},Line((${ggb1.instance.getValue(
          'refPointXVal'
        )},${ggb1.instance.getValue('refPointYVal')}),(${ggb1.instance.getValue(
          'refPoint2XVal'
        )},${ggb1.instance.getValue('refPoint2YVal')})))`
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
    currentAnimatingPolygon = ggb1.instance.evalCommandGetLabels(
      `hex${polyCount}=Polygon({${currentAnimatedPoints[0]},${currentAnimatedPoints[1]},${currentAnimatedPoints[2]},${currentAnimatedPoints[3]},${currentAnimatedPoints[4]},${currentAnimatedPoints[5]}})`
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
      `Reflect(${
        polyArray[polyArray.length - 1]
      },Line((${ggb1.instance.getValue(
        'refPointXVal'
      )},${ggb1.instance.getValue('refPointYVal')}),(${ggb1.instance.getValue(
        'refPoint2XVal'
      )},${ggb1.instance.getValue('refPoint2YVal')})))`
    );
    ggb1.instance.setVisible(currentFigure, false);
    ggb1.instance.setColor(currentFigure, 218, 41, 28);
    ggb1.instance.setLayer(currentFigure, 0);
    polyArray.push(currentFigure);

    for (let i = pointsArray.length - 6, L = i + 6; i < L; i++) {
      currentPoint = ggb1.instance.evalCommandGetLabels(
        `Reflect(${pointsArray[i]},Line((${ggb1.instance.getValue(
          'refPointXVal'
        )},${ggb1.instance.getValue('refPointYVal')}),(${ggb1.instance.getValue(
          'refPoint2XVal'
        )},${ggb1.instance.getValue('refPoint2YVal')})))`
      );
      ggb1.instance.setVisible(currentPoint, false);
      pointsArray.push(currentPoint);
    }
    for (let j = 0; j < 6; j++) {
      currentReflectionSegs[j] = ggb1.instance.evalCommandGetLabels(
        `Segment(${pointsArray[pointsArray.length - 12 + j]},${
          pointsArray[pointsArray.length - 6 + j]
        })`
      );
      ggb1.instance.setVisible(currentReflectionSegs[j], false);

      currentAnimatedPoints[j] = ggb1.instance.evalCommandGetLabels(
        `Point(${currentReflectionSegs[j]},anim8(time))`
      );
      ggb1.instance.setVisible(currentAnimatedPoints[j], false);
    }
    currentAnimatingPolygon = ggb1.instance.evalCommandGetLabels(
      `hex${polyCount}=Polygon({${currentAnimatedPoints[0]},${currentAnimatedPoints[1]},${currentAnimatedPoints[2]},${currentAnimatedPoints[3]},${currentAnimatedPoints[4]},${currentAnimatedPoints[5]}})`
    );
    polyCount = polyCount + 1;
    ggb1.instance.setFixed(currentAnimatingPolygon, false, false);
    ggb1.instance.setColor(currentAnimatingPolygon, 218, 41, 28);
  }
  saveData({
    polyCount: polyCount,
    currentAnimatingPolygon: currentAnimatingPolygon,
    currentPoint: currentPoint,
    pointsArray: pointsArray,
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
  if (ggb1.instance.getValue('count') == 0) {
    currentFigure = ggb1.instance.evalCommandGetLabels(
      `Rotate(figure,${ggb1.instance.getValue(
        'angleVal'
      )}deg,(${ggb1.instance.getValue('centerXVal')},${ggb1.instance.getValue(
        'centerYVal'
      )}))`
    );
    ggb1.instance.setVisible(currentFigure, false);
    ggb1.instance.setColor(currentFigure, 218, 41, 28);
    ggb1.instance.setLayer(currentFigure, 0);
    polyArray.push(currentFigure);

    for (let i = 0; i < 6; i++) {
      currentPoint = ggb1.instance.evalCommandGetLabels(
        `Rotate(FigurePoint${i + 1},${ggb1.instance.getValue(
          'angleVal'
        )}deg,(${ggb1.instance.getValue('centerXVal')},${ggb1.instance.getValue(
          'centerYVal'
        )}))`
      );
      ggb1.instance.setVisible(currentPoint, false);
      pointsArray.push(currentPoint);
    }

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
      )}deg,(${ggb1.instance.getValue('centerXVal')},${ggb1.instance.getValue(
        'centerYVal'
      )}))`
    );
    ggb1.instance.setVisible(currentFigure, false);
    ggb1.instance.setColor(currentFigure, 218, 41, 28);
    ggb1.instance.setLayer(currentFigure, 0);
    polyArray.push(currentFigure);

    for (let i = pointsArray.length - 6, L = i + 6; i < L; i++) {
      currentPoint = ggb1.instance.evalCommandGetLabels(
        `Rotate(${pointsArray[i]},${ggb1.instance.getValue(
          'angleVal'
        )}deg,(${ggb1.instance.getValue('centerXVal')},${ggb1.instance.getValue(
          'centerYVal'
        )}))`
      );
      ggb1.instance.setVisible(currentPoint, false);
      pointsArray.push(currentPoint);
    }

    currentAnimatingPolygon = ggb1.instance.evalCommandGetLabels(
      `Rotate(${
        polyArray[polyArray.length - 2]
      },angle*anim8(time),aCenterOfRotation)`
    );
    ggb1.instance.setFixed(currentAnimatingPolygon, false, false);
    ggb1.instance.setColor(currentAnimatingPolygon, 218, 41, 28);
  }
  saveData({
    currentAnimatingPolygon: currentAnimatingPolygon,
    currentPoint: currentPoint,
    pointsArray: pointsArray,
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
  if (ggb1.instance.getValue('count') == 0) {
    currentFigure = ggb1.instance.evalCommandGetLabels(
      `Translate(figure,Vector((${ggb1.instance.getValue(
        'vecPointXVal'
      )},${ggb1.instance.getValue('vecPointYVal')}),(${ggb1.instance.getValue(
        'vecPoint2XVal'
      )},${ggb1.instance.getValue('vecPoint2YVal')})))`
    );
    ggb1.instance.setVisible(currentFigure, false);
    ggb1.instance.setColor(currentFigure, 218, 41, 28);
    ggb1.instance.setLayer(currentFigure, 0);
    polyArray.push(currentFigure);

    for (let i = 0; i < 6; i++) {
      currentPoint = ggb1.instance.evalCommandGetLabels(
        `Translate(FigurePoint${i + 1},Vector((${ggb1.instance.getValue(
          'vecPointXVal'
        )},${ggb1.instance.getValue('vecPointYVal')}),(${ggb1.instance.getValue(
          'vecPoint2XVal'
        )},${ggb1.instance.getValue('vecPoint2YVal')})))`
      );
      ggb1.instance.setVisible(currentPoint, false);
      pointsArray.push(currentPoint);
    }

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
      `Translate(${
        polyArray[polyArray.length - 1]
      },Vector((${ggb1.instance.getValue(
        'vecPointXVal'
      )},${ggb1.instance.getValue('vecPointYVal')}),(${ggb1.instance.getValue(
        'vecPoint2XVal'
      )},${ggb1.instance.getValue('vecPoint2YVal')})))`
    );
    ggb1.instance.setVisible(currentFigure, false);
    ggb1.instance.setColor(currentFigure, 218, 41, 28);
    ggb1.instance.setLayer(currentFigure, 0);
    polyArray.push(currentFigure);

    for (let i = pointsArray.length - 6, L = i + 6; i < L; i++) {
      currentPoint = ggb1.instance.evalCommandGetLabels(
        `Translate(${pointsArray[i]},Vector((${ggb1.instance.getValue(
          'vecPointXVal'
        )},${ggb1.instance.getValue('vecPointYVal')}),(${ggb1.instance.getValue(
          'vecPoint2XVal'
        )},${ggb1.instance.getValue('vecPoint2YVal')})))`
      );
      ggb1.instance.setVisible(currentPoint, false);
      pointsArray.push(currentPoint);
    }

    currentAnimatingPolygon = ggb1.instance.evalCommandGetLabels(
      `Translate(${
        polyArray[polyArray.length - 2]
      },adjustableVector*anim8(time))`
    );
    ggb1.instance.setFixed(currentAnimatingPolygon, false, false);
    ggb1.instance.setColor(currentAnimatingPolygon, 218, 41, 28);
  }
  saveData({
    currentAnimatingPolygon: currentAnimatingPolygon,
    currentPoint: currentPoint,
    pointsArray: pointsArray,
    currentFigure: currentFigure,
    polyArray: polyArray,
  });
}

function timeWork() {
  currentFigure = getData('currentFigure');
  currentAnimatingPolygon = getData('currentAnimatingPolygon');
  if (ggb1.instance.getValue('time') == 1) {
    ggb1.instance.setVisible(currentAnimatingPolygon, false);
    ggb1.instance.setVisible(currentFigure, true);
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
