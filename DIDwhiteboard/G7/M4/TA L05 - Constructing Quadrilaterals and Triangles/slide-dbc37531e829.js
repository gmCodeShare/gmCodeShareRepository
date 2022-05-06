const { buttonGroup1, button1, ggb1, feedback } = components;

ggb1.instance.setErrorDialogsActive(false);

const numSides = 3;
let polyType = '';
switch (numSides) {
  case 3:
    polyType = 'triangle';
    break;
  case 4:
    polyType = 'quadrilateral';
}

ggb1.instance.registerAddListener((a) => {
  switch (ggb1.instance.getObjectType(a)) {
    case 'point':
      ggb1.instance.setVisible(a, false);
      break;
    case 'segment':
      ggb1.instance.setFixed(a, false, false);
  }
});

button1.on('click', () => {
  ggb1.instance.stopAnimation();
  ggb1.updateInnerData({ time1: 0, time2: 0, time3: 0 });
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.stopAnimation();
  ggb1.updateInnerData({ time1: 0, time2: 0, time3: 0 });
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setAnimating('time3', false);
  ggb1.instance.setAnimating('time1', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.stopAnimation();
  ggb1.updateInnerData({ time2: 0, time3: 0 });
  ggb1.instance.setAnimating('time2', true);
  ggb1.instance.setAnimating('time3', false);
  ggb1.instance.setAnimating('time1', false);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:3', () => {
  ggb1.instance.stopAnimation();
  tagFlips();
  ggb1.updateInnerData({ time3: 0 });
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setAnimating('time3', true);
  ggb1.instance.setAnimating('time1', false);
  ggb1.instance.startAnimation();
});

function tagFlips() {
  let visPolys = ggb1.instance.getAllObjectNames(polyType).filter((poly) => {
    return ggb1.instance.getVisible(poly);
  });
  let flipPolys = [];
  for (let i = 0, L = visPolys.length; i < L; i++) {
    let cent = ggb1.instance.evalCommandGetLabels(`Centroid(${visPolys[i]})`);
    let allPoints = ggb1.instance.getAllObjectNames('point');
    let pointMatch = allPoints.filter((point) => {
      return (
        ggb1.instance.getCaption(visPolys[i]) == ggb1.instance.getCaption(point)
      );
    });
    if (ggb1.instance.getXcoord(cent) < 0 && !pointMatch.length) {
      flipPolys.push(visPolys[i]);
    }
    ggb1.instance.deleteObject(cent);
  }
  for (let i = 0, L = flipPolys.length; i < L; i++) {
    let vertices = ggb1.instance
      .evalCommandGetLabels(`Vertex(${flipPolys[i]})`)
      .split(',');
    let reflectors = [];
    for (let j = 0, L = vertices.length; j < L; j++) {
      let x = ggb1.instance.getXcoord(vertices[j]).toFixed(4);
      let y = ggb1.instance.getYcoord(vertices[j]).toFixed(4);
      let reflectingPoint;
      if (x == '0') {
        reflectingPoint = ggb1.instance.evalCommandGetLabels(`(${x},${y})`);
      } else {
        let seg = ggb1.instance.evalCommandGetLabels(
          `Segment((${x},${y}),(${-1 * x},${y}))`
        );
        ggb1.instance.setVisible(seg, false);
        reflectingPoint = ggb1.instance.evalCommandGetLabels(
          `Point(${seg}, time3)`
        );
      }
      ggb1.instance.setVisible(reflectingPoint, false);
      ggb1.instance.setCaption(
        reflectingPoint,
        ggb1.instance.getCaption(flipPolys[i])
      );
      reflectors.push(reflectingPoint);
    }
    let reflectingPoly = ggb1.instance.evalCommandGetLabels(
      `Polygon({${reflectors}})`
    );
    ggb1.instance.setFixed(reflectingPoly, false, false);
    ggb1.instance.setCaption(
      reflectingPoly,
      ggb1.instance.getCaption(flipPolys[i])
    );
    ggb1.instance.evalCommand(
      `SetConditionToShowObject(${reflectingPoly}, showFlippers)`
    );
    ggb1.instance.evalCommand(
      `SetConditionToShowObject(${flipPolys[i]}, !showFlippers)`
    );
  }
}

autorun(() => {
  buttonGroup1.updateSingleButton(
    {
      disabled: ggb1.innerData['time1'] != 0,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: !(ggb1.innerData['time2'] == 0 && ggb1.innerData['time1'] == 1),
    },
    2
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: !(ggb1.innerData['time3'] == 0 && ggb1.innerData['time2'] == 1),
    },
    3
  );
});

