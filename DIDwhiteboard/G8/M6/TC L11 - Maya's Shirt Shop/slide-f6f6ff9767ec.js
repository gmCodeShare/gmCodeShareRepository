const { ggb1, feedback1, text1, table1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let focusArray = ['xMinusFocus', 'xPlusFocus', 'yMinusFocus', 'yPlusFocus'];

let pointList = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10'];

ggb1.instance.registerClientListener(indicators);

ggb1.instance.registerObjectClickListener('defaultXMinus', readXMinus);
ggb1.instance.registerObjectClickListener('defaultXPlus', readXPlus);
ggb1.instance.registerObjectClickListener('defaultYMinus', readYMinus);
ggb1.instance.registerObjectClickListener('defaultYPlus', readYPlus);

function indicators(a) {
  if (a.type == 'select') {
    if (a.target == 'defaultXMinus') {
      ggb1.instance.setVisible('xMinusFocus', true);
    } else {
      ggb1.instance.setVisible('xMinusFocus', false);
    }
    if (a.target == 'defaultXPlus') {
      ggb1.instance.setVisible('xPlusFocus', true);
    } else {
      ggb1.instance.setVisible('xPlusFocus', false);
    }
    if (a.target == 'defaultYMinus') {
      ggb1.instance.setVisible('yMinusFocus', true);
    } else {
      ggb1.instance.setVisible('yMinusFocus', false);
    }
    if (a.target == 'defaultYPlus') {
      ggb1.instance.setVisible('yPlusFocus', true);
    } else {
      ggb1.instance.setVisible('yPlusFocus', false);
    }
    if (ggb1.instance.getObjectType(a[1]) == 'point') {
      ggb1.instance.setLabelVisible(a[1], true);
    }
  }
  if (a.type == 'deselect') {
    for (let i = 0, L = focusArray.length; i < L; i++) {
      ggb1.instance.setVisible(focusArray[i], false);
    }
    for (let i = 0, L = pointList.length; i < L; i++) {
      ggb1.instance.setLabelVisible(pointList[i], false);
    }
  }
}

function readXMinus() {
  ggb1.instance.setValue('xMax', ggb1.instance.getValue('xMax') - 1);
  ggb1.instance.evalCommand('ReadText(xMinusButtonText)');
}

function readXPlus() {
  ggb1.instance.setValue('xMax', ggb1.instance.getValue('xMax') + 1);
  ggb1.instance.evalCommand('ReadText(xPlusButtonText)');
}

function readYMinus() {
  ggb1.instance.setValue('yMax', ggb1.instance.getValue('yMax') - 1);
  ggb1.instance.evalCommand('ReadText(yMinusButtonText)');
}

function readYPlus() {
  ggb1.instance.setValue('yMax', ggb1.instance.getValue('yMax') + 1);
  ggb1.instance.evalCommand('ReadText(yPlusButtonText)');
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1},"stage":"Learn","lessonInfo":"8 M6 TC L11 - Scatter Plots","teacherView":false,"layout":"two col"}
*/
