const { ggb1, feedback1, text2, text1, separator1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('numOfTiles', 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener('numOfTiles', update);
ggb1.instance.registerObjectUpdateListener('time', update);

function update() {
  let num = ggb1.instance.getValue('numOfTiles');
  text1.updateData({ text: `$\\huge{\\text{Number of Batches: }${num}}$` });
  /*if (
    ggb1.instance.getValue('time') == 0 ||
    ggb1.instance.getValue('time') == 1
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  } else {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
  if (ggb1.instance.getValue('time') == 1) {
  }*/
  if (
    ggb1.instance.getValue('numOfTiles') > 1 &&
    ggb1.instance.getValue('time') == 0
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(button3)');
  if (ggb1.instance.getValue('numOfTiles') == 10) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  } else {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

buttonGroup1.on('click:3', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M1 TA L04 - PA Slide Deck for Exploring Ratios by Making Batches","teacherView":true,"layout":"two col"}
*/
