const { ggb1, feedback1, text1, input1, text2, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('state', 3);
    ggb1.instance.setValue('song2Beats', 50);
    button1.updateData({ align: 'right' });

    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

function boundIt(inp, min, max) {
  const result = utils.math.evaluateLatex(inp);
  if (result.error) {
    input1.updateData({ text: '0' });
    return 0;
  } else if (result.value < min) {
    input1.updateData({ text: `${min}` });
    return min;
  } else if (result.value > max) {
    input1.updateData({ text: `${max}` });
    return max;
  }
  return result.value;
}

button1.on('click', () => {
  if (
    input1.data.text == parseInt(input1.data.text) &&
    !Number.isNaN(input1.data.text)
  ) {
    button1.updateData({ disabled: true, text: 'Submitted' });
    button1.updateData({ hasBeenClicked: true });
    let num = input1.data.text;
    const min = 0;
    const max = 10000;
    num = boundIt(num, min, max);
    ggb1.instance.evalLaTeX(`song1Beats= ${input1.data.text}`);
    ggb1.instance.setAnimating('time1', false);
    ggb1.instance.setValue('time1', 0);
    ggb1.instance.setAnimating('time1', true);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('time1', false);
    ggb1.instance.setValue('time1', 0);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"input":1,"button":1},"stage":"Learn","lessonInfo":"6 M1 TD L18 - Comparing Rates","teacherView":false,"layout":"two col"}
*/
