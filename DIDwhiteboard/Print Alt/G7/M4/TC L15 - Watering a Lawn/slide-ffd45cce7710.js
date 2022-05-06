const { ggb1, Separator1, feedback, Textbox3, buttonGroup1, asdf1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
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
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(play)');
  ggb1.instance.evalCommand('SelectObjects()');
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
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
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});

buttonGroup1.on('click:2', () => {
  //ggb1.instance.evalCommand("RunClickScript(reset)");
  ggb1.instance.setBase64(ggb1.data.initialState);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

/*
{"compTotals":{"geogebra":1,"separator":2,"textbox":2,"buttongroup":1},"stage":"Launch","lessonInfo":"7 M4 TC L15 - Print Alternate Slide Deck for Watering a Lawn","teacherView":true,"layout":"T layout"}
*/
