const { buttonGroup1, ggb1, Separator3, feedback1, ggb2, Separator2 } =
  components;

components.feedback1.updateData({ visible: false });

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb2.instance.setValue('showTape', false);
ggb1.instance.registerObjectUpdateListener('tapeNumbers', update);
buttonGroup1.updateSingleButton({ disabled: true }, 3);
buttonGroup1.updateSingleButton({ disabled: true }, 1);
ggb2.instance.setValue('tapeNumbers', 0);

function update() {
  ggb2.instance.setValue('tapeNumbers', ggb1.instance.getValue('tapeNumbers'));
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');

  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb2.instance.setValue('tapeNumbers', ggb1.instance.getValue('tapeNumbers'));
  ggb2.instance.setValue('tile', ggb1.instance.getValue('tile'));
  if (ggb1.instance.getValue('tile') == 3) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  } else {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});

buttonGroup1.on('click:2', () => {
  ggb2.instance.setValue('showTape', true);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

buttonGroup1.on('click:3', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  ggb2.instance.setValue('tapeNumbers', ggb1.instance.getValue('tapeNumbers'));
  ggb2.instance.setValue('tile', ggb1.instance.getValue('tile'));
  ggb1.instance.setValue('showTape', true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb2.instance.setValue('showTape', false);
});

/*
{"compTotals":{"buttongroup":1,"geogebra":2,"separator":2,"textbox":1},"stage":"Learn","lessonInfo":"6 M1 TA L04 - PA Slide Deck for Exploring Ratios by Making Batches","teacherView":true,"layout":"T layout"}
*/
