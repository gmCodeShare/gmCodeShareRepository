const { ggb1, feedback1, text1, button1, separator1, text2 } = components;

ggb1.instance.setValue("state", 1);
ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
});

autorun(() => {
  let point = ggb1.innerData["LeftDragPointA"];
  let pointB = ggb1.innerData["RightDragPointA"];
  button1.updateData({ disabled: false });
});

button1.on("click", () => {
  button1.updateData({ disabled: true });
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
  ); // CW
  ggb1.instance.setFixed(newSeg, false, false);
  ggb1.instance.setLayer(newSeg, 0);
  points.push([
    [xA, yA],
    [xB, yB],
  ]);
  ggb1.updateData({ storedPoints: [...points] });
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-c9df07d05033", {
      pointA: ggb1.innerData["LeftDragPointA"],
      pointB: ggb1.innerData["RightDragPointA"],
      // this would need an extra condition added to the above if: controls.current == now + 1 && ggb1.data.storedPoints // CW
      //points: [...ggb1.data.storedPoints], // CW
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"button":1,"separator":1},"stage":"Learn","lessonInfo":"9 M2 TC L17 - Modeling Relationships with a Line","teacherView":false,"layout":"two col"}
*/
