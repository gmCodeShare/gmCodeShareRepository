const { ggb1, feedback1, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerClientListener(clone);
ggb1.instance.registerObjectUpdateListener(
  'picsALength',
  preventAllowClonePicA
);
ggb1.instance.registerObjectUpdateListener(
  'picsBLength',
  preventAllowClonePicB
);
ggb1.instance.registerObjectUpdateListener('Follow', mouseMoved);
ggb1.instance.registerObjectUpdateListener('time', snapToLanding);
ggb1.instance.registerClickListener(deletePoint);

let selectedPoint;
let tiltStart;
let tiltEndNew;

//declare values for bird weights
let picAValue = 1 / 15;
let picBValue = 2 / 15;

//set max number of pics
let maxPicsA = 2;
let maxPicsB = 1;
//if there is a max number of pics, set percent fill for unselectable shadow pic
let shadowFill = 0.2;
let normalFill = 1;

//set filling percent and line style for targets when dragging and when point is in target regions
let fillPercentNormal = 0.0;
let fillPercentInRegion = 0.2;
let lineStyleNormal = 1;
let lineStyleInRegion = 0;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.updateData({
      //set these for each of the different pic you have and want clones of
      picsA: ['objALeft'],
      pointsA: ['HomeObjA'],
      pointsAInTarget1: ['objAIsInTarget1'],
      pointsAInTarget2: ['objAIsInTarget2'],
      pointsAInDrawer: ['objAIsInDrawer'],

      picsB: ['objBLeft'],
      pointsB: ['HomeObjB'],
      pointsBInTarget1: ['objBIsInTarget1'],
      pointsBInTarget2: ['objBIsInTarget2'],
      pointsBInDrawer: ['objBIsInDrawer'],

      //keeps track of what points are on which side
      target1Arr: [],
      currentAInTar1: [],
      currentBInTar1: [],
      target2Arr: [],
      currentAInTar2: [],
      currentBInTar2: [],
    });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

//loads initial values or updated tattoos
let picsA = [...ggb1.data.picsA];
let pointsA = [...ggb1.data.pointsA];
let pointsAInTarget1 = [...ggb1.data.pointsAInTarget1];
let pointsAInTarget2 = [...ggb1.data.pointsAInTarget2];
let pointsAInDrawer = [...ggb1.data.pointsAInDrawer];

let picsB = [...ggb1.data.picsB];
let pointsB = [...ggb1.data.pointsB];
let pointsBInTarget1 = [...ggb1.data.pointsBInTarget1];
let pointsBInTarget2 = [...ggb1.data.pointsBInTarget2];
let pointsBInDrawer = [...ggb1.data.pointsBInDrawer];

//keeps track of what points are on which side
let target1Arr = [...ggb1.data.target1Arr];
let currentAInTar1 = [...ggb1.data.currentAInTar1];
let currentBInTar1 = [...ggb1.data.currentBInTar1];
let target2Arr = [...ggb1.data.target2Arr];
let currentAInTar2 = [...ggb1.data.currentAInTar2];
let currentBInTar2 = [...ggb1.data.currentBInTar2];

takeSnapshot();

//this function is run from the ggb clientListener
function clone(a) {
  //clone picsA when selected from drawer along with all associated ggb objects
  if (a[0] == 'select' && a[1] == picsA[picsA.length - 1]) {
    clonePicsA(picsA[picsA.length - 1]);
    //clone picsA when selected from drawer along with all associated ggb objects
  }
  if (a[0] == 'select' && a[1] == picsB[picsB.length - 1]) {
    clonePicsB(picsB[picsB.length - 1]);
  }
  //if pic is selected, set its corresponding point as selectedPoint
  if (a[0] == 'select' && picsA.indexOf(a[1]) > -1) {
    selectedPoint = pointsA[picsA.indexOf(a[1])];
  }
  if (a[0] == 'select' && picsB.indexOf(a[1]) > -1) {
    selectedPoint = pointsB[picsB.indexOf(a[1])];
  }
  //for dragEnd, when user releases pic
  if (a[0] == 'dragEnd') {
    //if picA or picB is in a target1, add it to target1Arr and sort pics in target1
    if (
      ggb1.instance.getValue(
        pointsAInTarget1[pointsA.indexOf(selectedPoint)]
      ) ||
      ggb1.instance.getValue(pointsBInTarget1[pointsB.indexOf(selectedPoint)])
    ) {
      addToTarget1();
    }
    //if picA or picB is in a target2, add it to target2Arr and sort pics in target2
    if (
      ggb1.instance.getValue(
        pointsAInTarget2[pointsA.indexOf(selectedPoint)]
      ) ||
      ggb1.instance.getValue(pointsBInTarget2[pointsB.indexOf(selectedPoint)])
    ) {
      addToTarget2();
    }
    //if pointA is in drawer, remove everything associated with it
    if (
      ggb1.instance.getValue(pointsAInDrawer[pointsA.indexOf(selectedPoint)])
    ) {
      removeAEverywhere();
    }
    //if pointB is in drawer, remove everything associated with it
    if (
      ggb1.instance.getValue(pointsBInDrawer[pointsB.indexOf(selectedPoint)])
    ) {
      removeBEverywhere();
    }
    //NOTE: if you want pics to stay in the empty space, remove the following statements
    //remove pointsA if dragged to empty space
    if (
      pointsA.indexOf(selectedPoint) > -1 &&
      !ggb1.instance.getValue(
        pointsAInTarget1[pointsA.indexOf(selectedPoint)]
      ) &&
      !ggb1.instance.getValue(
        pointsAInTarget2[pointsA.indexOf(selectedPoint)]
      ) &&
      !ggb1.instance.getValue(pointsAInDrawer[pointsA.indexOf(selectedPoint)])
    ) {
      removeAEverywhere();
    }
    //remove pointsB if dragged to empty space
    if (
      pointsB.indexOf(selectedPoint) > -1 &&
      !ggb1.instance.getValue(
        pointsBInTarget1[pointsB.indexOf(selectedPoint)]
      ) &&
      !ggb1.instance.getValue(
        pointsBInTarget2[pointsB.indexOf(selectedPoint)]
      ) &&
      !ggb1.instance.getValue(pointsBInDrawer[pointsB.indexOf(selectedPoint)])
    ) {
      removeBEverywhere();
    }
    sortArrays();
    ggb1.instance.evalCommand('SelectObjects()');
    selectedPoint = undefined;
    takeSnapshot();
    checkTilt();
  }
  updateGGB();
}

function updateGGB() {
  ggb1.updateData({
    //set these for each of the different pic you have and want clones of
    picsA: picsA,
    pointsA: pointsA,
    pointsAInTarget1: pointsAInTarget1,
    pointsAInTarget2: pointsAInTarget2,
    pointsAInDrawer: pointsAInDrawer,

    picsB: picsB,
    pointsB: pointsB,
    pointsBInTarget1: pointsBInTarget1,
    pointsBInTarget2: pointsBInTarget2,
    pointsBInDrawer: pointsBInDrawer,

    //keeps track of what points are on which side
    target1Arr: target1Arr,
    currentAInTar1: currentAInTar1,
    currentBInTar1: currentBInTar1,
    target2Arr: target2Arr,
    currentAInTar2: currentAInTar2,
    currentBInTar2: currentBInTar2,
  });
}

function deletePoint() {
  if (pointsA.indexOf(selectedPoint) > -1) {
    removeAEverywhere();
    sortArrays();
    ggb1.instance.evalCommand('SelectObjects()');
    checkTilt();
    updateGGB();
    takeSnapshot();
    selectedPoint = undefined;
  }
  if (pointsB.indexOf(selectedPoint) > -1) {
    removeBEverywhere();
    sortArrays();
    ggb1.instance.evalCommand('SelectObjects()');
    checkTilt();
    updateGGB();
    takeSnapshot();
    selectedPoint = undefined;
  }
}

//take snapshot of ggb for use on different slide as well as save ggb for loading into other slides
function takeSnapshot() {
  ggb1.instance.setVisible('target1', false);
  ggb1.instance.setVisible('target2', false);
  ggb1.updateData({ imageA: ggb1.instance.getPNGBase64(1, true, 300) });
  //ggb1.updateData({ imageB: ggb1.instance.getPNGBase64(0.75, true, 300) });
  ggb1.updateData({ save64: ggb1.instance.getBase64() });
  ggb1.updateData({ bottomImageA: picsA[picsA.length - 1] });
  ggb1.updateData({ bottomImageB: picsB[picsB.length - 1] });
}

//stoping cloning picsA when max pics are reached, continue cloning when less than max
function preventAllowClonePicA() {
  let picsALength = ggb1.innerData['picsALength'];
  if (picsALength - 1 >= maxPicsA) {
    ggb1.instance.setFixed(picsA[picsA.length - 1], true, false);
    ggb1.instance.setFilling(picsA[picsA.length - 1], shadowFill);
  } else {
    ggb1.instance.setFixed(picsA[picsA.length - 1], false, true);
    ggb1.instance.setFilling(picsA[picsA.length - 1], normalFill);
  }
}

//stoping cloning picsB when max pics are reached, continue cloning when less than max
function preventAllowClonePicB() {
  let picsBLength = ggb1.innerData['picsBLength'];
  if (picsBLength - 1 >= maxPicsB) {
    ggb1.instance.setFixed(picsB[picsB.length - 1], true, false);
    ggb1.instance.setFilling(picsB[picsB.length - 1], shadowFill);
  } else {
    ggb1.instance.setFixed(picsB[picsB.length - 1], false, true);
    ggb1.instance.setFilling(picsB[picsB.length - 1], normalFill);
  }
}

//setting targets' visibility and styling; setting arrays of what points are in which targets
function mouseMoved() {
  removeFromTargets();
  ggb1.updateData({
    target1Arr: target1Arr,
    target2Arr: target2Arr,
  });
  //if selectedPoint in target1, style target1
  if (
    ggb1.instance.getValue(pointsAInTarget1[pointsA.indexOf(selectedPoint)]) ||
    ggb1.instance.getValue(pointsBInTarget1[pointsB.indexOf(selectedPoint)])
  ) {
    //setting targets' visibility and styling
    ggb1.instance.setVisible('target1', true);
    ggb1.instance.setVisible('target2', true);
    ggb1.instance.setFilling('target1', fillPercentInRegion);
    ggb1.instance.setLineStyle('target1', lineStyleInRegion);
    ggb1.instance.setFilling('target2', fillPercentNormal);
    ggb1.instance.setLineStyle('target2', lineStyleNormal);
  }
  //if selectedPoint in target2, style target1
  else if (
    ggb1.instance.getValue(pointsAInTarget2[pointsA.indexOf(selectedPoint)]) ||
    ggb1.instance.getValue(pointsBInTarget2[pointsB.indexOf(selectedPoint)])
  ) {
    //setting targets' visibility and styling
    ggb1.instance.setVisible('target1', true);
    ggb1.instance.setVisible('target2', true);
    ggb1.instance.setFilling('target1', fillPercentNormal);
    ggb1.instance.setLineStyle('target1', lineStyleNormal);
    ggb1.instance.setFilling('target2', fillPercentInRegion);
    ggb1.instance.setLineStyle('target2', lineStyleInRegion);
  }
  //if it's in not in a target but point is selected
  else if (selectedPoint != undefined) {
    ggb1.instance.setVisible('target1', true);
    ggb1.instance.setVisible('target2', true);
    ggb1.instance.setFilling('target1', fillPercentNormal);
    ggb1.instance.setLineStyle('target1', lineStyleNormal);
    ggb1.instance.setFilling('target2', fillPercentNormal);
    ggb1.instance.setLineStyle('target2', lineStyleNormal);
  }
  //if no point is selected, hide targets
  else {
    ggb1.instance.setVisible('target1', false);
    ggb1.instance.setVisible('target2', false);
  }
}

function snapToLanding() {
  for (let i = 0, L = target1Arr.length; i < L; i++) {
    ggb1.instance.setCoords(
      target1Arr[i],
      ggb1.instance.getListValue('target1LandingXVals', i + 1),
      ggb1.instance.getListValue('target1LandingYVals', i + 1)
    );
  }
  for (let i = 0, L = target2Arr.length; i < L; i++) {
    ggb1.instance.setCoords(
      target2Arr[i],
      ggb1.instance.getListValue('target2LandingXVals', i + 1),
      ggb1.instance.getListValue('target2LandingYVals', i + 1)
    );
  }
}

//sort the images in the target1Arr so they go up and leave no gaps
function sortArrays() {
  target1Arr = [...target1Arr].filter(Boolean);
  let tempArrayA = [...new Set(target1Arr)];
  target1Arr = [...tempArrayA];
  target2Arr = [...target2Arr].filter(Boolean);
  let tempArrayB = [...new Set(target2Arr)];
  target2Arr = [...tempArrayB];
  snapToLanding();
  ggb1.updateInnerData({ target2ArrLength: target2Arr.length });
  ggb1.updateInnerData({ target1ArrLength: target1Arr.length });
  currentAInTar1 = target1Arr.filter(keepAPoints);
  currentBInTar1 = target1Arr.filter(keepBPoints);
  currentAInTar2 = target2Arr.filter(keepAPoints);
  currentBInTar2 = target2Arr.filter(keepBPoints);
  ggb1.updateInnerData({
    leftTotal:
      Math.round(
        (picAValue * currentAInTar1.length +
          picBValue * currentBInTar1.length) *
          1000000
      ) / 1000000,
    rightTotal:
      Math.round(
        (picAValue * currentAInTar2.length +
          picBValue * currentBInTar2.length) *
          1000000
      ) / 1000000,
  });
  ggb1.updateData({
    target1Arr: target1Arr,
    currentAInTar1: currentAInTar1,
    currentBInTar1: currentBInTar1,
    target2Arr: target2Arr,
    currentAInTar2: currentAInTar2,
    currentBInTar2: currentBInTar2,
  });
}

//takes an array and keeps only elements included in pointsA
function keepAPoints(a) {
  return pointsA.includes(a);
}

//takes an array and keeps only elements included in pointsB
function keepBPoints(a) {
  return pointsB.includes(a);
}

function checkTilt() {
  //let tiltEndNew = ggb1.innerData['tilt'];
  tiltStart = ggb1.instance.getValue('finish');
  tiltEndNew = ggb1.instance.getValue('tilt');
  if (tiltEndNew != tiltStart) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('start', tiltStart);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.setValue('finish', tiltEndNew);
    ggb1.instance.startAnimation();
  }
}

