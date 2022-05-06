const {
  ggb1,
  separator1,
  feedback1,
  text1,
  input1,
  text2,
  button1,
  Separator3,
  cc_submit_ee8f1712422b_textbox1: submitText1,
  cc_submit_ee8f1712422b_input1: submitInput1,
  cc_submit_ee8f1712422b_button1: submitButton1,
  Separator2,
  cc_sharewithclass_7cf05bb428cb_textbox1: shareText1,
  cc_sharewithclass_7cf05bb428cb_input1: shareInput1,
  cc_sharewithclass_7cf05bb428cb_button1: shareButton1,
  cc_sharewithclass_7cf05bb428cb_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.updateInnerData({ speed: 12 });
    button1.updateData({ align: 'right' });
    submitText1.updateData({ visible: false });
    submitInput1.updateData({ visible: false });
    submitButton1.updateData({ visible: false });
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

function setEmUp() {
  let newTarget =
    (ggb1.instance.getValue('numer') * ggb1.instance.getValue('bucketHeight')) /
    ggb1.instance.getValue('denom');
  ggb1.instance.stopAnimation();
  ggb1.updateInnerData({
    numPoured: 0,
    timeTip: 0,
    timeDrop: 0,
    time: 0,
    timeOver: 0,
    oldLevel: 0,
    newLevel: newTarget,
  });
  ggb1.instance.setAnimating('timeTip', false);
  ggb1.instance.setAnimating('timeDrop', false);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setAnimating('timeOver', false);
  ggb1.instance.setVisible('visWater', false);
}

button1.on('click', () => {
  button1.updateData({ disabled: true });
  setEmUp();
  if (input1.data.text) {
    let inputMath = utils.math.evaluateLatex(input1.data.text);
    if (inputMath.value) {
      let actualPours = Math.ceil(inputMath.value);
      ggb1.updateInnerData({ numPours: actualPours });
      input1.updateData({ text: `${actualPours}` });
      ggb1.instance.setAnimating('timeTip', true);
      ggb1.instance.startAnimation();
      submitText1.updateData({ visible: true });
      submitInput1.updateData({ visible: true });
      submitButton1.updateData({ visible: true });
    }
  }
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

autorun(() => {
  // transition from tipping to starting pour
  if (ggb1.innerData['timeTip'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('timeTip', false);
    ggb1.instance.setAnimating('timeDrop', true);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  // pour to fill
  if (ggb1.innerData['timeDrop'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setVisible('visWater', true);
    ggb1.instance.setAnimating('timeDrop', false);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  // watch for overflow
  if (ggb1.innerData['overflow'] && ggb1.instance.isAnimationRunning()) {
    ggb1.instance.setAnimating('timeOver', true);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  // finish filling, ready next pour?
  if (ggb1.innerData['time'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.updateInnerData({ numPoured: ggb1.innerData['numPoured'] + 1 });
    if (
      ggb1.innerData['numPoured'] < ggb1.innerData['numPours'] &&
      !ggb1.innerData['timeOver']
    ) {
      let newTarget =
        ((ggb1.instance.getValue('numPoured') + 1) *
          ggb1.instance.getValue('numer') *
          ggb1.instance.getValue('bucketHeight')) /
        ggb1.instance.getValue('denom');
      ggb1.updateInnerData({
        timeTip: 0,
        timeDrop: 0,
        time: 0,
        timeOver: 0,
        oldLevel: ggb1.innerData['newLevel'],
        newLevel: newTarget,
      });
      ggb1.instance.setAnimating('timeTip', true);
      ggb1.instance.setAnimating('timeDrop', false);
      ggb1.instance.setAnimating('time', false);
      ggb1.instance.setAnimating('timeOver', false);
      ggb1.instance.startAnimation();
    }
  }
});

autorun(() => {
  // watch for GGB updates
  let consider = input1.data.text;
  setEmUp();
  let liters = ggb1.innerData['numLit'];
  let num = ggb1.innerData['numer'];
  let den = ggb1.innerData['denom'];
  boundIt(liters, 'numLit', 1, 4);
  boundIt(num, 'numer', 1, 10);
  if (ggb1.instance.getValue('parsedDenom')) {
    let newDenom = boundIt(den, 'denom', 1, 20);
    ggb1.instance.setTextValue('denomText', `${newDenom}`);
  }
});

autorun(() => {
  // watch for text input
  button1.updateData({
    disabled: !input1.data.text || !ggb1.innerData['denomText'],
  });
});

function boundIt(inp, ggbName, min, max) {
  if (inp < min || !Number.isInteger(inp)) {
    ggb1.instance.setValue(ggbName, min);
    return min;
  } else if (inp > max) {
    ggb1.instance.setValue(ggbName, max);
    return max;
  }
  return inp;
}

/*
{"compTotals":{"geogebra":1,"separator":3,"textbox":3,"input":1,"button":1,"submit":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M2 TB L06 - Dividing a Whole Number by a Fraction","teacherView":false,"layout":"two col"}
*/
