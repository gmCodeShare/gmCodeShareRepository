const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  separator1,
  text2,
  table1,
  text3,
} = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
    updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
    updateSingleButtonGroup(3, { disabled: true }, buttonGroup1);
    text2.updateData({ visible: false });
    text3.updateData({ visible: false });
    table1.updateData({ visible: false });
    table1.updateCell(0, 0, { value: '$0$' });
    table1.updateCell(1, 0, { value: '$0$' });
    table1.updateCell(0, 1, { value: '$0$' });
    table1.updateCell(1, 1, { value: '$0$' });
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.setErrorDialogsActive(false);

let num = table1.getCell(0, 0).value;
let num2 = table1.getCell(1, 0).value;
let num3 = table1.getCell(0, 1).value;
let num4 = table1.getCell(1, 1).value;

const indexStartingInOne = 1;

buttonGroup1.updateData({ align: 'center' });

function updateSingleButtonGroup(indexStartingInOne, data, buttonGroup1) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroup1.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data }; // Merge the single button data with the respective button using the index
    } else {
      newButtonGroupData[i] = bgButtons[i]; // Every other button remain the same
    }
  }
  buttonGroup1.updateData({ buttons: newButtonGroupData }); // Run updateData over buttons prop
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue('show2', 1);
  ggb1.instance.setValue('show3', 0);
  shootIt();
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('show2', 0);
  ggb1.instance.setValue('show3', 1);
  shootIt();
});

buttonGroup1.on('click:3', () => {
  ggb1.instance.setValue('score', 0);
  ggb1.instance.setValue('twoShots', 0);
  ggb1.instance.setValue('threeShots', 0);
  ggb1.instance.setValue('twoShots2', 0);
  ggb1.instance.setValue('threeShots2', 0);
  text3.updateData({ text: ' ' });
});

function shootIt() {
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
}

ggb1.instance.registerObjectUpdateListener('score', update);

function update() {
  if (ggb1.innerData['score'] == 0) {
    updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
    updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
    updateSingleButtonGroup(3, { disabled: true }, buttonGroup1);
    text3.updateData({ text: ' ' });
  }
  if (ggb1.innerData['score'] > 0 && ggb1.innerData['score'] != 32) {
    updateSingleButtonGroup(3, { disabled: false }, buttonGroup1);
  }
  if (ggb1.innerData['score'] > 32) {
    updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(3, { disabled: false }, buttonGroup1);
    text3.updateData({ text: 'Try again.' });
  }
  if (ggb1.innerData['score'] == 32 && ggb1.innerData['set'] == 1) {
    updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
    updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
    updateSingleButtonGroup(3, { disabled: true }, buttonGroup1);
    text2.updateData({ visible: true });
    text3.updateData({ visible: true });
    table1.updateData({ visible: true });
    ggb1.instance.setValue('set', ggb1.instance.getValue('set') + 1);
  }
  if (ggb1.innerData['score'] == 32 && ggb1.innerData['set'] > 1) {
    updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
    updateSingleButtonGroup(3, { disabled: false }, buttonGroup1);
  }
  if (
    ggb1.innerData['score'] == 32 &&
    table1.getCell(0, 0).value == table1.getCell(1, 0).value &&
    ggb1.innerData['set'] > 1
  ) {
    text3.updateData({ text: 'Try again.' });
  }
  if (
    ggb1.innerData['score'] == 32 &&
    table1.getCell(0, 0).value != table1.getCell(1, 0).value &&
    ggb1.innerData['set'] > 1
  ) {
    text3.updateData({ text: 'Good job!' });
  }
}

ggb1.instance.registerObjectUpdateListener('set', setChange);

function setChange() {
  if (ggb1.instance.getValue('set') == 2) {
    ggb1.instance.setValue('score', 0);
  }
}

ggb1.instance.registerObjectUpdateListener('twoShots', add2One);

function add2One() {
  let num = ggb1.instance.getValue('twoShots');
  if (ggb1.instance.getValue('set') == 1) {
    table1.updateCell(0, 0, { value: `$${num}$` });
  }
}

ggb1.instance.registerObjectUpdateListener('threeShots', add3One);

function add3One() {
  let num2 = ggb1.instance.getValue('threeShots');
  if (ggb1.instance.getValue('set') == 1) {
    table1.updateCell(0, 1, { value: `$${num2}$` });
  }
}

ggb1.instance.registerObjectUpdateListener('twoShots2', add2One2);

function add2One2() {
  let num3 = ggb1.instance.getValue('twoShots2');
  table1.updateCell(1, 0, { value: `$${num3}$` });
}

ggb1.instance.registerObjectUpdateListener('threeShots2', add3One2);

function add3One2() {
  let num4 = ggb1.instance.getValue('threeShots2');
  table1.updateCell(1, 1, { value: `$${num4}$` });
}

let row1Total;
let row2Total;
let x1;
let y1;
let x2;
let y2;
autorun(() => {
  x1 = parseInt(table1.getCell(0, 0).value.replaceAll('$', ''));
  y1 = parseInt(table1.getCell(0, 1).value.replaceAll('$', ''));
  x2 = parseInt(table1.getCell(1, 0).value.replaceAll('$', ''));
  y2 = parseInt(table1.getCell(1, 1).value.replaceAll('$', ''));
  row1Total = 2 * x1 + 3 * y1;
  row2Total = 2 * x2 + 3 * y2;
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-dc880babda70', {
      x1,
      y1,
      x2,
      y2,
      row1Total,
      row2Total,
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":4,"buttongroup":1,"separator":1,"table":1},"stage":"Launch","lessonInfo":"8 M4 TC L12 - Solutions to Linear Equations in Two Variables","teacherView":false,"layout":"two col"}
*/
