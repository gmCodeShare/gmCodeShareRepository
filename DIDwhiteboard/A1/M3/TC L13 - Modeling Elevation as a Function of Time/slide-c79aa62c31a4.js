const { textDisplay2, media4, feedback, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  saveInk();
});

/* const allStrokes = ggb1.instance.getAllObjectNames("penstroke");
if (allStrokes.length) {
  adds(allStrokes[0]); // this enables ok erase responsiveness
} */

function saveInk() {
  ggb1.updateData({ init: true });
  const allPLines = ggb1.instance.getAllObjectNames("polyline");
  for (let i = 0, L = allPLines.length; i < L; i++) {
    ggb1.instance.deleteObject(allPLines[i]);
  }
  const allStrokes = ggb1.instance.getAllObjectNames("penstroke");
  const cmdStrings = [];
  const strokeStrings = [];
  for (let i = 0, L = allStrokes.length; i < L; i++) {
    let cmdString = ggb1.instance.getCommandString(allStrokes[i]);
    strokeStrings.push(cmdString);
    // remove the front and end of that string
    let defPoints = cmdString.slice(
      cmdString.indexOf("("),
      cmdString.length - 18
    );
    let pointsArr = defPoints.split(", ");
    let newPLine = ggb1.instance.evalCommandGetLabels(
      "Polyline({" + pointsArr + "})"
    );
    ggb1.instance.setVisible(newPLine, false);
    cmdStrings.push(ggb1.instance.getCommandString(newPLine));
  }
  ggb1.updateData({ cmdStrings, strokeStrings });
}

const prevSketches =
  getFromSlide("slide-fea879b785b9", "ggb1.data.strokeStrings") || [];
const currentSketches = ggb1.instance.getAllObjectNames("penstroke");
if (prevSketches.length && (!ggb1.data.init || !currentSketches.length)) {
  for (let i = 0, L = currentSketches.length; i < L; i++) {
    ggb1.instance.deleteObject(currentSketches[i]);
  }
  for (let i = 0, L = prevSketches.length; i < L; i++) {
    const newSketch = ggb1.instance.evalCommandGetLabels(prevSketches[i]);
    ggb1.instance.setColor(newSketch, 0, 0, 0);
  }
}

ggb1.instance.registerAddListener(adds);

function adds(name) {
  if (ggb1.instance.getObjectType(name) == "penstroke") {
    saveInk();
  }
}

const now = controls.current;
autorun(() => {
  if (controls.current == now + 1 && ggb1.data.cmdStrings?.length) {
    const allStrokes = ggb1.instance.getAllObjectNames("penstroke");
    adds(allStrokes[0]); // this enables erase responsiveness. but is it safe?
    utils.RTS.sendData("slide-c79aa62c31a4", {
      doodles: [...ggb1.data.cmdStrings],
    });
  }
});

/*
{"compTotals":{"textbox":2,"media":1,"geogebra":1},"stage":"Learn","lessonInfo":"9 M3 TC L13 - Modeling Elevation as a Function of Time","teacherView":false,"layout":"T layout"}
*/
