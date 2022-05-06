const { ggb1, fib1, button1, buttonGroup1, text2 } = components;

text2.updateData({ text: "" });

const bgSegStyle = {
  color: [117, 117, 117],
  thickness: 4,
};

const chosenSegStyle = {
  color: [218, 41, 28],
  thickness: 5,
};

const redSegs = ggb1.instance
  .getAllObjectNames("segment")
  .filter((seg) => seg.includes("seg"));

const segsByLength = redSegs.reduce((acc, seg) => {
  const length = getLength(seg);
  acc[length] = acc[length] || [];
  acc[length].push(seg);
  return acc;
}, {});

const prevWarning = getPrevGGB("slide-c0a693d12b04", "ggb1", {}).data
  .goBackString;

if (!getData("initialized")) {
  // set initial states
  button1.updateData({ align: "right", disabled: true });
  ggb1.updateData({ visible: false });
  buttonGroup1.updateData({ visible: false });
  ggb1.instance.setValue("timeZoom", 1);
  // save status
  saveData({ initialized: true });
}

utils.RTS.on("datachange", "slide-53edd5722d6d", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    text2.updateData({ text: prevWarning });
    return;
  }
  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first
  const myResponses = lastRegister.filter(({ info: { isSelf } }) => {
    return isSelf;
  });
  // gray out all string art segs
  redSegs.forEach((seg) => {
    ggb1.instance.setColor(seg, ...bgSegStyle.color);
    ggb1.instance.setLineThickness(seg, bgSegStyle.thickness);
    ggb1.instance.setFixed(seg, false, false);
  });
  myResponses.forEach(({ data: { chosenSeg2, chosenLength2, coords2 } }) => {
    if (!coords2) {
      return;
    }
    saveData({ chosenLength2 });
    ggb1.instance.setColor(chosenSeg2, ...chosenSegStyle.color);
    ggb1.instance.setLineThickness(chosenSeg2, chosenSegStyle.thickness);
    ggb1.instance.setCoords("Start", coords2[1], coords2[2]);
    ggb1.instance.setCoords("End", coords2[3], coords2[4]);
    ggb1.instance.setVisible("Start", true);
    ggb1.instance.setVisible("End", true);
    ggb1.updateData({ visible: true });
    // un-comment to bring back zoom utility:
    // buttonGroup1.updateData({ visible: true });
    ggb1.instance.evalCommand("SetConditionToShowObject(text4, timeZoom == 1)");
    ggb1.instance.evalCommand("SetConditionToShowObject(text5, timeZoom == 1)");
  });
  // no response with length 2?
  if (
    !myResponses.length ||
    !myResponses.some(({ data: { chosenLength2 } }) => !!chosenLength2)
  ) {
    text2.updateData({ text: prevWarning });
  }
});

button1.on("click", () => {
  const guessRaw = fib1.getInput(0).text;
  const guessObj = boundIt(guessRaw, 0, 20, 0, true);
  // only allow input if it's in-bounds
  if (guessObj.boundedVal !== guessObj.value) {
    fib1.updateInput(0, { text: guessObj.boundedVal });
  } else {
    button1.updateData({ disabled: true });
    const chosenLength2 = getData("chosenLength2");
    utils.RTS.sendData("slide-798ca5e70b9b", {
      guessRaw,
      guessVal: String(round(guessObj.boundedVal, 2)),
      chosenLength2,
    });
  }
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    disabled: !values.every(({ text }) => !!text),
  });
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time", 0);
});

buttonGroup1.on("click:1", zoomIn);

// buttonGroup1.on("click:2", resetZoom);

function resetZoom() {
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setAnimating("timeZoom", true);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setValue("timeZoom", 0);
}

function zoomIn() {
  resetZoom();
  ggb1.instance.startAnimation();
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

function boundIt(inputString, min, max, def = 0, moreInfo = false) {
  const { value, error } = utils.math.evaluateLatex(inputString);
  let boundedVal = value;
  if (error) {
    // what should the text do/say if students input "cabbage"?
    // whatever you go with here, make sure it's inside of your min and max!
    boundedVal = def;
  } else if (value < min) {
    boundedVal = min;
  } else if (value > max) {
    boundedVal = max;
  }
  // you can add things like floor or toFixed to validate only integers, or something similar
  // let flooredNum = Math.floor(value);
  // boundedVal = flooredNum;
  if (moreInfo) {
    return { boundedVal, value, error };
  }
  return boundedVal;
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

function getPrevGGB(slideID, compName = "ggb1", innerData, storageComp = "") {
  // find slide num of source
  const slideNum = ((slideId) => {
    if (
      typeof controls == "undefined" ||
      !controls.slidesNavigationData?.length
    ) {
      return "missing slide!";
    }
    let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
    return allIds.indexOf(slideId) + 1;
  })(slideID);
  // establish default in same data structure as original
  let defGGB = {
    data: {},
    innerData,
  };
  // get previous data
  let prevGGB = getFromSlide(slideID, compName, false) || false;
  // check previous data
  const hasData = !prevGGB
    ? false
    : !Object.keys(prevGGB).includes("innerData")
    ? false
    : !Object.keys(prevGGB.innerData).length
    ? false
    : true;
  let returnGGB = hasData ? prevGGB : defGGB;
  // fill in other useful data
  returnGGB.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
  returnGGB.data.hasData = hasData;
  returnGGB.data.slideNum = slideNum;
  // set text value
  returnGGB.data.flagText = hasData ? "" : returnGGB.data.goBackString;
  // record if there was already data so it doesn't wrongfully overwritten
  // maintain a record of whether we've had data
  const existingData = getData(`oldData${slideID + compName}`, storageComp);
  const hadData = hasData || existingData?.data?.hadData || false;
  if (hasData) {
    // if we have new data, (over)write to save it
    returnGGB.data.hadData = hadData;
    // create a dummy object to pass to updateData
    const newData = {};
    newData[`oldData${slideID + compName}`] = { ...returnGGB };
    // storageComp.updateData(newData);
    saveData(newData, storageComp);
  } else if (existingData?.data?.hasData) {
    // if we don't have new data but there is oldData, grab it
    returnGGB = { ...existingData };
  }
  return { ...returnGGB };
}
