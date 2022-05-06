const { ggb1, text1, select1 } = components;

ggb1.instance.registerClickListener(clicks);
ggb1.instance.registerClientListener(clients);
ggb1.instance.registerRemoveListener((obj) => {
  const savedCaptions = getData("savedCaptions");
  // if the removed object is a point, it's because a line segment was deleted
  if (savedCaptions[obj]) {
    // expect caption to be fig4, 5, or 6
    const target = savedCaptions[obj] + "Text";
    countSegments(target);
  }
});

const neighbors = {
  H1: ["H2", "H20"],
  H2: ["H1", "H3"],
  H3: ["H2", "H4", "H22"],
  H4: ["H3", "H5"],
  H5: ["H4", "H6", "H24"],
  H6: ["H5", "H7"],
  H7: ["H6", "H8", "H26"],
  H8: ["H7", "H9"],
  H9: ["H8", "H10", "H28"],
  H10: ["H9", "H11"],
  H11: ["H10", "H12", "H30"],
  H12: ["H11", "H13"],
  H13: ["H12", "H14", "H32"],
  H14: ["H13", "H15"],
  H15: ["H14", "H16", "H34"],
  H16: ["H15", "H17"],
  H17: ["H16", "H18", "H36"],
  H18: ["H17", "H19"],
  H19: ["H18", "H38"],
  H20: ["H1", "H21"],
  H21: ["H20", "H22"],
  H22: ["H21", "H23", "H3"],
  H23: ["H22", "H24"],
  H24: ["H23", "H25", "H5"],
  H25: ["H24", "H26"],
  H26: ["H25", "H27", "H7"],
  H27: ["H26", "H28"],
  H28: ["H27", "H29", "H9"],
  H29: ["H28", "H30"],
  H30: ["H29", "H31", "H11"],
  H31: ["H30", "H32"],
  H32: ["H31", "H33", "H13"],
  H33: ["H32", "H34"],
  H34: ["H33", "H35", "H15"],
  H35: ["H34", "H36"],
  H36: ["H35", "H37", "H17"],
  H37: ["H36", "H38"],
  H38: ["H37", "H19"],
  H39: ["H40", "H58"],
  H40: ["H39", "H41"],
  H41: ["H40", "H42", "H60"],
  H42: ["H41", "H43"],
  H43: ["H42", "H44", "H62"],
  H44: ["H43", "H45"],
  H45: ["H44", "H46", "H64"],
  H46: ["H45", "H47"],
  H47: ["H46", "H48", "H66"],
  H48: ["H47", "H49"],
  H49: ["H48", "H50", "H68"],
  H50: ["H49", "H51"],
  H51: ["H50", "H52", "H70"],
  H52: ["H51", "H53"],
  H53: ["H52", "H54", "H72"],
  H54: ["H53", "H55"],
  H55: ["H54", "H56", "H74"],
  H56: ["H55", "H57"],
  H57: ["H56", "H76"],
  H58: ["H39", "H59"],
  H59: ["H58", "H60"],
  H60: ["H59", "H61", "H41"],
  H61: ["H60", "H62"],
  H62: ["H61", "H63", "H43"],
  H63: ["H62", "H64"],
  H64: ["H63", "H65", "H45"],
  H65: ["H64", "H66"],
  H66: ["H65", "H67", "H47"],
  H67: ["H66", "H68"],
  H68: ["H67", "H69", "H49"],
  H69: ["H68", "H70"],
  H70: ["H69", "H71", "H51"],
  H71: ["H70", "H72"],
  H72: ["H71", "H73", "H53"],
  H73: ["H72", "H74"],
  H74: ["H73", "H75", "H55"],
  H75: ["H74", "H76"],
  H76: ["H75", "H57"],
  H77: ["H78", "H96"],
  H78: ["H77", "H79"],
  H79: ["H78", "H80", "H98"],
  H80: ["H79", "H81"],
  H81: ["H80", "H82", "H100"],
  H82: ["H81", "H83"],
  H83: ["H82", "H84", "H102"],
  H84: ["H83", "H85"],
  H85: ["H84", "H86", "H104"],
  H86: ["H85", "H87"],
  H87: ["H86", "H88", "H106"],
  H88: ["H87", "H89"],
  H89: ["H88", "H90", "H108"],
  H90: ["H89", "H91"],
  H91: ["H90", "H92", "H110"],
  H92: ["H91", "H93"],
  H93: ["H92", "H94", "H112"],
  H94: ["H93", "H95"],
  H95: ["H94", "H114"],
  H96: ["H77", "H97"],
  H97: ["H96", "H98"],
  H98: ["H97", "H99", "H79"],
  H99: ["H98", "H100"],
  H100: ["H99", "H101", "H81"],
  H101: ["H100", "H102"],
  H102: ["H101", "H103", "H83"],
  H103: ["H102", "H104"],
  H104: ["H103", "H105", "H85"],
  H105: ["H104", "H106"],
  H106: ["H105", "H107", "H87"],
  H107: ["H106", "H108"],
  H108: ["H107", "H109", "H89"],
  H109: ["H108", "H110"],
  H110: ["H109", "H111", "H91"],
  H111: ["H110", "H112"],
  H112: ["H111", "H113", "H93"],
  H113: ["H112", "H114"],
  H114: ["H95", "H113"],
};

