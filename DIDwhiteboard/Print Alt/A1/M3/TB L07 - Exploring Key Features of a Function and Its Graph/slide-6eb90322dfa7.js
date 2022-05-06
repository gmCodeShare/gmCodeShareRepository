const {
  text1,
  text2,
  ggb1,
  separator4,
  button1,
  feedback,
  text3,
  ggb2,
  separator5,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
const points = ["C", "D", "E", "F", "G", "H", "I", "J"];

slide.on("firstload", () => {
  let toBeColored = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "CHalo",
    "DHalo",
    "EHalo",
    "FHalo",
    "GHalo",
    "HHalo",
    "IHalo",
    "JHalo",
    "shade1",
    "shade2",
    "shade3",
    "shade4",
  ];
  for (let i = 0, L = toBeColored.length; i < L; i++) {
    let current = toBeColored[i];
    ggb2.instance.setColor(current, 218, 41, 28);
    let type = ggb2.instance.getObjectType(current);
    if (["point", "ellipse"].includes(type)) {
      ggb1.instance.evalCommand(`SetConditionToShowObject(${current}, false)`);
      ggb2.instance.evalCommand(`SetConditionToShowObject(${current}, false)`);
    }
  }
  button1.updateData({ visible: false });
  button2.updateData({ visible: false });
  const bools = ["show3", "show2", "show1"];
  for (let i = 0, L = bools.length; i < L; i++) {
    ggb1.instance.setValue(bools[i], true);
    ggb2.instance.setValue(bools[i], true);
  }
});

const id1 = "slide-7d04d771b18a";
const id2 = "slide-fbf629b044b7";

const defGGB = {};
for (let i = 0, L = points.length; i < L; i++) {
  defGGB[points[i]] = [0, -1];
}

const id1GGB = getPrevGGB(id1, "ggb2", defGGB);
const id2GGB = getPrevGGB(id2, "ggb2", defGGB);

for (let i = 0, L = points.length; i < L; i++) {
  let current = points[i];
  ggb1.instance.setCoords(
    current,
    id1GGB.innerData[current][0],
    id1GGB.innerData[current][1]
  );
  ggb2.instance.setCoords(
    current,
    id2GGB.innerData[current][0],
    id2GGB.innerData[current][1]
  );
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

/*
{"compTotals":{"textbox":4,"geogebra":2,"separator":2,"button":2},"stage":"Learn","lessonInfo":"9 M3 TB L07 - Print Alt: Exploring Key Features of a Function and Its Graph","teacherView":true,"layout":"T layout"}
*/
