const {
  ggb1,
  feedback1,
  text1,
  separator1,
  buttonGroup1,
  separator2,
  text2,
  text3,
  cc_sharewithclass_0cc8c9369841_textbox1,
  cc_sharewithclass_0cc8c9369841_input1,
  cc_sharewithclass_0cc8c9369841_button1,
  cc_sharewithclass_0cc8c9369841_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
//ggb1.instance.registerObjectUpdateListener('sliderXPoint', update);
ggb1.instance.registerObjectUpdateListener('time', updateRight);

let counter = ggb1.instance.getValue('counter');

text3.updateData({
  text: `$\\frac{${counter}}{10}$`,
});

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text3.updateData({
      visible: false,
    });
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    text2.updateData({ visible: false });
    ggb1.instance.setCoords('sliderYPoint', 0, 0, 0);
    ggb1.instance.setCoords('sliderXPoint', 0, 0, 0);
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.setFixed('sliderXPoint', false, false);
  ggb1.instance.setFixed('sliderYPoint', false, false);
  ggb1.instance.evalCommand('RunClickScript(checkOpposite)');
  text2.updateData({ visible: false });
});

// function update() {
//   ggb1.instance.stopAnimation();
// }

function updateRight() {
  let feedback;
  //if wrong
  if (ggb1.instance.getValue('time') == 1) {
    ggb1.instance.setFixed('sliderXPoint', false, true);
    ggb1.instance.setFixed('sliderYPoint', false, true);
  }
  if (
    ggb1.instance.getValue('ySlider') != ggb1.instance.getValue('yRand') &&
    ggb1.instance.getValue('xSlider') != ggb1.instance.getValue('xRand') &&
    ggb1.instance.getValue('time') == 1
  ) {
    feedback = 'Try Again!';
    text2.updateData({ visible: true, text: `${feedback}` });
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    //if correct and last one
  }
  if (
    (ggb1.instance.getValue('xSlider') == ggb1.instance.getValue('xRand') &&
      ggb1.instance.getValue('time') == 1) ||
    (ggb1.instance.getValue('ySlider') == ggb1.instance.getValue('yRand') &&
      ggb1.instance.getValue('time') == 1)
  ) {
    let counter = ggb1.instance.getValue('counter');
    feedback = `Good Job! Try Another!
    
  Problem $${counter}$ out of $10$ complete.`;
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    text2.updateData({ visible: true, text: `${feedback}` });
  }
  if (
    (ggb1.instance.getValue('xSlider') == ggb1.instance.getValue('xRand') &&
      ggb1.instance.getValue('counter') == 10 &&
      ggb1.instance.getValue('time') == 1) ||
    (ggb1.instance.getValue('ySlider') == ggb1.instance.getValue('yRand') &&
      ggb1.instance.getValue('counter') == 10 &&
      ggb1.instance.getValue('time') == 1)
  ) {
    feedback = `Good Job!
     
  Problem $10$ out of $10$ complete.`;
    text2.updateData({ visible: true, text: `${feedback}` });
    ggb1.instance.setFixed('sliderXPoint', true, false);
    ggb1.instance.setFixed('sliderYPoint', true, false);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    text2.updateData({ visible: true, text: `${feedback}` });
    //if correct and not last one
  }
}

buttonGroup1.on('click:2', () => {
  ggb1.instance.setCoords('sliderYPoint', 0, 0, 0);
  ggb1.instance.setCoords('sliderXPoint', 0, 0, 0);
  ggb1.instance.stopAnimation();
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  text2.updateData({ visible: false });
  ggb1.instance.evalCommand('RunClickScript(nextNumber)');
});
