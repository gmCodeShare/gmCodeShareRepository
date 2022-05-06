const {
  ggb1,
  feedback1,
  ggb2,
  separator1,
  cc_sharewithclass_f578986c7e9c_textbox1,
  cc_sharewithclass_f578986c7e9c_input1,
  cc_sharewithclass_f578986c7e9c_button1,
  cc_sharewithclass_f578986c7e9c_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb2.instance.registerObjectUpdateListener('a', aUpdate);
ggb2.instance.registerObjectUpdateListener('b', bUpdate);

function aUpdate() {
  ggb1.instance.setValue('rad1', ggb2.instance.getValue('a'));
}
function bUpdate() {
  ggb1.instance.setValue('rad2', ggb2.instance.getValue('b'));
}

ggb1.instance.registerClientListener(clients);
ggb1.instance.registerClickListener(switchIt);
ggb1.instance.registerAddListener(burySegs);

var selected = '';

function clients(a) {
  switch (a.type) {
    case 'select':
      selected = a.target;
      if (ggb1.instance.getValue('madeOne')) {
        snipePoly(selected);
      }
      break;
    case 'deselect':
      selected = '';
      break;
    case 'dragEnd':
      snapIt(a.target);
      if (!ggb1.instance.getValue('madeOne')) {
        formerButton1Function();
        ggb1.instance.evalCommand('SelectObjects()');
      }
  }
}

function snapIt(a) {
  let thresh = ggb1.instance.getValue('threshold');
  if (a.includes('Mov')) {
    let prefix = a[0];
    if (ggb1.instance.getValue(prefix + 'Dist') < thresh) {
      ggb1.instance.setCoords(
        a,
        ggb1.instance.getXcoord(prefix + 'Stalker'),
        ggb1.instance.getYcoord(prefix + 'Stalker')
      );
    }
  }
  let movers = ['aMov', 'bMov', 'cMov'];
  let shakers = ['aRot', 'bRot', 'cRot'];
  for (let j = 0, L = shakers.length; j < L; j++) {
    for (let i = 0; i < L; i++) {
      if (
        i != j &&
        ggb1.instance.getValue(
          'Distance(' + shakers[j] + ',' + shakers[i] + ')'
        ) < thresh
      ) {
        snapRot(shakers[j], shakers[i]);
      } else if (
        ggb1.instance.getValue(
          'Distance(' + shakers[j] + ',' + movers[i] + ')'
        ) < thresh
      ) {
        let otherSeg = movers[i][0];
        switchIt(otherSeg);
        snapRot(shakers[j], otherSeg + 'Rot');
        switchIt(otherSeg);
      } // second if
    } // inner loop
  } // outer loop
}

function snapRot(a, b) {
  let lastDist;
  for (let i = 0, max = 100; i < max; i++) {
    ggb1.instance.setCoords(
      a,
      ggb1.instance.getXcoord(b),
      ggb1.instance.getYcoord(b)
    );
    ggb1.instance.setCoords(
      b,
      ggb1.instance.getXcoord(a),
      ggb1.instance.getYcoord(a)
    );
    let dist = ggb1.instance.getValue('Distance(' + a + ',' + b + ')');
    if (dist < 0.02 || dist >= lastDist) {
      break;
    }
    lastDist = dist;
  }
}

function switchIt(a) {
  if (ggb1.instance.getObjectType(a) == 'segment') {
    ggb1.instance.setCoords(
      'Dummy',
      ggb1.instance.getXcoord(a + 'Mov'),
      ggb1.instance.getYcoord(a + 'Mov')
    );
    ggb1.instance.setCoords(
      a + 'Mov',
      ggb1.instance.getXcoord(a + 'Rot'),
      ggb1.instance.getYcoord(a + 'Rot')
    );
    ggb1.instance.setCoords(
      a + 'Rot',
      ggb1.instance.getXcoord('Dummy'),
      ggb1.instance.getYcoord('Dummy')
    );
  }
}

function burySegs(a) {
  ggb1.instance.getObjectType(a);
  if (
    ggb1.instance.getObjectType(a) == 'segment' ||
    ggb1.instance.getObjectType(a) == 'angle'
  ) {
    ggb1.instance.setFixed(a, false, false);
  }
}

function isPoly(thing) {
  const polyTypes = [
    'polygon',
    'triangle',
    'quadrilateral',
    'pentagon',
    'hexagon',
  ];
  return polyTypes.includes(ggb1.instance.getObjectType(thing));
}

function snipePoly(a) {
  const visPoints = [
    'aMov',
    'aRot',
    'bMov',
    'bRot',
    'cMov',
    'cRot',
    'dMov',
    'dRot',
  ];
  if (visPoints.includes(a)) {
    let allPolys = getAllPolyNames();
    if (allPolys.length) {
      ggb1.instance.deleteObject(allPolys[allPolys.length - 1]);
    }
    ggb1.instance.unregisterUpdateListener('snipePoly');
    ggb1.instance.setValue('madeOne', false);
  }
}

function getAllPolyNames() {
  const polyTypes = [
    'polygon',
    'triangle',
    'quadrilateral',
    'pentagon',
    'hexagon',
  ];
  return ggb1.instance.getAllObjectNames().filter(function (thing) {
    return polyTypes.includes(ggb1.instance.getObjectType(thing));
  });
}

function formerButton1Function() {
  let baseArray = ['aMov', 'aRot', 'bMov', 'bRot', 'cMov', 'cRot'];
  let sortedArray = [];

  let next = findNext(baseArray[0]);
  let polyLength = baseArray.length / 2;

  for (let i = 1; i < polyLength; i++) {
    if (next) {
      next = findNext(next);
    } else {
      break;
    }
  }

  let largestVertex;
  let smallestVertex;
  let thirdVertex;

  let longerRadPoint;
  let longerRadAngle;
  let shorterRadPoint;

  let exactTriangle;

  let correspondingAngleMeasures = [];

  function makeExactTriangle() {
    /*
1. Starts by creating an array of the interior angles so that the smallest angle, middle angle, and largest angle can be determined.

2. Determines the largest angle; in this case, the right angle. Also determines the smallest angle and middle angle (or "third vertex").

3. Creates fakeAxisPoint as a point to use as an orgin to have something to reference.

4. Establishes longerRad and shorterRad; these are rad1 and rad2, though it needs to be determined which one is longer and which is shorter for when using exact lengths to construct triangle. These are only used to determine where longerRadPoint and shorterRadPoint need to be placed.

5. Determines which angle is the corresponding angle for longerRadPoint.

6. Determines if rotating counterclockwise or clockwise from rad1 to rad2 points. Creates point 90 deg counterclockwise of rad1, then use polar to give lenght of rad2.
*/
    //create array of angle measures and connect it to array of angle names
    for (let i = 0, L = sortedArray.length; i < L; i++) {
      ggb1.instance.evalCommand(
        'tempAngle : Angle(' +
          sortedArray[(i - 1 + sortedArray.length) % sortedArray.length] +
          ', ' +
          sortedArray[i] +
          ', ' +
          sortedArray[(i + 1) % sortedArray.length] +
          ')'
      );
      let tempInteriorAngle = ggb1.instance.getValue('tempAngle');
      if (tempInteriorAngle > Math.PI) {
        tempInteriorAngle = 2 * Math.PI - tempInteriorAngle;
      }
      correspondingAngleMeasures.push(tempInteriorAngle);
      ggb1.instance.deleteObject('tempAngle');
    }

    //Determine the largest angle; in this case, the right angle
    let tempLargestVertex =
      sortedArray[
        correspondingAngleMeasures.indexOf(
          Math.max(...correspondingAngleMeasures)
        )
      ];
    largestVertex = ggb1.instance.evalCommandGetLabels(
      'LargestVertexPoint = (' +
        ggb1.instance.getXcoord(tempLargestVertex) +
        ',' +
        ggb1.instance.getYcoord(tempLargestVertex) +
        ')'
    );

    //Determine the smallest angle and middle angle (or "third vertex")
    smallestVertex =
      sortedArray[
        correspondingAngleMeasures.indexOf(
          Math.min(...correspondingAngleMeasures)
        )
      ];
    let tempPointsArray = [...sortedArray];
    tempPointsArray
      .splice(tempPointsArray.indexOf(tempLargestVertex), 1)
      .splice(tempPointsArray.indexOf(smallestVertex), 1);
    thirdVertex = tempPointsArray[0];

    //creates fakeAxisPoint as a point to use as an orgin to have something to reference
    let fakeAxisPoint = ggb1.instance.evalCommandGetLabels(
      largestVertex + '+(1, 0)'
    );
    ggb1.instance.setVisible(fakeAxisPoint, false);

    //establish longerRad and shorterRad; these are rad1 and rad2, but need to know which one is longer and which is shorter for when using exact lengths to construct triangle
    let longerRad;
    if (ggb1.instance.getValue('rad1') == ggb1.instance.getValue('rad2')) {
      longerRad = ggb1.instance.getValue('rad1');
    } else {
      longerRad = Math.max(
        ggb1.instance.getValue('rad1'),
        ggb1.instance.getValue('rad2')
      );
    }
    let shorterRad;
    if (ggb1.instance.getValue('rad1') == ggb1.instance.getValue('rad2')) {
      shorterRad = ggb1.instance.getValue('rad2');
    } else {
      shorterRad = Math.min(
        ggb1.instance.getValue('rad1'),
        ggb1.instance.getValue('rad2')
      );
    }

    //determine corresponding angle for longerRadPoint
    longerRadAngle = ggb1.instance.evalCommandGetLabels(
      'Angle(' +
        fakeAxisPoint +
        ', ' +
        largestVertex +
        ', ' +
        smallestVertex +
        ')'
    );
    ggb1.instance.setVisible(longerRadAngle, false);
    longerRadPoint = ggb1.instance.evalCommandGetLabels(
      largestVertex +
        '+(' +
        ggb1.instance.getValue(longerRad) +
        '; ' +
        ggb1.instance.getValue(longerRadAngle) +
        ')'
    );
    ggb1.instance.setVisible(longerRadPoint, false);

    //Determine if rotating counterclockwise or clockwise from rad1 to rad2 points. Create point 90 deg counterclockwise of rad1, then use polar to give lenght of rad2
    let whichWayAngle = ggb1.instance.evalCommandGetLabels(
      'whichWayAngle=Angle(' +
        longerRadPoint +
        ', ' +
        largestVertex +
        ', ' +
        thirdVertex +
        ')'
    );
    ggb1.instance.setVisible(whichWayAngle, false);
    let testAngle = ggb1.instance.evalCommand(
      'myVal=' + ggb1.instance.getValue(longerRadAngle) + '+' + Math.PI / 2
    );
    if (ggb1.instance.getValue(whichWayAngle) < Math.PI) {
      shorterRadPoint = ggb1.instance.evalCommandGetLabels(
        largestVertex +
          '+(' +
          ggb1.instance.getValue(shorterRad) +
          '; ' +
          ggb1.instance.getValue(longerRadAngle) +
          '+' +
          Math.PI / 2 +
          ')'
      );
    } else {
      shorterRadPoint = ggb1.instance.evalCommandGetLabels(
        largestVertex +
          '+(' +
          ggb1.instance.getValue(shorterRad) +
          '; ' +
          ggb1.instance.getValue(longerRadAngle) +
          '-' +
          Math.PI / 2 +
          ')'
      );
    }
    ggb1.instance.setVisible(largestVertex, false);
    ggb1.instance.setVisible(shorterRadPoint, false);

    exactTriangle = ggb1.instance.evalCommandGetLabels(
      'Polygon(' +
        largestVertex +
        ', ' +
        longerRadPoint +
        ' ,' +
        shorterRadPoint +
        ')'
    );
  }

  ggb1.instance.evalCommand('SetActiveView(1)');
  let points = [];
  for (let i = 0, L = sortedArray.length; i < L; i++) {
    let newPoint = ggb1.instance.evalCommandGetLabels('(0,0)');
    ggb1.instance.setVisible(newPoint, false);
    ggb1.instance.setCoords(
      newPoint,
      ggb1.instance.getXcoord(sortedArray[i]),
      ggb1.instance.getYcoord(sortedArray[i])
    );
    points.push(newPoint);
  }

  if (
    points.length == polyLength &&
    ggb1.instance.getValue('intNum') <= polyLength
  ) {
    for (let i = 1, L = points.length; i < L; i++) {
      let deltaX =
        ggb1.instance.getXcoord(points[i]) - ggb1.instance.getXcoord(points[0]);
      let deltaY =
        ggb1.instance.getYcoord(points[i]) - ggb1.instance.getYcoord(points[0]);
      ggb1.instance.setCoords('storage' + i, deltaX, deltaY);
    }
    let names = ggb1.instance.evalCommandGetLabels(
      'tempPoly=Polygon(' + points + ')'
    );
    let objects = names.split(',');
    let quad = objects[0];
    ggb1.instance.setValue('madeOne', !!quad);
    if (!!quad) {
      ggb1.instance.deleteObject('tempPoly');
      makeExactTriangle();
      //ggb1.instance.deleteObject(quad);
      let triangleObjects = exactTriangle.split(',');
      let triangle = triangleObjects[0];
      ggb1.instance.evalCommand('InteriorAngles(' + triangle + ')');
      let tempAnglesArray = ggb1.instance.getAllObjectNames('angle');
      for (let i = 0, L = tempAnglesArray.length; i < L; i++) {
        ggb1.instance.setColor(tempAnglesArray[i], 0, 0, 0);
      }
    }
  }

  function findNext(a) {
    let otherEnd = '';
    if (a.includes('Mov')) {
      otherEnd = a[0] + 'Rot';
    } else {
      otherEnd = a[0] + 'Mov';
    }
    // add the next point if it's not already included and if its other end is snapped to something
    if (!sortedArray.includes(a)) {
      for (let i = 0, L = baseArray.length; i < L; i++) {
        if (
          i != baseArray.indexOf(otherEnd) &&
          ggb1.instance.getValue(
            'Distance(' + baseArray[i] + ',' + otherEnd + ')'
          ) < 0.02
        ) {
          sortedArray.push(a);
          return baseArray[i];
        }
      }
    }
    return '';
  }
}

/*
{"compTotals":{"geogebra":2,"textbox":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M2 TD L18 - Proving the Converse of the Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
