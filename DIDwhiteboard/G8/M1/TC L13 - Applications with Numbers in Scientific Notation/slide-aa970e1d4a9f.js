const {
  ggb1,
  separator5,
  buttonGroup1,
  feedback,
  text1,
  input1,
  text2,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setValue('spaceMode', true);
  ggb1.instance.setVisible('numText', false);
  buttonGroup1.updateData({ visible: false });
  button1.updateData({ align: 'right' });
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue(
    'numDollars',
    ggb1.instance.getValue('numDollars') + 1
  );
});

button1.on('click', () => {
  button1.updateData({ disabled: true });
  const boundDollars = boundIt(input1, 1);
  ggb1.instance.setValue('numDollars', boundDollars);
  ggb1.instance.setValue('time', 0);
  if (boundDollars > 1) {
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
  let miniAnswer = ggb1.instance.getValue('spaceDollars') / 10 ** 12;
  let miniInput = boundDollars / 10 ** 12;
  if (miniAnswer.toFixed(2) == miniInput.toFixed(2)) {
    ggb1.instance.setValue(
      'numDollars',
      ggb1.instance.getValue('spaceDollars')
    );
  }
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
    ggb1.instance.stopAnimation();
    ggb1.instance.setValue('time', 0);
  }
});

function boundIt(inputComp, min /* , max */) {
  const result = utils.math.evaluateLatex(inputComp.data.text);
  if (result.error) {
    inputComp.updateData({ text: `${min}` }); // what should the text do/say if students input "cabbage"?
    return min; // whatever you go with here, make sure it's inside of your min and max!
  } else if (result.value < min) {
    inputComp.updateData({ text: `${min}` });
    return min;
  } /* else if (result.value > max) {
    inputComp.updateData({ text: `${max}` });
    return max;
  } */
  // you can add things like floor or toFixed to validate only integers, or something similar
  let flooredNum = Math.floor(result.value);
  if (flooredNum != result.value) {
    inputComp.updateData({ text: `${flooredNum}` });
  }
  return flooredNum;
  //return result.value;
}

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":3,"input":1,"button":1},"stage":"Learn","lessonInfo":"8 M1 TC L13 - Applications with Numbers in Scientific Notation","teacherView":false,"layout":"two col"}
*/
