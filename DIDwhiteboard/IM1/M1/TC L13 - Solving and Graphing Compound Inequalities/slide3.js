const {
  ggb1,
  text1,
  cc_sharewithclass_8138d7916c09_textbox1: shareText1,
  cc_sharewithclass_8138d7916c09_input1: shareInput1,
  cc_sharewithclass_8138d7916c09_button1: shareButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  ggb1.instance.setVisible("visText", true);
  ggb1.instance.setTextValue("baseText", "-5<2x+1<4");
});

function selectEvent(name) {
  if (ggb1.instance.getObjectType(name) != "point") {
    return;
  }
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

function dragEndEvent(name) {
  if (ggb1.instance.getObjectType(name) != "point") {
    return;
  }
  if (ggb1.instance.getValue(`IsInRegion(${name}, bin)`)) {
    // back to the bin? delete that
    ggb1.instance.deleteObject(name);
  } else if (
    !ggb1.instance.getCaption(name).includes("Endpoint") &&
    !ggb1.instance.getCaption(name).includes("Midpoint")
  ) {
    ggb1.instance.setCaption(name, ggb1.instance.getCaption(name) + "Endpoint");
  }
  fixEnds();
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let ends = allPoints.filter((point) =>
    ggb1.instance.getCaption(point).includes("Endpoint")
  );
  let endsRecord = ends.map((point) => ({
    x: ggb1.instance.getXcoord(point),
    open: ggb1.instance.getCaption(point).includes("open"),
  }));
  ggb1.updateData({ endsRecord });
}

function fixEnds() {
  ggb1.instance.evalCommand("SelectObjects()");
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let ends = allPoints.filter((point) =>
    ggb1.instance.getCaption(point).includes("Endpoint")
  );
  if (ends.length > 1) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
  let origs = allPoints.filter(
    (point) =>
      ggb1.instance.getValue(`IsInRegion(${point}, bin)`) &&
      !!ggb1.instance.getCaption(point)
  );
  for (let i = 0, L = origs.length; i < L; i++) {
    ggb1.instance.setFixed(origs[i], false, ends.length < 2);
    ggb1.instance.setVisible(origs[i], true);
  }
}

ggb1.instance.registerClientListener((a) => {
  switch (a.type) {
    case "select":
      selectEvent(a.target);
      break;
    case "dragEnd":
      dragEndEvent(a.target);
      break;
  }
});
