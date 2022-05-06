const { ggb1, separator1, feedback1, select1, text1 } = components;

slide.on('firstload', () => {
  ggb1.instance.setVisible('tranVec', true);
  ggb1.instance.setAnimating('timeMove', false);
  ggb1.instance.setValue('timeMove', 1);
  select1.selectOption('1');
});
const id1 = 'slide-845df5789f0c';

const id1PrevGGB1 = getPrevGGB(id1, 'ggb1', { slide2x: 0 });

if (id1PrevGGB1.innerData) {
  slide2x = id1PrevGGB1.innerData['xVal'];
  slide2y = id1PrevGGB1.innerData['yVal'];
  ggb1.instance.evalCommand(`DragPoint=(${slide2x},${slide2y})`);
}

autorun(() => {
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setGridVisible(true);
    ggb1.instance.setAxesVisible(true, true);
  } else {
    ggb1.instance.setGridVisible(false);
    ggb1.instance.setAxesVisible(false, false);
  }
});

function getPrevGGB(slideID, compName = 'ggb1', innerData, storageComp = '') {
  // find slide num of source
  const slideNum = ((slideId) => {
    if (
      typeof controls == 'undefined' ||
      !controls.slidesNavigationData?.length
    ) {
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
  const hasData = !prevGGB
    ? false
    : !Object.keys(prevGGB).includes('innerData')
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
    console.error(
      'saveData error: Parameters should be an object and a string!'
    );
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

/*
{"compTotals":{"geogebra":1,"separator":1,"textbox":2,"select":1},"stage":"Launch","lessonInfo":"8 M2 TA L04 - PA Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
