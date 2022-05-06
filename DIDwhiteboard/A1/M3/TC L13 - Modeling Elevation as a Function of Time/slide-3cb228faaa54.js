const { textDisplay2, media2, feedback, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

/* const allStrokes = ggb1.instance.getAllObjectNames("penstroke");
if (allStrokes.length) {
  adds(allStrokes[0]); // this enables ok erase responsiveness
} */

ggb1.instance.registerAddListener(adds);

function adds(name) {
  if (ggb1.instance.getObjectType(name) == "penstroke") {
    const allPLines = ggb1.instance.getAllObjectNames("polyline");
    for (let i = 0, L = allPLines.length; i < L; i++) {
      ggb1.instance.deleteObject(allPLines[i]);
    }
    const allStrokes = ggb1.instance.getAllObjectNames("penstroke");
    const cmdStrings = [];
    for (let i = 0, L = allStrokes.length; i < L; i++) {
      let cmdString = ggb1.instance.getCommandString(allStrokes[i]);
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
    ggb1.updateData({ cmdStrings });
  }
}

const now = controls.current;
autorun(() => {
  if (controls.current == now + 1 && ggb1.data.cmdStrings?.length) {
    const allStrokes = ggb1.instance.getAllObjectNames("penstroke");
    adds(allStrokes[0]); // this enables erase responsiveness. but is it safe?
    utils.RTS.sendData("slide-3cb228faaa54", {
      doodles: [...ggb1.data.cmdStrings],
    });
  }
});

/*
{"compTotals":{"textbox":2,"media":1,"geogebra":1},"stage":"Launch","lessonInfo":"9 M3 TC L13 - Modeling Elevation as a Function of Time","teacherView":false,"layout":"T layout"}
*/