autorun(() => {
  let time = ggb1.innerData['time'];
  if (time == 1) {
    takeSnapshot();
  }
});

//clone picsA and make associated ggb objects
function clonePicsA(a) {
  let picName = ggb1.instance.evalCommandGetLabels('CopyFreeObject(' + a + ')');
  picsA.push(picName);
  ggb1.updateInnerData({ picsALength: picsA.length });
  let pointName = ggb1.instance.evalCommandGetLabels(
    'CopyFreeObject(' + pointsA[pointsA.length - 1] + ')'
  );
  pointsA.push(pointName);
  pointsAInTarget1.push(
    ggb1.instance.evalCommandGetLabels('IsInRegion(' + pointName + ', target1)')
  );
  pointsAInTarget2.push(
    ggb1.instance.evalCommandGetLabels('IsInRegion(' + pointName + ', target2)')
  );
  pointsAInDrawer.push(
    ggb1.instance.evalCommandGetLabels('IsInRegion(' + pointName + ', drawer)')
  );
  ggb1.instance.setVisible(pointName, false);
  let xmlstring = ggb1.instance.getXML(picName);
  let parser = new DOMParser();
  let xmldom = parser.parseFromString(xmlstring, 'application/xml');
  xmldom.getElementsByTagName('startPoint')[0].setAttribute('exp', pointName);
  xmldom.getElementsByTagName('startPoint')[0].removeAttribute('x');
  xmldom.getElementsByTagName('startPoint')[0].removeAttribute('y');
  xmldom.getElementsByTagName('startPoint')[0].removeAttribute('z');
  let serializer = new XMLSerializer();
  xmlstring = serializer.serializeToString(xmldom);
  ggb1.instance.evalXML(xmlstring);
}

