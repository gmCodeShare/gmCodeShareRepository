const { ggb1, select1 } = components;

ggb1.instance.setErrorDialogsActive(false);

const id1 = 'slide-c6fdb0296a2d';
const id2 = 'slide-dbebbe5b879a';
const id3 = 'slide-9bb53a7c7e7f';
const id4 = 'slide-322f3f196102';
const id5 = 'slide-6bdb51d923fa';

const id1PrevGGB1 = getPrevGGB(id1, 'ggb1', {
  prob1: 0,
  prob2: 0,
  prob3: 0,
  prob4: 0,
  prob5: 0,
  prob6: 0,
  prob7: 0,
  prob8: 0,
  prob9: 0,
  prob10: 0,
});

const id2PrevGGB1 = getPrevGGB(id2, 'ggb1', {
  prob1: 0,
  prob2: 0,
  prob3: 0,
  prob4: 0,
  prob5: 0,
  prob6: 0,
  prob7: 0,
  prob8: 0,
  prob9: 0,
  prob10: 0,
});

const id3PrevGGB1 = getPrevGGB(id3, 'ggb1', {
  prob1: 0,
  prob2: 0,
  prob3: 0,
  prob4: 0,
  prob5: 0,
  prob6: 0,
  prob7: 0,
  prob8: 0,
  prob9: 0,
  prob10: 0,
});

const id4PrevGGB1 = getPrevGGB(id4, 'ggb1', {
  prob1: 0,
  prob2: 0,
  prob3: 0,
  prob4: 0,
  prob5: 0,
  prob6: 0,
  prob7: 0,
  prob8: 0,
  prob9: 0,
  prob10: 0,
});

const id5PrevGGB1 = getPrevGGB(id5, 'ggb1', {
  prob1: 0,
  prob2: 0,
  prob3: 0,
  prob4: 0,
  prob5: 0,
  prob6: 0,
  prob7: 0,
  prob8: 0,
  prob9: 0,
  prob10: 0,
});

for (let i = 1; i < 11; i++) {
  ggb1.instance.setValue(`yP${i}`, id1PrevGGB1.innerData[`prob${i}`]);
  ggb1.instance.setValue(`yP${i + 10}`, id2PrevGGB1.innerData[`prob${i}`]);
  ggb1.instance.setValue(`yP${i + 20}`, id3PrevGGB1.innerData[`prob${i}`]);
  ggb1.instance.setValue(`yP${i + 30}`, id4PrevGGB1.innerData[`prob${i}`]);
  ggb1.instance.setValue(`yP${i + 40}`, id5PrevGGB1.innerData[`prob${i}`]);
}

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setValue('showPart1', true);
  } else {
    ggb1.instance.setValue('showPart1', false);
  }
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setValue('showPart2', true);
  } else {
    ggb1.instance.setValue('showPart2', false);
  }
  if (select1.data.selected.includes('2')) {
    ggb1.instance.setValue('showPart3', true);
  } else {
    ggb1.instance.setValue('showPart3', false);
  }
  if (select1.data.selected.includes('3')) {
    ggb1.instance.setValue('showPart4', true);
  } else {
    ggb1.instance.setValue('showPart4', false);
  }
  if (select1.data.selected.includes('4')) {
    ggb1.instance.setValue('showPart5', true);
  } else {
    ggb1.instance.setValue('showPart5', false);
  }
  if (select1.data.selected.includes('5')) {
    ggb1.instance.setValue('showPart1', true);
    ggb1.instance.setValue('showPart2', true);
    ggb1.instance.setValue('showPart3', true);
    ggb1.instance.setValue('showPart4', true);
    ggb1.instance.setValue('showPart5', true);
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
