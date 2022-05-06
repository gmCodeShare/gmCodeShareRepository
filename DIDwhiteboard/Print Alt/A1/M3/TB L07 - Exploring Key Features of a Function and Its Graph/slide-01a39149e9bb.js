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
  let cmdStrings = [];
  let allStrokes = ggb2.instance.getAllObjectNames("polyline");
  for (let i = 0, L = allStrokes.length; i < L; i++) {
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
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
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
{"compTotals":{"textbox":2,"geogebra":2,"separator":1,"buttongroup":1},"stage":"Launch","lessonInfo":"9 M3 TB L07 - Print Alt: Exploring Key Features of a Function and Its Graph","teacherView":true,"layout":"T layout"}
*/
