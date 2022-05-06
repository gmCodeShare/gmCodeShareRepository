const {
  ggb1,
  text2,
  cc_submit_c3bed359e4dc_textbox1: text3,
  cc_submit_c3bed359e4dc_input1: input1,
  cc_submit_c3bed359e4dc_button1: button1,
} = components;

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  text3.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

// get random points from previous

if (ggb1.instance.exists("randPointsList")) {
  ggb1.instance.deleteObject("randPointsList");
}

const id1GGB = getPrevGGB("slide-1fae6b2740ae", "ggb1", {
  randPointsString: "randPointsList = {}",
});

ggb1.instance.evalCommand(id1GGB.innerData["randPointsString"]);
ggb1.instance.setVisible("randPointsList", true);
const color = [0, 127, 175];
ggb1.instance.setColor("randPointsList", ...color);
ggb1.instance.setFixed("randPointsList", false, false);
ggb1.instance.setPointSize("randPointsList", 4);

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerStoreUndoListener(getDoodles);
getDoodles();
function getDoodles() {
  text2.updateData({ visible: true });
  text3.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
}

button1.on("click", () => {
  ggb1.instance.evalLaTeX(`dummyObjectForThisCode: ${input1.data.text}`);
  ggb1.instance.setVisible("dummyObjectForThisCode", false);
  if (ggb1.instance.getObjectType("dummyObjectForThisCode") == "line") {
    ggb1.instance.evalLaTeX(`eq1: ${input1.data.text}`);
    ggb1.instance.setVisible("eq1", true);
    //ggb1.instance.setFixed("g", false, false);
  }
  ggb1.instance.deleteObject("dummyObjectForThisCode");
});

utils.RTS.on("datachange", "slide-1a0fd993032e", (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("pointList={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { a, b, c, d, e, f, total, total2, total3 } = data;
    if (total < 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + a + "," + b + ")))"
      );
    }
    if (total2 < 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + c + "," + d + ")))"
      );
    }
    if (total3 < 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + e + "," + f + ")))"
      );
    }
  });
});

// Retrieving information
utils.RTS.on("datachange", "slide-8e74cc3defa1", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("pointList2={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { g, h, i, j, k, l, total4, total5, total6 } = data;
    if (total4 < 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + g + "," + h + ")))"
      );
    }
    if (total5 < 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + i + "," + j + ")))"
      );
    }
    if (total6 < 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + k + "," + l + ")))"
      );
    }
  });
});

// library

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
  returnGGB.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
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
