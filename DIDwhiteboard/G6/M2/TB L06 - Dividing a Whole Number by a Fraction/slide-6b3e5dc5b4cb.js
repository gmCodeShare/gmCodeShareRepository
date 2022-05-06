const { ggb1, feedback1, text1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateInnerData({
      fracControl: 1,
      numControl: 0,
      numer: 3,
      denom: 4,
      numLit: 4,
      speed: 12,
    });
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
    numPours: 6,
  });
  ggb1.instance.setAnimating('timeTip', false);
  ggb1.instance.setAnimating('timeDrop', false);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setAnimating('timeOver', false);
  ggb1.instance.setVisible('visWater', false);
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  setEmUp();
  ggb1.instance.setAnimating('timeTip', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  setEmUp();
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
  // watch for GGB or text input updates
  setEmUp();
  let liters = ggb1.innerData['numLit'];
  let num = ggb1.innerData['numer'];
  let den = ggb1.innerData['denom'];
  boundIt(liters, 'numLit', 1, 4);
  boundIt(num, 'numer', 1, 10);
  boundIt(den, 'denom', 1, 20);
});

function boundIt(inp, ggbName, min, max) {
  if (inp < min || !Number.isInteger(inp)) {
    ggb1.instance.setValue(ggbName, min);
  } else if (inp > max) {
    ggb1.instance.setValue(ggbName, max);
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M2 TB L06 - Dividing a Whole Number by a Fraction","teacherView":false,"layout":"two col"}
*/