//clone picsB and make associated ggb objects
function clonePicsB(a) {
  let picName = ggb1.instance.evalCommandGetLabels('CopyFreeObject(' + a + ')');
  picsB.push(picName);
  ggb1.updateInnerData({ picsBLength: picsB.length });
  let pointName = ggb1.instance.evalCommandGetLabels(
    'CopyFreeObject(' + pointsB[pointsB.length - 1] + ')'
  );
  pointsB.push(pointName);
  pointsBInTarget1.push(
    ggb1.instance.evalCommandGetLabels('IsInRegion(' + pointName + ', target1)')
  );
  pointsBInTarget2.push(
    ggb1.instance.evalCommandGetLabels('IsInRegion(' + pointName + ', target2)')
  );
  pointsBInDrawer.push(
    ggb1.instance.evalCommandGetLabels('IsInRegion(' + pointName + ', drawer)')
  );
  ggb1.instance.setVisible(pointName, false);
  let xmlstring = ggb1.instance.getXML(picName);
  let parser = new DOMParser();
  let xmldom = parser.parseFromString(xmlstring, 'application/xml');
  xmldom.getElementsByTagName('startPoint')[0].setAttribute('exp', pointName);
  xmldom.getElementsByTagName('startPoint')[0].removeAttribute('x');
  xmldom.getElementsByTagName('startPoint')[0].removeAttribute('y');
  xmldom.getElementsByTagName('startPoint')[0].removeAttribute('z');
  let serializer = new XMLSerializer();
  xmlstring = serializer.serializeToString(xmldom);
  ggb1.instance.evalXML(xmlstring);
}

