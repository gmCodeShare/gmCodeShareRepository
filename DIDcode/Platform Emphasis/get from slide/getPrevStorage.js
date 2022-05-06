// get stored data from previous slides
// USES GET AND SAVE DATA ON BOTH SLIDES - BE SURE TO COPY THEM AS WELL!

// requires some setup on the previous slide
// this example saves the XML string of a GGB:
const { ggb1 } = components;

ggb1.instance.registerStoreUndoListener(() => {
  saveData({ saveXML: ggb1.instance.getXML() }, "ggb1");
});

// then, on the receiving slide:
const { ggb1 } = components;

const id1 = "id-numbersNumbers";

const id1GGB1Storage = getPrevStorage(id1, "ggb1");

if (id1GGB1Storage.saveXML) {
  ggb1.instance.setXML(id1GGB1Storage.saveXML);
}

function getPrevStorage(slideID, compName) {
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
  // get previous data
  let prevComp = getFromSlide(slideID, compName, {}) || {};
  // check previous data
  const hasData = !prevComp
    ? false
    : !Object.keys(prevComp).includes("storage")
    ? false
    : !Object.keys(prevComp.storage).length
    ? false
    : true;
  let returnStorage = hasData ? prevComp.storage : {};
  // fill in other useful data
  returnStorage.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
  returnStorage.hasData = hasData;
  returnStorage.slideNum = slideNum;
  // set text value
  returnStorage.flagText = hasData ? "" : returnStorage.goBackString;
  // record if there was already data so it doesn't wrongfully overwritten
  // maintain a record of whether we've had data
  const existingData = getData(`oldData${slideID + compName}`);
  const hadData = hasData || existingData?.hadData || false;
  if (hasData) {
    // if we have new data, (over)write to save it
    returnStorage.hadData = hadData;
    // create a dummy object to pass to updateData
    const newData = {};
    newData[`oldData${slideID + compName}`] = { ...returnStorage };
    saveData(newData);
  } else if (existingData?.hasData) {
    // if we don't have new data but there is oldData, grab it
    returnStorage = { ...existingData };
  }
  return { ...returnStorage };
}
