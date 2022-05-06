const {
  text5,
  text6,
  text7,
  text8,
  text9,
  image1,
  ggb1,
  feedback1,
  text1,
  text2,
  ggb2,
  button1,
  separator2,
  text3,
  input1,
  text4,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.registerObjectUpdateListener('sliderVal', unsubmit);

let id1 = 'slide-6bea0dbb5d23'; //slide2: chosen car
//let id2 = 'slide-1d1f0ce2d833'; //slide3: weight 1
let id3 = 'slide-937af2ed8277'; //slide4: chosen wheels
//let id4 = 'slide-6a5068b93e2c'; //slide5: weight 2
let id5 = 'slide-c4837b1407e0'; //slide6: chosen paint
let id6 = 'slide-18c4e65bae89'; //slide7: weight 3
let id7 = 'slide-19f9221f8ad6'; //slide8: chosen decal, png

const id1PrevSelect1 = getPrevSelect(id1, 'select1');
//const id2PrevInput1 = getPrevInput(id2, 'input1');
const id3PrevSelect1 = getPrevSelect(id3, 'select1');
//const id4PrevInput1 = getPrevInput(id4, 'input2');
const id5PrevSelect1 = getPrevSelect(id5, 'select1');
const id6PrevInput1 = getPrevInput(id6, 'input2');
const id7PrevSelect1 = getPrevSelect(id7, 'select1');
const id7PrevGGB1 = getPrevGGB(id7, 'ggb1', {}, text1);

let showCarArray = [
  'showAudi',
  'showCamaro',
  'showChallenger',
  'showFerrari',
  'showMustang',
];

let wheelArray = ['tire1', 'tire2', 'tire3', 'tire4'];

let paintArray = ['Blue', 'Green', 'Purple', 'Red', 'Yellow'];

let decalArray = [
  'showUnicorn',
  'showFlags',
  'showFlame',
  'showHeart',
  'showLight',
  'showStars',
];

let weightArray = [2.2, 2.6, 1.8, 1.6, 2.8];

let weightSingleWheel = 0.2;
let weightSingleAxle = 0.02;
let weightPaint = 0.42;
let weightDecal = 0.04;

let numOfRoundingDecimals = 5;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    button1.updateData({ align: 'right' });
    button2.updateData({ visible: false, align: 'right' });
    text3.updateData({ visible: false });
    text4.updateData({ visible: false });
    input1.updateData({ visible: false });
    ggb1.updateData({ visible: false });
    ggb1.instance.setVisible('text1', false);
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

text1.updateData({
  text:
    id6PrevInput1.data.hasData &&
    utils.math.evaluateLatex(id6PrevInput1.data.text).value !=
      round(
        weightArray[id1PrevSelect1.data.chosen] +
          4 * weightSingleWheel +
          2 * weightSingleAxle +
          weightPaint,
        numOfRoundingDecimals
      )
      ? `You entered a total weight of $${id6PrevInput1.data.text}$ ounces for your car, which is incorrect. Go back to slide ${id6PrevInput1.data.slideNum} and check your work.`
      : `You entered a total weight of $${id6PrevInput1.data.text}$ ounces for your car.`,
});

text6.updateData({ text: id1PrevSelect1.data.flagText });
text7.updateData({ text: id3PrevSelect1.data.flagText });
text8.updateData({ text: id5PrevSelect1.data.flagText });
text9.updateData({ text: id7PrevSelect1.data.flagText });

for (let i = 0, L = showCarArray.length; i < L; i++) {
  ggb1.instance.setValue(showCarArray[i], false);
}

if (id1PrevSelect1.data.hasData) {
  ggb1.instance.setValue(showCarArray[id1PrevSelect1.data.chosen], true);
}

for (let i = 0, L = wheelArray.length; i < L; i++) {
  ggb1.instance.setValue(wheelArray[i], false);
}

if (id3PrevSelect1.data.hasData) {
  ggb1.instance.setValue(wheelArray[id3PrevSelect1.data.chosen], true);
}

for (let i = 0, L = paintArray.length; i < L; i++) {
  ggb1.instance.setValue(`show${paintArray[i]}Paint`, false);
}

if (id5PrevSelect1.data.hasData) {
  ggb1.instance.setValue(
    `show${paintArray[id5PrevSelect1.data.chosen]}Paint`,
    true
  );
}

for (let i = 0, L = decalArray.length; i < L; i++) {
  ggb1.instance.setValue(decalArray[i], false);
}

if (id7PrevSelect1.data.hasData) {
  ggb1.instance.setValue(decalArray[id7PrevSelect1.data.chosen], true);
}

if (id7PrevGGB1.data.hasData) {
  image1.updateData({
    src: `data:image/png;base64,${id7PrevGGB1.data.image}`,
  });
}

for (let i = 0, L1 = showCarArray.length; i < L1; i++) {
  for (let j = 0, L2 = paintArray.length; j < L2; j++) {
    ggb1.instance.setValue(`${showCarArray[i]}${paintArray[j]}`, false);
  }
}

if (id1PrevSelect1.data.hasData && id5PrevSelect1.data.hasData) {
  ggb1.instance.setValue(showCarArray[id1PrevSelect1.data.chosen], true);
  ggb1.instance.setValue(
    `${showCarArray[id1PrevSelect1.data.chosen]}${
      paintArray[id5PrevSelect1.data.chosen]
    }`,
    true
  );
}

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
  text3.updateData({ visible: true });
  text4.updateData({ visible: true });

  input1.updateData({ visible: true });
  button2.updateData({ visible: true });
});

