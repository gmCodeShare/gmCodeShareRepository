const { image1, ggb1, feedback1, text1, input1, text2, button1 } = components;

text2.updateData({ align: 'right' });
button1.updateData({ align: 'right' });
ggb1.instance.setErrorDialogsActive(false);

button1.on('click', () => {
  let input = boundIt(input1.data.text, 0, 50);
  if (input) {
    button1.updateData({ disabled: true });
    ggb1.instance.setValue('input', input);
    ggb1.instance.setValue('time1', 0.001);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('time1', true);
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (ggb1.innerData['time1'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('time1', false);
    if (ggb1.instance.getValue('input') < 13) {
      ggb1.instance.setAnimating('time2', true);
      ggb1.instance.startAnimation();
    } else {
      button1.updateData({ disabled: false });
    }
  }
});

autorun(() => {
  if (ggb1.innerData['time2'] == 1) {
    ggb1.instance.stopAnimation();
    button1.updateData({ disabled: false });
  }
});

autorun(() => {
  let trigger = input1.data.text;
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time1', 0.001);
  ggb1.instance.setValue('time2', 0);
  button1.updateData({ disabled: false });
});

function boundIt(inp, min, max) {
  const result = utils.math.evaluateLatex(inp);
  if (result.error) {
    //input1.updateData({ text: "0" }); // what should the text do/say if students input "cabbage"?
    return 0; // whatever you go with here, make sure it's inside of your min and max!
  } else if (result.value < min) {
    input1.updateData({ text: `${min}` });
    return min;
  } else if (result.value > max) {
    input1.updateData({ text: `${max}` });
    return max;
  }
  return result.value;
}

/*
{"compTotals":{"uploaded-image":1,"geogebra":1,"textbox":3,"input":1,"button":1},"stage":"Learn","lessonInfo":"8 M1 TD L18 - The Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
