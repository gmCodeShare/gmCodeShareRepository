const {
  ggb1,
  Separator1,
  buttonGroup1,
  feedback1,
  cc_submit_bacd05e279bd_textbox1: submitText1,
  cc_submit_bacd05e279bd_input1: submitInput1,
  cc_submit_bacd05e279bd_button1: submitButton1,
  Separator2,
  text1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    text1.updateData({ visible: false });
    buttonGroup1.updateData({ visible: false });
    ggb1.updateData({ visible: false });
    ggb1.updateInnerData({ fakeNumer: 3, fakeDenom: 4, A: [8, 0] });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  text1.updateData({ visible: true });
  ggb1.updateData({ visible: true });
  buttonGroup1.updateData({ visible: true });
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
{"compTotals":{"geogebra":1,"separator":2,"buttongroup":1,"textbox":2,"submit":1},"stage":"Learn","lessonInfo":"6 M2 TB L06 - Dividing a Whole Number by a Fraction","teacherView":false,"layout":"two col"}
*/
