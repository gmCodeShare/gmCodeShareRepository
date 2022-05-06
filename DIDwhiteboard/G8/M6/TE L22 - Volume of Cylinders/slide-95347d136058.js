const {
  ggb1,
  closeText,
  greenCheck,
  text1,
  input1,
  unitText,
  button1,
  feedback1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
button1.updateData({ align: 'right' });

autorun(() => {
  button1.updateData({ disabled: !input1.data.text });
  greenCheck.updateData({ visible: false });
  closeText.updateData({ text: '' });
});

// ggb side variable called inputVol for volumes and inputHeight for heights
button1.on('click', startIt);
ggb1.instance.setValue('showDiameter', true);
ggb1.instance.setValue('showVolume', false);

function startIt() {
  let inputNum = utils.math.evaluateLatex(input1.data.text);
  if (inputNum.value < 0 || inputNum.error) {
    return;
  }
  button1.updateData({ disabled: true });
  ggb1.instance.setValue('time', 0);
  const valueLaTeX = 'inputHeight=' + input1.data.text;
  ggb1.instance.evalLaTeX(valueLaTeX, 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
}

autorun(() => {
  if (ggb1.innerData['time'] == 1) {
    button1.updateData({ disabled: false });
    let correct = 6;
    let inputted = ggb1.instance.getValue('inputHeight');
    console.log(ggb1.instance.getValue('inputHeight'));
    if (inputted == correct || inputted == 6.000000000000001) {
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

/*
{"compTotals":{"geogebra":1,"textbox":4,"uploaded-image":1,"input":1,"button":1},"stage":"Learn","lessonInfo":"8 M6 TE L0NaN - Volume of Cylinders","teacherView":false,"layout":"two col"}
*/
