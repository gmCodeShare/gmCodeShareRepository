const {
  ggb1,
  closeText,
  greenCheck,
  feedback1,
  text1,
  input1,
  unitText,
  button1,
  separator1,
  text2,
  input2,
  unitText2,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);
button1.updateData({ align: 'right' });
button2.updateData({ align: 'right' });

autorun(() => {
  button1.updateData({ disabled: !input1.data.text });
  greenCheck.updateData({ visible: false });
  closeText.updateData({ text: '' });
});

autorun(() => {
  button2.updateData({ disabled: !input2.data.text });
  greenCheck.updateData({ visible: false });
  closeText.updateData({ text: '' });
});

// ggb side variable called inputVol for volumes and inputHeight for heights
button1.on('click', startIt);
button2.on('click', startItAgain);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    button2.updateData({ visible: false });
    input2.updateData({ visible: false });
    text2.updateData({ visible: false });
    ggb1.instance.setValue('showDiameter', true);
    ggb1.instance.setValue('showHeight', true);
    unitText2.updateData({ align: 'right', visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

var correct;

function startIt() {
  let inputNum = utils.math.evaluateLatex(input1.data.text);
  if (inputNum.value < 0 || inputNum.error) {
    return;
  }
  button1.updateData({ disabled: true });
  ggb1.instance.setValue('time', 0);
  const valueLaTeX = 'inputVol=' + input1.data.text;
  ggb1.instance.evalLaTeX(valueLaTeX, 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
  unitText2.updateData({ visible: true });
  correct = (7 * Math.PI) / 8;
}

function startItAgain() {
  let inputNum = utils.math.evaluateLatex(input2.data.text);
  if (inputNum.value < 0 || inputNum.error) {
    return;
  }
  ggb1.instance.setValue('time', 0);
  button2.updateData({ disabled: true });
  const parts = input2.data.text.split('\\');
  if (parts[parts.length - 1] == 'pi') {
    ggb1.instance.setValue('inputVol', Number(parts[0]) * Math.PI);
  } else {
    ggb1.instance.setValue('inputVol', inputNum.value);
  }
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  correct = 2.7475;
}

autorun(() => {
  if (ggb1.innerData['time'] == 1) {
    button1.updateData({ disabled: false });
    button2.updateData({ disabled: false });
    //let correct = 16 * Math.PI;
    let inputted = ggb1.instance.getValue('inputVol');
    if (inputted == correct) {
      greenCheck.updateData({ visible: true });
    } else if (Math.abs(inputted - correct) <= 0.05 * correct) {
      closeText.updateData({ text: 'Very close!' });
    }
  }
});

autorun(() => {
  let trigger = input1.data.text;
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  button1.updateData({ disabled: false });
});

autorun(() => {
  let trigger = input2.data.text;
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  button2.updateData({ disabled: false });
});

/*
{"compTotals":{"geogebra":1,"textbox":6,"uploaded-image":1,"input":2,"button":2,"separator":1},"stage":"Learn","lessonInfo":"8 M6 TE L0NaN - Volume of Cylinders","teacherView":false,"layout":"two col"}
*/
