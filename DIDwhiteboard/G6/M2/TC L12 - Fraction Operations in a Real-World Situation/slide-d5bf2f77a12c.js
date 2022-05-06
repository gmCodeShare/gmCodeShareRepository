const {
  text5,
  text6,
  text7,
  text8,
  ggb1,
  feedback1,
  text1,
  text2,
  text3,
  input1,
  text4,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-6bea0dbb5d23'; //slide2: chosen car
//let id2 = 'slide-1d1f0ce2d833'; //slide3: weight 1
let id3 = 'slide-937af2ed8277'; //slide4: chosen wheels
//let id4 = 'slide-6a5068b93e2c'; //slide5: weight 2
let id5 = 'slide-c4837b1407e0'; //slide6: chosen paint
//let id6 = 'slide-18c4e65bae89'; //slide7: weight 3
let id7 = 'slide-19f9221f8ad6'; //slide8: chosen decal, png
let id8 = 'slide-991744aa5025'; //slide9: number of decals, weight 4
let id9 = 'slide-5398724b0f0c'; //slide10: number of weights, weight 5
let id10 = 'slide-134950e4f72a'; //slide11: weightLocationVariable
let id11 = 'slide-d5bf2f77a12c'; //slide12: for RTS

const id1PrevSelect1 = getPrevSelect(id1, 'select1');
//const id2PrevInput1 = getPrevInput(id2, 'input1');
const id3PrevSelect1 = getPrevSelect(id3, 'select1');
//const id4PrevInput1 = getPrevInput(id4, 'input2');
const id5PrevSelect1 = getPrevSelect(id5, 'select1');
//const id6PrevInput1 = getPrevInput(id6, 'input2');
const id7PrevSelect1 = getPrevSelect(id7, 'select1');
const id7PrevGGB1 = getPrevGGB(id7, 'ggb1', {}, text1);
const id8PrevGGB1 = getPrevGGB(id8, 'ggb2', { sliderVal: 1 }, text1);
const id8PrevInput1 = getPrevInput(id8, 'input1');
const id9PrevGGB1 = getPrevGGB(id9, 'ggb2', { sliderVal: 1 }, text1);
const id9PrevInput1 = getPrevInput(id9, 'input1');
const id10PrevGGB1 = getPrevGGB(
  id10,
  'ggb1',
  {
    weightLocationVariable: 2.1,
  },
  text1
);

let showCarArray = [
  'showAudi',
  'showCamaro',
  'showChallenger',
  'showFerrari',
  'showMustang',
];

let wheelArray = ['tire1', 'tire2', 'tire3', 'tire4'];

let paintArray = ['Blue', 'Green', 'Red', 'Purple', 'Yellow'];

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

let carScore = [3, 2, 4, 5, 1]; //score1
let tireScore = [4, 2, 1, 3]; //score2

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ align: 'right' });
    ggb1.instance.setVisible('T', false);
    ggb1.instance.setVisible('Weight', false);
    ggb1.instance.setVisible('picCenterMeter', false);
    ggb1.instance.setVisible("picNeedle'", false);
    ggb1.instance.setVisible('centerCircle', false);
    ggb1.updateData({ init: true });
  }
}

for (let i = 0, L = showCarArray.length; i < L; i++) {
  ggb1.instance.setValue(showCarArray[i], false);
}

if (id1PrevSelect1.data.hasData) {
  ggb1.instance.setValue(showCarArray[id1PrevSelect1.data.chosen], true);
  ggb1.instance.setValue('score1', carScore[id1PrevSelect1.data.chosen]);
}

for (let i = 0, L = wheelArray.length; i < L; i++) {
  ggb1.instance.setValue(wheelArray[i], false);
}

