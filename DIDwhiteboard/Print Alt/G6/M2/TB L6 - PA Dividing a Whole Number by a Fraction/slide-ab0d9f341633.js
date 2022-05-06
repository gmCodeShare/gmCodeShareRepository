const { ggb1, separator3, feedback, text1, input1, text2, buttonGroup1 } =
  components;

components.feedback.updateData({ visible: false });
components.text2.updateData({ align: 'right' });

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.updateInnerData({
      fracControl: 0,
      numControl: 0,
      numer: 3,
      denom: 4,
      numLit: 4,
      speed: 12,
    });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

//ggb1.updateInnerData({fracControl: 0, numControl: 0});

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

buttonGroup1.on('click:2', () => {
  setEmUp();
  if (input1.data.text) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  setEmUp();
  if (input1.data.text) {
    let inputMath = utils.math.evaluateLatex(input1.data.text);
    if (inputMath.value) {
      let actualPours = Math.ceil(inputMath.value);
      ggb1.updateInnerData({ numPours: actualPours });
      input1.updateData({ text: `${actualPours}` });
      ggb1.instance.setAnimating('timeTip', true);
      ggb1.instance.startAnimation();
    }
  }
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
    } else {
      buttonGroup1.updateSingleButton({ disabled: false }, 1);
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
  boundIt(den, 'denom', 1, 20);
});

autorun(() => {
  // watch for text input
  buttonGroup1.updateSingleButton({ disabled: !input1.data.text }, 1);
});

function boundIt(inp, ggbName, min, max) {
  if (inp < min || !Number.isInteger(inp)) {
    ggb1.instance.setValue(ggbName, min);
  } else if (inp > max) {
    ggb1.instance.setValue(ggbName, max);
  }
}

/*
{"compTotals":{"geogebra":1,"separator":1,"textbox":3,"input":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M2 TB L06 - PA Dividing a Whole Number by a Fraction","teacherView":false,"layout":"two col"}
*/