//remove pointsA and everything associated with it
function removeAEverywhere() {
  removeFromTargets();
  ggb1.instance.deleteObject(picsA[pointsA.indexOf(selectedPoint)]);
  picsA.splice(pointsA.indexOf(selectedPoint), 1);
  ggb1.instance.deleteObject(pointsAInTarget1[pointsA.indexOf(selectedPoint)]);
  pointsAInTarget1.splice(pointsA.indexOf(selectedPoint), 1);
  ggb1.instance.deleteObject(pointsAInTarget2[pointsA.indexOf(selectedPoint)]);
  pointsAInTarget2.splice(pointsA.indexOf(selectedPoint), 1);
  ggb1.instance.deleteObject(pointsAInDrawer[pointsA.indexOf(selectedPoint)]);
  pointsAInDrawer.splice(pointsA.indexOf(selectedPoint), 1);
  ggb1.instance.deleteObject(pointsA[pointsA.indexOf(selectedPoint)]);
  pointsA.splice(pointsA.indexOf(selectedPoint), 1);
  ggb1.updateInnerData({ picsALength: picsA.length });
}

//remove pointsB and everything associated with it
function removeBEverywhere() {
  removeFromTargets();
  ggb1.instance.deleteObject(picsB[pointsB.indexOf(selectedPoint)]);
  picsB.splice(pointsB.indexOf(selectedPoint), 1);
  ggb1.instance.deleteObject(pointsBInTarget1[pointsB.indexOf(selectedPoint)]);
  pointsBInTarget1.splice(pointsB.indexOf(selectedPoint), 1);
  ggb1.instance.deleteObject(pointsBInTarget2[pointsB.indexOf(selectedPoint)]);
  pointsBInTarget2.splice(pointsB.indexOf(selectedPoint), 1);
  ggb1.instance.deleteObject(pointsBInDrawer[pointsB.indexOf(selectedPoint)]);
  pointsBInDrawer.splice(pointsB.indexOf(selectedPoint), 1);
  ggb1.instance.deleteObject(pointsB[pointsB.indexOf(selectedPoint)]);
  pointsB.splice(pointsB.indexOf(selectedPoint), 1);
  ggb1.updateInnerData({ picsBLength: picsB.length });
}

