const { ggb1, ggb2, text1, text2, text3, text4, text5, text6, button1, button2, buttonGroup1, buttonGroup2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb2.instance.registerObjectUpdateListener('time', timeGGB2Listener);
ggb2.instance.registerObjectUpdateListener('DragLeft', dragLeftRightUpdate);
ggb2.instance.registerObjectUpdateListener('DragRight', dragLeftRightUpdate);

let hypotSquared = 8;
let roundingPlace = 5;
let indexInitGGBLeft = 3;
let indexInitGGBRight = indexInitGGBLeft + 1;
let dragPointsYVal = 1;
let newNumOfZooms = 1;

slide.on('firstload', () => {
  let low = ggb2.instance.getValue('dragLeftCurrentVal');
  let high = ggb2.instance.getValue('dragRightCurrentVal');
  ggb1.instance.setValue('timeScreenAdjust', 1);
  ggb1.instance.setFilling('squareA', 0);
  ggb1.instance.setFilling('squareB', 0);
  ggb1.instance.setVisible('sideALabel', false);
  ggb1.instance.setVisible('sideBLabel', false);
  ggb1.instance.setLineThickness('squareA', 0);
  ggb1.instance.setLineThickness('squareB', 0);
  ggb1.instance.setTextValue('sideCLabelTextHolder', `\\sqrt{${hypotSquared}}`);
  ggb1.instance.setVisible('sideCLabelShown', true);
  ggb2.instance.setCoords('DragLeft', ggb2.instance.getValue(`dragPointsXVals(${indexInitGGBLeft})`), dragPointsYVal);
  ggb2.instance.setCoords('DragRight', ggb2.instance.getValue(`dragPointsXVals(${indexInitGGBRight})`), dragPointsYVal);
  ggb2.instance.setFixed('DragLeft', false, false);
  ggb2.instance.setFixed('DragRight', false, false);
  ggb2.instance.setColor('DragApprox', 130, 63, 152);
  text2.updateData({ visible: false });
  text3.updateData({ visible: false, text: `$${low}^2<(\\sqrt{${hypotSquared}})^2<${high}^2$\n\n$${round(low ** 2, 3)}<8<${round(high ** 2, 3)}$` });
  text4.updateData({ visible: false });
  text5.updateData({ visible: false });
  text6.updateData({ visible: false });
  text6.updateData({ visible: false });
  button2.updateData({ visible: false });
  buttonGroup1.updateData({ visible: false });
  buttonGroup2.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ outline: true }, 2);
});

button1.on('click', () => {
  let minNext = ggb2.instance.getValue('dragLeftCurrentVal');
  let maxNext = ggb2.instance.getValue('dragRightCurrentVal');
  button1.updateData({ disabled: true });
  ggb2.instance.stopAnimation();
  saveData({ dragLeftCurrentValStored: minNext, dragRightCurrentValStored: maxNext }, 'ggb2');
  ggb2.instance.setValue('maxNext', maxNext);
  ggb2.instance.setValue('minNext', minNext);
  ggb2.instance.setValue('time', 0);
  saveData({ animationComplete: false }, 'ggb2');
  ggb2.instance.setVisible('segsNext', true);
  ggb2.instance.setVisible('segsCurrent', false);
  ggb2.instance.setVisible('textNext', true);
  ggb2.instance.setVisible('DragLeft', false);
  ggb2.instance.setVisible('DragRight', false);
  ggb2.instance.setVisible('textCurrent', false);
  ggb2.instance.setAnimating('time', true);
  ggb2.instance.startAnimation();
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
  text6.updateData({ visible: false });
  buttonGroup2.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
  buttonGroup2.updateSingleButton({ disabled: false }, 2);
});

buttonGroup2.on('click:1', () => {
  let low = ggb2.instance.getValue('dragLeftCurrentVal');
  let high = ggb2.instance.getValue('dragRightCurrentVal');
  ggb2.instance.setVisible('DragApprox', false);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  //if inequality is not true
  if (!(round(low ** 2, roundingPlace) < hypotSquared) || !(hypotSquared < round(high ** 2, roundingPlace))) {
    text6.updateData({ visible: true, text: 'Not yet. Determine the two consecutive tenths that make the inequalities true.' });
    ggb2.instance.setFixed('DragLeft', false, true);
    ggb2.instance.setFixed('DragRight', false, true);
  }
  // if inequality is true but interval too large
  else if (ggb2.instance.getValue('numDivCurrent') - ggb2.instance.getValue('dragRightPrevIndex') - ggb2.instance.getValue('dragLeftPrevIndex') != -1) {
    text6.updateData({ visible: true, text: 'Your inequality is true but the left and right values are not consecutive tenths.' });
    ggb2.instance.setFixed('DragLeft', false, true);
    ggb2.instance.setFixed('DragRight', false, true);
  }
  // if inequality is true and interval is correct size
  else {
    text6.updateData({ visible: true, text: `Plot a point at the approximate location where you think $\\sqrt{${hypotSquared}}$ lies on the number line.` });
    ggb2.instance.setVisible('DragApprox', true);
    button2.updateData({ visible: true });
  }
});

