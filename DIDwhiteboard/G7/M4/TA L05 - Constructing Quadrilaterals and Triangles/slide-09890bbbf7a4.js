const { ggb1, separator1, button1, text1, feedback } = components;

ggb1.instance.setErrorDialogsActive(false);

const minGiven = 2;

ggb1.updateInnerData({ rad1: minGiven, rad2: 3, rad3: 4 });

button1.updateData({ visible: false });

ggb1.instance.registerAddListener(adds);

button1.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
});

function adds(a) {
  if (isPoly(a)) {
    let centroid = ggb1.instance.evalCommandGetLabels(`Centroid(${a})`);
    ggb1.instance.setVisible(centroid, false);
    let polyString = ggb1.instance.getCommandString(a);
    let vertices = polyString
      .replace('Polygon(', '')
      .replace(')', '')
      .replaceAll(' ', '')
      .split(',');
    let candidates = [];
    let repVerts = [...vertices, ...vertices, ...vertices];
    let angleMeasures = [];
    for (let i = vertices.length, L = 2 * vertices.length; i < L; i++) {
      let dist1 = ggb1.instance.getValue(
        `Distance(${repVerts[i - 1]}, ${repVerts[i]})`
      );
      let dist2 = ggb1.instance.getValue(
        `Distance(${repVerts[i]}, ${repVerts[i + 1]})`
      );
      if (
        dist1.toFixed() == minGiven.toFixed() ||
        dist2.toFixed() == minGiven.toFixed()
      ) {
        candidates.push(repVerts[i]);
        candidates.push(repVerts[i + 1]);
        let angle = ggb1.instance.getValue(
          `Angle(${repVerts[i - 1]}, ${repVerts[i]}, ${repVerts[i + 1]})`
        );
        if (angle > Math.PI) {
          angle = 2 * Math.PI - angle;
        }
        angleMeasures.push(angle);
      }
    }
    let sheriff = vertices[angleMeasures.indexOf(Math.min(...angleMeasures))];
    let deputy = vertices[angleMeasures.indexOf(Math.max(...angleMeasures))];
    let sheriffIndex = repVerts.indexOf(sheriff, vertices.length - 1);
    let deputyIndex = repVerts.indexOf(deputy, vertices.length - 1);
    let polyNames = [];
    if (sheriffIndex < deputyIndex) {
      // going forward
      for (let i = sheriffIndex, L = repVerts.length; i < L; i++) {
        if (!polyNames.includes(repVerts[i])) {
          polyNames.push(repVerts[i]);
        } else {
          break;
        }
      }
    } else {
      // going backward
      for (let i = sheriffIndex; i >= 0; i--) {
        if (!polyNames.includes(repVerts[i])) {
          polyNames.push(repVerts[i]);
        } else {
          break;
        }
      }
    }
    let polyEnvelope = [];
    for (let i = 0, L = polyNames.length; i < L; i++) {
      polyEnvelope.push([
        ggb1.instance.getXcoord(polyNames[i]),
        ggb1.instance.getYcoord(polyNames[i]),
      ]);
    }
    ggb1.updateData({
      sendPoints: [...polyEnvelope],
      sendCentroid: [
        ggb1.instance.getXcoord(centroid),
        ggb1.instance.getYcoord(centroid),
      ],
    });
    ggb1.updateData({ saveXML: ggb1.instance.getXML() }); // need this for quads
  }
}

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1 && ggb1.data.sendPoints) {
    utils.RTS.sendData('slide-09890bbbf7a4', {
      points: [...ggb1.data.sendPoints],
      centroid: [...ggb1.data.sendCentroid],
    });
  }
});

autorun(() => {
  button1.updateData({ disabled: ggb1.innerData['madeOne'] });
});

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

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":2},"stage":"Learn","lessonInfo":"7 M4 TA L05 - Constructing Quadrilaterals and Triangles","teacherView":false,"layout":"two col"}
*/
