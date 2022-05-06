const {
  ggb1,
  text1,
  table1,
  button1,
  cc_sharewithclass_df49a07d0b76_textbox1: shareText1,
  cc_sharewithclass_df49a07d0b76_input1: shareInput1,
  cc_sharewithclass_df49a07d0b76_button1: shareButton1,
} = components;

slide.on('firstload', () => {
  shareButton1.updateData({ visible: false });
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);

button1.on('click', () => {
  shareButton1.updateData({ visible: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  button1.updateData({ disabled: true, text: 'Submitted' });

  let y1 = table1.getCell(1, 1).value;
  let x2 = table1.getCell(2, 0).value;
  let x3 = table1.getCell(3, 0).value;
  let y3 = table1.getCell(3, 1).value;
  let x4 = table1.getCell(4, 0).value;
  let y4 = table1.getCell(4, 1).value;

  const min = -100;
  const max = 100;

  y1 = boundIt(y1, 1, 1, min, max);
  x2 = boundIt(x2, 2, 0, min, max);
  x3 = boundIt(x3, 3, 0, min, max);
  y3 = boundIt(y3, 3, 1, min, max);
  x4 = boundIt(x4, 4, 0, min, max);
  y4 = boundIt(y4, 4, 1, min, max);

  ggb1.instance.evalCommand(`A=(-1,${y1})`);
  ggb1.instance.evalCommand(`B=(${x2},2)`);
  ggb1.instance.evalCommand(`C=(${x3},${y3})`);
  ggb1.instance.evalCommand(`D=(${x4},${y4})`);
  ggb1.instance.setValue('showPoints', true);

  let nums = [y1, x2, x3, y3, x4, y4];
  let ggbMin = Math.min(...nums);
  let ggbMax = Math.max(...nums);

  if (ggbMin < -10) {
    ggb1.instance.setValue('min', ggbMin - 5);
  } else {
    ggb1.instance.setValue('min', -11);
  }

  if (ggbMax > 10) {
    ggb1.instance.setValue('max', ggbMax + 5);
  } else {
    ggb1.instance.setValue('max', 11);
  }

  utils.RTS.sendData('slide-25f0913f123b', {
    pointA: [-1, y1],
    pointB: [x2, 2],
    pointC: [x3, y3],
    pointD: [x4, y4],
  });
});

autorun(() => {
  let entries = table1.data.rows
    .map((row) => row.map((cell) => cell.value))
    .flat();
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      align: 'center',
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateCell({ last: [...entries] });
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

function boundIt(inp, row, column, min, max) {
  const result = utils.math.evaluateLatex(inp);
  if (result.error) {
    table1.updateCell(row, column, { value: `0` });
    return 0;
  } else if (result.value < min) {
    table1.updateCell(row, column, { value: `${min}` });
    return min;
  } else if (result.value > max) {
    table1.updateCell(row, column, { value: `${max}` });
    return max;
  }
  return result.value;
}
