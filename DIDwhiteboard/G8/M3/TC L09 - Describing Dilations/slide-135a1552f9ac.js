const {
  ggb1,
  feedback1,
  text1,
  input1,
  buttonGroup1,
  separator1,
  cc_sharewithclass_2f420339ce7b_textbox1: shareText1,
  cc_sharewithclass_2f420339ce7b_input1: shareInput1,
  cc_sharewithclass_2f420339ce7b_button1: shareButton1,
  cc_sharewithclass_2f420339ce7b_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setValue('show2', true); // SLIDE SPECIFIC
  // ggb1.instance.setValue("showO", true);
  ggb1.instance.setOnTheFlyPointCreationActive(false);
  ggb1.instance.setMode(1);
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  // input1.updateData({ lastO: [...ggb1.innerData["O"]] });
});

const selectables = ['F', "F'", 'G', "G'", 'H', "H'"]; // SLIDE SPECIFIC

watchToolbar(ggb1.instance.getMode());

function watchToolbar(num) {
  ggb1.instance.evalCommand('SelectObjects()');
  const selModes = [2];
  for (let i = 0, L = selectables.length; i < L; i++) {
    ggb1.instance.setFixed(selectables[i], true, selModes.includes(num));
  }
  const OModes = [0];
  ggb1.instance.setFixed('O', false, OModes.includes(num));
}

ggb1.instance.registerClientListener((a) => {
  switch (a.type) {
    case 'setMode':
      watchToolbar(parseInt(a.argument));
      break;
  }
});

ggb1.instance.registerAddListener((a) => {
  if (ggb1.instance.getObjectType(a) != 'point') {
    return;
  }
  const [x, y] = [ggb1.instance.getXcoord(a), ggb1.instance.getYcoord(a)];
  ggb1.instance.setCoords('O', x, y);
  ggb1.instance.setValue('showO', true);
  ggb1.instance.deleteObject(a);
});

buttonGroup1.on('click:1', () => {
  const result = utils.math.evaluateLatex(input1.data.text);
  if (result.error) {
    return;
  }
  stopRightThere();
  ggb1.instance.setValue('rInput2', result.value); // SLIDE SPECIFIC
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

buttonGroup1.on('click:2', () => {
  stopRightThere();
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

autorun(() => {
  let currentO = ggb1.innerData['O'];
  if (
    (ggb1.instance.getValue('showO') &&
      input1.data.text != input1.data.lastR) ||
    !arrayEquals(currentO, input1.data.lastO)
  ) {
    buttonGroup1.updateSingleButton({ disabled: !input1.data.text }, 1);
    stopRightThere();
    input1.updateData({ lastR: input1.data.text, lastO: [...currentO] });
  }
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function stopRightThere() {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"input":1,"buttongroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M3 TC L09 - Describing Dilations","teacherView":false,"layout":"two col"}
*/