//add selectedPoint to target1Arr and pic to associated landingPoint
function addToTarget1() {
  target1Arr.splice(
    ggb1.instance.getValue('indexTarget1ClosestPoint') - 1,
    0,
    selectedPoint
  );
  ggb1.updateInnerData({ target1ArrLength: target1Arr.length });
}

//add selectedPoint to target2Arr and pic to associated landingPoint
function addToTarget2() {
  target2Arr.splice(
    ggb1.instance.getValue('indexTarget2ClosestPoint') - 1,
    0,
    selectedPoint
  );
  ggb1.updateInnerData({ target2ArrLength: target2Arr.length });
}

function removeFromTargets() {
  if (target1Arr.indexOf(selectedPoint) > -1) {
    let tempArr = [];
    for (let i = 0, L = target1Arr.length; i < L; i++) {
      if (target1Arr[i] != selectedPoint) {
        tempArr.push(target1Arr[i]);
      } else {
        tempArr.push(false);
      }
    }
    target1Arr = [...tempArr];
  }
  //remove selected point from target2Arr
  if (target2Arr.indexOf(selectedPoint) > -1) {
    let tempArr = [];
    for (let i = 0, L = target2Arr.length; i < L; i++) {
      if (target2Arr[i] != selectedPoint) {
        tempArr.push(target2Arr[i]);
      } else {
        tempArr.push(false);
      }
    }
    target2Arr = [...tempArr];
  }
  ggb1.updateData({
    target1Arr: target1Arr,
    target2Arr: target2Arr,
  });
}

/*
{"compTotals":{"geogebra":1,"textbox":2},"stage":"Launch","lessonInfo":"8 M5 TC L12 - Solving Historical Problems with Systems of Equations​","teacherView":false,"layout":"two col"}
*/