utils.RTS.on('datachange', 'slide-288dcabe5390', (collection) => {
  if (!collection || !collection.length) {
    return;
  }
  let newCollection = discardOldResponses(collection).reverse();
  newCollection.forEach(({ data, info }, index) => {
    const { points, centroid } = data;
    //check to see if each device already has a polygon on the board; if so, get its index and delete it before making a new one
    let useIndex = index;
    let keepErGoin = true;
    let allPolys = ggb1.instance.getAllObjectNames(polyType);
    let matchingPolyArr = allPolys.filter((thing) => {
      let oldCaption = ggb1.instance.getCaption(thing);
      return oldCaption.substring(0, info.device.length) == info.device;
    });
    if (matchingPolyArr.length) {
      for (let j = 0, L = matchingPolyArr.length; j < L; j++) {
        let poly = matchingPolyArr[j];
        let parts = ggb1.instance.getCaption(poly).split(',');
        useIndex = parseInt(parts[parts.length - 1]);
        if (parts[1] == info.timestamp) {
          keepErGoin = false; // stop if the incoming input is the same one that already exists
        } else {
          ggb1.instance.deleteObject(poly);
          let allPoints = ggb1.instance.getAllObjectNames('point');
          let matchingPoints = allPoints.filter((point) => {
            return (
              ggb1.instance.getCaption(poly) ==
                ggb1.instance.getCaption(point) &&
              !!ggb1.instance.getCaption(point)
            );
          });
          if (matchingPoints.length) {
            for (let i = 0, L = matchingPoints.length; i < L; i++) {
              ggb1.instance.deleteObject(matchingPoints[i]);
            }
          }
        }
      }
    }

    if (keepErGoin) {
      //create points to make a polygon
      let rawPoints = [];
      ggb1.instance.setValue('magIndex', useIndex + 1);
      let extraX = ggb1.instance.getXcoord('mag') - centroid[0];
      let extraY = ggb1.instance.getYcoord('mag') - centroid[1];
      let sheriff = ggb1.instance.evalCommandGetLabels('(0,0)');
      ggb1.instance.setCoords(
        sheriff,
        points[0][0] + extraX,
        points[0][1] + extraY
      );
      rawPoints.push(sheriff);
      let deputy = ggb1.instance.evalCommandGetLabels('(0,0)');
      ggb1.instance.setCoords(
        deputy,
        points[1][0] + extraX,
        points[1][1] + extraY
      );
      rawPoints.push(deputy);
      for (let i = 2, L = points.length; i < L; i++) {
        let newPoint = ggb1.instance.evalCommandGetLabels('(0,0)');
        ggb1.instance.setCoords(
          newPoint,
          points[i][0] + extraX,
          points[i][1] + extraY
        );
        rawPoints.push(newPoint);
      }
      //create the polygon, keep track of its name and its segments
      let newObjects = ggb1.instance
        .evalCommandGetLabels(`Polygon(${rawPoints})`)
        .split(',');
      let newPoly = newObjects[0];
      ggb1.instance.setCaption(
        newPoly,
        `${info.device},${info.timestamp},${useIndex}`
      );
      ggb1.instance.setVisible(newPoly, false);
      newObjects.splice(newObjects.indexOf(newPoly), 1);
      let angle = ggb1.instance.getValue(
        `Angle(${deputy}, ${sheriff}, ${sheriff} + (0,1))`
      );
      let cent = ggb1.instance.evalCommandGetLabels(`Centroid(${newPoly})`);
      let mover = ggb1.instance.evalCommandGetLabels(
        `O + (1 - time1) ${sheriff}` // + (-${dist},0)
      );
      //create the beast
      let whirlPoly = ggb1.instance.evalCommandGetLabels(
        `Rotate(Translate(${newPoly},Vector(${sheriff},${mover})), time2 ${angle}, ${mover})`
      );
      ggb1.instance.setFixed(whirlPoly, false, false);
      ggb1.instance.setCaption(
        whirlPoly,
        `${info.device},${info.timestamp},${useIndex}`
      );
    }
  });
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
{"compTotals":{"buttongroup":1,"button":1,"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"7 M4 TA L05 - Constructing Quadrilaterals and Triangles","teacherView":true,"layout":"one col"}
*/