const visPoints = ggb1.instance
  .getAllObjectNames("point")
  .filter(function (point) {
    return ggb1.instance.getVisible(point);
  });

const startDrawingCaption = "Press space to begin creating a line segment";
const createSegCaption =
  "Press space to complete the line segment and begin creating a new one.";
const finishDrawingCaption = "Press space to stop creating line segments.";

if (!getData("initialized")) {
  // set initial states
  select1.selectOption("0");
  resetDrawing(startDrawingCaption);
  // save status
  saveData({ initialized: true });
}

function resetDrawing(caption, clickTarget = "") {
  // reset captions and saved click name
  visPoints.forEach((point) => {
    let addendum = "";
    if (caption === startDrawingCaption) {
      // add info about figure number to caption
      addendum = ggb1.instance.getValue(`IsInRegion(${point}, fig4Zone)`)
        ? " in figure 4."
        : ggb1.instance.getValue(`IsInRegion(${point}, fig5Zone)`)
        ? " in figure 5."
        : ggb1.instance.getValue(`IsInRegion(${point}, fig6Zone)`)
        ? " in figure 6."
        : ".";
    }
    const newCaption = caption + addendum;
    ggb1.instance.setCaption(point, newCaption);
  });
  saveData({ clicked: clickTarget });
}

select1.on("change", ({ selected }) => {
  // don't falsely trigger double click point behavior
  resetDrawing(startDrawingCaption);
  const studentSegs = ggb1.instance
    .getAllObjectNames("segment")
    .filter((seg) => ggb1.instance.getColor(seg) === "#823F98");
  switch (selected[0]) {
    case "0":
      studentSegs.forEach((seg) => {
        ggb1.instance.setFixed(seg, true, false);
      });
      // set all drawing points selectable
      highlightPoints([...visPoints]);
      break;
    case "1":
      studentSegs.forEach((seg) => {
        ggb1.instance.setFixed(seg, true, true);
      });
      // set all drawing points non-selectable
      highlightPoints();
  }
});