button2.on('click', () => {
  if (
    id1PrevSelect1.data.hasData &&
    id3PrevSelect1.data.hasData &&
    id5PrevSelect1.data.hasData &&
    id7PrevSelect1.data.hasData &&
    id6PrevInput1.data.hasData
  ) {
    button2.updateData({ text: 'Submitted', disabled: true });
    ggb1.instance.setValue(
      'answer',
      round(
        weightArray[id1PrevSelect1.data.chosen] +
          4 * weightSingleWheel +
          2 * weightSingleAxle +
          weightPaint +
          ggb2.instance.getValue('sliderVal') * weightDecal,
        numOfRoundingDecimals
      )
    );
    ggb1.updateData({ visible: true });
    image1.updateData({ visible: false });
    const result = utils.math.evaluateLatex(input1.data.text);
    if (result.value < 0 || result.error) {
      return;
    }
    ggb1.instance.setVisible('picCenterMeter', true);
    ggb1.instance.setVisible("picNeedle'", true);
    ggb1.instance.setVisible('picScale', true);
    ggb1.instance.setVisible('picCheck', false);
    ggb1.instance.setVisible('picXMark', false);
    ggb1.instance.evalLaTeX(`ounces= ${input1.data.text}`);
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button2.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

function unsubmit() {
  button1.updateData({ text: 'Submit', disabled: false });
}

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function getPrevSelect(slideID, compName = 'select1') {
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
  let defSelect = {
    data: {
      selected: [''],
    },
  };
  // get previous data
  let prevSelect = getFromSlide(slideID, compName, defSelect) || defSelect;
  // fill in other useful data
  prevSelect.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
  prevSelect.data.hasData = !!prevSelect.data.selected.length;
  prevSelect.data.chosen =
    prevSelect.data.type == 'single'
      ? parseInt(prevSelect.data.selected[0])
      : prevSelect.data.selected.map((stringNum) => parseInt(stringNum));
  prevSelect.data.chosenSingle = parseInt(prevSelect.data.selected[0]);
  prevSelect.data.chosenMult = prevSelect.data.selected.map((stringNum) =>
    parseInt(stringNum)
  );
  prevSelect.data.slideNum = slideNum;
  // set text values
  prevSelect.data.flagText = prevSelect.data.hasData
    ? ''
    : prevSelect.data.goBackString;
  return { ...prevSelect };
}

function getPrevInput(slideID, compName = 'input1') {
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
  let defInput = {
    data: {
      text: '',
    },
  };
  // get previous data
  let prevInput = getFromSlide(slideID, compName, defInput) || defInput;
  // fill in other useful data
  prevInput.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
  prevInput.data.hasData = !!prevInput.data.text;
  prevInput.data.slideNum = slideNum;
  // set text values
  prevInput.data.text = prevInput.data.hasData
    ? prevInput.data.text
    : prevInput.data.goBackString;
  prevInput.data.flagText = prevInput.data.hasData
    ? ''
    : prevInput.data.goBackString;
  return { ...prevInput };
}

function getPrevGGB(
  slideID,
  compName = 'ggb1',
  innerData,
  storageComp = { data: false }
) {
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
  // make sure there is a storageComp and that it has a data property
  if (storageComp.data) {
    // maintain a record of whether we've had data
    const hadData = hasData || storageComp.data.oldData?.data?.hadData || false;
    if (hasData) {
      // if we have new data, (over)write to save it
      returnGGB.data.hadData = hadData;
      storageComp.updateData({ oldData: { ...returnGGB } });
    } else if (storageComp.data.oldData?.data?.hasData) {
      // if we don't have new data but there is oldData, grab it
      returnGGB = { ...storageComp.data.oldData };
    }
  }
  return { ...returnGGB };
}

/*
{"compTotals":{"textbox":10,"bynder-image":1,"geogebra":2,"button":2,"separator":1,"input":1},"stage":"Learn","lessonInfo":"6 M2 TC L12 - Fraction Operations in a Real-World Situation","teacherView":false,"layout":"two col"}
*/
