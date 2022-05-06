const {
  table1,
  ggb1,
  feedback1,
  cc_submit_92d27642f1e4_textbox1: submitText1,
  cc_submit_92d27642f1e4_input1: submitInput1,
  cc_submit_92d27642f1e4_button1: submitButton1,
  separator3,
  cc_sharewithclass_d18937bea98a_textbox1: shareText1,
  cc_sharewithclass_d18937bea98a_input1: shareInput1,
  cc_sharewithclass_d18937bea98a_button1: shareButton1,
  cc_sharewithclass_d18937bea98a_studentanswers1,
} = components;

onInit();
function onInit() {
  if (!table1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({
      visible: false,
      text: 't=',
    });
    shareButton1.updateData({ visible: false });
    ggb1.updateData({ visible: false });
    table1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

ggb1.instance.setErrorDialogsActive(false);

function undoLaTeX(inp) {
  let frac = inp.replace(/\\frac{/, '(');
  let fracMid = frac.replace(/\}\{/, ')/(');
  let leftParen = fracMid.replace(/\\left/g, '');
  let rightParen = leftParen.replace(/\\right/g, '');
  let absLeft = rightParen.replace(/\|/, 'abs(');
  let absRight = absLeft.replace(/\|/, ')');
  let squirtLeft = absRight.replace(/\\sqrt\{/, 'sqrt(');
  let cbrtLeft = squirtLeft.replace(/\\sqrt\[3\]\{/, 'cbrt(');
  let brackRight = cbrtLeft.replace(/\}/g, ')');
  let brackLeft = brackRight.replace(/\{/g, '(');
  let lessThan = brackLeft.replace(/\\le/g, '<=');
  let greaterThan = lessThan.replace(/\\ge/g, '>=');
  let cDot = greaterThan.replace(/\\cdot/g, '*');
  let finalAnswer = cDot;
  return finalAnswer;
}

shareButton1.on('click', () => {
  // get and check input
  const eqn = shareInput1.data.text;
  let GGBready = undoLaTeX(eqn)
    .replaceAll('t', 'y')
    .replaceAll('n', 'x')
    .replaceAll(' ', '');
  let madeDummy = ggb1.instance.evalCommand(`dummyObject: ${GGBready}`);
  let dummyType = ggb1.instance.getObjectType('dummyObject');
  ggb1.instance.deleteObject('dummyObject');
  if (!madeDummy || dummyType != 'line') {
    return;
  }
  let madeFunc = ggb1.instance.evalCommand(`f: ${GGBready}`);
  let slopeForm = GGBready.substring(0, 2) == 'y=';
  if (!madeFunc || !slopeForm) {
    return;
  }
  if (table1.data.columns.length < 3) {
    table1.addCol();
    table1.updateCol(2, { editable: false, math: true });
  }
  table1.updateHeader(2, {
    editable: false,
    value: `$${eqn}$`,
  });
  for (let i = 0, L = table1.data.rows.length - 1; i < L; i++) {
    let val = ggb1.instance.getValue(`f(${i + 1})`);
    table1.updateCell(i, 2, { value: `${val}` });
  }
  ggb1.instance.deleteObject('f');
  table1.updateCell(table1.data.rows.length - 1, 1, {
    value: eqn.replaceAll('t=', ''),
  });
  table1.updateCell(table1.data.rows.length - 1, 2, {
    value: '...',
  });
});

/*
{"compTotals":{"table":1,"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TE L23 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
