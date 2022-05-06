const {
  ggb1,
  cc_submit_95d8d4e86293_button1: button1,
  select1,
  media1,
} = components;

(() => {
  if (!getData("init")) {
    ggb1.instance.setValue("show2", false);
    ggb1.instance.setValue("show1", false);
    ggb1.instance.setValue("show4", true);
    select1.selectOption("0");
    saveData({ init: true });
  }
})();

media1.on("ready", ({ data: vid }) => {
  vid.time(7);
  vid.bind("end", controls.next);
  if (getData("submitted")) {
    vid.play();
  }
});

button1.on("click", () => {
  select1.selectOption("1");
  saveData({ submitted: true });
});

select1.on("change", ({ selected }) => {
  ggb1.updateData({ visible: selected.includes("0") });
  media1.updateData({ visible: selected.includes("1") });
});

const id13 = "slide-0700f96216a1";

const id13GGB = getPrevGGB(id13, "ggb1", {
  TL: [...ggb1.innerData["TL"]],
  BL: [...ggb1.innerData["BL"]],
  BR: [...ggb1.innerData["BR"]],
});

ggb1.updateInnerData({
  TL: [...id13GGB.innerData["TL"]],
  BL: [...id13GGB.innerData["BL"]],
  BR: [...id13GGB.innerData["BR"]],
});

ggb1.instance.setVisible("TL", false);
ggb1.instance.setVisible("BL", false);
ggb1.instance.setVisible("BR", false);

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
