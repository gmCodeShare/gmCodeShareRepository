const {
  ggb1,
  Separator1,
  buttonGroup1,
  feedback1,
  cc_submit_34abcf9f7909_textbox1: submitText1,
  cc_submit_34abcf9f7909_input1: submitInput1,
  cc_submit_34abcf9f7909_button1: submitButton1,
  Separator2,
  cc_submit_b5beebbf24b8_textbox1: submitText2,
  cc_submit_b5beebbf24b8_input1: submitInput2,
  cc_submit_b5beebbf24b8_button1: submitButton2,
  Separator3,
  cc_sharewithclass_7571dccc7150_textbox1: shareText1,
  cc_sharewithclass_7571dccc7150_input1: shareInput1,
  cc_sharewithclass_7571dccc7150_button1: shareButton1,
  cc_sharewithclass_7571dccc7150_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.updateInnerData({ fakeNumer: 1, fakeDenom: 3 });
    submitText2.updateData({ visible: false });
    submitInput2.updateData({ visible: false });
    submitButton2.updateData({ visible: false });
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

submitButton2.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

buttonGroup1.on('click:1', () => {
  //ggb1.instance.evalCommand("UpdateConstruction()");
  let num = ggb1.instance.getValue('fakeNumer');
  let den = ggb1.instance.getValue('fakeDenom');
  boundIt(num, 'fakeNumer', 1, 20);
  boundIt(den, 'fakeDenom', 1, 20);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.evalCommand('RunClickScript(fixBase)');
  ggb1.updateInnerData({ selecting: 0 });
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  resetIt();
});

function resetIt() {
  ggb1.updateInnerData({ time: 0, end: 0 });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
}

autorun(() => {
  let num = ggb1.innerData['fakeNumer'];
  let den = ggb1.innerData['fakeDenom'];
  resetIt();
  boundIt(num, 'fakeNumer', 1, 20);
  boundIt(den, 'fakeDenom', 1, 20);
});

function boundIt(inp, ggbName, min, max) {
  if (inp < min || Number.isNaN(inp)) {
    ggb1.instance.setValue(ggbName, min);
  } else if (inp > max) {
    ggb1.instance.setValue(ggbName, max);
  } else {
    ggb1.instance.setValue(ggbName, Math.round(inp));
  }
}

/*
{"compTotals":{"geogebra":1,"separator":3,"buttongroup":1,"textbox":1,"submit":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M2 TB L06 - Dividing a Whole Number by a Fraction","teacherView":false,"layout":"two col"}
*/
