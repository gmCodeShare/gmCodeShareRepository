const { ggb1, separator1, buttonGroup1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

buttonGroup1.updateSingleButton({ disabled: true }, 2);
buttonGroup1.updateSingleButton({ disabled: true }, 3);
buttonGroup1.on('click:1', () => {
  for (i = 1; i < 26; i++) {
    ggb1.instance.setAnimating('q' + i, true);
  }
  ggb1.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

buttonGroup1.on('click:2', () => {
  for (k = 1; k < 26; k++) {
    ggb1.instance.setAnimating('q' + k, false);
  }
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);

  for (l = 1; l < 26; l++) {
    ggb1.instance.setAnimating('q' + l, false);
  }
  for (j = 1; j < 26; j++) {
    ggb1.instance.setValue('q' + j, 0);
  }
  ggb1.instance.evalCommand('UpdateConstruction()');
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M2 TC L12 - Fraction Operations in a Real-World Situation","teacherView":true,"layout":"one col"}
*/
