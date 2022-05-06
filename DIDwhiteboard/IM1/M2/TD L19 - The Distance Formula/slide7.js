const { ggb1, select1, text2 } = components;

const bgSegStyle = {
  color: [117, 117, 117],
  thickness: 4,
};

const selectableStyle = {
  color: [0, 0, 0],
  thickness: 5,
};

const selectedStyle = {
  color: [130, 63, 152],
  thickness: 6,
};

const matchingStyle = {
  color: [218, 41, 28],
  thickness: 6,
};

const doneAnswers = ["\\sqrt{89}", "\\sqrt{13}", "\\sqrt{26}"];

const redSegs = ggb1.instance
  .getAllObjectNames("segment")
  .filter((seg) => seg.includes("seg"));

const segsByLength = redSegs.reduce((acc, seg) => {
  const length = getLength(seg);
  acc[length] = acc[length] || [];
  acc[length].push(seg);
  return acc;
}, {});

if (!getData("initialized")) {
  // set initial states
  select1.selectOption("0");
  text2.updateData({ visible: false });
  showSelection();
  // save status
  saveData({ initialized: true });
}

select1.on("change", ({ selected }) => {
  const showNumeric = selected.includes("0");
  ggb1.instance.setValue("showNumeric", showNumeric);
  ggb1.instance.setValue("showSymbolic", !showNumeric);
});

ggb1.instance.registerClientListener((a) => {
  switch (a.type) {
    case "select":
      showSelection(a.target);
      const selectedSoFar = getData("selectedSoFar") || {};
      selectedSoFar[a.target] = true;
      saveData({ selectedSoFar });
      if (Object.keys(selectedSoFar).length >= 3) {
        text2.updateData({ visible: true });
      }
      break;
  }
});

function showSelection(target) {
  const selectableSegs = ["seg5", "seg7", "seg14"];
  const symMap = ["showP", "showR", "showQ"];
  symMap.forEach((ggbBool, index) => {
    const makeVisible = selectableSegs.indexOf(target) === index;
    ggb1.instance.setValue(ggbBool, makeVisible);
  });
  const len = getLength(target);
  redSegs.forEach((seg) => {
    let color = [...bgSegStyle.color];
    let thickness = bgSegStyle.thickness;
    if (seg === target) {
      color = [...selectedStyle.color];
      thickness = selectedStyle.thickness;
    } else if (selectableSegs.includes(seg)) {
      color = [...selectableStyle.color];
      thickness = selectableStyle.thickness;
    } else if (segsByLength[len]?.includes(seg)) {
      color = [...matchingStyle.color];
      thickness = matchingStyle.thickness;
    }
    ggb1.instance.setColor(seg, ...color);
    ggb1.instance.setLineThickness(seg, thickness);
  });
}

function getLength(seg) {
  return String(round(ggb1.instance.getValue(seg), 2));
}

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

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

// use this function as is
function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ data: { chosenLength1, chosenLength2 }, info: { device } }) => {
      // check which chosenLength is contained in the passed response
      let addendum = "";
      if (chosenLength1) {
        addendum = "length1";
      } else if (chosenLength2) {
        addendum = "length2";
      }
      const record = device + addendum;
      const deviceHasPreviousAnswer = devices.has(record); // Has device appeared before?
      devices.add(record); // Mark device as appeared
      return !deviceHasPreviousAnswer;
    });
}
