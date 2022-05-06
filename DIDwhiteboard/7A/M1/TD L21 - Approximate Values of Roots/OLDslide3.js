const { ggb1, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);

const id1 = 'slide-cfc84df559e9';

slide.on('firstload', () => {
  ggb1.instance.setValue('showTri', true);
  ggb1.instance.setPointCapture(1, 0);
  ggb1.instance.setPointStyle('SelfAggPoint', 10);
  ggb1.instance.setFixed('SelfAggPoint', false, false);
  // ggb1.instance.setValue('showLaunch', true);
  // ggb1.instance.setValue('step', Math.log10(2));
  const lightGray = [160, 160, 160];
  ggb1.instance.setColor('h', ...lightGray);
  ggb1.instance.setColor('i', ...lightGray);
  ggb1.instance.setColor('angleA', ...lightGray);
  ggb1.instance.setColor('text9', ...lightGray);
  ggb1.instance.setColor('text10', ...lightGray);
  // ggb1.instance.setColor("j", 0, 127, 175);
  // ggb1.instance.setLineStyle("j", 0);
});

const id1PrevGGB1 = getPrevGGB(id1, 'ggb1', { SelfAggPointXVal: 0 });

console.log(id1PrevGGB1.data.hasData);

const SelfAggPointXVal = id1PrevGGB1.data.hasData ? id1PrevGGB1.innerData['SelfAggPoint'][0] : 0;

console.log(SelfAggPointXVal);

ggb1.instance.setCoords('SelfAggPoint', SelfAggPointXVal, 0);

function getPrevGGB(slideID, compName = 'ggb1', innerData, storageComp = '') {
  // find slide num of source
  const slideNum = ((slideId) => {
    if (typeof controls == 'undefined' || !controls.slidesNavigationData?.length) {
      return 'missing slide!';
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
  const hasData = !prevGGB ? false : !Object.keys(prevGGB).includes('innerData') ? false : !Object.keys(prevGGB.innerData).length ? false : true;
  let returnGGB = hasData ? prevGGB : defGGB;
  // fill in other useful data
  returnGGB.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
  returnGGB.data.hasData = hasData;
  returnGGB.data.slideNum = slideNum;
  // set text value
  returnGGB.data.flagText = hasData ? '' : returnGGB.data.goBackString;
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

function saveData(dataObj = {}, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataObj !== 'object') {
    console.error('saveData error: Parameters should be an object and a string!');
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataName !== 'string') {
    console.error('getData error: Parameters should both be strings!');
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}
