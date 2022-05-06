const {
  ggb1,
  button1,
  text1,
  text2,
  select3,
  fib1,
  submitButton1,
  cc_submit_43375ad836c2_textbox1: submitText2,
  cc_submit_43375ad836c2_input1: submitInput2,
  cc_submit_43375ad836c2_button1: submitButton2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

const color = [0, 127, 175];
if (select3.data.selected.length && select3.data.selected[0] == "2") {
  ggb1.instance.registerClickListener(clicks);
}

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  fib1.setVisible(false);
  submitButton1.updateData({ visible: false });
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
  select3.selectOption("0");
  submitButton1.updateData({
    align: "right",
    disabled: "true",
  });
});

button1.on("click", () => {
  button1.updateData({ disabled: true });
  text2.updateData({ visible: true });
});

select3.on("change", ({ selected }) => {
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

fib1.on("change", ({ values }) => {
  submitButton1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

submitButton1.on("click", () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
  submitButton1.updateData({ text: "Submitted", disabled: true });
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
  let target = name.replace("click", "vis");
  ggb1.instance.setVisible(target, !ggb1.instance.getVisible(target));
  ggb1.instance.evalCommand("SelectObjects()");
  fib1.setVisible(true);
  submitButton1.updateData({ visible: true });
  saveShading();
}

function saveShading() {
  const allPoints = ggb1.instance.getAllObjectNames("point");
  let ends = allPoints.filter((point) =>
    ggb1.instance.getCaption(point).includes("Endpoint")
  );
  let endPoints = ends.map((point) => ({
    x: ggb1.instance.getXcoord(point),
    open: ggb1.instance.getCaption(point).includes("open"),
  }));
  let allGGB = ggb1.instance.getAllObjectNames();
  let shaders = allGGB.filter(
    (obj) =>
      ggb1.instance.getCaption(obj).includes("shader") &&
      !obj.includes("click") &&
      ggb1.instance.getVisible(obj)
  );
  let regions = [];
  let shadeVecs = shaders.filter(
    (obj) => ggb1.instance.getObjectType(obj) == "vector"
  );
  if (shadeVecs.some((obj) => ggb1.instance.getXcoord(obj) < 0)) {
    regions.push("left");
  }
  if (shaders.some((obj) => ggb1.instance.getObjectType(obj) == "segment")) {
    regions.push("mid");
  }
  if (shadeVecs.some((obj) => ggb1.instance.getXcoord(obj) > 0)) {
    regions.push("right");
  }
  const shadings = { endPoints, regions };
  ggb1.updateData({ shadings });
}