function createGGBobjects(a) {
  const newSeg = ggb1.instance.evalCommandGetLabels(
    `Segment(${getData("clicked")}, ${a})`
  );
  ggb1.instance.setColor(newSeg, 130, 63, 152);
  ggb1.instance.setFixed(newSeg, true, false); // changed with delete utility
  ggb1.instance.setCaption(newSeg, "Press space to delete the line segment.");
  const newMid = ggb1.instance.evalCommandGetLabels(`Midpoint(${newSeg})`);
  ggb1.instance.setVisible(newMid, false);
  let figNum = 0;
  switch (1) {
    case ggb1.instance.getValue(`IsInRegion(${newMid}, fig4Zone)`):
      ggb1.instance.setCaption(newMid, "fig4");
      figNum = 4;
      break;
    case ggb1.instance.getValue(`IsInRegion(${newMid}, fig5Zone)`):
      ggb1.instance.setCaption(newMid, "fig5");
      figNum = 5;
      break;
    case ggb1.instance.getValue(`IsInRegion(${newMid}, fig6Zone)`):
      ggb1.instance.setCaption(newMid, "fig6");
      figNum = 6;
      break;
  }
  const target = `fig${figNum}Text`;
  countSegments(target);
  // patch: remove listener cannot read captions of deleted objects, so save them
  const savedCaptions = getData("savedCaptions") || {};
  savedCaptions[newMid] = ggb1.instance.getCaption(newMid);
  saveData({ savedCaptions });
}

function countSegments(textToRead) {
  const midPoints = ggb1.instance
    .getAllObjectNames("point")
    .filter((point) => ggb1.instance.getCaption(point).includes("fig"));
  const total = midPoints.reduce(
    (acc, point) => {
      const caption = ggb1.instance.getCaption(point);
      return {
        ...acc,
        [caption]: (acc[caption] || 0) + 1,
      };
    },
    { fig4: 0, fig5: 0, fig6: 0 }
  );
  ggb1.instance.setValue("fig4Segs", total.fig4);
  ggb1.instance.setValue("fig5Segs", total.fig5);
  ggb1.instance.setValue("fig6Segs", total.fig6);
  ggb1.instance.evalCommand(`ReadText(${textToRead})`);
}

function clicks(a) {
  if (ggb1.instance.getObjectType(a) === "point") {
    let showNeighbors = true;
    if (getData("clicked")) {
      if (getData("clicked") !== a) {
        // segment creation happening here
        createGGBobjects(a);
        saveData({ clicked: a });
        saveSegs();
        // clicked point gets finishDrawing, others get createSeg
        visPoints.forEach((point) => {
          if (point !== a) {
            ggb1.instance.setCaption(point, createSegCaption);
          } else {
            ggb1.instance.setCaption(point, finishDrawingCaption);
          }
        });
      } else {
        // if you clicked the same point again
        highlightPoints([...visPoints]);
        showNeighbors = false;
        resetDrawing(startDrawingCaption);
      }
    } else {
      saveData({ clicked: a });
      // clicked point gets finishDrawing, others get createSeg
      visPoints.forEach((point) => {
        if (point !== a) {
          ggb1.instance.setCaption(point, createSegCaption);
        } else {
          ggb1.instance.setCaption(point, finishDrawingCaption);
        }
      });
    }
    // only do this if something isn't clicked twice consecutively:
    if (showNeighbors) {
      const highlighters = [...neighbors[a]];
      highlighters.push(a);
      highlightPoints(highlighters);
    }
  } else if (ggb1.instance.getObjectType(a) === "segment") {
    ggb1.instance.deleteObject(a);
    saveSegs();
  }
}

function clients(a) {
  switch (a.type) {
    case "mouseDown":
      if (!a.hits.length && select1.data.selected.includes("0")) {
        saveData({ clicked: "" });
        highlightPoints([...visPoints]);
        resetDrawing(startDrawingCaption);
      }
      break;
  }
}

function highlightPoints(pointArr = []) {
  for (let i = 0, L = visPoints.length; i < L; i++) {
    const current = visPoints[i];
    const selectable = pointArr.includes(current);
    const color = selectable ? [0, 127, 175] : [160, 160, 160];
    const size = selectable ? 5 : 4;
    ggb1.instance.setPointSize(current, size);
    ggb1.instance.setColor(current, ...color);
    ggb1.instance.setFixed(current, true, selectable);
  }
}

function saveSegs() {
  const allSegs = ggb1.instance.getAllObjectNames("segment");
  const segStrings = allSegs.map((seg) => ggb1.instance.getCommandString(seg));
  saveData({ segStrings }, "text1");
}

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

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
