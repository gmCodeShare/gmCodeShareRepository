const { ggb1, feedback1, ggb2, Separator3, buttonGroup1 } = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('counter', 1);
    ggb2.instance.setValue('counter', 1);
    ggb1.updateData({ init: true });
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
}

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb2.instance.registerObjectUpdateListener('totalAmount', update);
ggb2.instance.registerObjectUpdateListener('totalBlue', update);
ggb2.instance.registerObjectUpdateListener('totalPurp', update);
ggb2.instance.registerObjectUpdateListener('extraBlue', update);
ggb2.instance.registerObjectUpdateListener('extraPurple', update);
ggb2.instance.registerObjectUpdateListener('time', update);
ggb2.instance.registerObjectUpdateListener('blueTestNumber', update);
ggb2.instance.registerObjectUpdateListener('purpTestNumber', update);
ggb2.instance.registerObjectUpdateListener(
  'extraPurpleRhomBlackOutlineShown',
  update
);
ggb2.instance.registerObjectUpdateListener('counter', update);

function update() {
  ggb1.instance.setValue('totalAmount', ggb2.instance.getValue('totalAmount'));
  ggb1.instance.setValue('totalBlue', ggb2.instance.getValue('totalBlue'));
  ggb1.instance.setValue('totalPurp', ggb2.instance.getValue('totalPurp'));
  ggb1.instance.setValue('extraBlue', ggb2.instance.getValue('extraBlue'));
  ggb1.instance.setValue('extraPurple', ggb2.instance.getValue('extraPurple'));
  ggb1.instance.setValue('time', ggb2.instance.getValue('time'));
  ggb1.instance.setValue('counter', ggb2.instance.getValue('counter'));
  ggb1.instance.setValue(
    'blueTestNumber',
    ggb2.instance.getValue('blueTestNumber')
  );
  ggb1.instance.setValue(
    'purpTestNumber',
    ggb2.instance.getValue('purpTestNumber')
  );
  ggb1.instance.setLayer('extraPurpleRhomBlackOutlineShown', 6);
  ggb1.instance.setFilling('extraPurpleRhomShown', 0.35);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  if (ggb1.instance.getValue('counter') == 4) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  } else {
    //buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.evalCommand('RunClickScript(button5)');
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb2.instance.evalCommand('RunClickScript(addASetButton)');
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb2.instance.setValue('tryIt', false);
  ggb2.instance.setValue('blueTestNumber', 0);
  ggb2.instance.setValue('purpTestNumber', 0);
  ggb2.instance.setValue('counter', 1);
});

/*
{"compTotals":{"geogebra":2,"textbox":1,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M1 TA L04 - PA Slide Deck for Exploring Ratios by Making Batches","teacherView":true,"layout":"two col"}
*/
