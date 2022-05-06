const { ggb1, ggb2, text1, text2, text3, text4, text5, buttonGroup1, buttonGroup2, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('timeScreenAdjust', timeScreenAdjustListener);
ggb2.instance.registerObjectUpdateListener('DragLeft', dragLeftRightUpdate);
ggb2.instance.registerObjectUpdateListener('DragRight', dragLeftRightUpdate);

let id1 = 'slide-38970a3bd72b';

let hypotSquared = 8;
let roundingPlace = 5;
let currentSquareFilling = ggb1.instance.getFilling('squareA');

slide.on('firstload', () => {
  let low = ggb2.instance.getValue('dragLeftCurrentVal');
  let high = ggb2.instance.getValue('dragRightCurrentVal');
  text2.updateData({ text: `$${low}^2<(\\sqrt{${hypotSquared}})^2<${high}^2$\n\n$${round(low ** 2, roundingPlace)}<${hypotSquared}<${round(high ** 2, roundingPlace)}$` });
  text3.updateData({ visible: false });
  text4.updateData({ visible: false });
  text5.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true, outline: true }, 2);
  buttonGroup2.updateData({ visible: false });
  button1.updateData({ align: 'right', visible: false });
  ggb1.instance.setValue('speedScreenAdjust', 7);
  ggb1.instance.setTextValue('sideCLabelTextHolder', `\\sqrt{${hypotSquared}}`);
  ggb1.instance.setVisible('sideALabel', true);
  ggb1.instance.setVisible('sideBLabel', true);
  ggb1.instance.setVisible('sideCLabelShown', true);
  ggb2.instance.setColor('DragApprox', 130, 63, 152);
  ggb1.instance.setAnimating('timeScreenAdjust', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:1', () => {
  let low = ggb2.instance.getValue('dragLeftCurrentVal');
  let high = ggb2.instance.getValue('dragRightCurrentVal');
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setValue('lowSquareLength', low);
  ggb1.instance.setValue('highSquareLength', high);
  ggb2.instance.setFixed('DragLeft', true, false);
  ggb2.instance.setFixed('DragRight', true, false);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('timeStudentSquare', 0);
  ggb1.instance.setAnimating('timeStudentSquare', true);
  ggb1.instance.registerObjectUpdateListener('timeStudentSquare', timeStudentSquareListener);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  ggb2.instance.setFixed('DragLeft', false, true);
  ggb2.instance.setFixed('DragRight', false, true);
  ggb2.instance.setVisible('DragApprox', false);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('timeStudentSquare', 0);
  ggb1.instance.setAnimating('timeStudentSquare', false);
  ggb1.instance.unregisterObjectUpdateListener('timeStudentSquare');
  text3.updateData({ visible: false });
  text4.updateData({ visible: false });
  text5.updateData({ visible: false });
  buttonGroup2.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
  buttonGroup2.updateSingleButton({ disabled: false }, 2);
  button1.updateData({ visible: false, disabled: false });
});

buttonGroup2.on('click:1', () => {
  ggb2.instance.setVisible('DragApprox', false);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  let low = ggb2.instance.getValue('dragLeftCurrentVal');
  let high = ggb2.instance.getValue('dragRightCurrentVal');
  //if inequality is not true
  if (!(round(low ** 2, roundingPlace) < hypotSquared) || !(hypotSquared < round(high ** 2, roundingPlace))) {
    text5.updateData({ visible: true, text: 'Not yet. Determine the two consecutive whole numbers that make the inequalities true.' });
    ggb2.instance.setFixed('DragLeft', false, true);
    ggb2.instance.setFixed('DragRight', false, true);
  }
  // if inequality is true but interval too large
  else if (ggb2.instance.getValue('numDivCurrent') - ggb2.instance.getValue('dragRightPrevIndex') - ggb2.instance.getValue('dragLeftPrevIndex') != -1) {
    text5.updateData({ visible: true, text: 'Your inequality is true but the left and right values are not consecutive whole numbers. Try again.' });
    ggb2.instance.setFixed('DragLeft', false, true);
    ggb2.instance.setFixed('DragRight', false, true);
  }
  // if inequality is true and interval is correct size
  else {
    text5.updateData({ visible: true, text: `Plot a point at the approximate location where think $\\sqrt{8}$ lies on the number line.` });
    ggb2.instance.setVisible('DragApprox', true);
    button1.updateData({ visible: true });
  }
});

buttonGroup2.on('click:2', () => {
  text5.updateData({ visible: true, text: 'Determine the two consecutive whole numbers that make the inequalities true.' });
  ggb2.instance.setFixed('DragLeft', false, true);
  ggb2.instance.setFixed('DragRight', false, true);
  ggb2.instance.setVisible('DragApprox', false);
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
  button1.updateData({ visible: false });
});

button1.on('click', () => {
  button1.updateData({ disabled: true });
  utils.RTS.sendData(id1, {
    points: [ggb2.instance.getXcoord('DragApprox'), ggb2.instance.getYcoord('DragApprox')],
  });
});

function dragLeftRightUpdate() {
  let low = ggb2.instance.getValue('dragLeftCurrentVal');
  let high = ggb2.instance.getValue('dragRightCurrentVal');
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('timeStudentSquare', 0);
  ggb1.instance.setAnimating('timeStudentSquare', false);
  ggb1.instance.unregisterObjectUpdateListener('timeStudentSquare');
  text2.updateData({ text: `$${low}^2<(\\sqrt{${hypotSquared}})^2<${high}^2$\n\n$${round(low ** 2, 3)}<8<${round(high ** 2, 3)}$` });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
  buttonGroup2.updateSingleButton({ disabled: false }, 2);
  text3.updateData({ visible: false });
  text4.updateData({ visible: false });
  text5.updateData({ visible: false });
  buttonGroup2.updateData({ visible: false });
  button1.updateData({ visible: false, disabled: false });
}

function timeScreenAdjustListener() {
  let timeScreenAdjust = ggb1.instance.getValue('timeScreenAdjust');
  ggb1.instance.setFilling('squareA', (1 - timeScreenAdjust) * currentSquareFilling);
  ggb1.instance.setFilling('squareB', (1 - timeScreenAdjust) * currentSquareFilling);
  if (ggb1.instance.getValue('timeScreenAdjust') == 1) {
    ggb1.instance.setVisible('sideALabel', false);
    ggb1.instance.setVisible('sideBLabel', false);
    ggb1.instance.setLineThickness('squareA', 0);
    ggb1.instance.setLineThickness('squareB', 0);
    ggb1.instance.setAnimating('timeScreenAdjust', false);
    ggb1.instance.unregisterObjectUpdateListener('timeScreenAdjust');
  }
}

function timeStudentSquareListener() {
  if (ggb1.instance.getValue('timeStudentSquare') == 1) {
    let low = ggb2.instance.getValue('dragLeftCurrentVal');
    let high = ggb2.instance.getValue('dragRightCurrentVal');
    text3.updateData({ visible: true });
    text4.updateData({ visible: true, text: `$${low}<\\sqrt{${hypotSquared}}<${high}$` });
    buttonGroup2.updateData({ visible: true });
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    ggb1.instance.unregisterObjectUpdateListener('timeStudentSquareListener');
  }
}

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
