const {
  text3,
  ggb1,
  separator2,
  select1,
  feedback1,
  text1,
  separator1,
  text2,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-6bea0dbb5d23'; //slide2: chosen car
let id2 = 'slide-1d1f0ce2d833'; //slide3: weight 1

const id1PrevSelect1 = getPrevSelect(id1, 'select1');
const id2PrevInput1 = getPrevInput(id2, 'input1');

let showCarArray = [
  'showAudi',
  'showCamaro',
  'showChallenger',
  'showFerrari',
  'showMustang',
];

let wheelArray = ['tire1', 'tire2', 'tire3', 'tire4'];

let weightArray = [2.2, 2.6, 1.8, 1.6, 2.8];

let numOfRoundingDecimals = 5;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ disabled: true, align: 'right' });
    ggb1.updateData({ visible: false, init: true });
  }
}

text1.updateData({
  text:
    id2PrevInput1.data.hasData &&
    utils.math.evaluateLatex(id2PrevInput1.data.text).value !=
      round(weightArray[id1PrevSelect1.data.chosen], numOfRoundingDecimals)
      ? `You entered a total weight of $${id2PrevInput1.data.text}$ ounces for your car, which is incorrect. Go back to slide ${id2PrevInput1.data.slideNum} and check your work.`
      : `You entered a total weight of $${id2PrevInput1.data.text}$ ounces for your car.`,
});

text3.updateData({ text: id1PrevSelect1.data.flagText });

for (let i = 0, L = showCarArray.length; i < L; i++) {
  ggb1.instance.setValue(showCarArray[i], false);
}

if (id1PrevSelect1.data.hasData) {
  ggb1.instance.setValue(showCarArray[id1PrevSelect1.data.chosen], true);
  ggb1.updateData({ visible: true });
}

select1.on('change', ({ selected }) => {
  let currentSelected = parseInt(selected[0]);
  button1.updateData({ disabled: false, text: 'Submit' });
  for (let i = 0, L = wheelArray.length; i < L; i++) {
    ggb1.instance.setValue(wheelArray[i], false);
  }
  if (!Number.isNaN(currentSelected)) {
    ggb1.instance.setValue(wheelArray[currentSelected], true);
  }
});

button1.on('click', () => {
  button1.updateData({ disabled: true, text: 'Submitted' });
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

/*
{"compTotals":{"textbox":4,"geogebra":1,"separator":2,"select":1,"button":1},"stage":"Learn","lessonInfo":"6 M2 TC L12 - Fraction Operations in a Real-World Situation","teacherView":false,"layout":"two col"}
*/
