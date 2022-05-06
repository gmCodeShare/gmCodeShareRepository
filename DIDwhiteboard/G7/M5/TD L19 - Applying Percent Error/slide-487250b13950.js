const { ggb1, separator1, buttongroup1, textDisplay5, table1, feedback1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.evalCommand('RunClickScript(newRouteButton)');
    table1.updateCell(0, 0, {
      value:
        ggb1.instance.getValueString(
          'AY' + ggb1.instance.getValue('numLocation1')
        ) +
        ', ' +
        ggb1.instance.getValueString(
          'AZ' + ggb1.instance.getValue('numLocation1')
        ),
    });
    table1.updateCell(0, 1, {
      value:
        ggb1.instance.getValueString(
          'AY' + ggb1.instance.getValue('numLocation2')
        ) +
        ', ' +
        ggb1.instance.getValueString(
          'AZ' + ggb1.instance.getValue('numLocation2')
        ),
    });
    buttongroup1.updateSingleButton({ disabled: true }, 1);
    ggb1.updateData({ init: true });
  }
}

buttongroup1.on('click:1', () => {
  ggb1.instance.setVisible('h', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  ggb1.instance.evalCommand('RunClickScript(newRouteButton)');
  buttongroup1.updateSingleButton({ disabled: true }, 1);
  buttongroup1.updateSingleButton({ disabled: false }, 2);
  if (ggb1.instance.getValue('count') == 1) {
    table1.updateCell(1, 0, {
      value:
        ggb1.instance.getValueString(
          'AY' + ggb1.instance.getValue('numLocation1')
        ) +
        ', ' +
        ggb1.instance.getValueString(
          'AZ' + ggb1.instance.getValue('numLocation1')
        ),
    });
    table1.updateCell(1, 1, {
      value:
        ggb1.instance.getValueString(
          'AY' + ggb1.instance.getValue('numLocation2')
        ) +
        ', ' +
        ggb1.instance.getValueString(
          'AZ' + ggb1.instance.getValue('numLocation2')
        ),
    });
  }
  if (ggb1.instance.getValue('count') == 2) {
    table1.updateCell(2, 0, {
      value:
        ggb1.instance.getValueString(
          'AY' + ggb1.instance.getValue('numLocation1')
        ) +
        ', ' +
        ggb1.instance.getValueString(
          'AZ' + ggb1.instance.getValue('numLocation1')
        ),
    });
    table1.updateCell(2, 1, {
      value:
        ggb1.instance.getValueString(
          'AY' + ggb1.instance.getValue('numLocation2')
        ) +
        ', ' +
        ggb1.instance.getValueString(
          'AZ' + ggb1.instance.getValue('numLocation2')
        ),
    });
  }
  if (ggb1.instance.getValue('count') == 3) {
    table1.updateCell(3, 0, {
      value:
        ggb1.instance.getValueString(
          'AY' + ggb1.instance.getValue('numLocation1')
        ) +
        ', ' +
        ggb1.instance.getValueString(
          'AZ' + ggb1.instance.getValue('numLocation1')
        ),
    });
    table1.updateCell(3, 1, {
      value:
        ggb1.instance.getValueString(
          'AY' + ggb1.instance.getValue('numLocation2')
        ) +
        ', ' +
        ggb1.instance.getValueString(
          'AZ' + ggb1.instance.getValue('numLocation2')
        ),
    });
  }
  if (ggb1.instance.getValue('count') == 4) {
    table1.updateCell(4, 0, {
      value:
        ggb1.instance.getValueString(
          'AY' + ggb1.instance.getValue('numLocation1')
        ) +
        ', ' +
        ggb1.instance.getValueString(
          'AZ' + ggb1.instance.getValue('numLocation1')
        ),
    });
    table1.updateCell(4, 1, {
      value:
        ggb1.instance.getValueString(
          'AY' + ggb1.instance.getValue('numLocation2')
        ) +
        ', ' +
        ggb1.instance.getValueString(
          'AZ' + ggb1.instance.getValue('numLocation2')
        ),
    });
  }
});

buttongroup1.on('click:2', () => {
  if (ggb1.instance.getValue('count') == 0) {
    let num = utils.math.evaluateLatex(table1.getCell(0, 2).value);
    if (num.value < 0 || num.error) {
      return;
    }
    ggb1.instance.setValue('studentEstimate', num.value);
    table1.updateCell(0, 2, { editable: false });
    buttongroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.instance.setVisible('h', true);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
  if (ggb1.instance.getValue('count') == 1) {
    let num = utils.math.evaluateLatex(table1.getCell(1, 2).value);
    if (num.value < 0 || num.error) {
      return;
    }
    ggb1.instance.setValue('studentEstimate', num.value);
    table1.updateCell(1, 2, { editable: false });
    buttongroup1.updateSingleButton({ disabled: true }, 2);
    //buttongroup1.updateSingleButton({ disabled: false }, 1);
    ggb1.instance.setVisible('h', true);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
  if (ggb1.instance.getValue('count') == 2) {
    let num = utils.math.evaluateLatex(table1.getCell(2, 2).value);
    if (num.value < 0 || num.error) {
      return;
    }
    ggb1.instance.setValue('studentEstimate', num.value);
    table1.updateCell(2, 2, { editable: false });
    buttongroup1.updateSingleButton({ disabled: true }, 2);

    ggb1.instance.setVisible('h', true);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
  if (ggb1.instance.getValue('count') == 3) {
    let num = utils.math.evaluateLatex(table1.getCell(3, 2).value);
    if (num.value < 0 || num.error) {
      return;
    }
    ggb1.instance.setValue('studentEstimate', num.value);
    table1.updateCell(3, 2, { editable: false });
    buttongroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.instance.setVisible('h', true);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
  if (ggb1.instance.getValue('count') == 4) {
    let num = utils.math.evaluateLatex(table1.getCell(4, 2).value);
    if (num.value < 0 || num.error) {
      return;
    }
    ggb1.instance.setValue('studentEstimate', num.value);
    table1.updateCell(4, 2, { editable: false });
    buttongroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.instance.setVisible('h', true);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
});

ggb1.instance.registerObjectUpdateListener('count', update);
ggb1.instance.registerObjectUpdateListener('time', update);

function update() {
  if (
    ggb1.instance.getValue('time') == 1 &&
    ggb1.instance.getValue('count') == 0
  ) {
    table1.updateCell(0, 3, {
      value: ggb1.instance.getValue('distance').toFixed(0),
      editable: false,
    });
    buttongroup1.updateSingleButton({ disabled: false }, 1);
  }
  if (
    ggb1.instance.getValue('time') == 1 &&
    ggb1.instance.getValue('count') == 1
  ) {
    table1.updateCell(1, 3, {
      value: ggb1.instance.getValue('distance').toFixed(0),
      editable: false,
    });
    buttongroup1.updateSingleButton({ disabled: false }, 1);
  }
  if (
    ggb1.instance.getValue('time') == 1 &&
    ggb1.instance.getValue('count') == 2
  ) {
    table1.updateCell(2, 3, {
      value: ggb1.instance.getValue('distance').toFixed(0),
      editable: false,
    });
    buttongroup1.updateSingleButton({ disabled: false }, 1);
  }
  if (
    ggb1.instance.getValue('time') == 1 &&
    ggb1.instance.getValue('count') == 3
  ) {
    table1.updateCell(3, 3, {
      value: ggb1.instance.getValue('distance').toFixed(0),
      editable: false,
    });
    buttongroup1.updateSingleButton({ disabled: false }, 1);
  }
  if (
    ggb1.instance.getValue('time') == 1 &&
    ggb1.instance.getValue('count') == 4
  ) {
    table1.updateCell(4, 3, {
      value: ggb1.instance.getValue('distance').toFixed(0),
      editable: false,
    });
  }
}

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":2,"table":1},"stage":"Learn","lessonInfo":"7 M5 TD L19 - Applying Percent Error (digital)","teacherView":false,"layout":"two col"}
*/
