const { ggb1, text1, text2, buttonGroup1 } = components;

const bgSegStyle = {
  color: [117, 117, 117],
  thickness: 4,
};

const redSegStyle = {
  color: [218, 41, 28],
  thickness: 5,
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
  buttonGroup1.updateData({ visible: false });
  text2.updateData({ visible: false });
  ggb1.instance.setValue("showLabels", true);
  // save status
  saveData({ initialized: true });
}

// reset red segs every time in case students choose different segs earlier
redSegs.forEach((seg) => {
  ggb1.instance.setFixed(seg, true, true);
  ggb1.instance.setColor(seg, ...redSegStyle.color);
});

function grayOutEarlierSegs() {
  doneAnswers.forEach((answer) => {
    // for segs calculated earlier, gray them out
    const length = String(round(utils.math.evaluateLatex(answer).value, 2));
    const segArr = segsByLength[length];
    segArr.forEach((seg) => {
      ggb1.instance.setColor(seg, ...bgSegStyle.color);
      ggb1.instance.setLineThickness(seg, bgSegStyle.thickness);
      ggb1.instance.setFixed(seg, false, false);
    });
  });
}
grayOutEarlierSegs();

ggb1.instance.registerClientListener((a) => {
  switch (a.type) {
    case "select":
      const chosenSeg2 = a.target;
      const chosenLength2 = getLength(a.target);
      // use bones of animation from previous slides for selection state
      const defString = ggb1.instance.getDefinitionString(chosenSeg2);
      // match def strings like Segment (-4, 4), (-3, 6)
      const regEx = /Segment *\((-*\d), *(-*\d)\), *\((-*\d), *(-*\d)\)/;
      const coords2 = defString.match(regEx).map((strVal) => Number(strVal));
      utils.RTS.sendData("slide-53edd5722d6d", {
        chosenSeg2,
        chosenLength2,
        coords2,
      });
      text2.updateData({ text: "Checking your segment...", visible: true });
      buttonGroup1.updateData({ visible: false });
      buttonGroup1.updateSingleButton({ disabled: false }, 1);
      buttonGroup1.updateSingleButton({ disabled: false }, 2);
      ggb1.instance.setCoords("Start", coords2[1], coords2[2]);
      ggb1.instance.setCoords("End", coords2[3], coords2[4]);
      ggb1.instance.setValue("inputLength", Number(chosenLength2));
      ggb1.instance.setValue("time", 1);
      break;
  }
});

utils.RTS.on("datachange", "slide-53edd5722d6d", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  let myResponse = {
    chosenSeg1: "",
    chosenLength1: "",
    chosenSeg2: "",
    chosenLength2: "",
  };
  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first
  const classResponses = lastRegister.filter(({ data, info: { isSelf } }) => {
    if (isSelf) {
      // capture student's own response during filtering
      myResponse = { ...myResponse, ...data };
      // make a note of earlier segment choice to gray it out here
      if (data.chosenLength1) {
        doneAnswers.push(data.chosenLength1);
      }
    }
    return !isSelf;
  });
  grayOutEarlierSegs();
  const classSegsByLength = classResponses.reduce(
    (
      acc,
      { data: { chosenSeg1, chosenSeg2, chosenLength1, chosenLength2 } }
    ) => {
      const lengthKey = chosenLength1 || chosenLength2;
      const segVal = chosenSeg1 || chosenSeg2;
      acc[lengthKey] = acc[lengthKey] || [];
      acc[lengthKey].push(segVal);
      return acc;
    },
    {}
  );
  const numCompetitors =
    classSegsByLength[myResponse.chosenLength2]?.length || 0;
  text2.updateData({
    text: `${numCompetitors} of your classmates chose a segment that has the same length as the segment you chose.`,
  });
  if (!!myResponse.chosenLength2) {
    buttonGroup1.updateData({ visible: true });
  }
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue("time", 0);
});

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
