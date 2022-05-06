const {
  ggb1,
  ggb2,
  separator2,
  select1,
  feedback,
  cc_submit_511746200864_textbox1: submitText1,
  cc_submit_511746200864_input1: submitInput1,
  cc_submit_511746200864_button1: submitButton1,
  separator1,
  cc_sharewithclass_8138d7916c09_textbox1: shareText1,
  cc_sharewithclass_8138d7916c09_input1: shareInput1,
  cc_sharewithclass_8138d7916c09_button1: shareButton1,
  cc_sharewithclass_8138d7916c09_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  let allPoints = ggb1.instance.getAllObjectNames("point");
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb1.instance.setVisible(allPoints[i], false);
  }
  ggb1.instance.setVisible("bin", false);
  ggb1.instance.setVisible("visText", true);
  ggb1.instance.setTextValue("baseText", "-5<2x+1<4");
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  ggb2.updateData({ visible: false });
  select1.setVisible(false);
  ggb2.instance.setValue("speed", 1.2);
});

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  if (!select1.data.selected.length) {
    select1.selectOption("1");
    select1.setVisible(true);
  }
});

select1.on("change", ({ selected }) => {
  ggb1.updateData({ visible: !selected.includes("1") });
  ggb2.updateData({ visible: selected.includes("1") });
});

(() => {
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let ends = allPoints.filter((point) =>
    ggb1.instance.getCaption(point).includes("Endpoint")
  );
  for (let i = 0, L = ends.length; i < L; i++) {
    ggb1.instance.deleteObject(ends[i]);
  }
  let prevEnds =
    getFromSlide("slide-aa4bbc984e49", "ggb1.data.endsRecord", []) || [];
  /* [{
    x: ggb1.instance.getXcoord(point),
    open: ggb1.instance.getCaption(point).includes("open"),
  }] */
  if (!prevEnds.length) {
    return;
  }
  for (let i = 0, L = prevEnds.length; i < L; i++) {
    const { x, open } = prevEnds[i];
    let home = open ? "Home'" : "Home";
    // let newPoint = ggb1.instance.evalCommandGetLabels(`(${x}, 0)`);
    let newPoint = ggb1.instance.evalCommandGetLabels(
      `Point(Join({anchors, {${home}}}))`
    );
    ggb1.instance.setCoords(newPoint, x, 0);
    ggb1.instance.setCaption(newPoint, "Endpoint");
    if (open) {
      ggb1.instance.setPointSize(newPoint, 6);
      ggb1.instance.setPointStyle(newPoint, 2);
    } else {
      ggb1.instance.setPointSize(newPoint, 7);
    }
  }
  fixEnds();
})();

utils.RTS.on("datachange", "slide-4d0ec089bf0b", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first

  let allPoints = ggb1.instance.getAllObjectNames("point");
  let aggs = allPoints.filter((point) =>
    ggb1.instance.getCaption(point).includes("aggregate")
  );
  for (let i = 0, L = aggs.length; i < L; i++) {
    ggb1.instance.deleteObject(aggs[i]);
  }

  // think of this forEach as "for each student's input, do the following"
  lastRegister.forEach(({ data, info }) => {
    /* xVals: [...ggb1.data.plotted], */
    const { xVals } = data;
    for (let i = 0, L = xVals.length; i < L; i++) {
      let newPoint = ggb1.instance.evalCommandGetLabels(`(${xVals[i]}, 0)`);
      ggb1.instance.setFixed(newPoint, false, false);
      ggb1.instance.setPointSize(newPoint, 5);
      ggb1.instance.setCaption(newPoint, "aggregate");
    }
  });
});

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

// use this function as is
function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared
      return !deviceHasPreviousAnswer;
    });
}

/*
{"compTotals":{"geogebra":2,"separator":2,"select":1,"textbox":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M1 TC L15 - Solving and Graphing Compound Inequalities","teacherView":false,"layout":"two col"}
*/
