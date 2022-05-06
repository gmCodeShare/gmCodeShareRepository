const { textDisplay2, ggb1, separator1, buttonGroup1, feedback, ggb2 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

function linkGGB() {
  ggb1.instance.setValue("time", ggb2.instance.getValue("scrub"));
}

function linkSpeed() {
  ggb2.instance.setValue("speed", ggb1.instance.getValue("speed"));
}

ggb2.instance.registerObjectUpdateListener("scrub", linkGGB);
ggb1.instance.registerObjectUpdateListener("speed", linkSpeed);

ggb2.instance.registerClientListener((a) => {
  if (a.type == "select" && a.target == "Scrubber") {
    ggb2.instance.stopAnimation();
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 4);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  } else if (a.type == "undo") {
    ggb2.instance.registerObjectUpdateListener("scrub", linkGGB);
    linkGGB();
    parseStrokes();
    ggb2.instance.setFixed("Scrubber", false, ggb2.instance.getMode() != 6);
  } else if (a.type == "setMode") {
    ggb2.instance.evalCommand("SelectObjects()");
    // set point unselectable if trash can chosen
    ggb2.instance.setFixed("Scrubber", false, a.argument != 6);
    // patch for deleting pLine during animation
    if (a.argument == 6) {
      buttonGroup1.updateSingleButton({ disabled: true }, 1);
      buttonGroup1.updateSingleButton({ disabled: true }, 4);
      buttonGroup1.updateSingleButton({ disabled: true }, 2);
      buttonGroup1.updateSingleButton({ disabled: true }, 3);
    } else {
      buttonGroup1.updateSingleButton(
        {
          disabled:
            ggb2.instance.isAnimationRunning() &&
            ggb2.instance.getValue("scrub") != 1,
        },
        1
      );
      buttonGroup1.updateSingleButton(
        {
          disabled:
            ggb2.instance.isAnimationRunning() &&
            ggb2.instance.getValue("scrub") != 1,
        },
        4
      );
      buttonGroup1.updateSingleButton(
        { disabled: !ggb2.instance.isAnimationRunning() },
        2
      );
      buttonGroup1.updateSingleButton({ disabled: false }, 3);
    }
    parseStrokes();
  }
});

function parseStrokes() {
  let allPLines = ggb1.instance.getAllObjectNames("polyline");
  for (let i = 0, L = allPLines.length; i < L; i++) {
    ggb1.instance.deleteObject(allPLines[i]);
  }
  let allLists = ggb1.instance.getAllObjectNames("list");
  for (let i = 0, L = allLists.length; i < L; i++) {
    ggb1.instance.deleteObject(allLists[i]);
  }
  let allSegs = ggb1.instance.getAllObjectNames("segment");
  for (let i = 0, L = allSegs.length; i < L; i++) {
    ggb1.instance.deleteObject(allSegs[i]);
  }
  let cmdStrings = [];
  let combinedList = ["{(0, 0)}"];
  let allStrokes = ggb2.instance.getAllObjectNames("polyline");
  for (let i = 0, L = allStrokes.length; i < L; i++) {
    /* let cmdString = ggb2.instance.getCommandString(allStrokes[i]);
    // remove the front and end of that string
    let defPoints = cmdString.slice(
      cmdString.indexOf("("),
      cmdString.length - 18
    );
    let pointsArr = defPoints.split(", "); */
    // let newPLine = ggb1.instance.evalCommandGetLabels(
    //   "Polyline({" + pointsArr + "})"
    // );
    let cmdString = ggb2.instance.getCommandString(allStrokes[i]);
    let cmdArr = cmdString.split(",");
    if (cmdArr.length > 2) {
      cmdStrings.push(cmdString);
      let newPLine = ggb1.instance.evalCommandGetLabels(cmdString);
      ggb1.instance.setVisible(newPLine, false);
      // if you want to create intersections with the polyline, use something like this
      let intList = ggb1.instance.evalCommandGetLabels(
        "{Intersect(scrubber, " + newPLine + ")}"
      );
      combinedList.push(intList);
      let targetList = ggb1.instance.evalCommandGetLabels(
        `Sequence((x(TrampMid), y(Element(${intList}, i))), i, 1, Length(${intList}))`
      );
      ggb1.instance.setVisible(intList, false);
      ggb1.instance.setVisible(targetList, false);
      // if you want to attach something to each intersection, use something like this
      let images = ggb1.instance.evalCommandGetLabels(
        "Sequence(Translate(silhouette, Vector(SilFoot, Element(" +
          targetList +
          ",i))), i, 1, Length(" +
          targetList +
          "))"
      );
      ggb1.instance.setFixed(images, false, false);
    }
  }
  ggb2.updateData({ cmdStrings });
  const allPointsList = ggb1.instance.evalCommandGetLabels(
    `RemoveUndefined(Join({${combinedList}}))`
  );
  ggb1.instance.setVisible(allPointsList, false);
  const yVals = ggb1.instance.evalCommandGetLabels(`y(${allPointsList})`);
  if (ggb1.instance.exists("TrampElastic")) {
    ggb1.instance.deleteObject("TrampElastic");
  }
  const minY = ggb1.instance.evalCommandGetLabels(`Min(${yVals})`);
  const trampolinePoint = ggb1.instance.evalCommandGetLabels(
    `(x(TrampMid), ${minY})`
  );
  ggb1.instance.setVisible(trampolinePoint, false);
  const fitFunc = ggb1.instance.evalCommandGetLabels(
    `FitPoly({O, ${trampolinePoint}, P}, 2)`
  );
  ggb1.instance.setVisible(fitFunc, false);
  const visTramp = ggb1.instance.evalCommandGetLabels(
    `If(x(O) <= x <= x(P), ${fitFunc})`
  );
  ggb1.instance.setFixed(visTramp, false, false);
  const defTramp = ggb1.instance.evalCommandGetLabels("Segment(O, P)");
  ggb1.instance.setFixed(defTramp, false, false);
  ggb1.instance.setLineThickness(visTramp, 9);
  ggb1.instance.setLineThickness(defTramp, 9);
  ggb1.instance.setColor(visTramp, 0, 0, 0);
  ggb1.instance.setColor(defTramp, 0, 0, 0);
  const visBool = ggb1.instance.evalCommandGetLabels(`${minY} < 0`);
  ggb1.instance.evalCommand(
    `SetConditionToShowObject(${visTramp}, ${visBool})`
  );
  ggb1.instance.evalCommand(
    `SetConditionToShowObject(${defTramp}, !${visBool})`
  );
  const markers = ggb1.instance.evalCommandGetLabels(
    `Sequence(y = Element(${yVals}, i), i, 2, Length(${yVals}))`
  );
  //console.log("creating", visTramp, ggb1.instance.getCommandString(visTramp));
  ggb1.instance.setFixed(markers, false, false);
  ggb1.instance.setLineStyle(markers, 2);
  ggb1.instance.setColor(markers, 255, 255, 255);
}

