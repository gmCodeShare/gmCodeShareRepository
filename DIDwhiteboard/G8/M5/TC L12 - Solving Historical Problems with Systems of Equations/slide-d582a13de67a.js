const { text1, ggb1, textDisplay1, feedback1 } = components;

//testing update

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerClientListener(listenToClient);
ggb1.instance.registerClickListener(deletePoint);

let selectedPoint;
let selectedObj;
let fromDisplay;
let copiedObj;

//set max number of pics
let maxPicsA = 100;
let maxPicsB = 100;
let maxPicsC = 100;
//if there is a max number of pics, set percent fill for unselectable shadow pic
let shadowFill = 0.2;
let normalFill = 1;

//set filling percent and line style for targets when dragging and when point is in target regions
let fillPercentNormal = 0.0;
let fillPercentInRegion = 0.2;
let lineStyleNormal = 1;
let lineStyleInRegion = 0;

let numOfImagesThatCanBeCopied = 3; //here, both the cow and the sheep can be copied
let objToInitCopy = [
  'objADrawer',
  'objBDrawer',
  'objCDrawer',
  'objADisplay',
  'objBDisplay',
  'objCDisplay',
];
let objToCopy = ['objADisplay', 'objBDisplay', 'objCDisplay'];
let objInitPoint = [
  'ObjAInit',
  'ObjBInit',
  'ObjCInit',
  'ObjALanding',
  'ObjBLanding',
  'ObjCLanding',
];

function listenToClient(a) {
  if (a[0] == 'setMode' && a[2] == '0') {
    ggb1.instance.setFixed('objADrawer', false, true);
    ggb1.instance.setFixed('objBDrawer', false, true);
    ggb1.instance.setFixed('objCDrawer', false, true);
  } else if (a[0] == 'setMode' && a[2] == '6') {
    ggb1.instance.setFixed('objADrawer', true, false);
    ggb1.instance.setFixed('objBDrawer', true, false);
    ggb1.instance.setFixed('objCDrawer', true, false);
  }
  if (a[0] == 'select' && ggb1.instance.getMode() == 6) {
    ggb1.instance.deleteObject(a[1]);
  } else if (a[0] == 'select') {
    selectedObj = a[1];
  }
  if (a[0] == 'select' && objToInitCopy.includes(a[1])) {
    copyImage(objToInitCopy.indexOf(a[1]));
  }
  if (a[0] == 'dragEnd' && ggb1.instance.getValue('inDrawer')) {
    ggb1.instance.deleteObject(selectedObj);
  } else if (a[0] == 'dragEnd') {
    ggb1.instance.evalCommand('SelectObjects()');
    selectedPoint = undefined;
    selectedObj = undefined;
    fromDisplay = undefined;
    copiedObj = undefined;
  }
}

function copyImage(a) {
  switch (a % numOfImagesThatCanBeCopied) {
    case 0:
      selectedObj = 'A';
      break;
    case 1:
      selectedObj = 'B';
      break;
    case 2:
      selectedObj = 'C';
      break;
    default:
      console.log('error in copyImage switch statement');
  }
  if (objToInitCopy[a].includes('Display')) {
    fromDisplay = true;
  }
  selectedPoint = ggb1.instance.evalCommandGetLabels(
    'CopyFreeObject(' + objInitPoint[a] + ')'
  );
  copiedObj = ggb1.instance.evalCommandGetLabels(
    'CopyFreeObject(' + objToCopy[a % numOfImagesThatCanBeCopied] + ')'
  );
  ggb1.instance.setCaption(copiedObj, selectedPoint);
  ggb1.instance.setVisible(selectedPoint, false);
  let xmlstring = ggb1.instance.getXML(copiedObj);
  let parser = new DOMParser();
  let xmldom = parser.parseFromString(xmlstring, 'application/xml');
  xmldom
    .getElementsByTagName('startPoint')[0]
    .setAttribute('exp', selectedPoint);
  xmldom.getElementsByTagName('startPoint')[0].removeAttribute('x');
  xmldom.getElementsByTagName('startPoint')[0].removeAttribute('y');
  xmldom.getElementsByTagName('startPoint')[0].removeAttribute('z');
  let serializer = new XMLSerializer();
  xmlstring = serializer.serializeToString(xmldom);
  ggb1.instance.evalXML(xmlstring);
  ggb1.instance.evalCommand('SelectObjects(' + selectedPoint + ')');
}

function deleteCopiedImage() {
  ggb1.instance.deleteObject(selectedPoint);
  ggb1.instance.deleteObject(copiedObj);
}

function deletePoint() {
  ggb1.instance.deleteObject(selectedPoint);
  ggb1.instance.evalCommand('SelectObjects()');
  selectedPoint = undefined;
  selectedObj = undefined;
}

/*
{"compTotals":{"textbox":3,"geogebra":1},"stage":"Learn","lessonInfo":"8 M5 TC L12 - Solving Historical Problems with Systems of Equations​","teacherView":false,"layout":"one col"}
*/
