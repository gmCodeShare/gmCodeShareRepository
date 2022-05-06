const { ggb1, ggb2, select1, select2, table1, button1 } = components;

slide.on('firstload', () => {
  ggb2.updateData({ visible: false });
  select1.selectOption('0');
  ggb1.instance.setErrorDialogsActive(false);
  ggb2.instance.setErrorDialogsActive(false);
});

let linearResiduals = [];
let linearResidualValues = [];
let exponentialResiduals = [];
let exponentialResidualValues = [];
let quadraticResiduals = [];
let quadraticResidualValues = [];

ggb1.instance.registerObjectUpdateListener('showResiduals', showResiduals);
ggb2.instance.registerObjectUpdateListener(
  'showResidualPlot',
  showResidualPlot
);

button1.on('click', () => {
  ggb1.instance.evalCommand('data={}');
  ggb2.instance.evalCommand('linearData={}');
  ggb2.instance.evalCommand('exponentialData={}');
  ggb2.instance.evalCommand('quadraticData={}');
  clearResiduals();
  for (var i = 0, L = table1.data.rows.length; i < L; i++) {
    ggb1.instance.evalCommand(
      `SetValue(data, Append(data, (${table1.getCell(i, 0).value},${
        table1.getCell(i, 1).value
      })))`
    );
  }
  createResiduals();
  showResiduals();
  createResidualPlot();
  showResidualPlot();
  styleResiduals();
  ggb1.instance.setVisible('data', true);
  adjustAxes();
  tableWork();
  if (
    table1.data.columns[0].value != '' &&
    table1.data.columns[1].value != ''
  ) {
    let xText = table1.data.columns[0].value;
    let yText = table1.data.columns[1].value;
    ggb1.instance.setValue('showAxesLabels', true);
    ggb1.instance.evalCommand(`xAxisLabel=RotateText("${xText}", 0°)`);
    ggb1.instance.evalCommand(`yAxisLabel=RotateText("${yText}", 90°)`);
  } else {
    ggb1.instance.setValue('showAxesLabels', false);
  }
  button1.updateData({ disabled: true, text: 'Submitted' });
});

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setValue('linear', true);
  } else {
    ggb1.instance.setValue('linear', false);
  }
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setValue('exponential', true);
    select2.unselectOption('3');
  } else {
    ggb1.instance.setValue('exponential', false);
  }
  if (select1.data.selected.includes('2')) {
    ggb1.instance.setValue('quadratic', true);
    select2.unselectOption('3');
  } else {
    ggb1.instance.setValue('quadratic', false);
  }
  showResiduals();
  showResidualPlot();
});

select2.on('change', (selected) => {
  if (select2.data.selected.includes('0')) {
    ggb1.instance.setValue('showFit', true);
  } else {
    ggb1.instance.setValue('showFit', false);
  }
  if (select2.data.selected.includes('1')) {
    ggb1.instance.setValue('showResiduals', true);
    ggb1.instance.setValue('showFit', true);
  } else {
    ggb1.instance.setValue('showResiduals', false);
  }
  if (select2.data.selected.includes('2')) {
    ggb1.instance.setValue('showEquation', true);
  } else {
    ggb1.instance.setValue('showEquation', false);
  }
  if (select2.data.selected.includes('3')) {
    ggb1.instance.setValue('showR', true);
  } else {
    ggb1.instance.setValue('showR', false);
  }
  if (select2.data.selected.includes('4')) {
    ggb2.instance.setValue('showResidualPlot', true);
    ggb2.updateData({ visible: true });
  } else {
    ggb2.instance.setValue('showResidualPlot', false);
    ggb2.updateData({ visible: false });
  }
});

function clearResiduals() {
  for (var i = 0, J = linearResiduals.length; i < J; i++) {
    ggb1.instance.deleteObject(linearResiduals[i]);
    ggb1.instance.deleteObject(exponentialResiduals[i]);
    ggb1.instance.deleteObject(quadraticResiduals[i]);
    ggb1.instance.deleteObject(linearResidualValues[i]);
    ggb1.instance.deleteObject(exponentialResidualValues[i]);
    ggb1.instance.deleteObject(quadraticResidualValues[i]);
  }
  linearResiduals = [];
  exponentialResiduals = [];
  quadraticResiduals = [];
  linearResidualValues = [];
  exponentialResidualValues = [];
  quadraticResidualValues = [];
}

