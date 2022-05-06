const { text2, ggb1, Separator1, button2, text1, input1, button1, feedback1 } =
  components;

ggb1.instance.setAxisLabels(1, '$\\mathit{x}$', '$\\mathit{y}$');

ggb1.instance.setErrorDialogsActive(false);
button1.updateData({ align: 'right' });

if (!ggb1.data.init) {
  // set the initial states of everything (note: generally, if some function down below sets or updates something, a command to undo that thing should go in here)
  button2.updateData({ disabled: true });
  // create/update a dummy variable to keep track of whether the screen has initialized
  ggb1.updateData({ init: true });
}

let names = ['blue1', 'red1'];

button1.on('click', () => {
  //button1.updateData({disabled: true});
  ggb1.instance.evalLaTeX(`dummyObjectForThisCode: ${input1.data.text}`);
  ggb1.instance.setVisible('dummyObjectForThisCode', false);
  if (ggb1.instance.getObjectType('dummyObjectForThisCode') == 'line') {
    ggb1.instance.evalLaTeX(`g: ${input1.data.text}`);
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

    button1.updateData({ disabled: true });
    button2.updateData({ disabled: false });
  }
  ggb1.instance.deleteObject('dummyObjectForThisCode');
});

autorun(() => {
  button1.updateData({ disabled: !input1.data.text });
});

button2.on('click', () => {
  //ggb1.instance.evalCommand('RunClickScript(reset)');

  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  for (let i = 0; i < names.length; i++) {
    // fix our boolean values and reset our balloon visibilities
    ggb1.instance.setValue(names[i] + 'popped', 0);
    ggb1.instance.setVisible(names[i] + 'pic', true);
    ggb1.instance.setVisible(names[i] + 'pop', false);
  }

  button1.updateData({ disabled: false });
  button2.updateData({ disabled: true });
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
  let text = input1.data.text;
  ggb1.instance.evalCommand("RunClickScript(reset)");
});

// auto button
autorun(() => {
  button1.updateData({disabled: ggb1.innerData["time"] != 0 && ggb1.innerData["time"] != 1 });
});*/

/*
{"compTotals":{"textbox":3,"geogebra":1,"separator":1,"button":2,"input":1},"stage":"Learn","lessonInfo":"8 M4 T L0NaN - The Patterns, the Pops, and the Pastries","teacherView":false,"layout":"T layout"}
*/
