const { text1, table1, button1, ggb1 } = components;

button1.updateData({ align: 'right' });

const id1 = 'slide-76c60e09ea26';

const id1PrevGGB1 = getPrevGGB(id1, 'ggb1', {
  q1Val: 0,
  q2Val: 0,
  q3Val: 0,
  q4Val: 0,
  q5Val: 0,
  q6Val: 0,
  q7Val: 0,
  q8Val: 0,
  q9Val: 0,
  q10Val: 0,
});

for (let i = 1; i < 11; i++) {
  ggb1.instance.setVisible(`C${i}`, true);
  if (id1PrevGGB1.innerData[`q${i}Val`] == 0) {
    ggb1.instance.setColor(`q${i}`, 255, 255, 255);
    ggb1.instance.setTextValue(`q${i}Text`, 'white');
  } else if (id1PrevGGB1.innerData[`q${i}Val`] == 1) {
    ggb1.instance.setColor(`q${i}`, 0, 127, 175);
    ggb1.instance.setTextValue(`q${i}Text`, 'blue');
  } else if (id1PrevGGB1.innerData[`q${i}Val`] == 2) {
    ggb1.instance.setColor(`q${i}`, 218, 41, 28);
    ggb1.instance.setTextValue(`q${i}Text`, 'red');
  } else if (id1PrevGGB1.innerData[`q${i}Val`] == 3) {
    ggb1.instance.setColor(`q${i}`, 0, 129, 57);
    ggb1.instance.setTextValue(`q${i}Text`, 'green');
  } else if (id1PrevGGB1.innerData[`q${i}Val`] == 4) {
    ggb1.instance.setColor(`q${i}`, 130, 63, 152);
    ggb1.instance.setTextValue(`q${i}Text`, 'purple');
  } else if (id1PrevGGB1.innerData[`q${i}Val`] == 5) {
    ggb1.instance.setColor(`q${i}`, 237, 178, 32);
    ggb1.instance.setTextValue(`q${i}Text`, 'yellow');
  }
}

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
autorun(() => {
  let entries = [
    table1.getCell(0, 1).value,
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
    table1.getCell(3, 1).value,
    table1.getCell(4, 1).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      align: 'right',
      text: 'Submit',
      disabled: !entries.some((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});
button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
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
  returnGGB.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
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

/*
{"compTotals":{"bynder-image":1,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"7 M6 TA L03 - Outcomes of Chance Experiments","teacherView":false,"layout":"two col"}
*/
