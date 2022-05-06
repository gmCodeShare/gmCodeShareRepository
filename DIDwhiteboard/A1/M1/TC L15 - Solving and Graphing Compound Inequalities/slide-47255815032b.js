const {
  textDisplay4,
  ggb1,
  separator1,
  select3,
  feedback,
  text1,
  cc_submit_ec70bdbe1bc9_textbox1: submitText1,
  cc_submit_ec70bdbe1bc9_input1: submitInput1,
  cc_submit_ec70bdbe1bc9_button1: submitButton1,
  separator10,
  cc_submit_43375ad836c2_textbox1: submitText2,
  cc_submit_43375ad836c2_input1: submitInput2,
  cc_submit_43375ad836c2_button1: submitButton2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

const color = [242, 106, 54];
if (select3.data.selected.length && select3.data.selected[0] == "2") {
  ggb1.instance.registerClickListener(clicks);
}

slide.on("firstload", () => {
  // text2.updateData({ visible: false });
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
  select3.selectOption("0");
  const allPoints = ggb1.instance.getAllObjectNames("point");
  let origs = allPoints.filter(
    (point) =>
      ggb1.instance.getValue(`IsInRegion(${point}, bin)`) &&
      !!ggb1.instance.getCaption(point)
  );
  for (let i = 0, L = origs.length; i < L; i++) {
    ggb1.instance.setColor(origs[i], color[0], color[1], color[2]);
  }
});

// get clue 1 shadings
(() => {
  ggb1.instance.setValue("extras", 3);
  const allGGB = ggb1.instance.getAllObjectNames();
  let allPrev = allGGB.filter((obj) => ggb1.instance.getCaption(obj) == "prev");
  for (let i = 0, L = allPrev.length; i < L; i++) {
    ggb1.instance.deleteObject(allPrev[i]);
  }
  let clue1 =
    getFromSlide("slide-4086cacd56f8", "ggb1.data.shadings", {}) || {};
  if (!Object.keys(clue1).length) {
    return;
  }
  const oldColor = [0, 127, 175];
  const { endPoints, regions } = clue1;
  const yValString = "Element(yVals, 1)";
  endPoints.sort((a, b) => a.x - b.x);
  for (let i = 0, L = endPoints.length; i < L; i++) {
    const { x, open } = endPoints[i];
    let newPoint = ggb1.instance.evalCommandGetLabels(`(${x}, ${yValString})`);
    ggb1.instance.setFixed(newPoint, false, false);
    ggb1.instance.setColor(newPoint, oldColor[0], oldColor[1], oldColor[2]);
    ggb1.instance.setCaption(newPoint, "prev");
    if (open) {
      ggb1.instance.setPointSize(newPoint, 6);
      ggb1.instance.setPointStyle(newPoint, 2);
    } else {
      ggb1.instance.setPointSize(newPoint, 7);
    }
  }
  let shaders = [];
  const pixNum = 6;
  if (regions.includes("left")) {
    let newVec = ggb1.instance.evalCommandGetLabels(
      `Vector((${endPoints[0]["x"]} - ${pixNum} xpixel, ${yValString}), (xMin, ${yValString}))`
    );
    shaders.push(newVec);
  }
  if (regions.includes("mid")) {
    let newSeg = ggb1.instance.evalCommandGetLabels(
      `Segment((${endPoints[0]["x"]} + ${pixNum} xpixel, ${yValString}), (${
        endPoints[endPoints.length - 1]["x"]
      } - ${pixNum} xpixel, ${yValString}))`
    );
    shaders.push(newSeg);
  }
  if (regions.includes("right")) {
    let newVec = ggb1.instance.evalCommandGetLabels(
      `Vector((${
        endPoints[endPoints.length - 1]["x"]
      } + ${pixNum} xpixel, ${yValString}), (xMax, ${yValString}))`
    );
    shaders.push(newVec);
  }
  for (let i = 0, L = shaders.length; i < L; i++) {
    ggb1.instance.setFixed(shaders[i], false, false);
    ggb1.instance.setLineThickness(shaders[i], 8);
    ggb1.instance.setColor(shaders[i], oldColor[0], oldColor[1], oldColor[2]);
    ggb1.instance.setCaption(shaders[i], "prev");
  }
})();

// get clue 2 shadings
(() => {
  let clue2 =
    getFromSlide("slide-b9857447c139", "ggb1.data.shadings", {}) || {};
  if (!Object.keys(clue2).length) {
    return;
  }
  const oldColor = [218, 41, 28];
  const { endPoints, regions } = clue2;
  const yValString = "Element(yVals, 2)";
  endPoints.sort((a, b) => a.x - b.x);
  for (let i = 0, L = endPoints.length; i < L; i++) {
    const { x, open } = endPoints[i];
    let newPoint = ggb1.instance.evalCommandGetLabels(`(${x}, ${yValString})`);
    ggb1.instance.setFixed(newPoint, false, false);
    ggb1.instance.setColor(newPoint, oldColor[0], oldColor[1], oldColor[2]);
    ggb1.instance.setCaption(newPoint, "prev");
    if (open) {
      ggb1.instance.setPointSize(newPoint, 6);
      ggb1.instance.setPointStyle(newPoint, 2);
    } else {
      ggb1.instance.setPointSize(newPoint, 7);
    }
  }
  let shaders = [];
  const pixNum = 6;
  if (regions.includes("left")) {
    let newVec = ggb1.instance.evalCommandGetLabels(
      `Vector((${endPoints[0]["x"]} - ${pixNum} xpixel, ${yValString}), (xMin, ${yValString}))`
    );
    shaders.push(newVec);
  }
  if (regions.includes("mid")) {
    let newSeg = ggb1.instance.evalCommandGetLabels(
      `Segment((${endPoints[0]["x"]} + ${pixNum} xpixel, ${yValString}), (${
        endPoints[endPoints.length - 1]["x"]
      } - ${pixNum} xpixel, ${yValString}))`
    );
    shaders.push(newSeg);
  }
  if (regions.includes("right")) {
    let newVec = ggb1.instance.evalCommandGetLabels(
      `Vector((${
        endPoints[endPoints.length - 1]["x"]
      } + ${pixNum} xpixel, ${yValString}), (xMax, ${yValString}))`
    );
    shaders.push(newVec);
  }
  for (let i = 0, L = shaders.length; i < L; i++) {
    ggb1.instance.setFixed(shaders[i], false, false);
    ggb1.instance.setLineThickness(shaders[i], 8);
    ggb1.instance.setColor(shaders[i], oldColor[0], oldColor[1], oldColor[2]);
    ggb1.instance.setCaption(shaders[i], "prev");
  }
})();

// get clue 3 shadings
(() => {
  let clue3 =
    getFromSlide("slide-ba407376a432", "ggb1.data.shadings", {}) || {};
  if (!Object.keys(clue3).length) {
    return;
  }
  const oldColor = [0, 129, 57];
  const { endPoints, regions } = clue3;
  const yValString = "Element(yVals, 3)";
  endPoints.sort((a, b) => a.x - b.x);
  for (let i = 0, L = endPoints.length; i < L; i++) {
    const { x, open } = endPoints[i];
    let newPoint = ggb1.instance.evalCommandGetLabels(`(${x}, ${yValString})`);
    ggb1.instance.setFixed(newPoint, false, false);
    ggb1.instance.setColor(newPoint, oldColor[0], oldColor[1], oldColor[2]);
    ggb1.instance.setCaption(newPoint, "prev");
    if (open) {
      ggb1.instance.setPointSize(newPoint, 6);
      ggb1.instance.setPointStyle(newPoint, 2);
    } else {
      ggb1.instance.setPointSize(newPoint, 7);
    }
  }
  let shaders = [];
  const pixNum = 6;
  if (regions.includes("left")) {
    let newVec = ggb1.instance.evalCommandGetLabels(
      `Vector((${endPoints[0]["x"]} - ${pixNum} xpixel, ${yValString}), (xMin, ${yValString}))`
    );
    shaders.push(newVec);
  }
  if (regions.includes("mid")) {
    let newSeg = ggb1.instance.evalCommandGetLabels(
      `Segment((${endPoints[0]["x"]} + ${pixNum} xpixel, ${yValString}), (${
        endPoints[endPoints.length - 1]["x"]
      } - ${pixNum} xpixel, ${yValString}))`
    );
    shaders.push(newSeg);
  }
  if (regions.includes("right")) {
    let newVec = ggb1.instance.evalCommandGetLabels(
      `Vector((${
        endPoints[endPoints.length - 1]["x"]
      } + ${pixNum} xpixel, ${yValString}), (xMax, ${yValString}))`
    );
    shaders.push(newVec);
  }
  for (let i = 0, L = shaders.length; i < L; i++) {
    ggb1.instance.setFixed(shaders[i], false, false);
    ggb1.instance.setLineThickness(shaders[i], 8);
    ggb1.instance.setColor(shaders[i], oldColor[0], oldColor[1], oldColor[2]);
    ggb1.instance.setCaption(shaders[i], "prev");
  }
})();

select3.on("change", ({ selected }) => {
  resetAnim();
  ggb1.instance.unregisterClickListener(clicks);
  let allGGB = ggb1.instance.getAllObjectNames();
  let shaders = allGGB.filter(
    (obj) => ggb1.instance.getCaption(obj) == "shader"
  );
  for (let i = 0, L = shaders.length; i < L; i++) {
    ggb1.instance.deleteObject(shaders[i]);
  }
  switch (true) {
    case selected.includes("0"):
      startPlottingEnds();
      break;
    case selected.includes("1"):
      startPlottingMids();
      break;
    case selected.includes("2"):
      startShading();
  }
});

submitButton1.on("click", () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

submitButton2.on("click", () => {
  resetAnim();
  const result = utils.math.evaluateLatex(submitInput2.data.text);
  if (result.error) {
    return;
  }
  let newList = ggb1.instance.evalCommandGetLabels(
    `Join(Sequence((${result.value}, Element(yVals, i)), i, 1, Length(yVals)), {(${result.value}, 0)})`
  );
  ggb1.instance.setFixed(newList, false, false);
  ggb1.instance.setLayer(newList, 2);
  ggb1.instance.setCaption(newList, "guess");
  ggb1.instance.setColor(newList, 0, 0, 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

autorun(() => {
  let trigger = submitInput2.data.text;
  resetAnim();
});

let selected = "";

// client section
function selectEvent(name) {
  if (ggb1.instance.getObjectType(name) != "point") {
    return;
  }
  selected = name;
  if (ggb1.instance.getValue(`IsInRegion(${name}, bin)`)) {
    if (ggb1.instance.getCaption(name) == "closed") {
      let newPoint = ggb1.instance.evalCommandGetLabels(
        "Point(Join({anchors, {Home}}))"
      );
      ggb1.instance.setPointSize(newPoint, 7);
      ggb1.instance.setCoords(
        newPoint,
        ggb1.instance.getXcoord(name),
        ggb1.instance.getYcoord(name)
      );
      ggb1.instance.setCaption(newPoint, "closed");
      ggb1.instance.setColor(newPoint, color[0], color[1], color[2]);
    } else if (ggb1.instance.getCaption(name) == "open") {
      let newPoint = ggb1.instance.evalCommandGetLabels(
        "Point(Join({anchors, {Home'}}))"
      );
      ggb1.instance.setPointSize(newPoint, 6);
      ggb1.instance.setPointStyle(newPoint, 2);
      ggb1.instance.setCoords(
        newPoint,
        ggb1.instance.getXcoord(name),
        ggb1.instance.getYcoord(name)
      );
      ggb1.instance.setCaption(newPoint, "open");
      ggb1.instance.setColor(newPoint, color[0], color[1], color[2]);
    }
  }
}

function deselectEvent(name) {
  selected = "";
}

function dragEndEvent(name) {
  if (ggb1.instance.getObjectType(name) != "point") {
    return;
  }
  if (ggb1.instance.getValue(`IsInRegion(${name}, bin)`)) {
    // back to the bin? delete that
    ggb1.instance.deleteObject(name);
    if (ggb1.instance.getValue("plottingEnds")) {
      // if we're plotting ends, set some points fixed
      fixEnds();
    } else if (ggb1.instance.getValue("plottingMids")) {
      // if we're plotting mids, so some platform stuff
      interpretMids();
    }
  } else if (ggb1.instance.getValue("plottingEnds")) {
    // dragging to the line? tag that as an endpoint vs a middle point, if not already tagged
    if (
      !ggb1.instance.getCaption(name).includes("Endpoint") &&
      !ggb1.instance.getCaption(name).includes("Midpoint")
    ) {
      ggb1.instance.setCaption(
        name,
        ggb1.instance.getCaption(name) + "Endpoint"
      );
    }
    fixEnds();
  } else if (ggb1.instance.getValue("plottingMids")) {
    if (
      !ggb1.instance.getCaption(name).includes("Endpoint") &&
      !ggb1.instance.getCaption(name).includes("Midpoint")
    ) {
      ggb1.instance.setCaption(
        name,
        ggb1.instance.getCaption(name) + "Midpoint"
      );
      ggb1.instance.setPointSize(name, 5);
    }
    interpretMids();
  }
}

// helper section
function fixEnds() {
  ggb1.instance.evalCommand("SelectObjects()");
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let ends = allPoints.filter((point) =>
    ggb1.instance.getCaption(point).includes("Endpoint")
  );
  // when changing from shade mode, need to make selectable again
  for (let i = 0, L = ends.length; i < L; i++) {
    ggb1.instance.setFixed(ends[i], false, true);
  }
  let mids = allPoints.filter((point) =>
    ggb1.instance.getCaption(point).includes("Midpoint")
  );
  for (let i = 0, L = mids.length; i < L; i++) {
    ggb1.instance.setFixed(mids[i], false, false);
  }
  let origs = allPoints.filter(
    (point) =>
      ggb1.instance.getValue(`IsInRegion(${point}, bin)`) &&
      !!ggb1.instance.getCaption(point)
  );
  for (let i = 0, L = origs.length; i < L; i++) {
    ggb1.instance.setFixed(origs[i], false, ends.length < 2);
    // if (ggb1.instance.getCaption(origs[i])) {
    ggb1.instance.setVisible(origs[i], true);
    // }
  }
}

function startPlottingEnds() {
  ggb1.instance.setValue("plottingEnds", true);
  ggb1.instance.setValue("plottingMids", false);
  ggb1.instance.setValue("shading", false);
  fixEnds();
}

function fixMids() {
  ggb1.instance.evalCommand("SelectObjects()");
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let mids = allPoints.filter((point) =>
    ggb1.instance.getCaption(point).includes("Midpoint")
  );
  // when changing from shade mode, need to make selectable again
  for (let i = 0, L = mids.length; i < L; i++) {
    ggb1.instance.setFixed(mids[i], false, true);
  }
  let ends = allPoints.filter((point) =>
    ggb1.instance.getCaption(point).includes("Endpoint")
  );
  for (let i = 0, L = ends.length; i < L; i++) {
    ggb1.instance.setFixed(ends[i], false, false);
  }
  let origs = allPoints.filter(
    (point) =>
      ggb1.instance.getValue(`IsInRegion(${point}, bin)`) &&
      !!ggb1.instance.getCaption(point)
  );
  let closedPoints = origs.filter(
    (point) => ggb1.instance.getCaption(point) == "closed"
  );
  let openPoints = origs.filter(
    (point) => ggb1.instance.getCaption(point) == "open"
  );
  for (let i = 0, L = origs.length; i < L; i++) {
    if (closedPoints.includes(origs[i])) {
      ggb1.instance.setFixed(origs[i], false, true);
      ggb1.instance.setVisible(origs[i], true);
    } else if (openPoints.includes(origs[i])) {
      ggb1.instance.setFixed(origs[i], false, false);
      ggb1.instance.setVisible(origs[i], false);
    }
  }
}

function startPlottingMids() {
  ggb1.instance.setValue("plottingEnds", false);
  ggb1.instance.setValue("plottingMids", true);
  ggb1.instance.setValue("shading", false);
  fixMids();
}

function startShading() {
  ggb1.instance.setValue("plottingEnds", false);
  ggb1.instance.setValue("plottingMids", false);
  ggb1.instance.setValue("shading", true);
  ggb1.instance.evalCommand("SelectObjects()");
  let allPoints = ggb1.instance.getAllObjectNames("point");
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb1.instance.setFixed(allPoints[i], false, false);
  }
  let origs = allPoints.filter(
    (point) =>
      ggb1.instance.getValue(`IsInRegion(${point}, bin)`) &&
      !!ggb1.instance.getCaption(point)
  );
  for (let i = 0, L = origs.length; i < L; i++) {
    ggb1.instance.setVisible(origs[i], false);
  }
  let ends = allPoints.filter((point) =>
    ggb1.instance.getCaption(point).includes("Endpoint")
  );
  if (!ends.length) {
    return;
  }
  // sort left to right
  ends.sort((a, b) => ggb1.instance.getXcoord(a) - ggb1.instance.getXcoord(b));
  let boundaries = ["LeftEnd", ...ends, "RightEnd"];
  // create shaders
  const pixNum = 6;
  ggb1.instance.evalCommand(
    `visShadeLeft = Vector(${boundaries[1]} - (${pixNum} xpixel, 0), LeftEnd)`
  );
  ggb1.instance.evalCommand(
    `clickShadeLeft = Vector(${boundaries[1]} - (${pixNum} xpixel, 0), LeftEnd)`
  );
  ggb1.instance.evalCommand(
    `visShadeRight = Vector(${
      boundaries[boundaries.length - 2]
    } + (${pixNum} xpixel, 0), RightEnd)`
  );
  ggb1.instance.evalCommand(
    `clickShadeRight = Vector(${
      boundaries[boundaries.length - 2]
    } + (${pixNum} xpixel, 0), RightEnd)`
  );
  let segs = [];
  for (let i = 1, L = boundaries.length - 2; i < L; i++) {
    let newVis = ggb1.instance.evalCommandGetLabels(
      `visShade${i} = Segment(${boundaries[i]} + (${pixNum} xpixel, 0), ${
        boundaries[i + 1]
      } - (${pixNum} xpixel, 0))`
    );
    let newClick = ggb1.instance.evalCommandGetLabels(
      `clickShade${i} = Segment(${boundaries[i]} + (${pixNum} xpixel, 0), ${
        boundaries[i + 1]
      } - (${pixNum} xpixel, 0))`
    );
    segs.push(newVis, newClick);
  }
  let shaders = [
    "visShadeLeft",
    "clickShadeLeft",
    ...segs,
    "visShadeRight",
    "clickShadeRight",
  ];
  // create regions for hover
  const H = 4 * ggb1.instance.getValue("ypixel");
  let regions = [];
  for (let i = 0, L = boundaries.length - 1; i < L; i++) {
    let newQuad = ggb1.instance.evalCommandGetLabels(
      `Polygon({${boundaries[i]} + (0, ${H}), ${boundaries[i]} + (0, -${H}), ${
        boundaries[i + 1]
      } + (0, -${H}), ${boundaries[i + 1]} + (0, ${H})})`
    );
    // console.log(newQuad);
    regions.push(newQuad);
    ggb1.instance.setVisible(newQuad, false);
    ggb1.instance.setCaption(newQuad, "shader");
  }
  for (let i = 0, L = shaders.length; i < L; i++) {
    ggb1.instance.setCaption(shaders[i], "shader");
    if (shaders[i].includes("vis")) {
      ggb1.instance.setLineThickness(shaders[i], 8);
      ggb1.instance.setColor(shaders[i], color[0], color[1], color[2]);
      ggb1.instance.setFixed(shaders[i], false, false);
      ggb1.instance.setVisible(shaders[i], false);
    } else if (shaders[i].includes("click")) {
      ggb1.instance.setLineThickness(shaders[i], 9);
      // we have twice as many objects in this array as regions:
      let regIndex = Math.floor(i / 2);
      ggb1.instance.evalCommand(
        `SetConditionToShowObject(${shaders[i]}, IsInRegion(Follow, ${regions[regIndex]}))`
      );
      // ggb1.instance.setColor(shaders[i], 192, 192, 192);
      // ggb1.instance.setFilling;
    }
  }
  ggb1.instance.registerClickListener(clicks);
}

// GGB section
ggb1.instance.registerClientListener((a) => {
  switch (a.type) {
    case "select":
      selectEvent(a.target);
      break;
    case "deselect":
      deselectEvent(selected);
      break;
    case "dragEnd":
      dragEndEvent(a.target);
      break;
  }
});

function clicks(name) {
  if (
    ggb1.instance.getObjectType(name) != "segment" &&
    ggb1.instance.getObjectType(name) != "vector"
  ) {
    return;
  }
  resetAnim();
  let target = name.replace("click", "vis");
  ggb1.instance.setVisible(target, !ggb1.instance.getVisible(target));
  ggb1.instance.evalCommand("SelectObjects()");
  submitText1.updateData({ visible: true });
  submitInput1.updateData({ visible: true });
  submitButton1.updateData({ visible: true });
  // saveShading();
}

function resetAnim() {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time", 0);
  let allGGB = ggb1.instance.getAllObjectNames();
  let guesses = allGGB.filter(
    (obj) => ggb1.instance.getCaption(obj) == "guess"
  );
  for (let i = 0, L = guesses.length; i < L; i++) {
    ggb1.instance.deleteObject(guesses[i]);
  }
}

/*
{"compTotals":{"textbox":3,"geogebra":1,"separator":2,"select":1,"submit":2},"stage":"Learn","lessonInfo":"9 M1 TC L15 - Solving and Graphing Compound Inequalities","teacherView":false,"layout":"T layout"}
*/
