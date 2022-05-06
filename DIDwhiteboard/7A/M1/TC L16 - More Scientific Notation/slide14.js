const { ggb1, input1, button1, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let ID1 = 'slide-e3a7f2befeaa';
let resolved = true;

function getSlideNum(slideId) {
  if (typeof controls == 'undefined' || !controls.slidesNavigationData?.length) {
    return 'missing slide!';
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

slide.on('firstload', () => {
  // ggb1.instance.setValue("showVolume", true);
  button1.updateData({ align: 'right' });
  ggb1.instance.setValue('showOld', true);
  const fillDec = 0.75;
  ggb1.instance.setFilling('blueBreaths', fillDec);
  ggb1.instance.setFilling('blueVol', fillDec);
});

let breaths = getFromSlide(ID1, 'input1.data.text', false) || false;

if (!breaths) {
  breaths = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(ID1)}\]}$`;
}

text1.updateData({
  text: `Your "life breath balloon" contains those $${breaths}$ breaths you have taken so far. \n\n If a breath's volume is about $3.6\\times10^{-3}$ cubic meters, what is the approximate volume of your life breath balloon? Write your answer in scientific notation.`,
});

const prevGGB = getFromSlide(ID1, 'ggb1', false) || false;
if (prevGGB.innerData && prevGGB.innerData['balloonInput']) {
  ggb1.instance.setValue('oldInput', prevGGB.innerData['balloonInput']);
} else {
  ggb1.instance.setValue('oldInput', 0);
}

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
    ggb1.instance.stopAnimation();
    ggb1.instance.setValue('time2', 0);
    // boundIt updates input text, which resolves after the button click script runs
    // and calls this autorun; thus, we have to force a loophole
    if (!resolved) {
      resolved = true;
      ggb1.instance.setAnimating('time2', true);
      ggb1.instance.startAnimation();
      button1.updateData({ disabled: true });
    }
  }
});

button1.on('click', () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time2', 0);
  button1.updateData({ disabled: true });
  ggb1.instance.setValue('balloonInput', boundIt(input1, 1, 10 ** 15));
  ggb1.instance.setAnimating('time2', true);
  ggb1.instance.startAnimation();
  resolved = false;
});

function boundIt(inputComp, min, max) {
  const result = utils.math.evaluateLatex(inputComp.data.text);
  if (result.error) {
    inputComp.updateData({ last: `${makeExp(min)}`, text: `${makeExp(min)}` }); // what should the text do/say if students input "cabbage"?
    return min; // whatever you go with here, make sure it's inside of your min and max!
  } else if (result.value < min) {
    inputComp.updateData({ last: `${makeExp(min)}`, text: `${makeExp(min)}` });
    return min;
  } else if (result.value > max) {
    inputComp.updateData({ last: `${makeExp(max)}`, text: `${makeExp(max)}` });
    return max;
  }
  // you can add things like floor or toFixed to validate only integers, or something similar
  // let flooredNum = Math.floor(result.value);
  inputComp.updateData({
    last: `${makeExp(result.value)}`,
    text: `${makeExp(result.value)}`,
  });
  // return flooredNum;
  return result.value;
}

function makeExp(num) {
  return num
    .toExponential()
    .replaceAll('+', '')
    .replace('e', `\\times 10^{`)
    .concat('}');
}
