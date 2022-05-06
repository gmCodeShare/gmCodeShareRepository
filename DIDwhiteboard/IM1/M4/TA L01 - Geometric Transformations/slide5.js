const { ggb1, buttonGroup1, button1 } = components;

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

let bluePoints = ["A", "B", "C", "D", "E", "F", "G", "I", "J", "K", "L", "M"];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener("time", timeWork);
ggb1.instance.registerObjectUpdateListener("time2", time2Work);
ggb1.instance.registerObjectUpdateListener("count", displayLabels);

function timeWork() {
  if (ggb1.instance.getValue("time") == 1) {
    if (ggb1.instance.getValue("initialSix")) {
      ggb1.instance.setValue("count", ggb1.instance.getValue("count") + 1);
    }
    if (ggb1.instance.getValue("count") == 6) {
      ggb1.instance.setValue("time", 0);
      ggb1.instance.setAnimating("time2", false);
      ggb1.instance.setValue("time2", 0);
      ggb1.instance.setAnimating("time2", true);
      ggb1.instance.startAnimation();
    }
    if (ggb1.instance.getValue("count") > 6) {
      ggb1.instance.setValue("count", ggb1.instance.getValue("count") + 1);
    }
    if (ggb1.instance.getValue("resetCount")) {
      ggb1.instance.setValue("count", 0);
    }
    if (ggb1.instance.getValue("count") != 6) {
      restartAnimation();
    }
  }
}

function time2Work() {
  if (ggb1.instance.getValue("time2") == 1) {
    restartAnimation();
    ggb1.instance.setValue("count", 7);
  }
}

function displayLabels() {
  for (let i = 0, L = bluePoints.length; i < L; i++) {
    if (ggb1.instance.getValue("count") == i + 1) {
      ggb1.instance.setLabelVisible(bluePoints[i], true);
    }
  }
  if (ggb1.instance.getValue("count") == 0) {
    for (let i = 0, L = bluePoints.length; i < L; i++) {
      ggb1.instance.setLabelVisible(bluePoints[i], false);
    }
    ggb1.instance.setAnimating("time2", false);
    ggb1.instance.setValue("time2", 0);
  }
  if (ggb1.instance.getValue("count") == 14) {
    ggb1.instance.setValue("enablePauseButton", true);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: false }, 3);
  }
}

function restartAnimation() {
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  if (ggb1.instance.getValue("enablePauseButton")) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: false }, 3);
  }
  if (ggb1.instance.getValue("count") == 0) {
    ggb1.instance.setValue("count", 1);
  }
  restartAnimation();
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
});

buttonGroup1.on("click:3", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setValue("count", 0);
  // delete all randomly generated points
  ggb1.instance.getAllObjectNames("point").forEach((point) => {
    if (ggb1.instance.getCaption(point) === "rando") {
      ggb1.instance.deleteObject(point);
    }
  });
  saveData({ numPoints: 0 });
  button1.updateData({ disabled: false });
});

button1.on("click", () => {
  const randX = Math.random() * ggb1.instance.getValue("endX");
  const randY = Math.random() * ggb1.instance.getValue("endY");
  const figurePoint = ggb1.instance.evalCommandGetLabels(
    `(${randX}, ${randY})`
  );
  ggb1.instance.setFixed(figurePoint, false, false);
  const imagePoint = ggb1.instance.evalCommandGetLabels(
    `Dilate(${figurePoint}, scaleFactor, CenterOfDilation)`
  );
  ggb1.instance.setFixed(imagePoint, false, false);
  ggb1.instance.setColor(imagePoint, 218, 41, 28);
  ggb1.instance.setPointStyle(imagePoint, 5);
  ggb1.instance.setCaption(figurePoint, "rando");
  ggb1.instance.setCaption(imagePoint, "rando");
  const numPoints = getData("numPoints") + 1 || 1;
  saveData({ numPoints });
  if (numPoints >= 20) {
    button1.updateData({ disabled: true });
  }
});

// library

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
