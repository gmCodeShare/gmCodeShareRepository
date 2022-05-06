const {
  text4,
  ggb1,
  image1,
  ggb2,
  feedback1,
  text1,
  text2,
  input1,
  text3,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

let id1 = 'slide-6bea0dbb5d23'; //slide2: chosen car

const id1PrevSelect1 = getPrevSelect(id1, 'select1');

let origWeightNumerator = 17;
let cutWeightNumeratorArray = [6, 4, 8, 9, 3];
let denom = 5;
let weightArray = [2.2, 2.6, 1.8, 1.6, 2.8];

let showCarArray = [
  'showAudi',
  'showCamaro',
  'showChallenger',
  'showFerrari',
  'showMustang',
];

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    button1.updateData({ align: 'right' });
    ggb2.updateData({ visible: false });
    ggb1.updateData({ visible: false });
    ggb1.instance.setVisible('picCenterMeter', false);
    ggb1.instance.setVisible("picNeedle'", false);
    ggb1.instance.setVisible('picScale', false);
    ggb1.instance.setVisible('picCheck', false);
    ggb1.instance.setVisible('picXMark', false);
    ggb1.instance.setVisible('woodBlock', false);
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

let weightToCut = id1PrevSelect1.data.hasData
  ? `$\\frac{${cutWeightNumeratorArray[id1PrevSelect1.data.chosen]}}{${denom}}$`
  : id1PrevSelect1.data.flagText;

text1.updateData({
  text: `You cut off ${weightToCut} ounces to make your car.`,
});

for (let i = 0, L = showCarArray.length; i < L; i++) {
  ggb1.instance.setValue(showCarArray[i], false);
  ggb2.instance.setValue(showCarArray[i], false);
}

if (id1PrevSelect1.data.hasData) {
  ggb1.instance.setValue(showCarArray[id1PrevSelect1.data.chosen], true);
  ggb2.instance.setValue(showCarArray[id1PrevSelect1.data.chosen], true);
  ggb1.instance.setValue('answer', weightArray[id1PrevSelect1.data.chosen]);
  ggb2.instance.setValue('answer', weightArray[id1PrevSelect1.data.chosen]);
}

button1.on('click', () => {
  if (id1PrevSelect1.data.hasData) {
    let result = utils.math.evaluateLatex(input1.data.text);
    if (result.value < 0 || result.error) {
      return;
    }
    button1.updateData({ text: 'Submitted', disabled: true });
    image1.updateData({ visible: false });
    text4.updateData({
      text: `Wood block: $${Math.floor(
        origWeightNumerator / denom
      )}\\frac{${parseInt(origWeightNumerator % denom)}}{${denom}}$ ounces`,
    });
    ggb1.updateData({ visible: true });
    ggb2.updateData({ visible: false });
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setVisible('picCenterMeter', true);
    ggb1.instance.setVisible("picNeedle'", true);
    ggb1.instance.setVisible('picScale', true);
    ggb1.instance.setVisible('picCheck', false);
    ggb1.instance.setVisible('picXMark', false);
    button1.updateData({ disabled: true, text: 'Submitted' });
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
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

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
  prevSelect.data.flagText = prevSelect.hasData
    ? ''
    : prevSelect.data.goBackString;
  return { ...prevSelect };
}

/*
{"compTotals":{"textbox":5,"geogebra":2,"uploaded-image":1,"input":1,"button":1},"stage":"Learn","lessonInfo":"6 M2 TC L12 - Fraction Operations in a Real-World Situation","teacherView":false,"layout":"two col"}
*/
