const {
  ggb1,
  separator1,
  ggb2,
  separator2,
  buttonGroup1,
  text1,
  separator3,
  text2,
  table1,
  button1,
} = components;

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

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('counter', 1);
    ggb2.instance.setValue('counter', 1);
    button1.updateData({ align: 'right' });
    button1.updateData({ disabled: true });
    buttonGroup1.updateSingleButton({ disabled: true }, 3);

    ggb1.updateData({ init: true });
  }
}

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
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.evalCommand('RunClickScript(button5)');
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb2.instance.evalCommand('RunClickScript(addASetButton)');
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb2.instance.setValue('tryIt', false);
  ggb2.instance.setValue('blueTestNumber', 0);
  ggb2.instance.setValue('purpTestNumber', 0);
  ggb2.instance.setValue('counter', 1);
});

autorun(() => {
  let entries = [
    table1.getCell(0, 4).value,
    table1.getCell(1, 1).value,
    table1.getCell(1, 2).value,
    table1.getCell(1, 3).value,
    table1.getCell(1, 4).value,
    table1.getCell(2, 1).value,
    table1.getCell(2, 2).value,
    table1.getCell(2, 3).value,
    table1.getCell(2, 4).value,
    table1.getCell(3, 1).value,
    table1.getCell(3, 2).value,
    table1.getCell(3, 3).value,
    table1.getCell(3, 4).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: [...entries] });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

/*
{"compTotals":{"geogebra":2,"separator":3,"buttongroup":1,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"6 M1 TA L04 - Exploring Ratios by Making Batches","teacherView":false,"layout":"two col"}
*/