function adds(name) {
  if (ggb2.instance.getObjectType(name) == "penstroke") {
    let cmdString = ggb2.instance.getCommandString(name);
    // remove the front and end of that string
    let defPoints = cmdString.slice(
      cmdString.indexOf("("),
      cmdString.length - 18
    );
    let pointsArr = defPoints.split(", ");
    let newPLine = ggb2.instance.evalCommandGetLabels(
      "Polyline({" + pointsArr + "})"
    );
    ggb2.instance.setColor(newPLine, 0, 0, 0);
    ggb2.instance.deleteObject(name);
    parseStrokes();
  }
}

ggb2.instance.registerAddListener(adds);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:1", () => {
  ggb2.instance.evalCommand("SelectObjects()");
  if (ggb2.instance.getValue("scrub") == 1) {
    ggb2.instance.setCoords("Scrubber", 0, -4);
  }
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb2.instance.setAnimating("Scrubber", true);
  ggb2.instance.startAnimation();
  saveData({ slowMo: false });
  ggb1.instance.setVisible("speed", false);
  ggb1.instance.setValue("speed", 1);
});

buttonGroup1.on("click:2", () => {
  ggb2.instance.evalCommand("SelectObjects()");
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb2.instance.stopAnimation();
});

buttonGroup1.on("click:3", () => {
  ggb2.instance.evalCommand("SelectObjects()");
  ggb2.instance.stopAnimation();
  ggb2.instance.setCoords("Scrubber", 0, -4);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:4", () => {
  ggb2.instance.evalCommand("SelectObjects()");
  if (ggb2.instance.getValue("scrub") == 1) {
    ggb2.instance.setCoords("Scrubber", 0, -4);
  }
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb2.instance.setAnimating("Scrubber", true);
  ggb2.instance.startAnimation();
  saveData({ slowMo: true });
  ggb1.instance.setVisible("speed", true);
});

autorun(() => {
  if (ggb1.innerData["time"] == 1) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    if (getData("slowMo")) {
      ggb2.instance.setCoords("Scrubber", 0, -4);
      ggb2.instance.setAnimating("Scrubber", true);
      ggb2.instance.startAnimation();
      buttonGroup1.updateSingleButton({ disabled: false }, 2);
    }
  }
});

// CW: what is this RTS code here for? maybe from the original lesson?
// let now = controls.current;
// autorun(() => {
//   if (controls.current == now + 1 && ggb2.data.cmdStrings?.length) {
//     utils.RTS.sendData("slide-52f9200ffc57", {
//       doodles: [...ggb2.data.cmdStrings],
//     });
//   }
// });

function saveData(dataObj = {}, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataObj !== "object") {
    console.error(
      "saveData error: Parameters should be an object and a string!"
    );
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataName !== "string") {
    console.error("getData error: Parameters should both be strings!");
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}

/*
{"compTotals":{"textbox":2,"geogebra":2,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M3 TB L07 - Print Alt: Exploring Key Features of a Function and Its Graph","teacherView":true,"layout":"T layout"}
*/