buttonGroup2.on('click:2', () => {
  text6.updateData({ visible: true, text: 'Determine the two consecutive whole numbers that make the inequalities true.' });
  ggb2.instance.setFixed('DragLeft', false, true);
  ggb2.instance.setFixed('DragRight', false, true);
  ggb2.instance.setVisible('DragApprox', false);
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
  button2.updateData({ disabled: false });
});

button2.on('click', () => {
  button2.updateData({ disabled: true });
});

function dragLeftRightUpdate() {
  if (getData('animationComplete', 'ggb2')) {
    let low = ggb2.instance.getValue('dragLeftCurrentVal');
    let high = ggb2.instance.getValue('dragRightCurrentVal');
    ggb1.instance.setValue('timeStudentSquare', 0);
    ggb1.instance.setAnimating('timeStudentSquare', false);
    ggb1.instance.unregisterObjectUpdateListener('timeStudentSquare');
    text2.updateData({ visible: true });
    text3.updateData({ visible: true, text: `$${low}^2<(\\sqrt{${hypotSquared}})^2<${high}^2$\n\n$${round(low ** 2, 3)}<8<${round(high ** 2, 3)}$` });
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateData({ visible: true });
    buttonGroup2.updateSingleButton({ disabled: false }, 1);
    buttonGroup2.updateSingleButton({ disabled: false }, 2);
    buttonGroup2.updateData({ visible: false });
    button2.updateData({ disabled: false });
    text4.updateData({ visible: false });
    text5.updateData({ visible: false });
    text6.updateData({ visible: false });
  }
}

function timeGGB2Listener() {
  if (ggb2.instance.getValue('time') == 1) {
    ggb2.instance.setValue('numOfZooms', newNumOfZooms);
    ggb2.instance.setVisible('segsNext', false);
    ggb2.instance.setVisible('segsCurrent', true);
    ggb2.instance.setVisible('textNext', false);
    ggb2.instance.setVisible('textCurrent', true);
    ggb2.instance.setFixed('DragLeft', false, true);
    ggb2.instance.setFixed('DragRight', false, true);
    ggb2.instance.setCoords('DragLeft', ggb2.instance.getValue(`dragPointsXVals(1)`), dragPointsYVal);
    ggb2.instance.setCoords('DragRight', ggb2.instance.getValue(`dragPointsXVals(${ggb2.instance.getValue('numDivNext')})`), dragPointsYVal);
    ggb2.instance.setValue('minPrev', ggb2.instance.getValue('minCurrent'));
    ggb2.instance.setValue('minCurrent', ggb2.instance.getValue('minNext'));
    ggb2.instance.setValue('maxPrev', ggb2.instance.getValue('maxCurrent'));
    ggb2.instance.setValue('maxCurrent', ggb2.instance.getValue('maxNext'));
    ggb2.instance.setValue('time', 0);
    ggb2.instance.setVisible('DragLeft', true);
    ggb2.instance.setVisible('DragRight', true);
    saveData({ animationComplete: true }, 'ggb2');
  }
}

function timeStudentSquareListener() {
  if (ggb1.instance.getValue('timeStudentSquare') == 1) {
    let low = ggb2.instance.getValue('dragLeftCurrentVal');
    let high = ggb2.instance.getValue('dragRightCurrentVal');
    text4.updateData({ visible: true });
    text5.updateData({ visible: true, text: `$${low}<\\sqrt{${hypotSquared}}<${high}$` });
    buttonGroup2.updateData({ visible: true });
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    saveData({ animationComplete: true }, 'ggb2');
    ggb1.instance.unregisterObjectUpdateListener('timeStudentSquareListener');
  }
}

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function saveData(dataObj = {}, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataObj !== 'object') {
    console.error('saveData error: Parameters should be an object and a string!');
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataName !== 'string') {
    console.error('getData error: Parameters should both be strings!');
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}
