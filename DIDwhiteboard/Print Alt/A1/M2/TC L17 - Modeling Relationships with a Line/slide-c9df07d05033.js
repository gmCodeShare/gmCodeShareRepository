const { ggb1, feedback1, text1, buttonGroup1 } = components;

ggb1.instance.setValue("state", 1);
ggb1.instance.setErrorDialogsActive(false);

let segArray = [];
let blueArray = [
  "eq1",
  "eq2",
  "LeftDragPointA",
  "RightDragPointA",
  "dragSegment",
];

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
});

ggb1.instance.registerObjectUpdateListener("sum", updateText);

function updateText() {
  let num = Math.round(ggb1.instance.getValue("sum") * 100) / 100;
  text1.updateData({ text: `#### Sum of Residuals: $${num}$` });
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  let points;
  if (ggb1.data.storedPoints) {
    points = [...ggb1.data.storedPoints];
  } else {
    points = [];
  }
  let xA = ggb1.instance.getXcoord("LeftDragPointA");
  let yA = ggb1.instance.getYcoord("LeftDragPointA");
  let xB = ggb1.instance.getXcoord("RightDragPointA");
  let yB = ggb1.instance.getYcoord("RightDragPointA");
  let newSeg = ggb1.instance.evalCommandGetLabels(
    `Segment((${xA}, ${yA}), (${xB}, ${yB}))`
  );
  ggb1.instance.setFixed(newSeg, false, false);
  ggb1.instance.setLayer(newSeg, 0);
  ggb1.instance.setVisible(newSeg, false);
  segArray.push(newSeg);
  points.push([
    [xA, yA],
    [xB, yB],
  ]);
  ggb1.updateData({ storedPoints: [...points] });
  ggb1.instance.evalCommand("SetValue(LeftDragPointA,LeftHomePoint)");
  ggb1.instance.evalCommand("SetValue(RightDragPointA,RightHomePoint)");
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  let points;
  if (ggb1.data.storedPoints) {
    points = [...ggb1.data.storedPoints];
  } else {
    points = [];
  }
  let xA = ggb1.instance.getXcoord("LeftDragPointA");
  let yA = ggb1.instance.getYcoord("LeftDragPointA");
  let xB = ggb1.instance.getXcoord("RightDragPointA");
  let yB = ggb1.instance.getYcoord("RightDragPointA");
  let newSeg = ggb1.instance.evalCommandGetLabels(
    `Segment((${xA}, ${yA}), (${xB}, ${yB}))`
  );
  ggb1.instance.setFixed(newSeg, false, false);
  ggb1.instance.setLayer(newSeg, 0);
  ggb1.instance.setVisible(newSeg, false);
  segArray.push(newSeg);
  points.push([
    [xA, yA],
    [xB, yB],
  ]);
  ggb1.updateData({ storedPoints: [...points] });
  ggb1.instance.evalCommand("SetValue(LeftDragPointA,LeftHomePoint)");
  ggb1.instance.evalCommand("SetValue(RightDragPointA,RightHomePoint)");
});

buttonGroup1.on("click:3", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  let points;
  if (ggb1.data.storedPoints) {
    points = [...ggb1.data.storedPoints];
  } else {
    points = [];
  }
  let xA = ggb1.instance.getXcoord("LeftDragPointA");
  let yA = ggb1.instance.getYcoord("LeftDragPointA");
  let xB = ggb1.instance.getXcoord("RightDragPointA");
  let yB = ggb1.instance.getYcoord("RightDragPointA");
  let newSeg = ggb1.instance.evalCommandGetLabels(
    `Segment((${xA}, ${yA}), (${xB}, ${yB}))`
  );
  ggb1.instance.setFixed(newSeg, false, false);
  ggb1.instance.setLayer(newSeg, 0);
  ggb1.instance.setVisible(newSeg, false);
  segArray.push(newSeg);
  points.push([
    [xA, yA],
    [xB, yB],
  ]);
  ggb1.updateData({ storedPoints: [...points] });
});

buttonGroup1.on("click:4", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: false }, 5);
  for (let i = 0, J = segArray.length; i < J; i++) {
    ggb1.instance.setVisible(segArray[i], true);
  }
  for (let i = 0, J = blueArray.length; i < J; i++) {
    ggb1.instance.setVisible(blueArray[i], false);
  }
});

buttonGroup1.on("click:5", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
  for (let i = 0, J = segArray.length; i < J; i++) {
    ggb1.instance.deleteObject(segArray[i]);
  }
  segArray = [];
  for (let i = 0, J = blueArray.length; i < J; i++) {
    ggb1.instance.setVisible(blueArray[i], true);
  }
  ggb1.updateData({ storedPoints: [] });
  ggb1.instance.evalCommand("SetValue(LeftDragPointA,LeftHomePoint)");
  ggb1.instance.evalCommand("SetValue(RightDragPointA,RightHomePoint)");
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M2 TC L17 - Print Alt: Modeling Relationships with a Line","teacherView":true,"layout":"two col"}
*/
