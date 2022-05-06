const {
  ggb1,
  feedback1,
  text1,
  table1,
  button1,
  separator1,
  cc_sharewithclass_bfa6343aa501_textbox1: shareText1,
  cc_sharewithclass_bfa6343aa501_input1: shareInput1,
  cc_sharewithclass_bfa6343aa501_button1: shareButton1,
  cc_sharewithclass_bfa6343aa501_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue('showTriangleB', true);
ggb1.instance.setValue('showQuestionMark', false);
ggb1.instance.setValue('scaleFactor', 0.25);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false, align: 'right' });
    shareAnswers1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let PointA = ggb1.innerData['A'];
  let PointB = ggb1.innerData['B'];
  let PointC = ggb1.innerData['C'];
  table1.updateCell(0, 0, { value: ggb1.instance.getValue('lengthA') });
  table1.updateCell(1, 0, { value: ggb1.instance.getValue('lengthB') });
  table1.updateCell(2, 0, { value: ggb1.instance.getValue('lengthC') });
  table1.updateCell(0, 1, {
    value:
      ggb1.instance.getValue('lengthA') * ggb1.instance.getValue('scaleFactor'),
  });
  table1.updateCell(1, 1, {
    value:
      ggb1.instance.getValue('lengthB') * ggb1.instance.getValue('scaleFactor'),
  });
  table1.updateCell(2, 1, {
    value:
      ggb1.instance.getValue('lengthC') * ggb1.instance.getValue('scaleFactor'),
  });
  ggb1.instance.setValue('aLength', ggb1.instance.getValue('lengthA'));
  ggb1.instance.setValue('bLength', ggb1.instance.getValue('lengthB'));
  ggb1.instance.setValue('cLength', ggb1.instance.getValue('lengthC'));
});

button1.on('click', () => {
  if (
    utils.math.evaluateLatex(table1.getCell(0, 2).value.replace('\\%', '*0.01'))
      .value != ggb1.instance.getValue('scaleFactor')
  ) {
    table1.updateCell(0, 2, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(0, 2, { className: '' });
  }
  if (
    utils.math.evaluateLatex(table1.getCell(1, 2).value.replace('\\%', '*0.01'))
      .value != ggb1.instance.getValue('scaleFactor')
  ) {
    table1.updateCell(1, 2, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(1, 2, { className: '' });
  }
  if (
    utils.math.evaluateLatex(table1.getCell(2, 2).value.replace('\\%', '*0.01'))
      .value != ggb1.instance.getValue('scaleFactor')
  ) {
    table1.updateCell(2, 2, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(2, 2, { className: '' });
  }
  button1.updateData({ disabled: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareAnswers1.updateData({ visible: true });
});

autorun(() => {
  let entries = table1.data.rows
    .map((row) => row.map((cell) => cell.value))
    .flat();
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({ disabled: !entries.every((value) => !!value) }, 2);
    table1.updateData({ last: [...entries] });
  }
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
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"button":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M5 TA L02 - Racing for Percents","teacherView":false,"layout":"two col"}
*/
