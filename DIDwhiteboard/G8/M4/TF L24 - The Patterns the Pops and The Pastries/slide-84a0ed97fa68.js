const { text2, ggb1, text1, buttonGroup1, feedback1 } = components;

ggb1.instance.setAxisLabels(1, '$\\mathit{x}$', '$\\mathit{y}$');

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

let names = ['blue1', 'red1'];

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  //ggb1.instance.evalCommand('RunClickScript(tryIt)');

  resetIt();
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();

  function resetIt() {
    ggb1.instance.stopAnimation();
    ggb1.instance.setValue('time', 0);
    for (let i = 0; i < names.length; i++) {
      // fix our boolean values and reset our balloon visibilities
      ggb1.instance.setValue(names[i] + 'popped', 0);
      ggb1.instance.setVisible(names[i] + 'pic', true);
      ggb1.instance.setVisible(names[i] + 'pop', false);
    }
  }
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  //ggb1.instance.evalCommand('RunClickScript(reset)');

  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  for (let i = 0; i < names.length; i++) {
    // fix our boolean values and reset our balloon visibilities
    ggb1.instance.setValue(names[i] + 'popped', 0);
    ggb1.instance.setVisible(names[i] + 'pic', true);
    ggb1.instance.setVisible(names[i] + 'pop', false);
  }
});

// check for pop conditions and pop balloons
autorun(() => {
  if (ggb1.innerData['blue1'] && !ggb1.innerData['blue1popped']) {
    popIt('blue1');
  }
  if (ggb1.innerData['red1'] && !ggb1.innerData['red1popped']) {
    popIt('red1');
  }
});

function popIt(a) {
  // the popped boolean enables us to check whether the lead point has popped a balloon only when it is inside a balloon, and only once
  ggb1.instance.evalCommand('PlaySound(soundText)');
  ggb1.instance.setValue(a + 'popped', 1);
  ggb1.instance.setVisible(a + 'pic', false);
  ggb1.instance.setVisible(a + 'pop', true);
}

// auto reset
/*autorun(() => {
  let point1 = ggb1.innerData["L"];
  let point2 = ggb1.innerData["K"];
  ggb1.instance.evalCommand("RunClickScript(reset)");
});*/

/*
{"compTotals":{"textbox":3,"geogebra":1,"buttongroup":1},"stage":"Launch","lessonInfo":"8 M4 T L0NaN - The Patterns, the Pops, and the Pastries","teacherView":false,"layout":"T layout"}
*/
