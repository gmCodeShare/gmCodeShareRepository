const { ggb1, ggb2, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

let primePoints = ["A'", "B'", "C'"];

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('time', primeLabels);
ggb2.instance.registerObjectUpdateListener('time', timeFunction);

ggb2.instance.registerObjectClickListener('no1Box', no1BoxWork);

function runGGB1Animation() {
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
}

function runGGB2Animation() {
  ggb2.instance.setAnimating('time', false);
  ggb2.instance.setValue('time', 0);
  ggb2.instance.setAnimating('time', true);
  ggb2.instance.startAnimation();
}

function timeFunction() {
  if (
    ggb2.instance.getValue('time') == 1 &&
    !ggb2.instance.getValue('startTranslate')
  ) {
    ggb2.instance.setFixed('no1Box', true, true);
  }
  if (
    ggb2.instance.getValue('time') == 1 &&
    ggb2.instance.getValue('startTranslate')
  ) {
    runGGB1Animation();
  }
}

function no1BoxWork() {
  ggb2.instance.setFixed('no1Box', true, false);
  ggb2.instance.setValue('startTranslate', true);
  ggb2.instance.setValue('startXmax', 3.27);
  ggb2.instance.setValue('startXmin', -2.16);
  ggb2.instance.setValue('startYmax', 4.83);
  ggb2.instance.setValue('startYmin', -0.6);
  ggb2.instance.setValue('endXmax', 6.86);
  ggb2.instance.setValue('endXmin', 2.68);
  ggb2.instance.setValue('endYmax', 4.81);
  ggb2.instance.setValue('endYmin', 0.64);
  runGGB2Animation();
}

function primeLabels() {
  if (ggb1.instance.getValue('time') == 1) {
    for (i = 0, L = primePoints.length; i < L; i++) {
      ggb1.instance.setLabelVisible(primePoints[i], true);
    }
  } else {
    for (i = 0, L = primePoints.length; i < L; i++) {
      ggb1.instance.setLabelVisible(primePoints[i], false);
    }
  }
}

function reset() {
  ggb2.instance.setValue('startTranslate', false);

  ggb2.instance.setValue('startXmax', 11);
  ggb2.instance.setValue('startXmin', -11);
  ggb2.instance.setValue('startYmax', 11);
  ggb2.instance.setValue('startYmin', -11);
  ggb2.instance.setValue('endXmax', 3.27);
  ggb2.instance.setValue('endXmin', -2.16);
  ggb2.instance.setValue('endYmax', 4.83);
  ggb2.instance.setValue('endYmin', -0.6);

  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb2.instance.setAnimating('time', false);
  ggb2.instance.setValue('time', 0);
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  runGGB2Animation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  reset();
});
