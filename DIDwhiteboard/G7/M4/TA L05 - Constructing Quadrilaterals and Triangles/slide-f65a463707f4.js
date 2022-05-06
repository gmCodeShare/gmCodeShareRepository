const {
  ggb1,
  separator1,
  button1,
  feedback,
  textDisplay2,
  cc_sharewithclass_decd95577756_textbox1: shareText1,
  cc_sharewithclass_decd95577756_input1: shareInput1,
  cc_sharewithclass_decd95577756_button1: shareButton1,
  cc_sharewithclass_decd95577756_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({
    visible: false,
    align: 'right',
  });
});

const minGiven = 3;
ggb1.updateInnerData({ rad1: minGiven, rad2: 8 });
ggb1.instance.evalCommand('SetValue(probAngle, 125 deg)'); // angles slides
button1.updateData({ visible: false });

ggb1.instance.registerAddListener(adds);

button1.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
});

function adds(a) {
  if (isPoly(a)) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
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
  }
}

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1 && ggb1.data.sendPoints) {
    utils.RTS.sendData('slide-f65a463707f4', {
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
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M4 TA L05 - Constructing Quadrilaterals and Triangles","teacherView":false,"layout":"two col"}
*/