function createResiduals() {
  for (var i = 0, L = table1.data.rows.length; i < L; i++) {
    linRes = ggb1.instance.evalCommandGetLabels(
      `Segment(Element(data, ${
        i + 1
      }), Intersect(linearFit, x = x(Element(data, ${i + 1}))))`
    );
    linResVal = ggb1.instance.evalCommandGetLabels(
      `y(Vector(Intersect(linearFit, x = x(Element(data, ${
        i + 1
      }))),Element(data, ${i + 1})))`
    );
    expRes = ggb1.instance.evalCommandGetLabels(
      `Segment(Element(data, ${
        i + 1
      }), Intersect(exponentialFit, x = x(Element(data, ${i + 1}))))`
    );
    expResVal = ggb1.instance.evalCommandGetLabels(
      `y(Vector(Intersect(exponentialFit, x = x(Element(data, ${
        i + 1
      }))),Element(data, ${i + 1})))`
    );
    quadRes = ggb1.instance.evalCommandGetLabels(
      `Segment(Element(data, ${
        i + 1
      }), Intersect(quadraticFit, x = x(Element(data, ${i + 1}))))`
    );
    quadResVal = ggb1.instance.evalCommandGetLabels(
      `y(Vector(Intersect(quadraticFit, x = x(Element(data, ${
        i + 1
      }))),Element(data, ${i + 1})))`
    );
    linearResiduals.push(linRes);
    linearResidualValues.push(linResVal);
    exponentialResiduals.push(expRes);
    exponentialResidualValues.push(expResVal);
    quadraticResiduals.push(quadRes);
    quadraticResidualValues.push(quadResVal);
  }
}

function showResiduals() {
  if (ggb1.instance.getValue('showResiduals')) {
    if (ggb1.instance.getValue('linear')) {
      for (var i = 0, J = linearResiduals.length; i < J; i++) {
        ggb1.instance.setVisible(linearResiduals[i], true);
        ggb1.instance.setVisible(exponentialResiduals[i], false);
        ggb1.instance.setVisible(quadraticResiduals[i], false);
      }
    } else if (ggb1.instance.getValue('exponential')) {
      for (var i = 0, J = exponentialResiduals.length; i < J; i++) {
        ggb1.instance.setVisible(linearResiduals[i], false);
        ggb1.instance.setVisible(exponentialResiduals[i], true);
        ggb1.instance.setVisible(quadraticResiduals[i], false);
      }
    } else if (ggb1.instance.getValue('quadratic')) {
      for (var i = 0, J = quadraticResiduals.length; i < J; i++) {
        ggb1.instance.setVisible(linearResiduals[i], false);
        ggb1.instance.setVisible(exponentialResiduals[i], false);
        ggb1.instance.setVisible(quadraticResiduals[i], true);
      }
    }
  } else {
    for (var i = 0, J = linearResiduals.length; i < J; i++) {
      ggb1.instance.setVisible(linearResiduals[i], false);
      ggb1.instance.setVisible(exponentialResiduals[i], false);
      ggb1.instance.setVisible(quadraticResiduals[i], false);
    }
  }
  tableWork();
}

function createResidualPlot() {
  for (var i = 0, L = table1.data.rows.length; i < L; i++) {
    ggb2.instance.evalCommand(
      `SetValue(linearData, Append(linearData, (${
        table1.getCell(i, 0).value
      },${ggb1.instance.getValue(linearResidualValues[i])})))`
    );
    ggb2.instance.evalCommand(
      `SetValue(exponentialData, Append(exponentialData, (${
        table1.getCell(i, 0).value
      },${ggb1.instance.getValue(exponentialResidualValues[i])})))`
    );
    ggb2.instance.evalCommand(
      `SetValue(quadraticData, Append(quadraticData, (${
        table1.getCell(i, 0).value
      },${ggb1.instance.getValue(quadraticResidualValues[i])})))`
    );
  }
}

function showResidualPlot() {
  if (ggb2.instance.getValue('showResidualPlot')) {
    if (ggb1.instance.getValue('linear')) {
      ggb2.instance.setVisible('linearData', true);
      ggb2.instance.setVisible('exponentialData', false);
      ggb2.instance.setVisible('quadraticData', false);
    } else if (ggb1.instance.getValue('exponential')) {
      ggb2.instance.setVisible('linearData', false);
      ggb2.instance.setVisible('exponentialData', true);
      ggb2.instance.setVisible('quadraticData', false);
    } else if (ggb1.instance.getValue('quadratic')) {
      ggb2.instance.setVisible('linearData', false);
      ggb2.instance.setVisible('exponentialData', false);
      ggb2.instance.setVisible('quadraticData', true);
    }
  } else {
    ggb2.instance.setVisible('linearData', false);
    ggb2.instance.setVisible('exponentialData', false);
    ggb2.instance.setVisible('quadraticData', false);
  }
}

