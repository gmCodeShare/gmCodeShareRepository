const { ggb1, feedback1, text1 } = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.updateData({ correctNames: [] });
    ggb1.updateData({ incorrectNames: [] });
    ggb1.updateData({ prevCorrectNames: [] });
    ggb1.updateData({ prevIncorrectNames: [] });
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.setErrorDialogsActive(false);

let prevCorrectPoints =
  getFromSlide("slide-f52d3361f76f", "ggb1.data.correctNames", false) || false;
let prevIncorrectPoints =
  getFromSlide("slide-f52d3361f76f", "ggb1.data.incorrectNames", false) ||
  false;

if (prevCorrectPoints.length) {
  let correctNames = [...prevCorrectPoints];
  for (let i = 0, L = prevCorrectPoints.length; i < L; i++) {
    let xCoord = ggb1.instance.getXcoord(correctNames[i]);
    let yCoord = ggb1.instance.getYcoord(correctNames[i]);
    ggb1.instance.evalCommand(
      "Translate(picCheck, Vector((0,0), (" + xCoord + "," + yCoord + ")))"
    );
    ggb1.instance.setVisible(correctNames[i], false);
  }
  ggb1.updateData({ prevCorrectNames: [...correctNames] });
}

if (prevIncorrectPoints.length) {
  let incorrectNames = [...prevIncorrectPoints];
  for (let i = 0, L = prevIncorrectPoints.length; i < L; i++) {
    ggb1.instance.setColor(incorrectNames[i], 218, 41, 28);
    ggb1.instance.setPointStyle(incorrectNames[i], 1);
    ggb1.instance.setPointSize(incorrectNames[i], 6);
    ggb1.instance.setFixed(incorrectNames[i], false, false);
  }
  ggb1.updateData({ prevIncorrectNames: [...incorrectNames] });
}

ggb1.instance.registerObjectClickListener("button1", styleIt);

function styleIt() {
  let correctPoints = [...ggb1.data.correctNames];
  let incorrectPoints = [...ggb1.data.incorrectNames];
  let xCoord = ggb1.instance.getXcoord("ASelectPoint");
  let yCoord = ggb1.instance.getYcoord("ASelectPoint");

  if (ggb1.instance.getValue("count") < 5) {
    ggb1.instance.setValue("count", ggb1.instance.getValue("count") + 1);

    let allPoints = ggb1.instance.getAllObjectNames("point");

    if (ggb1.instance.getValue("correctPoint")) {
      ggb1.instance.evalCommand(
        "Translate(picCheck, Vector((0,0), (" + xCoord + "," + yCoord + ")))"
      );
      for (let i = 0, L = allPoints.length; i < L; i++) {
        let xDisCoord = ggb1.instance.getXcoord(allPoints[i]);
        let yDisCoord = ggb1.instance.getYcoord(allPoints[i]);
        if (xDisCoord == xCoord && yDisCoord == yCoord) {
          ggb1.instance.setVisible(allPoints[i], false);
          correctPoints.push(allPoints[i]);
        }
      }
      correctPoints.pop(correctPoints[correctPoints.length - 1]);
    } else {
      for (let i = 0, L = allPoints.length; i < L; i++) {
        let xDisCoord = ggb1.instance.getXcoord(allPoints[i]);
        let yDisCoord = ggb1.instance.getYcoord(allPoints[i]);
        if (xDisCoord == xCoord && yDisCoord == yCoord) {
          ggb1.instance.setColor(allPoints[i], 218, 41, 28);
          ggb1.instance.setPointStyle(allPoints[i], 1);
          ggb1.instance.setPointSize(allPoints[i], 6);
          ggb1.instance.setFixed(allPoints[i], false, false);
          incorrectPoints.push(allPoints[i]);
        }
      }
      incorrectPoints.pop(incorrectPoints[incorrectPoints.length - 1]);
    }

    ggb1.instance.setVisible("ASelectPoint", true);
    ggb1.instance.setColor("ASelectPoint", 0, 0, 0);
    ggb1.instance.setPointStyle("ASelectPoint", 2);
    ggb1.instance.setPointSize("ASelectPoint", 9);
    ggb1.instance.setFixed("ASelectPoint", false, true);
  }
  if (ggb1.instance.getValue("count") == 5) {
    ggb1.instance.setVisible("ASelectPoint", false);
  }
  ggb1.updateData({ correctNames: [...correctPoints] });
  ggb1.updateData({ incorrectNames: [...incorrectPoints] });
}

if (ggb1.instance.getValue("count") < 5) {
  ggb1.instance.registerObjectUpdateListener("count", update);
}

function update() {
  let num = 5 - ggb1.instance.getValue("count");
  text1.updateData({
    text: `Here’s a hint: $x+y=5$\n\nCan you find more points that follow the pattern?\n\nAttempts remaining: $${num}$`,
  });
  if (ggb1.instance.getValue("count") == 5) {
    ggb1.instance.setVisible("ASelectPoint", false);
    ggb1.instance.setVisible("dragCircle", false);
    let allPoints = ggb1.instance.getAllObjectNames("point");
    for (let i = 0, L = allPoints.length; i < L; i++) {
      ggb1.instance.setFixed(allPoints[i], false, false);
    }
    ggb1.instance.unregisterObjectUpdateListener("count");
  }
  // utils.RTS.sendData("slide-8cc4c1a27755", {
  //   correctNames: [...ggb1.data.correctNames],
  //   incorrectNames: [...ggb1.data.incorrectNames],
  //   prevCorrectNames: [...ggb1.data.prevCorrectNames],
  //   prevIncorrectNames: [...ggb1.data.prevIncorrectNames],
  // });
}

let now = controls.current;
autorun(() => {
  if (controls.current != now) {
    utils.RTS.sendData("slide-8cc4c1a27755", {
      correctNames: [...ggb1.data.correctNames],
      incorrectNames: [...ggb1.data.incorrectNames],
      prevCorrectNames: [...ggb1.data.prevCorrectNames],
      prevIncorrectNames: [...ggb1.data.prevIncorrectNames],
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2},"stage":"Learn","lessonInfo":"8 M4 TC L12 - Solutions to Linear Equations in Two Variables","teacherView":false,"layout":"two col"}
*/
