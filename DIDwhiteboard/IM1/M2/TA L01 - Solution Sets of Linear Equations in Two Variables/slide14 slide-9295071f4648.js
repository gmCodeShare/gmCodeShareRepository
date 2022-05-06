const { ggb1, ggb2, fib1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

const prev64 = getFromSlide("slide-15596c4169b5", "ggb2.data.save64", "") || "";

if (prev64) {
  ggb1.instance.setBase64(prev64, configApp);
}

function configApp() {
  let allPenstrokes = ggb1.instance.getAllObjectNames("penstroke");
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let allLines = ggb1.instance.getAllObjectNames("line");
  for (let i = 0; i < allPoints.length; i++) {
    ggb1.instance.setFixed(allPoints[i], false, false);
  }
  for (let i = 0; i < allLines.length; i++) {
    ggb1.instance.setFixed(allLines[i], false, false);
  }
  for (let i = 0; i < allPenstrokes.length; i++) {
    ggb1.instance.setFixed(allPenstrokes[i], false, false);
  }
}

slide.on("firstload", () => {
  button1.updateData({
    align: "right",
    disabled: "true",
  });
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});

const sliderGGB = getPrevGGB("slide-cb14aaf8d320", "ggb1", { distance: 0 });

ggb2.instance.setCoords("DragPoint", sliderGGB.innerData["distance"], 0);

ggb1.instance.showToolBar(false);

utils.RTS.on("datachange", "slide-102b2e9edb49", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("pointList={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { distance, remaining } = data;
    ggb1.instance.evalCommand(
      "SetValue(pointList,Append(pointList,(" +
        distance +
        "," +
        remaining +
        ")))"
    );
  });
  ggb1.instance.setVisible("pointList", true);
});

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

// library

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
