const { ggb1, input1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button1.updateData({ align: 'right' });
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
    ggb1.instance.stopAnimation();
    ggb1.instance.setValue('time', 0);
  }
});

button1.on('click', () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setValue('nextBreaths', boundIt(input1, 1, 10000));
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

function boundIt(inputComp, min, max) {
  const result = utils.math.evaluateLatex(inputComp.data.text);
  if (result.error) {
    inputComp.updateData({ text: `${min}` }); // what should the text do/say if students input "cabbage"?
    return min; // whatever you go with here, make sure it's inside of your min and max!
  } else if (result.value < min) {
    inputComp.updateData({ text: `${min}` });
    return min;
  } else if (result.value > max) {
    inputComp.updateData({ text: `${max}` });
    return max;
  }
  // you can add things like floor or toFixed to validate only integers, or something similar
  let flooredNum = Math.floor(result.value);
  inputComp.updateData({ text: `${flooredNum}` });
  return flooredNum;
  //return result.value;
}
