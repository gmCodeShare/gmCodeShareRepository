const { ggb1, text1, text2, fib1, fib2, buttonGroup1, buttonGroup2 } = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    text2.updateData({ visible: false });
    fib2.setVisible(false);
    buttonGroup1.updateSingleButton(
      {
        align: 'right',
        disabled: 'true',
      },
      1
    );
    buttonGroup2.updateSingleButton(
      {
        align: 'right',
        disabled: 'true',
      },
      1
    );
    buttonGroup2.updateData({ visible: false });
    ggb1.instance.setVisible('u', false);
    ggb1.instance.setVisible('text1', false);
    // buttonGroup2.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

const id1 = 'slide-c0e0ff476d80';
const id2 = 'slide-4ada0b608c58';

const id1PrevGGB1 = getPrevGGB(id1, 'ggb1', { currentBreaths: 0 });
const id2PrevGGB1 = getPrevGGB(id2, 'ggb1', { currentBreaths: 0 });

let id1Pumps = typeof id1PrevGGB1.innerData['clickCount'] == 'undefined' ? 0 : id1PrevGGB1.innerData['clickCount'];
console.log(id1Pumps);
let id2Pumps = typeof id2PrevGGB1.innerData['clickCount'] == 'undefined' ? 0 : id2PrevGGB1.innerData['clickCount'];
console.log(id2Pumps);

let prevTotal = round(3.6 * Math.max(id1Pumps, id2Pumps) * 0.001, 5).toExponential();

console.log(prevTotal);

let baseAndExponent = prevTotal.match(/(.+)e\+?(.+)/);
console.log(baseAndExponent);

text1.updateData({ text: `You had $${id1Pumps == 0 && id2Pumps == 0 ? `$\\color{A0A0A0}\\text{\[enter a number on slide ${id1PrevGGB1.data.slideNum}\]}$` : Math.max(id1Pumps, id2Pumps)}$ pumps in your fastest attempt, which pumped $${id1Pumps == 0 && id2Pumps == 0 ? `$\\color{A0A0A0}\\text{\[enter a number on slide ${id1PrevGGB1.data.slideNum}\]}$` : `$${baseAndExponent[1]} \\times 10^{${baseAndExponent[2]}}$`}$ cubic meters of air in $10$ seconds.\n\nHow much air is that per $1$ second?` });

fib1.on('change', ({ values }) => {
  console.log('typed in fib1');
  buttonGroup1.updateSingleButton(
    {
      text: 'Submit',
      disabled: !values.every(({ text }) => !!text),
    },
    1
  );
});

fib2.on('change', ({ values }) => {
  console.log('typed in fib2');
  buttonGroup2.updateSingleButton(
    {
      text: 'Submit',
      disabled: !values.every(({ text }) => !!text),
    },
    1
  );
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton(
    {
      text: 'Submitted',
      disabled: true,
    },
    1
  );
  text2.updateData({ text: 'How much air is that per $1$ minute?', visible: true });
  fib2.setVisible(true);
  buttonGroup2.updateData({ visible: true });
});

buttonGroup2.on('click:1', () => {
  buttonGroup2.updateSingleButton(
    {
      text: 'Submitted',
      disabled: true,
    },
    1
  );
});

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

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