if (id3PrevSelect1.data.hasData) {
  ggb1.instance.setValue(wheelArray[id3PrevSelect1.data.chosen], true);
  ggb1.instance.setValue('score2', tireScore[id3PrevSelect1.data.chosen]);
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

ggb1.instance.evalCommand(
  `weightLocationVariable=(${round(
    id10PrevGGB1.innerData['weightLocationVariable'],
    1
  )})`
);

let result;
if (id9PrevInput1.data.hasData) {
  result = utils.math.evaluateLatex(id9PrevInput1.data.text);
  if (result.value < 0 || result.error) {
    return;
  }
  ggb1.instance.setValue('weightTotal', result.value);
}

//no weight entered on slide 10
if (!id9PrevInput1.data.hasData) {
  text2.updateData({
    text: '',
  });
  text3.updateData({ visible: false });
  text4.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
}
//missing car data
else if (
  !id1PrevSelect1.data.hasData ||
  !id3PrevSelect1.data.hasData ||
  !id5PrevSelect1.data.hasData ||
  !id7PrevSelect1.data.hasData
) {
  text2.updateData({
    text: '',
  });
  text3.updateData({ visible: false });
  text4.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
}
//weight entered on slide 10 is incorrect
else if (
  utils.math.evaluateLatex(id9PrevInput1.data.text).value !=
  round(
    weightArray[id1PrevSelect1.data.chosen] +
      4 * weightSingleWheel +
      2 * weightSingleAxle +
      weightPaint +
      id8PrevGGB1.innerData['sliderVal'] * weightDecal +
      id9PrevGGB1.innerData['sliderVal'] * 0.5,
    numOfRoundingDecimals
  )
) {
  text2.updateData({
    text: ``,
  });
  text3.updateData({ visible: false });
  text4.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
} //weight is correct but is over 6 ounce limit
else if (utils.math.evaluateLatex(id9PrevInput1.data.text).value > 6) {
  text2.updateData({
    text: 'Your car is too heavy and is not eligible to race. Try removing some decals or weights to reduce the weight of your car.',
  });
  text3.updateData({ visible: false });
  text4.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
}
// everything is correct
else {
  text2.updateData({
    text: `On a trial run, your car went $10\\frac{1}{2}$ feet in $\\frac{${ggb1.instance
      .getValue('numerator')
      .toFixed(0)}}{1,000}$ seconds.  
    `,
  });
  text3.updateData({ visible: true });
  text4.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
}

text1.updateData({
  text:
    id9PrevInput1.data.hasData &&
    utils.math.evaluateLatex(id9PrevInput1.data.text).value !=
      round(
        weightArray[id1PrevSelect1.data.chosen] +
          4 * weightSingleWheel +
          2 * weightSingleAxle +
          weightPaint +
          id8PrevGGB1.innerData['sliderVal'] * weightDecal +
          id9PrevGGB1.innerData['sliderVal'] * 0.5,
        numOfRoundingDecimals
      )
      ? `You entered a total weight of $${id9PrevInput1.data.text}$ ounces for your car, which is incorrect. Go back to slide ${id9PrevInput1.data.slideNum} and check your work.`
      : `You entered a total weight of $${id9PrevInput1.data.text}$ ounces for your car.`,
});

text5.updateData({ text: id1PrevSelect1.data.flagText });
text6.updateData({ text: id3PrevSelect1.data.flagText });
text7.updateData({ text: id5PrevSelect1.data.flagText });
text8.updateData({ text: id7PrevSelect1.data.flagText });

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
  const result = utils.math.evaluateLatex(input1.data.text);
  if (result.value < 0 || result.error) {
    return;
  }
  ggb1.instance.evalLaTeX(`ounces= ${result.value.toFixed(3)}`);
  ggb1.instance.setVisible('picCenterMeter', true);
  ggb1.instance.setVisible("picNeedle'", true);
  ggb1.instance.setVisible('centerCircle', true);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setAnimating('time2', true);
  ggb1.instance.startAnimation();
  utils.RTS.sendData(id11, {
    estimate: result.value.toFixed(2),
  });
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

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
    const hadData = hasData || storageComp.data.oldData?.hadData || false;
    if (hasData) {
      // if we have new data, (over)write to save it
      returnGGB.data.hadData = hadData;
      storageComp.updateData({ oldData: { ...returnGGB } });
    } else if (storageComp.data.oldData?.hasData) {
      // if we don't have new data but there is oldData, grab it
      returnGGB = { ...storageComp.data.oldData };
    }
  }
  return { ...returnGGB };
}

/*
{"compTotals":{"textbox":9,"geogebra":1,"input":1,"button":1},"stage":"Learn","lessonInfo":"6 M2 TC L12 - Fraction Operations in a Real-World Situation","teacherView":false,"layout":"two col"}
*/
