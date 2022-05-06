const {
  ggb1,
  Separator1,
  button2,
  separator1,
  textDisplay4,
  feedback,
  text2,
  button1,
  separator2,
  text1,
  input1,
  Separator2,
  cc_submit_afef7f6b5081_textbox1: submitText1,
  cc_submit_afef7f6b5081_input1: submitInput1,
  Separator3,
  cc_submit_afef7f6b5081_button1: submitButton1,
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
    submitText1.updateData({ visible: false });
    submitInput1.updateData({ visible: false, math: true });
    submitButton1.updateData({ visible: false, align: 'right' });
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false, type: 'multiline' });
    shareButton1.updateData({ visible: false, align: 'right' });
    button1.updateData({ disabled: true });
    input1.updateData({ visible: false, math: true });
    text1.updateData({ visible: false });
    text2.updateData({ align: 'center' });
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
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true });
    input1.updateData({ visible: true });
    text1.updateData({ visible: true });
    button1.updateData({ disabled: false });
  }
});

button2.on('click', () => {
  //ggb1.instance.evalCommand("RunClickScript(reset)");
  ggb1.instance.setBase64(ggb1.data.initialState);
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"separator":5,"button":2,"textbox":4,"input":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M4 TC L15 - Watering a Lawn","teacherView":false,"layout":"T layout"}
*/
