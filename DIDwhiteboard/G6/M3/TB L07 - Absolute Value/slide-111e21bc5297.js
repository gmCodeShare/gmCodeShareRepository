const { ggb1, feedback1, text1, table1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('state', 1);
    button1.updateData({ align: 'right' });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

autorun(() => {
  let entries = [
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
    table1.getCell(3, 1).value,
    table1.getCell(1, 3).value,
    table1.getCell(2, 3).value,
    table1.getCell(3, 3).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      align: 'right',
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

autorun(() => {
  let num = utils.math.evaluateLatex(table1.getCell(1, 1).value);
  let num2 = utils.math.evaluateLatex(table1.getCell(2, 1).value);
  let num3 = utils.math.evaluateLatex(table1.getCell(3, 1).value);
  let num4 = utils.math.evaluateLatex(table1.getCell(1, 3).value);
  let num5 = utils.math.evaluateLatex(table1.getCell(2, 3).value);
  let num6 = utils.math.evaluateLatex(table1.getCell(3, 3).value);
  if (!num.error) {
    ggb1.instance.setValue('abs6', num.value);
  }
  if (!num2.error) {
    ggb1.instance.setValue('abs15', num2.value);
  }
  if (!num3.error) {
    ggb1.instance.setValue('abs85', num3.value);
  }
  if (!num4.error) {
    ggb1.instance.setValue('absn6', -num4.value);
  }
  if (!num5.error) {
    ggb1.instance.setValue('absn15', -num5.value);
  }
  if (!num6.error) {
    ggb1.instance.setValue('absn85', -num6.value);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"6 M3 TB L07 - Absolute Value","teacherView":false,"layout":"two col"}
*/