function styleResiduals() {
  for (var i = 0, J = linearResiduals.length; i < J; i++) {
    if (ggb1.instance.getValue(linearResidualValues[i]) > 0) {
      ggb1.instance.setColor(linearResiduals[i], 0, 129, 57);
    } else {
      ggb1.instance.setColor(linearResiduals[i], 218, 41, 28);
    }
    if (ggb1.instance.getValue(exponentialResidualValues[i]) > 0) {
      ggb1.instance.setColor(exponentialResiduals[i], 0, 129, 57);
    } else {
      ggb1.instance.setColor(exponentialResiduals[i], 218, 41, 28);
    }
    if (ggb1.instance.getValue(quadraticResidualValues[i]) > 0) {
      ggb1.instance.setColor(quadraticResiduals[i], 0, 129, 57);
    } else {
      ggb1.instance.setColor(quadraticResiduals[i], 218, 41, 28);
    }
    ggb1.instance.setLayer(linearResiduals[i], 0);
    ggb1.instance.setLayer(exponentialResiduals[i], 0);
    ggb1.instance.setLayer(quadraticResiduals[i], 0);
    ggb1.instance.setFixed(linearResiduals[i], false, false);
    ggb1.instance.setFixed(exponentialResiduals[i], false, false);
    ggb1.instance.setFixed(quadraticResiduals[i], false, false);
  }
}

function adjustAxes() {
  if (ggb1.instance.getValue('maxXData') > 10) {
    ggb1.instance.setValue('xmax', ggb1.instance.getValue('maxXData') + 20);
    ggb2.instance.setValue('xmax', ggb1.instance.getValue('maxXData') + 20);
  } else {
    ggb1.instance.setValue('xmax', 11);
    ggb2.instance.setValue('xmax', 11);
  }
  if (ggb1.instance.getValue('maxYData') > 10) {
    ggb1.instance.setValue('ymax', ggb1.instance.getValue('maxYData') + 20);
  } else {
    ggb1.instance.setValue('ymax', 11);
  }
  if (ggb2.instance.getValue('overallMaxY') > 10) {
    ggb2.instance.setValue('ymax', ggb2.instance.getValue('overallMaxY') + 20);
  } else {
    ggb2.instance.setValue('ymax', 11);
  }
}

function tableWork() {
  if (ggb1.instance.getValue('showResiduals')) {
    if (table1.data.columns.length == 2) {
      table1.addCol();
    }
    table1.updateHeader(2, {
      editable: {
        colums: false,
        rows: false,
      },
      value: 'Residual',
      type: 'singleline',
    });
    if (ggb1.instance.getValue('linear')) {
      for (var i = 0, L = table1.data.rows.length; i < L; i++) {
        table1.updateCell(i, 2, {
          value: `$${
            Math.round(ggb1.instance.getValue(linearResidualValues[i]) * 1000) /
            1000
          }$`,
          editable: false,
        });
      }
    } else if (ggb1.instance.getValue('exponential')) {
      for (var i = 0, L = table1.data.rows.length; i < L; i++) {
        table1.updateCell(i, 2, {
          value: `$${
            Math.round(
              ggb1.instance.getValue(exponentialResidualValues[i]) * 1000
            ) / 1000
          }$`,
          editable: false,
        });
      }
    } else if (ggb1.instance.getValue('quadratic')) {
      for (var i = 0, L = table1.data.rows.length; i < L; i++) {
        table1.updateCell(i, 2, {
          value: `$${
            Math.round(
              ggb1.instance.getValue(quadraticResidualValues[i]) * 1000
            ) / 1000
          }$`,
          editable: false,
        });
      }
    }
  } else {
    table1.deleteCol(2);
  }
}

autorun(() => {
  let entries = [];
  for (let i = 0, L = 2; i < L; i++) {
    for (let j = 0, L = table1.data.rows.length; j < L; j++) {
      entries.push(table1.getCell(j, i).value);
    }
  }
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      align: 'right',
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: [...entries] });
    for (var i = 0, L = table1.data.rows.length; i < L; i++) {
      table1.updateCell(i, 2, {
        editable: false,
      });
    }
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
