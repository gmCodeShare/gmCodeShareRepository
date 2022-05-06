const { ggb1, feedback1, table1, buttonGroup1 } = components;

components.feedback1.updateData({ visible: false });

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible('d', false);
    ggb1.instance.setVisible('e', false);
    table1.updateCell(0, 2, { editable: false });
    ggb1.instance.setVisible('H', false);
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.setErrorDialogsActive(false);

buttonGroup1.on('click:1', () => {
  let blueNum = utils.math.evaluateLatex(table1.getCell(0, 1).value);
  if (blueNum.value < 1 || blueNum.error || blueNum.value > 50) {
    return;
  }
  let redNum = utils.math.evaluateLatex(table1.getCell(1, 1).value);
  if (redNum.value < 1 || redNum.error || redNum.value > 50) {
    return;
  }
  //table1.updateCell(1,2,{value:redNum.value});
  ggb1.instance.setValue('redPart', redNum.value);
  ggb1.instance.setValue('bluePart', blueNum.value);
  ggb1.instance.setVisible('d', true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  // buttonGroup1.updateSingleButton({ disabled: false }, 2);
  table1.updateCell(0, 2, { editable: true });
  table1.updateCell(1, 2, { editable: true });
});

buttonGroup1.on('click:2', () => {
  let blueNum2 = utils.math.evaluateLatex(table1.getCell(0, 2).value);
  if (blueNum2.value < 1 || blueNum2.error || blueNum2.value > 50) {
    return;
  }
  let redNum2 = utils.math.evaluateLatex(table1.getCell(1, 2).value);
  if (redNum2.value < 1 || redNum2.error || redNum2.value > 50) {
    return;
  }
  ggb1.instance.setValue('bluePart2', blueNum2.value);
  ggb1.instance.setValue('redPart2', redNum2.value);
  ggb1.instance.setVisible('e', true);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  if (
    ggb1.instance.getValue('redPart') / ggb1.instance.getValue('bluePart') !=
    redNum2.value / blueNum2.value
  ) {
    ggb1.instance.setVisible('H', true);
  } else {
    ggb1.instance.setVisible('H', false);
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

autorun(() => {
  let entries = [table1.getCell(0, 1).value, table1.getCell(1, 1).value];
  if (!arrayEquals(entries, ggb1.data.last)) {
    buttonGroup1.updateSingleButton(
      { disabled: !entries.every((value) => !!value) },
      1
    );
    ggb1.updateData({ last: [...entries] });
  }
});
autorun(() => {
  let entries = [table1.getCell(0, 2).value, , table1.getCell(1, 2).value];
  if (!arrayEquals(entries, table1.data.last)) {
    buttonGroup1.updateSingleButton(
      { disabled: !entries.every((value) => !!value) },
      2
    );
    table1.updateData({ last: [...entries] });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"table":1,"buttongroup":1},"stage":"Launch","lessonInfo":"6 M1 TC L12 - PA Multiple Ratio Relationships","teacherView":true,"layout":"two col"}
*/
