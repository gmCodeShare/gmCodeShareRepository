const { ggb1, feedback, buttonGroup1, separator2, text2, text3 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('xSliderPoint', update);
ggb1.instance.registerObjectUpdateListener('time', updateRight);
//ggb1.instance.registerObjectUpdateListener("xSliderPoint", updateRight);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setPointSize('center', 9);
    ggb1.instance.setCoords('sliderYPoint', 0, 0, 0);
    ggb1.instance.setCoords('sliderXPoint', 0, 0, 0);
    text2.updateData({ visible: false });
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    //button2.updateData({visible: false, text: `Next Number $(\\frac{${counter}}{10})$`});
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

let counter = ggb1.instance.getValue('counter');

text3.updateData({
  align: 'right',
  text: `$\\frac{${counter}}{10}$`,
  visible: false,
});

buttonGroup1.on('click:1', () => {
  //  let counter = ggb1.instance.getValue("counter");
  //  button2.updateData({text: `Next Number ($\\frac{${counter}}{10}$)`});
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.evalCommand('RunClickScript(checkOpposite)');
  text2.updateData({ visible: false });
});

function update() {
  //ggb1.instance.setValue("time",0);
  ggb1.instance.stopAnimation();
}

function updateRight() {
  let feedback;
  //if wrong
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
    feedback = `Good Job! Try Another!`;
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    text2.updateData({ visible: true, text: `${feedback}` });
  }
  /*if (ggb1.instance.getValue("xSlider") == ggb1.instance.getValue("xRand") && ggb1.instance.getValue("counter") == 10&&ggb1.instance.getValue("time")==1||ggb1.instance.getValue("ySlider") == ggb1.instance.getValue("yRand") && ggb1.instance.getValue("counter") == 10&&ggb1.instance.getValue("time")==1) {
   feedback = `Good Job!
     
  Problem $10$ out of $10$ complete.`
  text2.updateData({visible: true, text: `${feedback}`});
    ggb1.instance.setFixed("sliderXPoint", true, false);
    ggb1.instance.setFixed("sliderYPoint", true, false);
    //ggb1.instance.setValue("counter", 11);
  buttonGroup1.updateSingleButton({ disabled: true}, 2);
    text2.updateData({visible: true, text: `${feedback}`});
    //if correct and not last one
}*/
}

/*autorun(() => {
  ggb1.innerData["sliderYPoint"];
  ggb1.innerData["sliderXPoint"];
  ggb1.instance.stopAnimation();
 // button2.updateData({visible: false});
  button1.updateData({disabled: false});
  text2.updateData({visible: false});
});*/

buttonGroup1.on('click:2', () => {
  ggb1.instance.setCoords('sliderYPoint', 0, 0, 0);
  ggb1.instance.setCoords('sliderXPoint', 0, 0, 0);
  ggb1.instance.stopAnimation();
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  text2.updateData({ visible: false });
  //  let counter = ggb1.instance.getValue("counter");
  //  button2.updateData({visible: false, text: `Next Number $(\\frac{${counter}}{10})$`});
  // text2.updateData({visible: false});
  ggb1.instance.evalCommand('RunClickScript(nextNumber)');
  //  let counter = ggb1.instance.getValue("counter");
  //  text3.updateData({text: `$\\frac{${counter}}{10}$`});
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"buttongroup":1,"separator":1},"stage":"Learn","lessonInfo":"6 M3 TA L02 - PA Integers","teacherView":true,"layout":"two col"}
*/
