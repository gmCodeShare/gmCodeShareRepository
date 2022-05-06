const {
  ggb1,
  Separator1,
  button2,
  feedback,
  Textbox3,
  button1,
  asdf1,
  cc_sharewithclass_1e12cb8a8ac1_textbox1: shareText1,
  cc_sharewithclass_1e12cb8a8ac1_input1: shareInput1,
  cc_sharewithclass_1e12cb8a8ac1_button1: shareButton1,
  cc_sharewithclass_1e12cb8a8ac1_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false, type: 'multiline' });
    shareButton1.updateData({ visible: false, align: 'right' });
    button1.updateData({ disabled: true });
    ggb1.updateData({ initialState: ggb1.instance.getBase64() });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerStoreUndoListener(() => {
  ggb1.updateData({ string64: ggb1.instance.getBase64() });
});

autorun(() => {
  if (ggb1.innerData['sprinklers'] > 2) {
    button1.updateData({ disabled: false });
  }
});

button1.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(play)');
  ggb1.instance.evalCommand('SelectObjects()');
  button1.updateData({ disabled: true });
});

// run watering animation
autorun(() => {
  if (ggb1.innerData['time1'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('time1', false);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (ggb1.innerData['time2'] == 1) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    button1.updateData({ disabled: false });
  }
});

button2.on('click', () => {
  //ggb1.instance.evalCommand("RunClickScript(reset)");
  ggb1.instance.setBase64(ggb1.data.initialState);
});

/*
{"compTotals":{"geogebra":1,"separator":2,"button":2,"textbox":2,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M4 TC L15 - Watering a Lawn","teacherView":false,"layout":"T layout"}
*/
