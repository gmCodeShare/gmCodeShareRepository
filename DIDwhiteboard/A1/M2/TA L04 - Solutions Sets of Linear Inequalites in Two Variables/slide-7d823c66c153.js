const {
  ggb1,
  feedback1,
  cc_submit_874bbad85ad1_textbox1,
  cc_submit_874bbad85ad1_input1,
  cc_submit_874bbad85ad1_button1: button1,
  separator2,
  cc_submit_23bbb03e6ba4_textbox1: text2,
  cc_submit_23bbb03e6ba4_input1: input2,
  cc_submit_23bbb03e6ba4_button1: button2,
} = components;

slide.on('firstload', () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

let focusObjects = [
  'homeFocusIndicator',
  'zoomInFocusIndicator',
  'zoomOutFocusIndicator',
];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerClientListener(focusIndicators);
ggb1.instance.registerObjectClickListener('defaultHome', homeClick);

function focusIndicators(a) {
  if (a.type == 'select') {
    if (a.target == 'defaultHome') {
      ggb1.instance.setVisible('homeFocusIndicator', true);
    } else {
      ggb1.instance.setVisible('homeFocusIndicator', false);
    }
    if (a.target == 'defaultZoomIn') {
      ggb1.instance.setVisible('zoomInFocusIndicator', true);
    } else {
      ggb1.instance.setVisible('zoomInFocusIndicator', false);
    }
    if (a.target == 'defaultZoomOut') {
      ggb1.instance.setVisible('zoomOutFocusIndicator', true);
    } else {
      ggb1.instance.setVisible('zoomOutFocusIndicator', false);
    }
  }
  if (a.type == 'deselect') {
    for (let i = 0, L = focusObjects.length; i < L; i++) {
      ggb1.instance.setVisible(focusObjects[i], false);
    }
  }
}

function homeClick() {
  ggb1.instance.evalCommand('ZoomIn()');
  ggb1.instance.setValue('showHome', false);
  ggb1.instance.setVisible('homeFocusIndicator', false);
}

button1.on('click', () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

button2.on('click', () => {
  let frac = input2.data.text.replace(/\\frac{/, '('); //replaces \frac{
  let fracMid = frac.replace(/\}\{/, ')/('); //replaces }{ from \frac{}{}
  let leftParen = fracMid.replace(/\\left/g, ''); //replaces \left part of parens
  let rightParen = leftParen.replace(/\\right/g, ''); //replaces \right part of parens
  let absLeft = rightParen.replace(/\|/, 'abs('); //replaces left bar for absolute value
  let absRight = absLeft.replace(/\|/, ')'); //replaces right bar for absolute value
  let squirtLeft = absRight.replace(/\\sqrt\{/, 'sqrt('); //replaces \sqrt for square root function
  let cbrtLeft = squirtLeft.replace(/\\sqrt\[3\]\{/, 'cbrt('); //replaces \sqrt[3]{} for cube root function
  let brackRight = cbrtLeft.replace(/\}/g, ')'); //replaces the right side brackets
  let brackLeft = brackRight.replace(/\{/g, '('); //replaces any remaining left side brackets
  let lessThan = brackLeft.replace(/\\le/g, '<='); //replaces less than
  let greaterThan = lessThan.replace(/\\ge/g, '>='); //replaces greater than
  let finalAnswer = greaterThan; /*.replace(//,"");*/ //empty in case of additions
  ggb1.instance.setVisible('a', false);
  ggb1.instance.deleteObject('b');
  ggb1.instance.evalCommand('b: ' + finalAnswer);
  ggb1.instance.setColor('b', 0, 127, 175);
  ggb1.instance.setFixed('b', true, false);
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":2,"separator":1},"stage":"Learn","lessonInfo":"9 M2 TA L04 - Solution Sets of Linear Inequalities in Two Variables","teacherView":false,"layout":"two col"}
*/
