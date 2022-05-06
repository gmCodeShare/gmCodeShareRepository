const {
  ggb1,
  Separator1,
  buttonGroup1,
  feedback1,
  cc_submit_04a8fdfee8db_textbox1: submitText1,
  cc_submit_04a8fdfee8db_input1: submitInput1,
  cc_submit_04a8fdfee8db_button1: submitButton1,
  Separator2,
  cc_sharewithclass_1404c3bc3508_textbox1: shareText1,
  cc_sharewithclass_1404c3bc3508_input1: shareInput1,
  cc_sharewithclass_1404c3bc3508_button1: shareButton1,
  cc_sharewithclass_1404c3bc3508_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    ggb1.updateInnerData({ fakeNumer: 3, fakeDenom: 5, A: [6, 0] });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

buttonGroup1.on('click:1', () => {
  let num = ggb1.innerData['fakeNumer'];
  let den = ggb1.innerData['fakeDenom'];
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
  if (!ggb1.data.ran) {
    ggb1.instance.evalCommand('RunClickScript(fixBase)');
    ggb1.updateInnerData({ selecting: 0, time: 1 });
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    ggb1.updateData({ ran: true });
  }
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
{"compTotals":{"geogebra":1,"separator":2,"buttongroup":1,"textbox":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M2 TB L06 - Dividing a Whole Number by a Fraction","teacherView":false,"layout":"two col"}
*/
